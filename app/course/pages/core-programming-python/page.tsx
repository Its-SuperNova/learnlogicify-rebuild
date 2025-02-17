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

const CoursePage = () => {
  const heroData = {
    courseTitle: "Complete Python Mastery",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "5.2k Ratings",
    courseIcon: <IoLogoPython size={25} />,
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "20 Topics",
    problemsCount: "200+ Problems",
    projectsCount: "10+ Projects using Python",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
  };
  const certificateData = {
    imageUrl: "/images/certificate/c-1.png",
    title: "Certificate of the Course",
    description:
      "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of the subject, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
    certificateLink: "/images/certificate/c-1.png",
  };

  const certificationProcessData = {
    title: "Certification Process and Requirements",
    description: [
      "Upon successfully completing the Core Programming - Python course, you will be required to take a final assessment to qualify for certification.",
      "This assessment evaluates your understanding of Python programming fundamentals, data structures, and real-world problem-solving skills covered in the course.",
      "It is conducted under structured guidelines to ensure fairness and integrity.",
    ],
    assessmentDetails:
      "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
    criteriaTitle:
      "To be eligible for the certificate, you must meet the following criteria:",
    criteria: ["Achieve a score of 50% or more in the final assessment."],
    retakeInfo:
      "If this condition is met, you will receive a certificate of completion for the Core Programming - Python course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
    finalNote:
      "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
  };

  const faqData = [
    {
      title: "What is the format of this course?",
      description:
        "Complete Python Mastery is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
    },
    {
      title: "What are the prerequisites for this course?",
      description:
        "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding Python concepts.",
    },
    {
      title: "Will I get access to recorded sessions?",
      description:
        "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
    },
    {
      title: "What projects will I work on?",
      description:
        "You will work on 10+ real-world projects covering Python automation, web development, data analysis, and more to solidify your learning.",
    },
    {
      title: "How long is the course and schedule?",
      description:
        "The course spans 90 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends. This ensures a balanced learning experience.",
    },
    {
      title: "Do I get a certificate upon completion?",
      description:
        "Yes! After successfully completing the course and assessment, you will receive a Certificate of Completion from LearnLogicify Technologies.",
    },
    {
      title: "What kind of support will I receive?",
      description:
        "You will receive 24/7 LMS access, live Q&A sessions, community discussions, and mentor support for doubt resolution.",
    },
    {
      title: "Is there a final assessment?",
      description:
        "Yes, you will take a final assessment to qualify for the certificate. It consists of coding challenges and a project submission.",
    },
  ];

  return (
    <>
      <ScrollHandlerWrapper />
      <Header />
      <div className="flex flex-col justify-center items-center pb-24">
        <div className="px-5 max-w-[1500px] flex flex-col gap-16 lg:px-[100px]">
          <Hero {...heroData} />
          <Syllabus />
          <Certificate
            imageUrl={certificateData.imageUrl}
            title={certificateData.title}
            description={certificateData.description}
            certificateLink={certificateData.certificateLink}
          />
          <CertificationProcess
            title={certificationProcessData.title}
            description={certificationProcessData.description}
            assessmentDetails={certificationProcessData.assessmentDetails}
            criteriaTitle={certificationProcessData.criteriaTitle}
            criteria={certificationProcessData.criteria}
            retakeInfo={certificationProcessData.retakeInfo}
            finalNote={certificationProcessData.finalNote}
          />
          {/* Pass dynamic FAQ data */}
          <FAQ faqs={faqData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
