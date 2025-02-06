"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";
import MobileView from "./mobile";
import styles from "./styles.module.css"; // Adjust the path based on your project structure
import axios from "axios";

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Step 1: Personal Details
  const [step1Data, setStep1Data] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Step 2: Educational Details
  const [step2Data, setStep2Data] = useState({
    yearOfStudy: "",
    graduationYear: "",
    collegeName: "",
    department: "",
    address: "",
  });

  // Step 3: Workshop Interest
  const [step3Data, setStep3Data] = useState({
    fullstack: "yes",
    joinWorkshop: "yes",
    priceRange: "",
  });

  // Step 4: Workshop Expectations
  const [step4Data, setStep4Data] = useState({
    expectations: "",
    setupHelp: "yes",
    topics: {
      git: false,
      collaboration: false,
      pullRequests: false,
      actions: false,
    },
  });

  // Step Validation
  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return (
          step1Data.fullName.trim() !== "" &&
          step1Data.email.trim() !== "" &&
          step1Data.phone.trim() !== ""
        );
      case 2:
        return (
          step2Data.yearOfStudy.trim() !== "" &&
          step2Data.graduationYear.trim() !== "" &&
          step2Data.collegeName.trim() !== "" &&
          step2Data.department.trim() !== "" &&
          step2Data.address.trim() !== ""
        );
      case 3:
        return step3Data.priceRange.trim() !== "";
      case 4:
        return (
          step4Data.expectations.trim() !== "" &&
          Object.values(step4Data.topics).some((selected) => selected)
        );
      default:
        return true;
    }
  };

  // Form Submission to Google Sheets
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = {
  //     fullName: step1Data.fullName,
  //     email: step1Data.email,
  //     phone: step1Data.phone,
  //     yearOfStudy: step2Data.yearOfStudy,
  //     graduationYear: step2Data.graduationYear,
  //     collegeName: step2Data.collegeName,
  //     department: step2Data.department,
  //     address: step2Data.address,
  //     fullstack: step3Data.fullstack,
  //     joinWorkshop: step3Data.joinWorkshop,
  //     priceRange: step3Data.priceRange,
  //     setupHelp: step4Data.setupHelp,
  //     topics: step4Data.topics,
  //   };

  //   const response = await fetch('https://script.google.com/macros/s/AKfycby01FoMcG2_nWVvuq94q23ywgzTbW1HSZh2oPqXygqGO4lfChW_Lz9jneSOyAfv65xz3w/exec', // <-- Make sure this is your latest deployment URL
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           'Access-Control-Allow-Origin':'*'
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     const result = await response.json();
  //     console.log("Response:", result);

  //     if (result.message === "Data saved successfully") {
  //       alert("✅ Data submitted successfully!");
  //     } else {
  //       alert("⚠️ Submission failed: " + result.message);
  //     }
  //   if(error) {
  //     console.error("Error submitting form:", error);
  //     console.error("Error submitting form:", error);
  //     console.error("Error submitting form:", error);
  //     alert("⚠️ Network error! Check console for details.");
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      fullName: step1Data.fullName,
      email: step1Data.email,
      phone: step1Data.phone,
      yearOfStudy: step2Data.yearOfStudy,
      graduationYear: step2Data.graduationYear,
      collegeName: step2Data.collegeName,
      department: step2Data.department,
      address: step2Data.address,
      fullstack: step3Data.fullstack,
      joinWorkshop: step3Data.joinWorkshop,
      priceRange: step3Data.priceRange,
      setupHelp: step4Data.setupHelp,
      topics: step4Data.topics,
    };

    // asd
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxmi5bNUlct3PokeBRdfuAjUcN_CHW9n-MRAASwWOrMLoKESX42ippMmeEkI827lxVx/exec",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false, // Ensures no cookies are sent, preventing auth issues
        }
      );

      //   "",
      //   {

      //     method: "POST",
      //     mode: 'cors',
      //     headers: {

      //           'Content-Type': 'application/json',
      //     },
      //     // headers: {
      //     //   "Content-Type": "application/json",
      //     //   // ❌ Remove 'Access-Control-Allow-Origin' from headers (handled by backend)
      //     // },
      //     ,
      //   }
      // );

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = response.data;
      console.table("Response:", result);

      if (result.status === "success") {
        alert("✅ Data submitted successfully!");
      } else {
        alert("⚠️ Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("⚠️ Network error! Check console for details.");
    }
  };

  // Render current step dynamically
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={step1Data} setData={setStep1Data} />;
      case 2:
        return <Step2 data={step2Data} setData={setStep2Data} />;
      case 3:
        return <Step3 data={step3Data} setData={setStep3Data} />;
      case 4:
        return <Step4 data={step4Data} setData={setStep4Data} />;
      case 5:
        return <Step5 onSubmit={handleSubmit} />;
      default:
        return <Step1 data={step1Data} setData={setStep1Data} />;
    }
  };

  // Mobile View Handling
  if (isMobile) {
    return (
      <MobileView
        currentStep={currentStep}
        totalSteps={5}
        setCurrentStep={setCurrentStep}
        renderStep={renderStep}
      />
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Sidebar */}
        <section className={styles.sidebar}>
          <Sidebar currentStep={currentStep} />
        </section>

        {/* Form Area */}
        <section className={styles.formArea}>
          {/* Back Button on Step 5 */}
          {currentStep === 5 && (
            <div className={styles.step5Navigation}>
              <button
                className={styles.prevButton}
                onClick={() => setCurrentStep(4)}
              >
                Back
              </button>
            </div>
          )}

          {/* Step Content */}
          {renderStep()}

          {/* Navigation Buttons */}
          {currentStep !== 5 && (
            <div
              className={styles.navigationButtons}
              style={{
                justifyContent:
                  currentStep === 1 ? "flex-end" : "space-between",
              }}
            >
              {/* Previous Button */}
              {currentStep > 1 && (
                <button
                  className={styles.prevButton}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </button>
              )}
              {/* Next Button */}
              <button
                className={styles.nextButton}
                disabled={!isStepValid()}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default MultiStepForm;
