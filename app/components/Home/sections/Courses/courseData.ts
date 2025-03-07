// allcourses/data/courseData.ts
import { IconType } from "react-icons";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaDatabase,
  FaHtml5,
  FaCogs,
  FaCode,
  FaChartBar,
  FaPaintBrush,
  FaNetworkWired,
  FaServer,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";
import { SiCplusplus, SiGoland, SiRuby, SiMongodb } from "react-icons/si";
import { MdComputer, MdCalculate, MdOutlineCategory } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { FaChalkboardUser } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";

export interface Course {
  url: string;
  Level: string;
  languageId: string;
  topicId: string;
  learningTrack: string; 
  icon: IconType;
  title: string;
  topics: number;
  videos: number;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
  available: boolean;
}

const coursesData: Course[] = [
  {
    url: "/course/pages/c-programming",
    Level: "Beginner",
    languageId: "c",
    topicId: "problem-solving", // ✅ Updated
    learningTrack: "technical",
    icon: FaCode,
    title: "C Programming",
    topics: 15,
    videos: 30,
    desc: "Master C programming from scratch.",
    offer: "25% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#FCE2D8",
    available: true,
  },

  {
    url: "/course/pages/cpp-programming",
    Level: "Beginner",
    languageId: "cpp",
    topicId: "problem-solving", // ✅ Updated
    learningTrack: "technical",
    icon: SiCplusplus,
    title: "C++ Programming",
    topics: 12,
    videos: 28,
    desc: "Learn C++ with object-oriented concepts.",
    offer: "30% OFF",
    price: "₹1099",
    originalPrice: "₹1599",
    bannerColor: "#D7FBED",
    available: true,
  },

  {
    url: "/course/pages/java",
    Level: "Beginner",
    languageId: "java",
    topicId: "problem-solving", // ✅ Updated
    learningTrack: "technical",
    icon: FaJava,
    title: "Java Programming",
    topics: 15,
    videos: 30,
    desc: "Learn Java from basics to advanced.",
    offer: "20% OFF",
    price: "₹1199",
    originalPrice: "₹1499",
    bannerColor: "#EBEBEB",
    available: true,
  },

  {
    url: "/course/pages/python",
    Level: "Beginner",
    languageId: "python",
    topicId: "problem-solving", // ✅ Updated
    learningTrack: "technical",
    icon: FaPython,
    title: "Python Programming",
    topics: 10,
    videos: 25,
    desc: "Learn Python programming for all levels.",
    offer: "30% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#E2D8FC",
    available: true,
  },

];

export default coursesData;
