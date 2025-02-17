import React from "react";
import Icon from "@/app/components/common/SVG/icons/Certificate";

interface CertificationProcessProps {
  title: string;
  description: string[];
  assessmentDetails: string;
  criteriaTitle: string;
  criteria: string[];
  retakeInfo: string;
  finalNote: string;
}
interface CertificateProps {
  imageUrl: string;
  title: string;
  description: string[];
  certificateLink: string;
}
const CertificationProcess: React.FC<CertificationProcessProps> = ({
  title,
  description,
  assessmentDetails,
  criteriaTitle,
  criteria,
  retakeInfo,
  finalNote,
}) => {
  return (
    <div className="flex flex-col gap-5 border border-gray-300 rounded-2xl p-4 py-5 md:py-10 md:p-10">
      <div className="flex justify-between items-center">
        <div className="flex h-auto items-center gap-3">
          <div>
            <Icon />
          </div>
          <div className="text-lg md:text-2xl font-semibold max-w-[750px]">
            {title}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-sm md:text-lg font-light">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>{assessmentDetails}</p>
        <p>{criteriaTitle}</p>
        <ul className="list-disc pl-10 text-sm md:text-lg">
          {criteria.map((criterion, index) => (
            <li key={index}>{criterion}</li>
          ))}
        </ul>
        <p>{retakeInfo}</p>
        <p>{finalNote}</p>
      </div>
    </div>
  );
};

export default CertificationProcess;
