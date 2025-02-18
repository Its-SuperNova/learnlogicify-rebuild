import React from "react";
import Hero from "../common/Hero";
import Header from "@/app/components/common/HeaderDark";
import { IoLogoPython } from "react-icons/io";
import Syllabus from "../common/Syllabus";
import Certificate from "../common/CertificateSection";
import CertificationProcess from "../common/CertificationProcess";
import Footer from "@/app/components/common/Footer";
import ScrollHandlerWrapper from "@/app/components/Home/ScrollHandler";
import FAQ from "../common/FAQ";
import { CourseData } from "../../utils/Data";

export default async function Page({
  params,
}: {
  params: Promise<{ CourseId: string }>;
}) {
  const CourseArray = [
    "c-programming",
    "cpp-programming",
    "java",
    "python",
    "go-programming",
    "ruby",
  ];
  const CourseId = (await params).CourseId;

  const heroData = CourseData[CourseArray.indexOf(CourseId)];
  return (
    <>
      <ScrollHandlerWrapper />
      <Header />
      <div className="flex flex-col justify-center items-center pb-24">
        <div className="px-5 max-w-[1500px] flex flex-col gap-16 lg:px-[100px]">
          <Hero {...heroData} aboutData={heroData.aboutData}/>
          <Syllabus syllabusData={heroData.syllabusData} />
          <Certificate
            imageUrl={heroData.certificateData.imageUrl}
            title={heroData.certificateData.title}
            description={heroData.certificateData.description}
            certificateLink={heroData.certificateData.certificateLink}
          />
          <CertificationProcess
            title={heroData.certificationProcessData.title}
            description={heroData.certificationProcessData.description}
            assessmentDetails={
              heroData.certificationProcessData.assessmentDetails
            }
            criteriaTitle={heroData.certificationProcessData.criteriaTitle}
            criteria={heroData.certificationProcessData.criteria}
            retakeInfo={heroData.certificationProcessData.retakeInfo}
            finalNote={heroData.certificationProcessData.finalNote}
          />
          <FAQ faqs={heroData.faqData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
