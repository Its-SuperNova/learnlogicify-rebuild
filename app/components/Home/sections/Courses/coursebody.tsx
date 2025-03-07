import React from "react";
import dynamic from "next/dynamic";
import Card from "./CourseCard";
import coursesData from "./courseData";

// Dynamically import SkeletonCourseCard with SSR disabled for performance
const SkeletonCourseCard = dynamic(() => import("./skeletonCourseCard"), {
  ssr: false,
});

const AllCourses: React.FC = () => {
  return (
    <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6 justify-items-center">
      {coursesData.map((course) => (
        <Card
          key={course.url}
          url={course.url}
          Level={course.Level}
          icon={course.icon}
          title={course.title}
          topics={course.topics}
          videos={course.videos}
          desc={course.desc}
          offer={course.offer}
          price={course.price}
          originalPrice={course.originalPrice}
          bannerColor={course.bannerColor}
          available={course.available}
        />
      ))}
    </div>
  );
};

export default AllCourses;
