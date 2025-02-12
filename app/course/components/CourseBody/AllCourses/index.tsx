import React, { useState, useEffect } from "react";
import Card from "../../CourseCard";
import coursesData, { Course } from "../../data/courseData";
import CourseNotFound from "../CourseNotFound";
import SkeletonCourseCard from "../../skeletonCourseCard";

interface AllCoursesProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  selectedLearningTrack: string;
  isAvailableOnly: boolean;
  searchTerm: string;
}

const AllCourses: React.FC<AllCoursesProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  selectedLearningTrack,
  isAvailableOnly,
  searchTerm,
}) => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      console.log("Filters Applied:", {
        selectedLanguage,
        selectedTopic,
        selectedLevel,
        selectedLearningTrack,
        isAvailableOnly,
        searchTerm,
      });

      let filtered = [...coursesData]; // ✅ Prevent modifying the original array

      // ✅ Apply filters only if a value is selected
      if (selectedLanguage !== "All") {
        filtered = filtered.filter(
          (course) =>
            course.languageId.toLowerCase() === selectedLanguage.toLowerCase()
        );
      }

      if (selectedTopic !== "All") {
        filtered = filtered.filter(
          (course) =>
            course.topicId.toLowerCase() === selectedTopic.toLowerCase()
        );
      }

      if (selectedLevel !== "All") {
        filtered = filtered.filter(
          (course) => course.Level.toLowerCase() === selectedLevel.toLowerCase()
        );
      }

      if (selectedLearningTrack !== "All") {
        filtered = filtered.filter(
          (course) =>
            course.learningTrack.toLowerCase() ===
            selectedLearningTrack.toLowerCase()
        );
      }

      if (searchTerm.trim() !== "") {
        filtered = filtered.filter(
          (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.Level.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (isAvailableOnly) {
        filtered = filtered.filter((course) => course.available);
      }

      console.log("Filtered Courses:", filtered);

      // ✅ Prevent empty filter results from breaking UI
      setFilteredCourses(filtered.length > 0 ? filtered : []);
      setLoading(false);
    }, 300); // 🔥 Faster UI updates with 300ms debounce

    return () => clearTimeout(timer);
  }, [
    selectedLanguage,
    selectedTopic,
    selectedLevel,
    selectedLearningTrack,
    isAvailableOnly,
    searchTerm,
  ]);

  return (
    <div
      className={`w-full h-full p-2 ${
        filteredCourses.length === 0 && !loading
          ? "flex flex-col items-center justify-center h-full"
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
      }`}
    >
      {loading ? (
        Array(10)
          .fill(0)
          .map((_, index) => <SkeletonCourseCard key={index} />)
      ) : filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
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
        ))
      ) : (
        <CourseNotFound />
      )}
    </div>
  );
};

export default AllCourses;
