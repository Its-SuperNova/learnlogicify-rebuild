import React from "react";
import Link from "next/link";
import Icon from "@/app/components/common/SVG/icons/Certificate";

const CertificationProcessPython = () => {
  return (
    <div className="flex flex-col gap-5 border border-gray-400 rounded-2xl p-10">
      <div className="flex justify-between items-center">
        <div className="flex h-auto items-center gap-3">
          <div className="">
            <Icon />
          </div>
          <div className="text-2xl font-semibold max-w-[750px]">
            Certification Process and Requirements
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-lg font-light">
        <p>
          Upon successfully completing the Core Programming - Python course, you
          will be required to take a final assessment to qualify for
          certification. This assessment evaluates your understanding of Python
          programming fundamentals, data structures, and real-world
          problem-solving skills covered in the course. It is conducted under
          structured guidelines to ensure fairness and integrity.
        </p>
        <p>
          The final assessment is for 100 marks and contributes 100% to your
          certification score. Throughout the course, students are encouraged to
          solve practice problems and complete exercises to strengthen their
          understanding, but these do not contribute to the final certification
          score.
        </p>
        <p>
          To be eligible for the certificate, you must meet the following
          criteria:
        </p>
        <ul className="list-disc pl-10 text-lg text-gray-700">
          <li>Achieve a score of 50% or more in the final assessment.</li>
        </ul>
        <p>
          If this condition is met, you will receive a certificate of completion
          for the Core Programming - Python course. If you do not achieve the
          required score, you will have the opportunity to retake the final
          assessment once.
        </p>
        <p>
          This structured evaluation ensures that only those who demonstrate a
          solid understanding of the course material and its applications are
          awarded the certificate, maintaining the integrity and value of the
          certification.
        </p>
      </div>
    </div>
  );
};

export default CertificationProcessPython;
