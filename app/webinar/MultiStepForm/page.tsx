"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";
import MobileView from "./mobile";
import styles from "./styles.module.css";
import submitFormToGoogleSheet from "./utils/submitFormToGoogleSheet"; // Adjust the path based on your project structure

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width and toggle between desktop and mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Step 1 state
  const [step1Data, setStep1Data] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Step 2 state
  const [step2Data, setStep2Data] = useState({
    yearOfStudy: "",
    graduationYear: "",
    collegeName: "",
    department: "",
    address: "",
  });

  // Step 3 state
  const [step3Data, setStep3Data] = useState({
    fullstack: "yes",
    joinWorkshop: "yes",
    priceRange: "",
  });

  // Step 4 state
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

  // Validation logic for each step
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

  // Handle form submission
  const handleSubmit = async (): Promise<void> => {
    const formData = {
      fullName: step1Data.fullName,
      email: step1Data.email,
      phone: step1Data.phone,
      yearOfStudy: step2Data.yearOfStudy,
      graduationYear: step2Data.graduationYear,
      collegeName: step2Data.collegeName,
      department: step2Data.department,
      address: step2Data.address,
      fullstackInterest: step3Data.fullstack,
      workshopInterest: step3Data.joinWorkshop,
      priceRange: step3Data.priceRange,
      setupHelp: step4Data.setupHelp,
      topicsInterested: step4Data.topics,
    };

    await submitFormToGoogleSheet(formData);
    setCurrentStep(1); // Reset to Step 1 after successful submission
  };

  // Function to render the current step dynamically
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

  // Render mobile or desktop view
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
          {/* For Step 5: Place the Back button at the top */}
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
