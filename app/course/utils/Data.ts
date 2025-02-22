import { IoLogoPython } from "react-icons/io";
export const CourseData = [
  //Problem solving

  //C-Programming
  {
    courseTitle: "C Programming for Beginners",
    instructor: "Sachin",
    rating: 4.8,
    reviews: "4.5k Ratings",
    courseIcon: "FaCode",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "25 Topics",
    problemsCount: "250+ Problems",
    projectsCount: "8+ Projects using C",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 3999,
    discountedPrice: 1999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "C for Beginners is a live online training program designed to introduce absolute beginners to the fundamentals of C programming. This interactive course focuses on building a strong foundation in programming through hands-on exercises and practical coding sessions.",
        "Unlike pre-recorded courses, this program offers live classes with real-time instructor guidance, Q&A sessions, and coding exercises to ensure an engaging and structured learning experience.",
        "The curriculum covers fundamental programming concepts such as data types, variables, operators, control flow, loops, functions, and basic data structures. You will also learn how to handle files, debug code, and solve problems efficiently through structured exercises and beginner-friendly projects.",
      ],

      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "No prior programming knowledge is required to enroll in this course. It is specifically designed for absolute beginners who have never coded before. The course starts from the fundamentals and gradually builds up to more advanced topics, ensuring a smooth learning experience. While basic logical thinking and problem-solving skills can be beneficial, they are not mandatory. All concepts will be explained from scratch with step-by-step guidance, hands-on exercises, and real-world examples to help you gain confidence in programming.",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of C programming, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },

    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the React Intermediate course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of advanced React concepts, including state management, React Router, API integration, and performance optimization covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice exercises, implement real-world projects, and complete coding challenges to reinforce their knowledge, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria:",
      criteria: ["Achieve a score of 60% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the React Intermediate course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a strong grasp of React concepts and their applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "C Programming Mastery is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding C concepts.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 8+ real-world projects covering system programming, data structures, file handling, and more to solidify your learning.",
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
    ],

    syllabusData: [
      {
        icon: "HiMiniComputerDesktop",
        title: "Module 1",
        subtitle: "Introduction to Computers",
        topics: [
          "Overview of computer systems",
          "The role of Programming Language",
          "Understanding binary and data representation",
          "Number Conversions",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 2",
        subtitle: "Introduction to C",
        topics: [
          "Overview of C Programming",
          "Setting up the Environment",
          "Structure of a C Program",
          "Compiling and Running a C Program",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Data Types and Variables",
        topics: [
          "Primitive Data Types in C",
          "Declaring Variables",
          "Constants and Literals",
          "Storage Classes in C",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Operators and Expressions",
        topics: [
          "Arithmetic Operators",
          "Relational Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Ternary Operator",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 5",
        subtitle: "Conditional Statements",
        topics: [
          "The if Statement",
          "The else Statement",
          "The elif Statement",
          "Nested Conditionals",
          "Ternary Operators",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 6",
        subtitle: "Loops",
        topics: [
          "The for Loop",
          "The while Loop",
          "The do-while Loop",
          "Break and Continue Statements",
          "Nested Loops",
        ],
      },
      {
        icon: "TbMathFunction",
        title: "Module 7",
        subtitle: "Functions",
        topics: [
          "Defining Functions",
          "Function Arguments and Return Types",
          "Recursive Functions",
          "Scope and Lifetime of Variables",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 8",
        subtitle: "Arrays",
        topics: [
          "Introduction to Arrays",
          "Array Declaration and Initialization",
          "Array Operations",
          "Passing Arrays to Functions",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "2D Arrays",
        topics: [
          "Introduction to 2D Arrays",
          "Matrix Operations",
          "Row and Column-wise Operations",
          "Applications of 2D Arrays",
        ],
      },
      {
        icon: "BsBraces",
        title: "Module 10",
        subtitle: "Strings",
        topics: [
          "Introduction to Strings",
          "String Handling Functions",
          "Character Arrays vs Strings",
          "String Manipulations",
        ],
      },
      {
        icon: "VscRegex",
        title: "Module 11",
        subtitle: "Patterns",
        topics: [
          "Introduction to Pattern Printing",
          "Number Patterns",
          "Star Patterns",
          "Advanced Pattern Programs",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 12",
        subtitle: "File Handling",
        topics: [
          "Reading and Writing Files",
          "Working with CSV Files",
          "Binary File Operations",
          "File Handling Functions",
        ],
      },
      {
        icon: "AiOutlineExclamationCircle",
        title: "Module 13",
        subtitle: "Exception Handling and Debugging",
        topics: [
          "Error Handling in C",
          "Debugging Techniques",
          "Using GDB for Debugging",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 16",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Planning and Structuring a C++ Project",
          "Implementing Core Features",
          "Debugging and Optimization",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  //CPP-Programming
  {
    courseTitle: "C++ Programming for Beginners",
    instructor: "Sachin",
    rating: 4.8,
    reviews: "4.8k Ratings",
    courseIcon: "FaCode",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "25 Topics",
    problemsCount: "250+ Problems",
    projectsCount: "8+ Projects using C++",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4499,
    discountedPrice: 2299,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",

    aboutData: {
      description: [
        "C++ for Beginners is a live online training program designed to introduce absolute beginners to the fundamentals of C++ programming. This interactive course focuses on building a strong foundation in programming through hands-on exercises and practical coding sessions.",
        "Unlike pre-recorded courses, this program offers live classes with real-time instructor guidance, Q&A sessions, and coding exercises to ensure an engaging and structured learning experience.",
        "The curriculum covers fundamental programming concepts such as data types, variables, operators, control flow, loops, functions, and basic object-oriented programming. You will also learn how to handle files, debug code, and solve problems efficiently through structured exercises and beginner-friendly projects.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "No prior programming experience is required for this course, making it ideal for complete beginners. However, if you want to develop a solid understanding of fundamental programming concepts, such as variables, data types, control structures, and basic problem-solving techniques, before diving into C++, we highly recommend starting with a foundational course. Strengthening your core programming skills can make it easier to grasp C++'s advanced concepts and syntax. To build a strong base and ensure a smooth learning journey, you may Check out our",
        link: "/course/pages/c-programming",
        linkText: "C Programming Course",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of C++ programming, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },

    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the C++ Programming course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of C++ programming fundamentals, object-oriented concepts, and real-world problem-solving skills covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the C++ Programming course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },

    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "C++ Programming for Beginners is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding C++ concepts.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 8+ real-world projects covering system programming, object-oriented programming, file handling, and more to solidify your learning.",
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
    ],

    syllabusData: [
      {
        icon: "HiMiniComputerDesktop",
        title: "Module 1",
        subtitle: "Introduction to Computers",
        topics: [
          "Overview of computer systems",
          "The role of Programming Language",
          "Understanding binary and data representation",
          "Number Conversions",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 2",
        subtitle: "Introduction to C++",
        topics: [
          "Overview of C++ Programming",
          "Setting up the Environment",
          "Structure of a C++ Program",
          "Compiling and Running a C++ Program",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Data Types and Variables",
        topics: [
          "Primitive Data Types in C++",
          "Declaring Variables",
          "Constants and Literals",
          "Storage Classes in C++",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Operators and Expressions",
        topics: [
          "Arithmetic Operators",
          "Relational Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Ternary Operator",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 5",
        subtitle: "Conditional Statements",
        topics: [
          "The if Statement",
          "The else Statement",
          "The elif Statement",
          "Nested Conditionals",
          "Ternary Operators",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 6",
        subtitle: "Loops",
        topics: [
          "The for Loop",
          "The while Loop",
          "The do-while Loop",
          "Break and Continue Statements",
          "Nested Loops",
        ],
      },
      {
        icon: "TbMathFunction",
        title: "Module 7",
        subtitle: "Functions",
        topics: [
          "Defining Functions",
          "Function Arguments and Return Types",
          "Function Overloading",
          "Recursive Functions",
          "Scope and Lifetime of Variables",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 8",
        subtitle: "Arrays",
        topics: [
          "Introduction to Arrays",
          "Array Declaration and Initialization",
          "Array Operations",
          "Passing Arrays to Functions",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "2D Arrays",
        topics: [
          "Introduction to 2D Arrays",
          "Matrix Operations",
          "Row and Column-wise Operations",
          "Applications of 2D Arrays",
        ],
      },
      {
        icon: "BsBraces",
        title: "Module 10",
        subtitle: "Strings",
        topics: [
          "Introduction to Strings",
          "String Handling Functions",
          "Character Arrays vs Strings",
          "String Manipulations",
        ],
      },
      {
        icon: "VscRegex",
        title: "Module 11",
        subtitle: "Patterns",
        topics: [
          "Introduction to Pattern Printing",
          "Number Patterns",
          "Star Patterns",
          "Advanced Pattern Programs",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 12",
        subtitle: "Object-Oriented Programming (OOP)",
        topics: [
          "Introduction to OOP",
          "Classes and Objects",
          "Constructors and Destructors",
          "Encapsulation, Inheritance, and Polymorphism",
        ],
      },
      {
        icon: "FaRegFolderOpen",
        title: "Module 13",
        subtitle: "Pointers and Memory Management",
        topics: [
          "Pointer Basics",
          "Pointer Arithmetic",
          "Dynamic Memory Allocation",
          "Smart Pointers in C++",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 14",
        subtitle: "File Handling",
        topics: [
          "Reading and Writing Files",
          "Working with CSV and Binary Files",
          "File Handling Functions",
        ],
      },
      {
        icon: "AiOutlineExclamationCircle",
        title: "Module 15",
        subtitle: "Exception Handling",
        topics: [
          "Error Handling in C++",
          "Try, Catch, and Throw Mechanisms",
          "Debugging Techniques",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 16",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Planning and Structuring a C++ Project",
          "Implementing Core Features",
          "Debugging and Optimization",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  //Java
  {
    courseTitle: "Java Programming for Beginners",
    instructor: "Sachin",
    rating: 4.7,
    reviews: "4.2k Ratings",
    courseIcon: "FaJava",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "30 Topics",
    problemsCount: "300+ Problems",
    projectsCount: "10+ Projects using Java",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4499,
    discountedPrice: 2199,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "Java for Beginners is a live online training program designed to introduce absolute beginners to the fundamentals of Java programming. This interactive course focuses on building a strong foundation in programming through hands-on exercises and practical coding sessions.",
        "Unlike pre-recorded courses, this program offers live classes with real-time instructor guidance, Q&A sessions, and coding exercises to ensure an engaging and structured learning experience.",
        "The curriculum covers fundamental programming concepts such as data types, variables, operators, control flow, loops, functions, and basic object-oriented programming. You will also learn about file handling, debugging techniques, and problem-solving strategies with hands-on coding exercises and beginner-friendly projects.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "No prior programming experience is required to enroll in this course. It is specifically designed for absolute beginners who have never coded before. The course starts from the fundamentals and gradually builds up to more advanced topics, ensuring a smooth learning experience. While basic logical thinking and problem-solving skills can be beneficial, they are not mandatory. All concepts will be explained from scratch with step-by-step guidance, hands-on exercises, and real-world examples to help you gain confidence in programming.",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of Java programming, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Java Programming course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of Java programming fundamentals, object-oriented programming, and real-world problem-solving skills covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Java Programming course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Java Programming Mastery is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding Java concepts.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 10+ real-world projects covering Java fundamentals, object-oriented programming, file handling, data structures, and more to solidify your learning.",
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
    ],
    syllabusData: [
      {
        icon: "HiMiniComputerDesktop",
        title: "Module 1",
        subtitle: "Introduction to Computers",
        topics: [
          "Overview of computer systems",
          "The role of Programming Language",
          "Understanding binary and data representation",
          "Number Conversions",
        ],
      },
      {
        icon: "FaJava",
        title: "Module 2",
        subtitle: "Introduction to Java",
        topics: [
          "Overview of Java",
          "Setting up the Java Environment",
          "Compiling and Running a Java Program",
          "Understanding Java's Syntax and Structure",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Data Types and Variables",
        topics: [
          "Primitive Data Types in Java",
          "Declaring Variables",
          "Constants and Literals",
          "Type Conversion and Type Casting",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Operators and Expressions",
        topics: [
          "Arithmetic Operators",
          "Relational Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Ternary Operator",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 5",
        subtitle: "Conditional Statements",
        topics: [
          "The if Statement",
          "The else Statement",
          "The switch Statement",
          "Nested Conditionals",
          "Ternary Operators",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 6",
        subtitle: "Loops in Java",
        topics: [
          "The for Loop",
          "The while Loop",
          "The do-while Loop",
          "Break and Continue Statements",
          "Nested Loops",
        ],
      },
      {
        icon: "TbMathFunction",
        title: "Module 7",
        subtitle: "Functions and Methods",
        topics: [
          "Defining Methods",
          "Method Overloading",
          "Recursive Methods",
          "Scope and Lifetime of Variables",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 8",
        subtitle: "Arrays in Java",
        topics: [
          "Introduction to Arrays",
          "Array Declaration and Initialization",
          "Array Operations",
          "Multidimensional Arrays",
          "Passing Arrays to Methods",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "Strings in Java",
        topics: [
          "Introduction to Strings",
          "String Manipulation Functions",
          "StringBuilder and StringBuffer",
          "Character Arrays vs Strings",
        ],
      },
      {
        icon: "VscRegex",
        title: "Module 10",
        subtitle: "Pattern Programs",
        topics: [
          "Introduction to Pattern Printing",
          "Number Patterns",
          "Star Patterns",
          "Advanced Pattern Programs",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 11",
        subtitle: "Object-Oriented Programming (OOP)",
        topics: [
          "Introduction to OOP",
          "Classes and Objects",
          "Constructors and Destructors",
          "Encapsulation, Inheritance, and Polymorphism",
        ],
      },
      {
        icon: "FaRegFolderOpen",
        title: "Module 12",
        subtitle: "File Handling in Java",
        topics: [
          "Reading and Writing Files",
          "Working with CSV and Binary Files",
          "File Handling Functions",
        ],
      },
      {
        icon: "AiOutlineExclamationCircle",
        title: "Module 13",
        subtitle: "Exception Handling in Java",
        topics: [
          "Error Handling in Java",
          "Try, Catch, and Throw Mechanisms",
          "Debugging Techniques",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 14",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Planning and Structuring a Java Project",
          "Implementing Core Features",
          "Debugging and Optimization",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  //Python
  {
    courseTitle: "Python for Beginners",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "5.2k Ratings",
    courseIcon: "IoLogoPython",
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
    aboutData: {
      description: [
        "Python for Beginners is a live online training program designed to introduce absolute beginners to the fundamentals of Python programming.This interactive course focuses on building a strong foundation in programming through hands-on exercises and practical coding sessions.",
        "Unlike pre-recorded courses, this program offers live classes with real-time instructor guidance, Q&A sessions, and coding exercises to ensure an engaging and structured learning experience.",
        "The curriculum covers fundamental programming concepts such as data types, variables, operators, control flow, loops, functions, and basic data structures. You will also learn how to handle files, debug code, and solve problems efficiently through structured exercises and beginner-friendly projects.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "No prior programming experience is required for this course, making it ideal for complete beginners. However, if you want to develop a solid understanding of fundamental programming concepts, such as variables, data types, control structures, and basic problem-solving techniques, before diving into Python, we highly recommend starting with a foundational course. Strengthening your core programming skills can make it easier to grasp Python’s advanced concepts and syntax. To build a strong base and ensure a smooth learning journey, you may Check out our",
        link: "/course/pages/c-programming",
        linkText: "C Programming Course",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of the subject, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Core Programming - Python course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of Python programming fundamentals, data structures, and real-world problem-solving skills covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Core Programming - Python course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },

    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Complete Python Mastery is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "This course is designed for absolute beginners and requires no prior programming experience. However, if you want to strengthen your understanding of fundamental programming concepts such as variables, data types, control structures, and basic problem-solving techniques before learning Python, we recommend starting with a foundational course. Developing logical thinking and problem-solving skills will help you grasp Python concepts more effectively. You may Check out our C Programming Course for a strong foundation.",
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
    ],
    syllabusData: [
      {
        icon: "HiMiniComputerDesktop",
        title: "Module 1",
        subtitle: "Introduction to Computers",
        topics: [
          "Overview of computer systems",
          "The role of Programming Language",
          "Understanding binary and data representation",
          "Number Conversions",
        ],
      },
      {
        icon: "FaPython",
        title: "Module 2",
        subtitle: "Introduction to Python",
        topics: [
          "Overview of Python",
          "Setting up the Python environment",
          "Writing and running your first Python program",
          "Understanding Python’s syntax and structure",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Variables and Data Types",
        topics: [
          "Introduction to Variables",
          "Primitive Data Types",
          "Composite Data Types",
          "Type Conversion",
          "Mutable and Immutable Types",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Operators and Expressions",
        topics: [
          "Arithmetic Operators",
          "Comparison Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Expressions in Python",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 5",
        subtitle: "Conditional Statements",
        topics: [
          "The if Statement",
          "The else Statement",
          "The elif Statement",
          "Nested Conditionals",
          "Ternary Operators",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 6",
        subtitle: "Loops",
        topics: [
          "The for Loop",
          "The while Loop",
          "Nested Loops",
          "Loop Control Statements",
          "Iterators",
        ],
      },
      {
        icon: "TbMathFunction",
        title: "Module 7",
        subtitle: "Functions",
        topics: [
          "Defining Functions",
          "Function Arguments",
          "Return Values",
          "Scope and Lifetime",
          "Lambda Functions",
        ],
      },
      {
        icon: "MdOutlineCalculate",
        title: "Module 8",
        subtitle: "Number Crunching",
        topics: [
          "Mathematical Functions",
          "Random Numbers",
          "Statistics",
          "NumPy Library",
        ],
      },
      {
        icon: "VscRegex",
        title: "Module 9",
        subtitle: "Patterns",
        topics: [
          "Pattern Matching",
          "Regular Expressions",
          "Wildcards",
          "String Patterns",
        ],
      },
      {
        icon: "RiBracketsLine",
        title: "Module 10",
        subtitle: "Arrays",
        topics: [
          "Introduction to Arrays",
          "Array Operations",
          "Multidimensional Arrays",
          "Array Libraries",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 11",
        subtitle: "2D Arrays",
        topics: [
          "Introduction to 2D Arrays",
          "2D Array Operations",
          "Matrix Manipulations",
          "Applications of 2D Arrays",
        ],
      },
      {
        icon: "BsBraces",
        title: "Module 12",
        subtitle: "Strings",
        topics: [
          "Introduction to Strings",
          "String Operations",
          "String Methods",
          "String Formatting",
        ],
      },
      {
        icon: "IoMdApps",
        title: "Module 13",
        subtitle: "Tuples",
        topics: [
          "Introduction to Tuples",
          "Tuple Operations",
          "Nested Tuples",
          "Applications of Tuples",
        ],
      },
      {
        icon: "GoDatabase",
        title: "Module 14",
        subtitle: "Dictionaries",
        topics: [
          "Introduction to Dictionaries",
          "Dictionary Operations",
          "Nested Dictionaries",
          "Applications of Dictionaries",
        ],
      },
      {
        icon: "TbListNumbers",
        title: "Module 15",
        subtitle: "Sets",
        topics: [
          "Introduction to Sets",
          "Set Operations",
          "Set Methods",
          "Applications of Sets",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 16",
        subtitle: "Working with Modules",
        topics: [
          "Introduction to Modules",
          "Importing Modules",
          "Creating Modules",
          "Using Standard Library Modules",
        ],
      },
      {
        icon: "FaRegFolderOpen",
        title: "Module 17",
        subtitle: "File Handling",
        topics: [
          "Introduction to File Handling",
          "Reading Files",
          "Writing to Files",
          "Working with CSV Files",
        ],
      },
      {
        icon: "AiOutlineExclamationCircle",
        title: "Module 18",
        subtitle: "Exception Handling",
        topics: [
          "Introduction to Exception Handling",
          "Try and Except Blocks",
          "Handling Multiple Exceptions",
          "Creating Custom Exceptions",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 19",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Planning and Structuring a C++ Project",
          "Implementing Core Features",
          "Debugging and Optimization",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  //Go Language
  {
    courseTitle: "Go Programming for Beginners",
    instructor: "Sachin",
    rating: 4.7,
    reviews: "3.8k Ratings",
    courseIcon: "SiGo",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "20+ Topics",
    problemsCount: "200+ Problems",
    projectsCount: "6+ Projects using Go",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4499,
    discountedPrice: 2299,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",

    aboutData: {
      description: [
        "Go Programming for Beginners is a live online training program designed to introduce absolute beginners to the Go (Golang) programming language. This course covers the fundamental concepts of Go while providing hands-on exercises and practical coding sessions.",
        "Unlike pre-recorded courses, this program offers live classes with real-time instructor guidance, interactive Q&A sessions, and coding exercises to ensure an immersive and engaging learning experience.",
        "The curriculum starts with fundamental programming concepts such as variables, data types, control flow, functions, and basic data structures. You will also explore file handling, debugging, and Go’s concurrency model to build high-performance applications efficiently.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },

    prerequisites: [
      {
        text: "No prior programming experience is required to enroll in this course, making it ideal for complete beginners. However, if you want to develop a solid understanding of fundamental programming concepts, such as variables, data types, control structures, and problem-solving techniques before diving into Go, we highly recommend starting with a foundational course. Strengthening your core programming skills can make it easier to grasp Go's syntax and features. To build a strong base and ensure a smooth learning journey, you may Check out our",
        link: "/course/pages/c-programming",
        linkText: "C Programming Course",
      },
    ],

    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of Go programming, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },

    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Go Programming course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of Go programming fundamentals, data structures, and real-world problem-solving skills covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Go Programming course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },

    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Go Programming for Beginners is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding Go concepts.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 6+ real-world projects covering networking, web development, system programming, and more to solidify your learning.",
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
    ],

    syllabusData: [
      {
        icon: "HiMiniComputerDesktop",
        title: "Module 1",
        subtitle: "Introduction to Computers",
        topics: [
          "Overview of computer systems",
          "The role of Programming Language",
          "Understanding binary and data representation",
          "Number Conversions",
        ],
      },
      {
        icon: "SiGo",
        title: "Module 2",
        subtitle: "Introduction to Go",
        topics: [
          "Overview of Go Language",
          "Setting up the Go Environment",
          "Compiling and Running a Go Program",
          "Understanding Go's Syntax and Structure",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Data Types and Variables",
        topics: [
          "Primitive Data Types in Go",
          "Declaring Variables",
          "Constants and Literals",
          "Type Conversion and Type Casting",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Operators and Expressions",
        topics: [
          "Arithmetic Operators",
          "Relational Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Ternary Operator",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 5",
        subtitle: "Conditional Statements",
        topics: [
          "The if Statement",
          "The else Statement",
          "The switch Statement",
          "Nested Conditionals",
          "Ternary Operators",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 6",
        subtitle: "Loops in Go",
        topics: [
          "The for Loop",
          "The while Loop (using for in Go)",
          "The do-while Loop (simulation using for)",
          "Break and Continue Statements",
          "Nested Loops",
        ],
      },
      {
        icon: "TbMathFunction",
        title: "Module 7",
        subtitle: "Functions and Methods",
        topics: [
          "Defining Functions",
          "Function Parameters and Return Types",
          "Function Overloading",
          "Recursive Functions",
          "Scope and Lifetime of Variables",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 8",
        subtitle: "Arrays and Slices in Go",
        topics: [
          "Introduction to Arrays",
          "Array Declaration and Initialization",
          "Multi-Dimensional Arrays",
          "Slices and Slice Operations",
          "Passing Arrays and Slices to Functions",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "Strings and Pattern Matching",
        topics: [
          "Introduction to Strings",
          "String Handling Functions",
          "String Manipulations",
          "Regular Expressions and Pattern Matching",
        ],
      },
      {
        icon: "GoDatabase",
        title: "Module 10",
        subtitle: "Working with Maps",
        topics: [
          "Introduction to Maps",
          "Creating and Initializing Maps",
          "Adding, Updating, and Deleting Elements",
          "Iterating over Maps",
          "Practical Use Cases of Maps",
        ],
      },
      {
        icon: "FaRegFolderOpen",
        title: "Module 11",
        subtitle: "File Handling in Go",
        topics: [
          "Reading and Writing Files",
          "Working with CSV and JSON Files",
          "Error Handling in File Operations",
          "Binary File Operations",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 12",
        subtitle: "Go Concurrency Model",
        topics: [
          "Introduction to Concurrency in Go",
          "Goroutines and How They Work",
          "Using Channels for Communication",
          "Concurrency Patterns in Go",
        ],
      },
      {
        icon: "AiOutlineExclamationCircle",
        title: "Module 13",
        subtitle: "Error Handling and Debugging",
        topics: [
          "Error Handling in Go",
          "Using Panic and Recover",
          "Implementing Custom Error Handling",
          "Debugging Techniques in Go",
        ],
      },
      {
        icon: "FaNetworkWired",
        title: "Module 15",
        subtitle: "Introduction to Web Development with Go",
        topics: [
          "Setting Up a Web Server in Go",
          "Working with HTTP Requests and Responses",
          "Building a REST API with Go",
          "Handling JSON Data",
          "Deploying Go Applications",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 14",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Planning and Structuring a Go Project",
          "Implementing Core Features",
          "Debugging and Optimization",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  //ruby
  {
    courseTitle: "Ruby for Beginners",
    instructor: "Sachin",
    rating: 4.7,
    reviews: "3.8k Ratings",
    courseIcon: "SiRuby",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "20 Topics",
    problemsCount: "200+ Problems",
    projectsCount: "6+ Projects using Ruby",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4499,
    discountedPrice: 2299,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",

    aboutData: {
      description: [
        "Ruby for Beginners is a live online training program designed to introduce students to the fundamentals of Ruby programming. This interactive course focuses on hands-on learning, providing a smooth introduction to the language’s syntax, features, and use cases.",
        "Unlike pre-recorded courses, this program offers live sessions with real-time instructor support, Q&A sessions, and coding exercises to enhance understanding and retention.",
        "The curriculum covers Ruby fundamentals, including variables, loops, functions, object-oriented programming (OOP), and error handling. Additionally, students will gain practical experience by working on real-world projects and exercises.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },

    prerequisites: [
      {
        text: "No prior programming experience is required for this course, making it ideal for complete beginners. However, if you want to develop a solid understanding of fundamental programming concepts, such as variables, data types, control structures, and basic problem-solving techniques before diving into Ruby, we recommend starting with a foundational course. To build a strong base, you may Check out our",
        link: "/course/pages/c-programming",
        linkText: "C Programming Course",
      },
    ],

    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of Ruby programming, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },

    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Ruby Programming course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of Ruby programming fundamentals, object-oriented concepts, and real-world problem-solving skills covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Ruby Programming course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },

    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Ruby for Beginners is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding Ruby concepts.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 6+ real-world projects covering web development, automation, scripting, and more to solidify your learning.",
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
    ],

    syllabusData: [
      {
        icon: "HiMiniComputerDesktop",
        title: "Module 1",
        subtitle: "Introduction to Computers",
        topics: [
          "Overview of Computer Systems",
          "The Role of Programming Languages",
          "Understanding Binary and Data Representation",
          "Number Conversions",
        ],
      },
      {
        icon: "SiRuby",
        title: "Module 2",
        subtitle: "Introduction to Ruby",
        topics: [
          "Overview of Ruby Language",
          "Setting up the Ruby Environment",
          "Compiling and Running a Ruby Program",
          "Understanding Ruby's Syntax and Structure",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Data Types and Variables",
        topics: [
          "Primitive Data Types in Ruby",
          "Declaring Variables",
          "Constants and Literals",
          "Type Conversion and Type Casting",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Operators and Expressions",
        topics: [
          "Arithmetic Operators",
          "Relational Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Ternary Operator",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 5",
        subtitle: "Conditional Statements",
        topics: [
          "The if Statement",
          "The else Statement",
          "The case Statement",
          "Nested Conditionals",
          "Ternary Operators",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 6",
        subtitle: "Loops in Ruby",
        topics: [
          "The for Loop",
          "The while Loop",
          "The until Loop",
          "Break and Continue Statements",
          "Nested Loops",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 7",
        subtitle: "Arrays in Ruby",
        topics: [
          "Introduction to Arrays",
          "Array Declaration and Initialization",
          "Array Operations (Insert, Delete, Update, Search)",
          "Iterating Through Arrays",
          "Multi-Dimensional Arrays",
        ],
      },
      {
        icon: "BsBraces",
        title: "Module 8",
        subtitle: "Strings in Ruby",
        topics: [
          "Introduction to Strings",
          "String Operations and Manipulations",
          "String Methods in Ruby",
          "Regular Expressions and Pattern Matching",
          "String Formatting and Interpolation",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "Hashes and Symbols in Ruby",
        topics: [
          "Introduction to Hashes",
          "Key-Value Pairs and Hash Operations",
          "Iterating Through Hashes",
          "Understanding Symbols",
          "Difference Between Symbols and Strings",
        ],
      },
      {
        icon: "MdOutlineLibraryBooks",
        title: "Module 10",
        subtitle: "Object-Oriented Programming (OOP) in Ruby",
        topics: [
          "Introduction to OOP",
          "Classes and Objects",
          "Constructors and Destructors",
          "Encapsulation, Inheritance, and Polymorphism",
          "Mixins and Modules",
        ],
      },
      {
        icon: "FaRegFolderOpen",
        title: "Module 11",
        subtitle: "File Handling in Ruby",
        topics: [
          "Reading and Writing Files",
          "Working with CSV and JSON Files",
          "Error Handling in File Operations",
        ],
      },
      {
        icon: "GoDatabase",
        title: "Module 12",
        subtitle: "Working with Databases",
        topics: [
          "Introduction to Databases in Ruby",
          "Using SQLite and ActiveRecord",
          "Performing CRUD Operations",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 13",
        subtitle: "Error Handling and Debugging",
        topics: [
          "Understanding Ruby Errors and Exceptions",
          "Using Begin, Rescue, and Ensure",
          "Best Practices for Debugging in Ruby",
        ],
      },
      {
        icon: "VscRegex",
        title: "Module 14",
        subtitle: "Patterns in Ruby",
        topics: [
          "Introduction to Pattern Matching",
          "Number and Star Patterns",
          "Regular Expressions",
          "Advanced Pattern Programs",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 15",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Structuring a Ruby Project",
          "Implementing Core Features",
          "Debugging and Optimization",
          "Final Project Submission and Review",
        ],
      },
    ],
  },

  //Data Structure

  //Ds-Python
  {
    courseTitle: "Data Structures in Python",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "6.2k Ratings",
    courseIcon: "FaPython",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "20+ Topics",
    problemsCount: "300+ Problems",
    projectsCount: "12+ Projects using Python",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "Data Structures in Python is an in-depth course designed to teach students the fundamental and advanced concepts of data structures using Python. This course focuses on hands-on coding, real-world problem-solving, and algorithmic thinking.",
        "Through interactive live classes, students will learn how to efficiently store, retrieve, and manipulate data using various data structures. Concepts such as arrays, linked lists, stacks, queues, trees, graphs, hash tables, and heaps will be covered in detail.",
        "In addition, students will work on real-world projects and competitive programming challenges to solidify their understanding and prepare for coding interviews.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "A basic understanding of Python programming is required for this course. If you're new to Python, we recommend starting with a beginner-level course to grasp essential programming concepts before diving into data structures. A strong foundation in variables, loops, functions, and object-oriented programming will be beneficial. To prepare, you can check out our",
        link: "/course/pages/python-for-beginners",
        linkText: "Python for Beginners Course",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing this course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate showcases your expertise in Python Data Structures, making you stand out to potential employers.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon completing the Data Structures in Python course, students must take a final assessment to qualify for certification.",
        "The final assessment evaluates your proficiency in implementing and optimizing data structures, along with algorithmic problem-solving skills.",
        "Students are encouraged to participate in live problem-solving sessions and complete exercises throughout the course.",
      ],
      assessmentDetails:
        "The final assessment consists of multiple coding challenges and contributes 100% to your certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If you do not achieve the required score, you will have the opportunity to retake the assessment once.",
      finalNote:
        "This certification ensures that only students who demonstrate a strong grasp of data structures and their applications receive the certificate.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Data Structures in Python is a live, interactive training program with real-time instructor guidance, Q&A sessions, and hands-on coding exercises.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A basic understanding of Python programming is recommended. If you are new to Python, consider taking our 'Python for Beginners' course first.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal for six months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 12+ real-world projects covering topics like data analysis, automation, web scraping, and algorithm optimization.",
      },
      {
        title: "How long is the course and schedule?",
        description:
          "The course spans 100 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
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
          "Yes, the final assessment consists of coding challenges and real-world problem-solving tasks.",
      },
    ],
    syllabusData: [
      {
        icon: "FaPython",
        title: "Module 1",
        subtitle: "Object-Oriented Programming (OOP) in Python",
        topics: [
          "Introduction to OOP",
          "Classes and Objects",
          "Instance and Class Variables",
          "Encapsulation, Inheritance, and Polymorphism",
          "Abstract Classes and Interfaces",
          "Method Overriding and Magic Methods",
          "Working with Modules and Packages",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 2",
        subtitle: "Arrays and Lists",
        topics: [
          "Introduction to Arrays",
          "List Operations in Python",
          "Slicing and Indexing",
          "Sorting and Searching Algorithms",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Stacks",
        topics: [
          "Understanding Stack Data Structure",
          "Implementation of Stack using Lists",
          "Stack Operations (Push, Pop, Peek)",
          "Applications of Stack",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 4",
        subtitle: "Queues",
        topics: [
          "Understanding Queue Data Structure",
          "Implementation of Queue using Lists",
          "Circular Queue and Deque",
          "Priority Queue and Applications",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 5",
        subtitle: "Singly Linked List",
        topics: [
          "Introduction to Linked Lists",
          "Creating and Traversing a Linked List",
          "Insertion and Deletion Operations",
          "Reversing a Linked List",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 6",
        subtitle: "Doubly Linked List",
        topics: [
          "Introduction to Doubly Linked Lists",
          "Insertion and Deletion in Doubly Linked List",
          "Reversing a Doubly Linked List",
          "Applications of Linked Lists",
        ],
      },
      {
        icon: "FaQuestion",
        title: "Module 7",
        subtitle: "Recursion and Backtracking",
        topics: [
          "Introduction to Recursion",
          "Recursion vs Iteration",
          "Backtracking Algorithms",
          "Applications of Recursion",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 8",
        subtitle: "Trees",
        topics: [
          "Binary Trees and Binary Search Trees",
          "Tree Traversal Techniques",
          "AVL Trees and Red-Black Trees",
          "Applications of Trees",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "Graphs",
        topics: [
          "Graph Representations (Adjacency List & Matrix)",
          "Graph Traversal Algorithms (DFS & BFS)",
          "Shortest Path Algorithms (Dijkstra, Floyd-Warshall)",
          "Topological Sorting and Applications",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 10",
        subtitle: "Sorting and Searching Algorithms",
        topics: [
          "Bubble Sort, Merge Sort, Quick Sort",
          "Binary Search vs Linear Search",
          "Heap Sort and Radix Sort",
          "Time Complexity Analysis",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 11",
        subtitle: "Project Building",
        topics: [
          "Building a Data Structure-Based Application",
          "Solving Real-World Problems using Python",
          "Performance Optimization Techniques",
          "Final Project Review and Assessment",
        ],
      },
    ],
  },
  // Ds-C
  {
    courseTitle: "Data Structures in C",
    instructor: "Sachin",
    rating: 4.8,
    reviews: "4.2k Ratings",
    courseIcon: "FaCode",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "15 Topics",
    problemsCount: "300+ Problems",
    projectsCount: "5+ Projects using C",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Data Structures in C course is designed to help learners build a strong understanding of fundamental and advanced data structures using the C programming language. This course will introduce students to arrays, linked lists, stacks, queues, trees, and graphs along with real-world applications.",
        "The curriculum focuses on hands-on coding exercises, implementation of complex data structures, and performance optimization techniques using C.",
        "By the end of this course, you will have a solid foundation in data structures and algorithms, which is essential for acing coding interviews and improving problem-solving skills.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "A basic understanding of C programming is required for this course, including knowledge of variables, loops, functions, and arrays. If you're new to C programming, we recommend starting with our",
        link: "/course/pages/c-programming",
        linkText: "C Programming for Beginners Course",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of the subject, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Data Structures in C course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of data structures, memory management, and problem-solving skills using C programming.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Data Structures in C course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Data Structures in C is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A basic understanding of C programming is required. You should be familiar with functions, arrays, and loops before starting this course.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 5+ real-world projects covering data structure implementations like linked lists, trees, stacks, queues, and graphs.",
      },
      {
        title: "How long is the course and schedule?",
        description:
          "The course spans 100 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends. This ensures a balanced learning experience.",
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
    ],
    syllabusData: [
      {
        icon: "FaCode",
        title: "Module 1",
        subtitle: "Pointers",
        topics: [
          "Introduction to Pointers",
          "Pointer Arithmetic",
          "Pointers and Functions",
          "Dynamic Memory Allocation (malloc, calloc, free, realloc)",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "Structures",
        topics: [
          "Introduction to Structures",
          "Declaring and Accessing Structures",
          "Arrays of Structures",
          "Nested Structures and Structure Pointers",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Recursion",
        topics: [
          "Introduction to Recursion",
          "Recursive Functions and Base Case",
          "Recursion vs Iteration",
          "Applications of Recursion",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 4",
        subtitle: "Singly Linked List",
        topics: [
          "Introduction to Singly Linked List",
          "Insertion and Deletion in Singly Linked List",
          "Searching and Traversing a Linked List",
          "Applications of Singly Linked List",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 5",
        subtitle: "Doubly Linked List",
        topics: [
          "Introduction to Doubly Linked List",
          "Insertion and Deletion in Doubly Linked List",
          "Traversal in Both Directions",
          "Applications of Doubly Linked List",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 6",
        subtitle: "Stack",
        topics: [
          "Understanding Stack Data Structure",
          "Stack Operations (Push, Pop, Peek)",
          "Implementation of Stack using Arrays and Linked List",
          "Applications of Stack (Expression Evaluation, Backtracking)",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 7",
        subtitle: "Queue",
        topics: [
          "Introduction to Queue",
          "Queue Operations (Enqueue, Dequeue, Front, Rear)",
          "Circular Queue Implementation",
          "Priority Queue and Applications",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 8",
        subtitle: "Binary Heap",
        topics: [
          "Introduction to Heaps",
          "Max Heap and Min Heap",
          "Heap Operations (Insert, Delete, Heapify)",
          "Heap Sort Algorithm",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "Binary Search Tree (BST)",
        topics: [
          "Introduction to BST",
          "Insertion, Deletion, and Searching in BST",
          "Balanced BSTs (AVL Trees, Red-Black Trees)",
          "Applications of BST",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 10",
        subtitle: "AVL Tree",
        topics: [
          "Introduction to AVL Tree",
          "Rotations in AVL Tree (LL, RR, LR, RL)",
          "Insertion and Deletion in AVL Tree",
          "Balancing an AVL Tree",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 11",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Implementing Real-World Applications using Data Structures",
          "Optimizing Code for Efficiency",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  // Ds-cpp
  {
    courseTitle: "Data Structures in C++",
    instructor: "Sachin",
    rating: 4.8,
    reviews: "4.2k Ratings",
    courseIcon: "FaCode",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "15 Topics",
    problemsCount: "300+ Problems",
    projectsCount: "5+ Projects using C++",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Data Structures in C++ course is designed to help learners build a strong understanding of fundamental and advanced data structures using the C++ programming language. This course will introduce students to arrays, linked lists, stacks, queues, trees, and graphs along with real-world applications.",
        "The curriculum focuses on hands-on coding exercises, implementation of complex data structures, and performance optimization techniques using C++.",
        "By the end of this course, you will have a solid foundation in data structures and algorithms, which is essential for acing coding interviews and improving problem-solving skills.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "A basic understanding of C++ programming is required for this course, including knowledge of variables, loops, functions, and arrays. If you're new to C++ programming, we recommend starting with our",
        link: "/course/pages/cpp-programming",
        linkText: "C++ Programming for Beginners Course",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of the subject, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Data Structures in C++ course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of data structures, memory management, and problem-solving skills using C++ programming.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Data Structures in C++ course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Data Structures in C++ is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A basic understanding of C++ programming is required. You should be familiar with functions, arrays, and loops before starting this course.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 5+ real-world projects covering data structure implementations like linked lists, trees, stacks, queues, and graphs.",
      },
      {
        title: "How long is the course and schedule?",
        description:
          "The course spans 100 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends. This ensures a balanced learning experience.",
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
    ],
    syllabusData: [
      {
        icon: "FaCode",
        title: "Module 1",
        subtitle: "Pointers and Memory Management",
        topics: [
          "Introduction to Pointers",
          "Pointer Arithmetic",
          "Pointers and Functions",
          "Dynamic Memory Allocation (new, delete)",
          "Smart Pointers in C++ (unique_ptr, shared_ptr, weak_ptr)",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "Structures and Classes",
        topics: [
          "Introduction to Structures",
          "Declaring and Accessing Structures",
          "Arrays of Structures",
          "Nested Structures and Structure Pointers",
          "Introduction to Classes and Objects",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Object-Oriented Programming in C++",
        topics: [
          "Encapsulation and Data Hiding",
          "Inheritance and Types of Inheritance",
          "Polymorphism (Function Overloading & Operator Overloading)",
          "Abstract Classes and Interfaces",
          "Templates in C++ (Function and Class Templates)",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 4",
        subtitle: "Recursion",
        topics: [
          "Introduction to Recursion",
          "Recursive Functions and Base Case",
          "Recursion vs Iteration",
          "Backtracking Algorithms (N-Queens, Sudoku Solver, etc.)",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 5",
        subtitle: "Singly Linked List",
        topics: [
          "Introduction to Singly Linked List",
          "Insertion and Deletion in Singly Linked List",
          "Searching and Traversing a Linked List",
          "Reversing a Linked List",
          "Applications of Singly Linked List",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 6",
        subtitle: "Doubly Linked List",
        topics: [
          "Introduction to Doubly Linked List",
          "Insertion and Deletion in Doubly Linked List",
          "Traversal in Both Directions",
          "Reversing a Doubly Linked List",
          "Applications of Doubly Linked List",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 7",
        subtitle: "Stack",
        topics: [
          "Stack Operations (Push, Pop, Peek)",
          "Implementation using Arrays and Linked List",
          "Applications of Stack (Expression Evaluation, Backtracking)",
          "Implementing a Stack using STL (Standard Template Library)",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 8",
        subtitle: "Queue",
        topics: [
          "Introduction to Queue",
          "Queue Operations (Enqueue, Dequeue, Front, Rear)",
          "Circular Queue Implementation",
          "Priority Queue and Double-ended Queue (Deque)",
          "Implementing a Queue using STL",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "Trees",
        topics: [
          "Introduction to Trees",
          "Binary Trees and Binary Search Trees",
          "Tree Traversal Techniques (Inorder, Preorder, Postorder)",
          "Applications of Trees (Huffman Coding, Expression Trees)",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 10",
        subtitle: "AVL Tree",
        topics: [
          "Introduction to AVL Tree",
          "Rotations in AVL Tree (LL, RR, LR, RL)",
          "Insertion and Deletion in AVL Tree",
          "Balancing an AVL Tree",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 11",
        subtitle: "Heaps and Priority Queues",
        topics: [
          "Introduction to Heaps",
          "Max Heap and Min Heap",
          "Heap Operations (Insert, Delete, Heapify)",
          "Heap Sort Algorithm",
          "Priority Queues using STL",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 12",
        subtitle: "Graphs",
        topics: [
          "Graph Representations (Adjacency List & Matrix)",
          "Graph Traversal Algorithms (DFS & BFS)",
          "Minimum Spanning Trees (Prim's and Kruskal's Algorithm)",
          "Shortest Path Algorithms (Dijkstra, Floyd-Warshall)",
        ],
      },
      {
        icon: "AiOutlineExclamationCircle",
        title: "Module 13",
        subtitle: "Hashing and Hash Tables",
        topics: [
          "Introduction to Hashing",
          "Hash Functions and Collision Resolution Techniques",
          "Open Addressing vs Chaining",
          "Implementing Hash Tables in C++",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 14",
        subtitle: "Project Building",
        topics: [
          "Understanding Project Requirements",
          "Implementing Real-World Applications using Data Structures",
          "Optimizing Code for Efficiency",
          "Final Project Submission and Review",
        ],
      },
    ],
  },
  // Ds-java
  {
    courseTitle: "Data Structures in Java",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "4.8k Ratings",
    courseIcon: "FaJava",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "15 Topics",
    problemsCount: "350+ Problems",
    projectsCount: "5+ Projects using Java",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Data Structures in Java course is designed to help learners build a strong foundation in fundamental and advanced data structures using the Java programming language. This course will introduce students to arrays, linked lists, stacks, queues, trees, graphs, and advanced Java concepts such as collections framework and multi-threading.",
        "This course focuses on hands-on coding exercises, real-world applications, and algorithmic problem-solving using Java.",
        "By the end of this course, you will have a solid foundation in data structures and algorithms, which is essential for acing coding interviews and improving problem-solving skills.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "A basic understanding of Java programming is required for this course, including knowledge of variables, loops, functions, and object-oriented programming (OOP) concepts. If you're new to Java, we recommend starting with our",
        link: "/course/pages/java-programming",
        linkText: "Java Programming for Beginners Course",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of the Course",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of Java data structures, showcasing your commitment to continuous learning and problem-solving. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Upon successfully completing the Data Structures in Java course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of data structures, memory management, and problem-solving skills using Java programming.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the Data Structures in Java course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Data Structures in Java is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A basic understanding of Java programming is required. You should be familiar with OOP concepts, functions, and loops before starting this course.",
      },
      {
        title: "Will I get access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 5+ real-world projects covering data structure implementations like linked lists, trees, stacks, queues, graphs, and sorting algorithms.",
      },
      {
        title: "How long is the course and schedule?",
        description:
          "The course spans 100 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends. This ensures a balanced learning experience.",
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
    ],
    syllabusData: [
      {
        icon: "FaJava",
        title: "Module 1",
        subtitle: "Pointers and Memory Management",
        topics: [
          "Introduction to Pointers in Java",
          "Understanding Heap and Stack Memory",
          "Garbage Collection in Java",
          "Java Memory Management Techniques",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "OOP in Java",
        topics: [
          "Encapsulation and Data Hiding",
          "Inheritance and Polymorphism",
          "Interfaces and Abstract Classes",
          "Exception Handling in Java",
          "Java Collections Framework",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Recursion",
        topics: [
          "Understanding Recursion",
          "Tail Recursion vs Head Recursion",
          "Backtracking Problems",
          "Real-world Applications of Recursion",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 4",
        subtitle: "Singly Linked List",
        topics: [
          "Introduction to Linked Lists",
          "Insertion and Deletion Operations",
          "Reversing a Linked List",
          "Detecting Loops in Linked List",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 5",
        subtitle: "Doubly Linked List",
        topics: [
          "Introduction to Doubly Linked List",
          "Insertion and Deletion in Doubly Linked List",
          "Traversal in Both Directions",
          "Applications of Doubly Linked List",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 6",
        subtitle: "Stacks",
        topics: [
          "Understanding Stack Data Structure",
          "Stack Operations (Push, Pop, Peek)",
          "Stack Implementation using Arrays and Linked Lists",
          "Applications of Stack (Expression Evaluation, Backtracking)",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 7",
        subtitle: "Queues",
        topics: [
          "Introduction to Queue",
          "Queue Operations (Enqueue, Dequeue, Front, Rear)",
          "Circular Queue Implementation",
          "Priority Queue and Applications",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 8",
        subtitle: "Trees",
        topics: [
          "Binary Trees & Binary Search Trees",
          "Tree Traversal Techniques (Inorder, Preorder, Postorder)",
          "AVL Trees & Red-Black Trees",
          "Applications of Trees",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 9",
        subtitle: "Graphs",
        topics: [
          "Graph Representations (Adjacency List & Matrix)",
          "Graph Traversal Algorithms (DFS & BFS)",
          "Shortest Path Algorithms (Dijkstra, Floyd-Warshall)",
          "Minimum Spanning Trees (Kruskal, Prim’s Algorithm)",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 10",
        subtitle: "Hashing & Hash Tables",
        topics: [
          "Introduction to Hashing",
          "Hash Tables and Collision Handling",
          "Open Addressing vs Chaining",
          "Applications of Hashing in Java",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 11",
        subtitle: "Sorting and Searching Algorithms",
        topics: [
          "Bubble Sort, Merge Sort, Quick Sort",
          "Binary Search vs Linear Search",
          "Heap Sort and Radix Sort",
          "Time Complexity Analysis",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 12",
        subtitle: "Project Building",
        topics: [
          "Building a Data Structure-Based Java Application",
          "Solving Real-World Problems using Java",
          "Performance Optimization Techniques",
          "Final Project Review and Submission",
        ],
      },
    ],
  },

  // Algorithms

  //algorithms-java
  {
    courseTitle: "Algorithms Using Java",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "5.1k Ratings",
    courseIcon: "FaJava",
    level: "Advanced",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 120 Hours",
    topicsCount: "20 Topics",
    problemsCount: "400+ Problems",
    projectsCount: "50+ algorithms",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 6999,
    discountedPrice: 3499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Algorithms Using Java course is designed to provide learners with a comprehensive understanding of fundamental and advanced algorithms implemented in the Java programming language. This course covers a wide range of topics, including sorting and searching algorithms, dynamic programming, graph algorithms, and more.",
        "Emphasizing hands-on coding exercises and real-world applications, this course aims to enhance your problem-solving skills and algorithmic thinking.",
        "By the end of this course, you will have a deep understanding of various algorithms and their implementations in Java, preparing you for competitive programming and technical interviews.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 120 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "To get the most out of this course, a strong foundation in Java programming is highly recommended. You should be familiar with key object-oriented programming (OOP) concepts such as encapsulation, inheritance, polymorphism, and abstraction. Additionally, a basic understanding of data structures, including arrays, linked lists, stacks, queues, and trees, along with familiarity with fundamental algorithms like sorting and searching, will help you grasp advanced topics more effectively. If you're new to Java or want to strengthen your fundamentals before diving into algorithms, we recommend completing the following courses first:",
        links: [
          {
            link: "/course/pages/java-programming",
            linkText: "Java Programming for Beginners",
          },
          {
            link: "/course/pages/data-structures-java",
            linkText: "Data Structures in Java",
          },
        ],
      },
    ],

    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in algorithm development using Java, demonstrating your problem-solving skills and proficiency in efficient coding. It enhances your professional profile, making you stand out in job applications and career opportunities in software development and competitive programming.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the Algorithms Using Java course and pass a final assessment.",
        "The assessment evaluates your understanding of algorithmic concepts, problem-solving abilities, and proficiency in Java implementations.",
        "It is conducted under strict guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark examination, accounting for 100% of your certification score. While practice problems and exercises throughout the course are encouraged to reinforce learning, they do not contribute to the final certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This rigorous evaluation process ensures that only individuals who demonstrate a thorough understanding of the course material are awarded the certificate, maintaining its credibility and value.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Algorithms Using Java is a live online training program featuring interactive sessions. Classes are conducted in real-time, including hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A strong foundation in Java programming is required. Familiarity with OOP concepts, data structures, and basic algorithms is essential before enrolling in this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be accessible through the LMS portal, allowing you to revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will engage in 6+ real-world projects, focusing on algorithm implementations such as sorting algorithms, graph traversals, dynamic programming solutions, and more.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course encompasses 120 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends, providing a balanced and comprehensive learning experience.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! Upon successfully completing the course and passing the assessment, you will receive a Certificate of Excellence from LearnLogicify Technologies.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support to address any questions or challenges you may encounter.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to qualify for the certificate. It includes coding challenges and a project submission to evaluate your understanding and application of the course material.",
      },
    ],
    syllabusData: [
      {
        icon: "FaJava",
        title: "Module 1",
        subtitle: "Introduction to Algorithms",
        topics: [
          "Understanding Algorithms and Their Importance",
          "Algorithm Analysis and Big O Notation",
          "Time and Space Complexity",
          "Introduction to Java for Algorithm Implementation",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "Sorting Algorithms",
        topics: [
          "Bubble Sort, Selection Sort, Insertion Sort",
          "Merge Sort and Quick Sort",
          "Heap Sort and Counting Sort",
          "Radix Sort and Bucket Sort",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Searching Algorithms",
        topics: [
          "Linear Search and Binary Search",
          "Interpolation Search",
          "Exponential Search",
          "Search Algorithms in Java Collections",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 4",
        subtitle: "Dynamic Programming",
        topics: [
          "Introduction to Dynamic Programming",
          "Memoization vs Tabulation",
          "Solving Fibonacci and Knapsack Problems",
          "Longest Common Subsequence and Matrix Chain Multiplication",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 5",
        subtitle: "Graph Algorithms",
        topics: [
          "Graph Representation (Adjacency Matrix & List)",
          "Breadth-First Search (BFS) and Depth-First Search (DFS)",
          "Dijkstra’s Algorithm for Shortest Path",
          "Bellman-Ford Algorithm and Floyd-Warshall Algorithm",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 6",
        subtitle: "Minimum Spanning Trees",
        topics: [
          "Prim’s Algorithm",
          "Kruskal’s Algorithm",
          "Union-Find Data Structure",
          "Applications of MST in Real-World Scenarios",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 7",
        subtitle: "Backtracking Algorithms",
        topics: [
          "Understanding Backtracking and Recursive Trees",
          "N-Queens Problem",
          "Sudoku Solver using Backtracking",
          "Hamiltonian Cycle and Knight’s Tour Problem",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 8",
        subtitle: "Greedy Algorithms",
        topics: [
          "Concept of Greedy Strategy",
          "Activity Selection Problem",
          "Huffman Encoding",
          "Greedy Algorithms for Graphs",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "String Algorithms",
        topics: [
          "Naive Pattern Searching",
          "KMP Algorithm and Rabin-Karp Algorithm",
          "Z Algorithm for Pattern Matching",
          "Suffix Arrays and LCP Arrays",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 10",
        subtitle: "Mathematical and Number Theory Algorithms",
        topics: [
          "GCD, LCM, and Extended Euclidean Algorithm",
          "Sieve of Eratosthenes",
          "Modular Exponentiation",
          "Chinese Remainder Theorem",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 11",
        subtitle: "Bit Manipulation Algorithms",
        topics: [
          "Understanding Bitwise Operations",
          "Counting Set Bits",
          "Finding Unique Numbers in an Array",
          "Bitwise Tricks for Competitive Programming",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 12",
        subtitle: "Graph Coloring and Network Flow",
        topics: [
          "Graph Coloring using Greedy Algorithm",
          "Ford-Fulkerson Algorithm for Maximum Flow",
          "Bipartite Graphs and Matching Algorithms",
          "Real-Life Applications of Network Flow",
        ],
      },
    ],
  },
  //algorithms-python
  {
    courseTitle: "Algorithms Using Python",
    instructor: "Sachin",
    rating: 4.8,
    reviews: "4.5k Ratings",
    courseIcon: "FaPython",
    level: "Advanced",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 120 Hours",
    topicsCount: "20 Topics",
    problemsCount: "400+ Problems",
    projectsCount: "50+ Algorithms",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 6999,
    discountedPrice: 3499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Algorithms Using Python course is designed to provide learners with a comprehensive understanding of fundamental and advanced algorithms implemented in the Python programming language. This course covers a wide range of topics, including sorting and searching algorithms, dynamic programming, graph algorithms, and more.",
        "Emphasizing hands-on coding exercises and real-world applications, this course aims to enhance your problem-solving skills and algorithmic thinking.",
        "By the end of this course, you will have a deep understanding of various algorithms and their implementations in Python, preparing you for competitive programming and technical interviews.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 120 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "To get the most out of this course, a strong foundation in Python programming is highly recommended. You should be familiar with key object-oriented programming (OOP) concepts such as encapsulation, inheritance, polymorphism, and abstraction. Additionally, a basic understanding of data structures, including arrays, linked lists, stacks, queues, and trees, along with familiarity with fundamental algorithms like sorting and searching, will help you grasp advanced topics more effectively. If you're new to Python or want to strengthen your fundamentals before diving into algorithms, we recommend completing the following courses first:",
        links: [
          {
            link: "/course/pages/python-programming",
            linkText: "Python Programming for Beginners",
          },
          {
            link: "/course/pages/data-structures-python",
            linkText: "Data Structures in Python",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in algorithm development using Python, demonstrating your problem-solving skills and proficiency in efficient coding. It enhances your professional profile, making you stand out in job applications and career opportunities in software development and competitive programming.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the Algorithms Using Python course and pass a final assessment.",
        "The assessment evaluates your understanding of algorithmic concepts, problem-solving abilities, and proficiency in Python implementations.",
        "It is conducted under strict guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark examination, accounting for 100% of your certification score. While practice problems and exercises throughout the course are encouraged to reinforce learning, they do not contribute to the final certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This rigorous evaluation process ensures that only individuals who demonstrate a thorough understanding of the course material are awarded the certificate, maintaining its credibility and value.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Algorithms Using Python is a live online training program featuring interactive sessions. Classes are conducted in real-time, including hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A strong foundation in Python programming is required. Familiarity with OOP concepts, data structures, and basic algorithms is essential before enrolling in this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be accessible through the LMS portal, allowing you to revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will engage in 6+ real-world projects, focusing on algorithm implementations such as sorting algorithms, graph traversals, dynamic programming solutions, and more.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course encompasses 120 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends, providing a balanced and comprehensive learning experience.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! Upon successfully completing the course and passing the assessment, you will receive a Certificate of Excellence from LearnLogicify Technologies.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support to address any questions or challenges you may encounter.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to qualify for the certificate. It includes coding challenges and a project submission to evaluate your understanding and application of the course material.",
      },
    ],
    syllabusData: [
      {
        icon: "FaCode",
        title: "Module 1",
        subtitle: "Introduction to Algorithms",
        topics: [
          "Understanding Algorithms and Their Importance",
          "Algorithm Analysis and Big O Notation",
          "Time and Space Complexity",
          "Introduction to C++ for Algorithm Implementation",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "Sorting Algorithms",
        topics: [
          "Bubble Sort, Selection Sort, Insertion Sort",
          "Merge Sort and Quick Sort",
          "Heap Sort and Counting Sort",
          "Radix Sort and Bucket Sort",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Searching Algorithms",
        topics: [
          "Linear Search and Binary Search",
          "Interpolation Search",
          "Exponential Search",
          "Search Algorithms in C++ STL",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 4",
        subtitle: "Dynamic Programming",
        topics: [
          "Introduction to Dynamic Programming",
          "Memoization vs Tabulation",
          "Solving Fibonacci and Knapsack Problems",
          "Longest Common Subsequence and Matrix Chain Multiplication",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 5",
        subtitle: "Graph Algorithms",
        topics: [
          "Graph Representation (Adjacency Matrix & List)",
          "Breadth-First Search (BFS) and Depth-First Search (DFS)",
          "Dijkstra’s Algorithm for Shortest Path",
          "Bellman-Ford Algorithm and Floyd-Warshall Algorithm",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 6",
        subtitle: "Minimum Spanning Trees",
        topics: [
          "Prim’s Algorithm",
          "Kruskal’s Algorithm",
          "Union-Find Data Structure",
          "Applications of MST in Real-World Scenarios",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 7",
        subtitle: "Backtracking Algorithms",
        topics: [
          "Understanding Backtracking and Recursive Trees",
          "N-Queens Problem",
          "Sudoku Solver using Backtracking",
          "Hamiltonian Cycle and Knight’s Tour Problem",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 8",
        subtitle: "Greedy Algorithms",
        topics: [
          "Concept of Greedy Strategy",
          "Activity Selection Problem",
          "Huffman Encoding",
          "Greedy Algorithms for Graphs",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "String Algorithms",
        topics: [
          "Naive Pattern Searching",
          "KMP Algorithm and Rabin-Karp Algorithm",
          "Z Algorithm for Pattern Matching",
          "Suffix Arrays and LCP Arrays",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 10",
        subtitle: "Mathematical and Number Theory Algorithms",
        topics: [
          "GCD, LCM, and Extended Euclidean Algorithm",
          "Sieve of Eratosthenes",
          "Modular Exponentiation",
          "Chinese Remainder Theorem",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 11",
        subtitle: "Bit Manipulation Algorithms",
        topics: [
          "Understanding Bitwise Operations",
          "Counting Set Bits",
          "Finding Unique Numbers in an Array",
          "Bitwise Tricks for Competitive Programming",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 12",
        subtitle: "Graph Coloring and Network Flow",
        topics: [
          "Graph Coloring using Greedy Algorithm",
          "Ford-Fulkerson Algorithm for Maximum Flow",
          "Bipartite Graphs and Matching Algorithms",
          "Real-Life Applications of Network Flow",
        ],
      },
    ],
  },
  //algorithms-cpp
  {
    courseTitle: "Algorithms Using C++",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "5.1k Ratings",
    courseIcon: "FaCode",
    level: "Advanced",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 120 Hours",
    topicsCount: "20 Topics",
    problemsCount: "400+ Problems",
    projectsCount: "50+ algorithms",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 6999,
    discountedPrice: 3499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Algorithms Using C++ course provides a deep dive into algorithmic problem-solving and competitive programming. This course covers a wide range of algorithmic concepts including sorting, searching, dynamic programming, graph algorithms, and more.",
        "Emphasizing practical coding exercises, real-world applications, and advanced algorithmic thinking, this course is designed to prepare you for coding interviews, competitive programming, and technical problem-solving challenges.",
        "By the end of this course, you will have mastered advanced algorithm techniques in C++, helping you improve your efficiency in solving complex computational problems.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 120 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "A strong foundation in C++ programming is essential for this course. You should be proficient in object-oriented programming (OOP) principles such as encapsulation, inheritance, polymorphism, and abstraction. Additionally, familiarity with data structures like arrays, linked lists, stacks, queues, and trees, along with knowledge of basic algorithms like sorting and searching, will help you grasp advanced concepts with ease. If you're new to C++ or want to strengthen your fundamentals before diving into algorithms, we recommend completing the following courses first:",
        links: [
          {
            link: "/course/pages/cpp-programming",
            linkText: "C++ Programming for Beginners",
          },
          {
            link: "/course/pages/data-structures-cpp",
            linkText: "Data Structures in C++",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in algorithm development using C++, demonstrating your problem-solving skills and proficiency in efficient coding. It enhances your professional profile, making you stand out in job applications and career opportunities in software development and competitive programming.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the Algorithms Using C++ course and pass a final assessment.",
        "The assessment evaluates your understanding of algorithmic concepts, problem-solving abilities, and proficiency in C++ implementations.",
        "It is conducted under strict guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark examination, accounting for 100% of your certification score. While practice problems and exercises throughout the course are encouraged to reinforce learning, they do not contribute to the final certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This rigorous evaluation process ensures that only individuals who demonstrate a thorough understanding of the course material are awarded the certificate, maintaining its credibility and value.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Algorithms Using C++ is a live online training program featuring interactive sessions. Classes are conducted in real-time, including hands-on coding, Q&A sessions, and instructor-led discussions.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A strong foundation in C++ programming is required. Familiarity with OOP concepts, data structures, and basic algorithms is essential before enrolling in this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be accessible through the LMS portal, allowing you to revisit them anytime within the 6-month access period.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will engage in 6+ real-world projects, focusing on algorithm implementations such as sorting algorithms, graph traversals, dynamic programming solutions, and more.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course encompasses 120 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends, providing a balanced and comprehensive learning experience.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! Upon successfully completing the course and passing the assessment, you will receive a Certificate of Excellence from LearnLogicify Technologies.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support to address any questions or challenges you may encounter.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to qualify for the certificate. It includes coding challenges and a project submission to evaluate your understanding and application of the course material.",
      },
    ],
    syllabusData: [
      {
        icon: "FaCode",
        title: "Module 1",
        subtitle: "Introduction to Algorithms",
        topics: [
          "Understanding Algorithms and Their Importance",
          "Algorithm Analysis and Big O Notation",
          "Time and Space Complexity",
          "Introduction to C++ for Algorithm Implementation",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "Sorting Algorithms",
        topics: [
          "Bubble Sort, Selection Sort, Insertion Sort",
          "Merge Sort and Quick Sort",
          "Heap Sort and Counting Sort",
          "Radix Sort and Bucket Sort",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Searching Algorithms",
        topics: [
          "Linear Search and Binary Search",
          "Interpolation Search",
          "Exponential Search",
          "Search Algorithms in C++ STL",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 4",
        subtitle: "Dynamic Programming",
        topics: [
          "Introduction to Dynamic Programming",
          "Memoization vs Tabulation",
          "Solving Fibonacci and Knapsack Problems",
          "Longest Common Subsequence and Matrix Chain Multiplication",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 5",
        subtitle: "Graph Algorithms",
        topics: [
          "Graph Representation (Adjacency Matrix & List)",
          "Breadth-First Search (BFS) and Depth-First Search (DFS)",
          "Dijkstra’s Algorithm for Shortest Path",
          "Bellman-Ford Algorithm and Floyd-Warshall Algorithm",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 6",
        subtitle: "Minimum Spanning Trees",
        topics: [
          "Prim’s Algorithm",
          "Kruskal’s Algorithm",
          "Union-Find Data Structure",
          "Applications of MST in Real-World Scenarios",
        ],
      },
      {
        icon: "PiMathOperationsBold",
        title: "Module 7",
        subtitle: "Backtracking Algorithms",
        topics: [
          "Understanding Backtracking and Recursive Trees",
          "N-Queens Problem",
          "Sudoku Solver using Backtracking",
          "Hamiltonian Cycle and Knight’s Tour Problem",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 8",
        subtitle: "Greedy Algorithms",
        topics: [
          "Concept of Greedy Strategy",
          "Activity Selection Problem",
          "Huffman Encoding",
          "Greedy Algorithms for Graphs",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 9",
        subtitle: "String Algorithms",
        topics: [
          "Naive Pattern Searching",
          "KMP Algorithm and Rabin-Karp Algorithm",
          "Z Algorithm for Pattern Matching",
          "Suffix Arrays and LCP Arrays",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 10",
        subtitle: "Mathematical and Number Theory Algorithms",
        topics: [
          "GCD, LCM, and Extended Euclidean Algorithm",
          "Sieve of Eratosthenes",
          "Modular Exponentiation",
          "Chinese Remainder Theorem",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 11",
        subtitle: "Bit Manipulation Algorithms",
        topics: [
          "Understanding Bitwise Operations",
          "Counting Set Bits",
          "Finding Unique Numbers in an Array",
          "Bitwise Tricks for Competitive Programming",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 12",
        subtitle: "Graph Coloring and Network Flow",
        topics: [
          "Graph Coloring using Greedy Algorithm",
          "Ford-Fulkerson Algorithm for Maximum Flow",
          "Bipartite Graphs and Matching Algorithms",
          "Real-Life Applications of Network Flow",
        ],
      },
    ],
  },

  // DBMS

  //SQL mastery
  {
    courseTitle: "SQL Mastery - From Basics to Advanced",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "5.3k Ratings",
    courseIcon: "FaDatabase",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "16 Topics",
    problemsCount: "300+ SQL Challenges",
    projectsCount: "6+ Real-World SQL Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The SQL Mastery course is designed to equip learners with a strong foundation in SQL, covering fundamental concepts, advanced queries, and database management techniques. This course will guide you through creating, managing, and optimizing databases using SQL.",
        "Emphasizing hands-on learning, the course includes real-world SQL projects, optimization strategies, and best practices for designing efficient databases.",
        "By the end of this course, you will be proficient in writing complex SQL queries, handling large datasets, and optimizing databases for performance and scalability.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "This course is designed for absolute beginners, and no prior database experience is required. It is structured to guide you step by step, making it easy to understand even if you're new to databases. Whether you're a student, aspiring developer, or working professional looking to enhance your skills, you can confidently enroll and start learning from scratch.",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in SQL and database management, demonstrating your ability to handle complex queries and optimize database performance.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the SQL Mastery course and pass a final assessment.",
        "The assessment evaluates your ability to write efficient SQL queries, manage databases, and optimize database performance.",
        "It is conducted under strict guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark SQL exam, contributing 100% to your certification score. While practice exercises throughout the course reinforce learning, they do not contribute to the final score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This evaluation ensures that only individuals who demonstrate strong SQL skills and database management proficiency receive the certificate.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "SQL Mastery is a live online training program featuring interactive sessions, hands-on query writing, Q&A discussions, and instructor-led problem-solving.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "No prior experience with SQL is required, but familiarity with basic programming concepts will be beneficial.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal for 6 months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 6+ real-world projects, covering database creation, query optimization, data analytics, and performance tuning.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 100 hours of training: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! You will receive a Certificate of Excellence upon successfully completing the course and passing the assessment.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to earn the certification. It consists of practical SQL challenges and optimization problems.",
      },
    ],
    syllabusData: [
      {
        icon: "FaDatabase",
        title: "Module 1",
        subtitle: "Introduction to DBMS",
        topics: [
          "Introduction to the DBMS Course",
          "Why not simply use files: Files vs DBMS",
          "Tables and Keys",
          "Integrity Constraints",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 2",
        subtitle: "ER Models and Diagrams",
        topics: [
          "Introduction to ER diagrams",
          "Cardinality of relationships and constructing minimal tables",
          "Weak and Strong Entities, Self-referential Relationships, and Constructing Tables",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Introduction to Relational Models",
        topics: [
          "Mathematical model of Tables",
          "ER-Relational Model, Constraints and Keys (recap)",
        ],
      },
      {
        icon: "RiTableFill",
        title: "Module 4",
        subtitle: "Relational Algebra",
        topics: [
          "Introduction to Relational Algebra and Basic Operators",
          "Joins and Division Operators",
          "Problems - Relational Algebra",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 5",
        subtitle: "Relational Calculus",
        topics: [
          "Tuple Relational Calculus-I",
          "Safe queries & Domain Relational Calculus",
          "Problems - Relational Calculus",
        ],
      },
      {
        icon: "SiMysql",
        title: "Module 6",
        subtitle: "[SQL] Introduction",
        topics: [
          "Overview of Databases for learning SQL",
          "Why learn SQL",
          "Execution of an SQL statement",
          "IMDB dataset",
          "Installing MySQL",
          "Load IMDB data",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 7",
        subtitle: "[SQL] Commands",
        topics: [
          "USE, DESCRIBE, SHOW TABLES",
          "SELECT",
          "LIMIT, OFFSET",
          "Order By",
          "Distinct",
          "WHERE, Comparison operators, NULL",
          "Logical Operators",
          "Aggregate Functions: COUNT, MIN, MAX, AVG, SUM",
          "GROUP BY",
          "HAVING",
          "Order of keywords",
        ],
      },
      {
        icon: "BsLink45Deg",
        title: "Module 8",
        subtitle: "[SQL] Joins",
        topics: ["Join and Natural Join", "Inner, Left, Right and Outer joins"],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 9",
        subtitle: "[SQL] Advanced Queries",
        topics: ["Sub Queries/Nested Queries/Inner Queries"],
      },
      {
        icon: "RiDatabase2Line",
        title: "Module 10",
        subtitle: "[SQL] Data Manipulation Language",
        topics: ["INSERT", "UPDATE", "DELETE"],
      },
      {
        icon: "AiOutlineFileAdd",
        title: "Module 11",
        subtitle: "[SQL] Data Definition Language",
        topics: [
          "CREATE TABLE",
          "ALTER: ADD, MODIFY, DROP",
          "DROP TABLE, TRUNCATE, DELETE",
        ],
      },
      {
        icon: "FaUserShield",
        title: "Module 12",
        subtitle: "[SQL] Data Control Language",
        topics: [
          "Data Control Language: GRANT, REVOKE",
          "Learning resources",
          "Problems",
        ],
      },
      {
        icon: "GiOrganigram",
        title: "Module 13",
        subtitle: "Functional Dependencies and Decomposition",
        topics: [
          "Designing tables in a DB",
          "Functional Dependencies",
          "Attribute Closure, Keys and Solved problems",
          "Functional Dependency Sets and Properties + Solved examples",
          "Minimal/Canonical Covers of FDs + solved problems",
          "Decompositions with solved problems",
          "Dependency preserving decomposition + solved examples",
        ],
      },
      {
        icon: "GiBookshelf",
        title: "Module 14",
        subtitle: "Normalization",
        topics: [
          "Introduction to Normalization + 1NF and 2NF + examples",
          "3NF and BCNF",
          "Solved problems + Properties of Normal Forms",
          "Multi-Valued Dependencies and 4NF",
        ],
      },
      {
        icon: "FaSyncAlt",
        title: "Module 15",
        subtitle: "Transactions and Concurrency Control",
        topics: [
          "Model of a computer for transactions & concurrency",
          "ACID properties & Concurrency",
          "Problems due to Concurrency",
          "Recoverability of Schedules",
          "Serializability of Schedules - Conflict Serializability",
          "View Serializability",
          "Lock-based concurrency control",
          "Time-stamp-based protocols + Deadlock and Starvation prevention",
          "Thomas Write Rule",
        ],
      },
      {
        icon: "FaFileArchive",
        title: "Module 16",
        subtitle: "File Structure (B and B+ Trees)",
        topics: [
          "Files and Indexing: introduction",
          "B-Trees and B+ Trees with examples",
          "More Solved Problems",
          "Terminology related to Indexes",
        ],
      },
    ],
  },

  //Mongo-db
  {
    courseTitle: "MongoDB Mastery - From Basics to Advanced",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "5.2k Ratings",
    courseIcon: "SiMongodb",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "16 Topics",
    problemsCount: "250+ MongoDB Challenges",
    projectsCount: "6+ Real-World MongoDB Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The MongoDB Mastery course is designed to provide a solid foundation in MongoDB, a widely used NoSQL database. It covers core database concepts, CRUD operations, schema design, indexing, aggregation, transactions, and advanced topics such as replication and sharding.",
        "This course focuses on hands-on learning, real-world projects, and practical applications of MongoDB in modern development environments.",
        "By the end of this course, you will be proficient in managing large-scale databases, optimizing query performance, and implementing MongoDB solutions for real-world applications.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "This course is designed for beginners, and no prior experience with databases is required. It is structured to guide you step by step, making it accessible even if you are new to NoSQL databases. Whether you're a student, aspiring developer, or working professional, you can confidently enroll and start learning from scratch.",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in MongoDB, demonstrating your ability to handle NoSQL databases, optimize query performance, and implement scalable database solutions.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the MongoDB Mastery course and pass a final assessment.",
        "The assessment evaluates your ability to perform CRUD operations, optimize queries, implement indexing, and manage MongoDB in real-world applications.",
        "It is conducted under strict guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark MongoDB exam, contributing 100% to your certification score. While practice exercises throughout the course reinforce learning, they do not contribute to the final score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This evaluation ensures that only individuals who demonstrate strong MongoDB skills and NoSQL database management proficiency receive the certificate.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "MongoDB Mastery is a live online training program featuring interactive sessions, hands-on database design, query writing, Q&A discussions, and instructor-led problem-solving.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "No prior experience with databases is required, but familiarity with basic programming concepts will be helpful.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal for 6 months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 6+ real-world projects, covering database design, CRUD operations, aggregation frameworks, and performance tuning.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 100 hours of training: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! You will receive a Certificate of Excellence upon successfully completing the course and passing the assessment.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to earn the certification. It consists of practical MongoDB challenges and optimization problems.",
      },
    ],
    syllabusData: [
      {
        icon: "SiMongodb",
        title: "Module 1",
        subtitle: "Introduction to MongoDB",
        topics: [
          "What is MongoDB?",
          "SQL vs NoSQL Databases",
          "Document-Oriented Data Model",
          "MongoDB Installation & Setup",
          "MongoDB Compass & Atlas Overview",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 2",
        subtitle: "CRUD Operations in MongoDB",
        topics: [
          "Creating Databases & Collections",
          "Inserting Documents",
          "Reading Data (Find, Sort, Limit)",
          "Updating & Deleting Documents",
          "MongoDB Query Operators",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Schema Design & Data Modeling",
        topics: [
          "MongoDB Schema Design Principles",
          "Embedding vs Referencing Data",
          "Designing Scalable Collections",
          "Indexing Strategies",
          "Working with Relationships in NoSQL",
        ],
      },
      {
        icon: "RiDatabase2Line",
        title: "Module 4",
        subtitle: "Indexes & Performance Optimization",
        topics: [
          "Types of Indexes in MongoDB",
          "Creating & Managing Indexes",
          "Query Optimization with Indexes",
          "Indexing Best Practices",
          "Profiling MongoDB Queries",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 5",
        subtitle: "Aggregation Framework",
        topics: [
          "Introduction to Aggregation Pipeline",
          "Stages in Aggregation",
          "Data Transformation & Processing",
          "Grouping & Sorting with Aggregations",
          "Performance Optimization in Aggregations",
        ],
      },
      {
        icon: "FaSyncAlt",
        title: "Module 6",
        subtitle: "Replication & Sharding",
        topics: [
          "Replication Concepts & Benefits",
          "Configuring Replica Sets",
          "Failover & High Availability",
          "Sharding for Horizontal Scaling",
          "Sharding Key Selection & Strategy",
        ],
      },
      {
        icon: "BsShieldLock",
        title: "Module 7",
        subtitle: "Security & Authentication",
        topics: [
          "User Roles & Permissions",
          "Authentication & Authorization",
          "Encryption & Data Protection",
          "Auditing & Access Control",
          "Secure MongoDB Deployment",
        ],
      },
      {
        icon: "FaFileArchive",
        title: "Module 8",
        subtitle: "Backup & Restore in MongoDB",
        topics: [
          "Backup Methods (mongodump, mongorestore)",
          "Automating Backups & Scheduling",
          "Disaster Recovery Strategies",
          "Point-in-Time Recovery",
          "Best Practices for Data Safety",
        ],
      },
      {
        icon: "RiTableFill",
        title: "Module 9",
        subtitle: "Transactions in MongoDB",
        topics: [
          "Understanding Transactions in NoSQL",
          "Multi-Document ACID Transactions",
          "Rollback & Commit Mechanisms",
          "Concurrency Control & Isolation Levels",
          "Optimizing Transactions for Scalability",
        ],
      },
      {
        icon: "BsGraphUp",
        title: "Module 10",
        subtitle: "Working with Geospatial Data",
        topics: [
          "Introduction to Geospatial Data",
          "Creating Geospatial Indexes",
          "Running Geospatial Queries",
          "Use Cases for Location-Based Applications",
        ],
      },
      {
        icon: "GiNetworkBars",
        title: "Module 11",
        subtitle: "Change Streams & Real-Time Applications",
        topics: [
          "What are Change Streams?",
          "Monitoring Data Changes",
          "Using Change Streams with Node.js & Python",
          "Building Real-Time Applications with MongoDB",
        ],
      },
      {
        icon: "GiOrganigram",
        title: "Module 12",
        subtitle: "MongoDB Atlas & Cloud Deployment",
        topics: [
          "Introduction to MongoDB Atlas",
          "Deploying Databases on MongoDB Cloud",
          "Scaling & Managing Cloud Instances",
          "Using Atlas Triggers & Serverless Functions",
        ],
      },
      {
        icon: "FaNetworkWired",
        title: "Module 13",
        subtitle: "MongoDB in Microservices & DevOps",
        topics: [
          "Using MongoDB in Microservices Architecture",
          "MongoDB Integration with Docker & Kubernetes",
          "Continuous Integration & Deployment (CI/CD)",
          "Monitoring MongoDB Performance",
        ],
      },
      {
        icon: "GiFiles",
        title: "Module 14",
        subtitle: "Text Search & Full-Text Indexing",
        topics: [
          "Introduction to Text Search in MongoDB",
          "Creating Full-Text Indexes",
          "Text Search Queries & Ranking",
          "Multilingual Text Search",
        ],
      },
      {
        icon: "RiDatabase2Fill",
        title: "Module 15",
        subtitle: "ETL (Extract, Transform, Load) with MongoDB",
        topics: [
          "Understanding ETL in NoSQL",
          "Extracting & Transforming Data",
          "Data Migration Between SQL & NoSQL",
          "Best Practices for Data Loading",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 16",
        subtitle: "Project Building & Real-World Applications",
        topics: [
          "Building a Scalable Database System",
          "Optimizing Data for High Performance",
          "Developing a Full-Stack App with MongoDB",
          "Final Project Review & Assessment",
        ],
      },
    ],
  },

  //web-Development

  //js-fundamentals
  {
    courseTitle: "JavaScript Fundamentals",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "6.2k Ratings",
    courseIcon: "FaJs",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "80+ Hours",
    topicsCount: "7+ Modules",
    problemsCount: "50+ JavaScript Exercises",
    projectsCount: "5+ Real-World JavaScript Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The JavaScript Fundamentals course is designed to build a strong foundation in JavaScript, covering essential concepts such as variables, operators, control flow, functions, objects, and arrays.",
        "This course focuses on hands-on learning through interactive exercises, quizzes, and real-world applications to make coding fun and practical.",
        "By the end of this course, you will have the skills to write efficient JavaScript code, understand core programming principles, and prepare yourself for more advanced web development topics.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 80+ Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "You don't need any prior experience with JavaScript to take this course. You'll learn everything from scratch, step-by-step. A basic familiarity with HTML and CSS is helpful but not required. This course is designed for students, aspiring developers, and professionals who want to build a strong foundation in JavaScript. If you are intrested to learn HTML/css ,check out our ",
        links: [
          {
            link: "/course/pages/html-basics",
            linkText: "Ultimate HTML and CSS",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in JavaScript fundamentals, helping you advance in web development and software programming.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete all modules and pass a final assessment.",
        "The assessment evaluates your JavaScript skills, problem-solving ability, and coding proficiency.",
        "It is conducted under strict guidelines to ensure fairness and credibility.",
      ],
      assessmentDetails:
        "The final assessment consists of JavaScript coding challenges and a mini-project, contributing 100% to your certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This evaluation ensures that only students who demonstrate strong JavaScript skills receive the certification.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "JavaScript Fundamentals is a live online training program featuring interactive sessions, coding exercises, quizzes, and real-world projects.",
      },
      {
        title: "What are the prerequisites?",
        description:
          "No prior experience is required. Anyone interested in learning JavaScript can enroll.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal for 6 months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 5+ real-world JavaScript projects covering dynamic web development, data manipulation, and interactive UI development.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 80+ hours of training: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! You will receive a Certificate of Excellence upon successfully completing the course and passing the assessment.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to earn the certification. It consists of practical JavaScript coding challenges and a mini-project.",
      },
    ],
    syllabusData: [
      {
        icon: "FaJs",
        title: "Module 1",
        subtitle: "Getting Started with JavaScript",
        topics: [
          "Welcome",
          "What is JavaScript?",
          "Setting Up the Development Environment",
          "JavaScript in Browsers",
          "Separation of Concerns",
          "JavaScript in Node.js",
          "Source Code Overview",
          "Follow Me Around",
          "Learning Paths",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 2",
        subtitle: "JavaScript Basics",
        topics: [
          "Variables",
          "Constants",
          "Primitive Types",
          "Dynamic Typing",
          "Objects",
          "Arrays",
          "Functions",
          "Types of Functions",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 3",
        subtitle: "Operators in JavaScript",
        topics: [
          "JavaScript Operators",
          "Arithmetic Operators",
          "Assignment Operators",
          "Comparison Operators",
          "Equality Operators",
          "Ternary Operator",
          "Logical Operators",
          "Logical Operators with Non-Booleans",
          "Bitwise Operators",
          "Operator Precedence",
          "Quiz & Exercise: Swapping Variables",
        ],
      },
      {
        icon: "RiTableFill",
        title: "Module 4",
        subtitle: "Control Flow in JavaScript",
        topics: [
          "If...else",
          "Switch Case",
          "Loops (For, While, Do-While)",
          "Infinite Loops",
          "For...in and For...of Loops",
          "Break and Continue",
          "Exercises: JavaScript Control Flow Challenges",
        ],
      },
      {
        icon: "FaJsSquare",
        title: "Module 5",
        subtitle: "Working with Objects",
        topics: [
          "Basics of Objects",
          "Factory & Constructor Functions",
          "Value vs Reference Types",
          "Enumerating Object Properties",
          "Cloning Objects",
          "Garbage Collection",
          "String and Date Manipulation",
          "Exercises on Object Manipulation",
        ],
      },
      {
        icon: "FaJsSquare",
        title: "Module 6",
        subtitle: "Working with Arrays",
        topics: [
          "Introduction to Arrays",
          "Adding, Removing, and Finding Elements",
          "Sorting & Filtering Arrays",
          "Mapping & Reducing Arrays",
          "Working with the Spread Operator",
          "Exercises on Arrays",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 7",
        subtitle: "Functions in JavaScript",
        topics: [
          "Function Declarations vs Expressions",
          "Hoisting in JavaScript",
          "Function Arguments & Default Parameters",
          "Getters and Setters",
          "Error Handling with Try and Catch",
          "Understanding Scope in JavaScript",
          "Exercises on Functions",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 8",
        subtitle: "Final Project & Assessment",
        topics: [
          "Developing a JavaScript Project",
          "Implementing Core JavaScript Concepts",
          "Debugging and Code Optimization",
          "Final Assessment and Certification",
        ],
      },
    ],
  },
  // js-advanced
  {
    courseTitle: "Advanced JavaScript",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "4.7k Ratings",
    courseIcon: "FaJsSquare",
    level: "Advanced",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 100 Hours",
    topicsCount: "7 Modules",
    problemsCount: "250+ Advanced JavaScript Exercises",
    projectsCount: "5+ Real-World JavaScript Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Advanced JavaScript course is designed to help developers master modern JavaScript concepts, including Object-Oriented Programming (OOP), Prototypical Inheritance, ES6 features, and JavaScript tooling.",
        "This course takes a deep dive into the inner workings of JavaScript and provides hands-on exercises to solidify your understanding of advanced concepts.",
        "By the end of this course, you will be confident in writing scalable and optimized JavaScript code, leveraging ES6+ features, and structuring JavaScript applications effectively.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 100 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "To get the most out of this course, you should have a strong understanding of JavaScript fundamentals, including variables, functions, loops, and arrays. No prior experience with object-oriented programming is required, as we will cover it from the ground up. However, familiarity with HTML and CSS will be beneficial in certain sections. If you’re looking to strengthen your foundation before diving in, check out our:",
        links: [
          {
            link: "/course/pages/html-basics",
            linkText: "Ultimate HTML and CSS",
          },
          {
            link: "/course/pages/js-fundamentals",
            linkText: "JavaScript Fundamentals",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certificate validates your expertise in modern JavaScript, making you stand out in job applications and software development roles.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the Advanced JavaScript course and pass a final assessment.",
        "The assessment evaluates your ability to write efficient JavaScript code, implement advanced patterns, and work with modern JavaScript concepts.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark JavaScript exam, contributing 100% to your certification score. Hands-on coding challenges and project-based tasks will help strengthen your skills.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This evaluation ensures that only individuals who demonstrate strong JavaScript skills and problem-solving abilities receive the certificate.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Advanced JavaScript is a live online training program featuring interactive sessions, hands-on exercises, Q&A discussions, and instructor-led deep dives.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A basic understanding of JavaScript, including variables, functions, and loops, is required before enrolling in this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal for 6 months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 5+ real-world projects, covering JavaScript OOP, prototypical inheritance, ES6 modules, and performance optimizations.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 100 hours of training: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! You will receive a Certificate of Excellence upon successfully completing the course and passing the assessment.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to earn the certification. It consists of advanced JavaScript exercises and hands-on coding challenges.",
      },
    ],
    syllabusData: [
      {
        icon: "FaJsSquare",
        title: "Module 1",
        subtitle: "Getting Started",
        topics: [
          "What is OOP",
          "Four Pillars of OOP",
          "Setting Up the Development Environment",
          "Course Structure",
          "Follow Me Around",
          "Learning Paths",
        ],
      },
      {
        icon: "IoCubeOutline",
        title: "Module 2",
        subtitle: "Objects & Object-Oriented Programming",
        topics: [
          "Introduction",
          "Object Literals",
          "Factories",
          "Constructors",
          "Constructor Property",
          "Functions are Objects",
          "Value vs Reference Types",
          "Adding or Removing Properties",
          "Enumerating Properties",
          "Abstraction",
          "Private Properties and Methods",
          "Getters and Setters",
          "Exercise - Stopwatch",
          "Solution - Stopwatch",
        ],
      },
      {
        icon: "FaCode",
        title: "Module 3",
        subtitle: "Prototypes and Inheritance",
        topics: [
          "Inheritance",
          "Prototypes and Prototypical Inheritance",
          "Multilevel Inheritance",
          "Property Descriptors",
          "Constructor Prototypes",
          "Prototype vs Instance Members",
          "Iterating Instance and Prototype Members",
          "Avoid Extending the Built-in Objects",
          "Exercise",
        ],
      },
      {
        icon: "RiLoopLeftFill",
        title: "Module 4",
        subtitle: "Prototypical Inheritance",
        topics: [
          "Creating Your Own Prototypical Inheritance",
          "Resetting the Constructor",
          "Calling the Super Constructor",
          "Intermediate Function Inheritance",
          "Method Overriding",
          "Polymorphism",
          "When to Use Inheritance",
          "Mixins",
          "Exercise - Prototypical Inheritance",
          "Solution - Prototypical Inheritance",
          "Exercise - Polymorphism",
          "Solution - Polymorphism",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 5",
        subtitle: "ES6 Classes",
        topics: [
          "ES6 Classes",
          "Hoisting",
          "Static Methods",
          "The This Keyword",
          "Private Members Using Symbols",
          "Private Members Using WeakMaps",
          "Getters and Setters",
          "Inheritance",
          "Method Overriding",
          "Exercise",
        ],
      },
      {
        icon: "FaTools",
        title: "Module 6",
        subtitle: "ES6 Tooling",
        topics: [
          "Modules",
          "CommonJS Modules",
          "ES6 Modules",
          "ES6 Tooling",
          "Babel",
          "Webpack",
          "What to Learn Next",
        ],
      },
    ],
  },
  // js unit testing
  {
    courseTitle: "JavaScript Unit Testing",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "4.7k Ratings",
    courseIcon: "FaCode",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 80 Hours",
    topicsCount: "5 Modules",
    problemsCount: "100+ Testing Scenarios",
    projectsCount: "4+ Real-World Testing Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The JavaScript Unit Testing course is designed to help developers build robust applications by writing and maintaining testable code. This course will introduce you to unit testing concepts, frameworks, and best practices to improve software reliability.",
        "You will learn to work with testing frameworks like Vitest, write effective test cases, use mocks for dependency isolation, and implement test-driven development (TDD) techniques.",
        "By the end of this course, you will have hands-on experience in testing JavaScript applications, ensuring high-quality and maintainable code.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 80 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "To take this course, you should have a basic understanding of JavaScript, including functions, variables, and objects. Knowledge of ES6+ syntax and JavaScript fundamentals is recommended but not mandatory. If you're new to JavaScript or testing concepts, we recommend checking out our",
        links: [
          {
            link: "/course/pages/js-fundamentals",
            linkText: "JavaScript Fundamentals",
          },
          {
            link: "/course/pages/advanced-javascript",
            linkText: "Advanced JavaScript",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in JavaScript unit testing, demonstrating your ability to write robust test cases, work with testing frameworks, and implement TDD in real-world applications.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the JavaScript Unit Testing course and pass a final assessment.",
        "The assessment evaluates your ability to write unit tests, use mocks, and implement TDD techniques.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark unit testing challenge, contributing 100% to your certification score. While practice exercises throughout the course reinforce learning, they do not contribute to the final score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This evaluation ensures that only individuals who demonstrate strong JavaScript unit testing skills receive the certificate.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "JavaScript Unit Testing is a live online training program featuring interactive sessions, hands-on testing exercises, Q&A discussions, and instructor-led problem-solving.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "A basic understanding of JavaScript, including ES6+ features, is recommended. No prior experience with unit testing is required.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available in the LMS portal for 6 months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 4+ real-world testing projects, covering unit testing, test-driven development, mocking dependencies, and code coverage.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 80 hours of training: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! You will receive a Certificate of Excellence upon successfully completing the course and passing the assessment.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to earn the certification. It consists of practical testing challenges and code coverage analysis.",
      },
    ],
    syllabusData: [
      {
        icon: "FaCode",
        title: "Module 1",
        subtitle: "Getting Started",
        topics: [
          "Welcome",
          "Prerequisites",
          "Course Structure",
          "How to Take This Course",
          "Setting Up the Testing Environment",
          "Starter Project",
        ],
      },
      {
        icon: "FaBug",
        title: "Module 2",
        subtitle: "Introduction to Unit Testing",
        topics: [
          "What is Unit Testing",
          "Types of Tests",
          "Choosing a Testing Framework",
          "Setting Up Vitest",
          "Writing Your First Tests",
          "Exercise: Testing fizzBuzz",
          "Test-driven Development",
          "Exercise: Testing Factorial",
          "Running Tests",
          "Navigating Tests in VSCode",
          "Code Coverage",
          "Summary",
        ],
      },
      {
        icon: "TbBinaryTree2",
        title: "Module 3",
        subtitle: "Core Unit Testing Techniques",
        topics: [
          "Introduction",
          "Characteristics of Good Unit Tests",
          "Using Matchers",
          "Writing Good Assertions",
          "Exercise: Testing getCoupons",
          "Positive and Negative Testing",
          "Exercise: Testing validateUserInput",
          "Boundary Testing",
          "Exercise: Testing isValidUsername",
          "Exercise: Testing canDrive",
          "Parameterized Tests",
          "Exercise: Parameterized Tests",
          "Testing Asynchronous Code",
          "Setup and Teardown",
          "Exercise: Testing a Stack",
          "Summary",
        ],
      },
      {
        icon: "RiSpyLine",
        title: "Module 4",
        subtitle: "Breaking Dependencies with Mocks",
        topics: [
          "Creating Mock Functions",
          "Exercise: Working with Mock Functions",
          "Mocking Modules",
          "Exercise: Testing getShippingInfo",
          "Interaction Testing",
          "Exercise: Testing submitOrder",
          "Partial Mocking",
          "Spying on Functions",
          "Clearing, Resetting, and Restoring Mocks",
          "To Mock or Not to Mock",
          "Mocking Dates",
          "Exercise: Testing getDiscount",
          "Summary",
        ],
      },
      {
        icon: "AiOutlineSafety",
        title: "Module 5",
        subtitle: "Improving Code Quality with Static Analysis Tools",
        topics: [
          "What are Static Analysis Tools",
          "Formatting Code with Prettier",
          "Linting Code with ESLint",
          "Catching Type Errors with TypeScript",
          "Running ESLint on TypeScript",
          "Automating Code Quality Checks with Husky",
          "Running Tests on Push",
          "Summary",
        ],
      },
    ],
  },

  //HTML & CSS mastery
  {
    courseTitle: "Ultimate HTML & CSS Mastery",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "4.8k Ratings",
    courseIcon: "FaHtml5",
    level: "Beginner to Advanced",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 120 Hours",
    topicsCount: "12 Topics",
    problemsCount: "200+ Exercises",
    projectsCount: "5+ Real-World Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "The Ultimate HTML & CSS Mastery course is designed to provide a strong foundation in web development. It covers everything from basic HTML elements and CSS styling to advanced concepts like responsive design, animations, and maintainable CSS.",
        "With hands-on exercises, real-world projects, and best practices, this course will equip you with the skills to build modern, responsive, and visually appealing websites.",
        "By the end of this course, you will have mastered HTML & CSS and be confident in creating professional web pages, optimizing layouts, and improving user experiences.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 120 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "This course is perfect for absolute beginners—no prior experience in web development is required. Whether you're a student, an aspiring developer, or a professional looking to build a strong foundation in front-end development, this course will guide you step by step.",
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in HTML and CSS, demonstrating your ability to design and develop modern, responsive websites.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete the Ultimate HTML & CSS Mastery course and pass a final assessment.",
        "The assessment evaluates your ability to write clean, semantic HTML, apply CSS effectively, and build responsive web layouts.",
        "It is conducted under strict guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment consists of a 100-mark project and a coding test, accounting for 100% of your certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo:
        "If you do not meet the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This certification ensures that only individuals with a strong grasp of HTML and CSS principles earn the certificate.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Ultimate HTML & CSS Mastery is a live online training program featuring interactive sessions, hands-on projects, Q&A discussions, and instructor-led exercises.",
      },
      {
        title: "What are the prerequisites for this course?",
        description:
          "No prior web development experience is required. This course is beginner-friendly and structured for anyone interested in learning HTML & CSS from scratch.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be accessible through the LMS portal for 6 months.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on 8+ real-world projects, covering responsive web design, layout techniques, CSS animations, and more.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 120 hours of training: 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! Upon successfully completing the course and passing the assessment, you will receive a Certificate of Excellence from LearnLogicify Technologies.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have 24/7 access to the LMS portal, live Q&A sessions, community forums, and mentor support.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment is required to qualify for the certificate. It includes a hands-on project and coding challenges to evaluate your skills.",
      },
    ],
    syllabusData: [
      {
        icon: "FaGlobe",
        title: "Module 1",
        subtitle: "Web Development Fundamentals",
        topics: [
          "Introduction",
          "Languages and Tools of Web Development",
          "How the Web Works",
          "Inspecting HTTP Requests and Responses",
          "HTML Basics",
          "CSS Basics",
          "Formatting Code",
          "Inspecting Pages Using DevTools",
          "Validating Web Pages",
          "Summary",
        ],
      },
      {
        icon: "FaHtml5",
        title: "Module 2",
        subtitle: "HTML Basics",
        topics: [
          "Introduction",
          "The Head Section",
          "Text",
          "Entities",
          "Hyperlinks",
          "Images",
          "Video and Audio",
          "Lists",
          "Tables",
          "Containers",
          "Semantic Elements",
          "Structuring a Web Page",
        ],
      },
      {
        icon: "FaCss3Alt",
        title: "Module 3",
        subtitle: "CSS Basics",
        topics: [
          "Introduction",
          "Providing CSS",
          "Normalizing CSS",
          "Basic Selectors",
          "Relational Selectors",
          "Pseudo-class Selectors",
          "Pseudo-element Selectors",
          "Selectors Specificity",
          "Inheritance",
          "Colors",
          "Gradients",
          "Borders",
          "Shadows",
        ],
      },
      {
        icon: "FaColumns",
        title: "Module 4",
        subtitle: "Layout",
        topics: [
          "Introduction",
          "The Box Model",
          "Sizing Elements",
          "Overflowing",
          "Measurement Units",
          "Positioning",
          "Floating Elements",
          "FlexBox",
          "Grid",
          "Hiding Elements",
          "Media Queries",
        ],
      },
      {
        icon: "FaFont",
        title: "Module 5",
        subtitle: "Typography",
        topics: [
          "Introduction",
          "Styling Fonts",
          "Embedding Web Fonts",
          "Flash of Unstyled Text",
          "Font Services",
          "System Font Stack",
          "Sizing Fonts",
          "Vertical Spacing",
          "Horizontal Spacing",
          "Formatting Text",
        ],
      },
      {
        icon: "FaImages",
        title: "Module 6",
        subtitle: "Images",
        topics: [
          "Introduction",
          "Image Types and Formats",
          "Content Images",
          "Background Images",
          "CSS Sprites",
          "Data URLs",
          "Clipping",
          "Filters",
          "Supporting High-Density Screens",
          "Resolution Switching",
          "Using Modern Image Formats",
          "Art Direction",
          "Scalable Vector Graphics",
          "Font Icons",
        ],
      },
      {
        icon: "FaRegObjectGroup",
        title: "Module 7",
        subtitle: "Forms",
        topics: [
          "Introduction",
          "Creating a Basic Form",
          "Styling Forms",
          "CSS Frameworks",
          "Text Fields",
          "Data Lists",
          "Drop-down Lists",
          "Check Boxes",
          "Radio Buttons",
          "Sliders",
          "File Inputs",
          "Grouping Related Fields",
          "Hidden Fields",
          "Data Validation",
          "Submitting the Form",
        ],
      },
      {
        icon: "FaFilm",
        title: "Module 8",
        subtitle: "Transformations, Transitions, and Animations",
        topics: [
          "Introduction",
          "Transformations",
          "3D Transformations",
          "Transitions",
          "Animations",
          "Reusable Animations",
          "Summary",
          "Exercises",
        ],
      },
      {
        icon: "FaClipboardCheck",
        title: "Module 9",
        subtitle: "Writing Clean, Maintainable CSS",
        topics: [
          "Introduction",
          "CSS Best Practices",
          "Variables",
          "Object-Oriented CSS",
          "BEM",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 10",
        subtitle: "Project Building - Responsive Website",
        topics: [
          "Planning a Responsive Web Project",
          "Designing a Landing Page",
          "Applying CSS Grid & Flexbox",
          "Optimizing for Mobile Devices",
          "Adding Animations and Interactions",
          "Final Review and Deployment",
        ],
      },
    ],
  },

  //REact for beginners
  {
    courseTitle: "React for Beginners",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "3.5k Ratings",
    courseIcon: "FaReact",
    level: "Beginner",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1 Hour/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 60 Hours",
    topicsCount: "10 Topics",
    problemsCount: "100+ Exercises",
    projectsCount: "3+ Real-World Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "React for Beginners is a comprehensive introduction to the fundamentals of React.js, designed for developers who want to build modern, interactive web applications. This course covers essential React concepts such as components, state management, props, event handling, and hooks. You'll learn how React efficiently updates and renders UI components, making your applications more dynamic and user-friendly.",

        "Through hands-on projects, practical exercises, and real-world scenarios, you'll gain the confidence to create and manage scalable applications. This course will walk you through setting up a React development environment, understanding component-based architecture, and integrating APIs to fetch and display data dynamically. By the end of the course, you'll have a strong grasp of React’s core concepts, allowing you to build responsive and feature-rich web applications with ease.",
      ],
      structure: [
        "Weekdays: 1 Hour per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 60 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "Before starting this course, it is recommended to have a solid understanding of HTML & CSS, JavaScript fundamentals, and advanced JavaScript concepts. Familiarity with TypeScript and Git will also be beneficial. If you're new to any of these topics, we suggest checking out the following courses:",
        links: [
          {
            link: "/course/pages/html-css-mastery",
            linkText: "Ultimate HTML & CSS Mastery",
          },
          {
            link: "/course/pages/js-fundamentals",
            linkText: "JavaScript Fundamentals",
          },
          {
            link: "/course/pages/advanced-javascript",
            linkText: "Advanced JavaScript",
          },
          {
            link: "/course/pages/typescript",
            linkText: "TypeScript Essentials",
          },
          {
            link: "/course/pages/git-mastery",
            linkText: "Git & GitHub Mastery",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certificate validates your ability to build modern web applications using React.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "Complete the React for Beginners course and pass the final assessment to earn your certificate.",
        "The assessment tests your understanding of components, state management, and React hooks through a project and coding challenge.",
      ],
      assessmentDetails:
        "The final assessment consists of a project and a coding test, each accounting for 50% of your certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 60% in the final assessment."],
      retakeInfo: "If necessary, you can retake the final assessment once.",
      finalNote:
        "This certification confirms that you have foundational React.js skills.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "React for Beginners is a live online training program with interactive sessions, practical exercises, Q&A, and real-world projects.",
      },
      {
        title: "Do I need prior React experience?",
        description:
          "No prior React experience is required. Basic knowledge of HTML, CSS, and JavaScript is helpful.",
      },
      {
        title: "Will session recordings be available?",
        description:
          "Yes! All session recordings will be accessible via the LMS portal for 6 months.",
      },
    ],
    syllabusData: [
      {
        icon: "FaReact",
        title: "Module 1",
        subtitle: "Getting Started with React",
        topics: [
          "What is React?",
          "Setting Up the Development Environment",
          "Creating a React App",
          "Project Structure",
          "Creating a React Component",
          "How React Works",
          "React Ecosystem",
        ],
      },
      {
        icon: "RiDashboardHorizontalFill",
        title: "Module 2",
        subtitle: "Building Components",
        topics: [
          "Creating a ListGroup Component",
          "Fragments",
          "Rendering Lists",
          "Conditional Rendering",
          "Handling Events",
          "Managing State",
          "Passing Data via Props",
          "Passing Functions via Props",
          "State vs Props",
          "Passing Children",
          "Inspecting Components with React Dev Tools",
          "Exercise - Building a Button Component",
          "Exercise - Showing an Alert",
        ],
      },
      {
        icon: "FaCogs",
        title: "Module 3",
        subtitle: "Managing Component State",
        topics: [
          "Understanding the State Hook",
          "Choosing the State Structure",
          "Keeping Components Pure",
          "Understanding the Strict Mode",
          "Updating Objects",
          "Updating Nested Objects",
          "Updating Arrays",
          "Updating Array of Objects",
          "Simplifying Update Logic with Immer",
          "Sharing State between Components",
          "Exercise - Updating State",
          "Exercise - Building an ExpandableText Component",
        ],
      },
      {
        icon: "FaPaintBrush",
        title: "Module 4",
        subtitle: "Styling Components",
        topics: [
          "Vanilla CSS",
          "CSS Modules",
          "CSS-in-JS",
          "Separation of Concerns",
          "Inline Styles",
          "Popular UI Libraries",
          "Adding Icons",
          "Exercise - Using CSS Modules",
          "Building a Like Component",
        ],
      },
      {
        icon: "FaDatabase",
        title: "Module 5",
        subtitle: "Connecting to the Backend",
        topics: [
          "Understanding the Effect Hook",
          "Effect Dependencies",
          "Effect Clean Up",
          "Fetching Data",
          "Understanding HTTP Requests",
          "Handling Errors",
          "Working with Async and Await",
          "Cancelling a Fetch Request",
          "Showing a Loading Indicator",
          "Deleting Data",
          "Creating Data",
          "Updating Data",
          "Extracting a Reusable API Client",
          "Extracting the User Service",
          "Creating a Generic HTTP Service",
          "Creating a Custom Data Fetching Hook",
        ],
      },
      {
        icon: "FaWpforms",
        title: "Module 6",
        subtitle: "Building Forms",
        topics: [
          "Building a Form",
          "Handling Form Submission",
          "Accessing Input Fields",
          "Controlled Components",
          "Managing Forms with React Hook Form",
          "Applying Validation",
          "Schema-based Validation with Zod",
          "Disabling the Submit Button",
          "Project - Expense Tracker",
          "Building ExpenseList",
          "Building ExpenseFilter",
          "Building the Expense Form",
          "Integrating with React Hook Form and Zod",
        ],
      },
      {
        icon: "FaGamepad",
        title: "Module 7",
        subtitle: "Project: Building a Video Game Discovery App",
        topics: [
          "What We'll Build",
          "Up for a Challenge?",
          "Setting Up the Project",
          "Installing Chakra UI",
          "Creating a Responsive Layout",
          "Building the Navigation Bar",
          "Implementing the Dark Mode",
          "Building the Color Mode Switch",
          "Fetching the Games",
          "Creating a Custom Hook for Fetching Games",
          "Building Game Cards",
          "Displaying Platform Icons",
          "Displaying Critic Score",
          "Getting Optimized Images",
          "Improving User Experience with Loading Skeletons",
          "Refactor - Removing Duplicated Styles",
          "Fetching the Genres",
          "Creating a Generic Data Fetching Hook",
          "Displaying the Genres",
          "Showing a Spinner",
          "Filtering Games by Genre",
          "Highlighting the Selected Genre",
          "Building Platform Selector",
          "Filtering Games by Platform",
          "Refactoring - Extracting a Query Object",
          "Building Sort Selector",
          "Sorting Games",
          "Handling Games without an Image",
          "Fixing the Issue with Chakra Menus",
          "Building Search Input",
          "Searching Games",
          "Adding a Dynamic Heading",
          "Cleaning Up the Genres",
          "Cleaning Up the Game Cards",
          "Adding Emojis",
          "Shipping Static Data",
          "Customizing the Chakra Theme",
          "Refactoring Game Grid",
          "Building for Production",
          "Deploying to Vercel",
        ],
      },
    ],
  },

  // react - intermediate
  {
    courseTitle: "React Intermediate",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "4.2k Ratings",
    courseIcon: "FaReact",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1.5 Hours/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 80 Hours",
    topicsCount: "3 Modules",
    problemsCount: "120+ Exercises",
    projectsCount: "3+ Real-World React Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 6999,
    discountedPrice: 3499,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "React Intermediate is designed for developers who have a basic understanding of React and want to take their skills to the next level. This course dives deep into core React features such as state management, routing, and data fetching. You'll learn how to build scalable applications, manage state efficiently, and handle complex UI structures.",
        "Throughout the course, you'll work on real-world projects, implement React Router for navigation, master state management using context and reducers, and optimize data fetching with React Query. By the end of this course, you will have the knowledge to build high-performance React applications with best practices.",
      ],
      structure: [
        "Weekdays: 1.5 Hours per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 80 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "Before starting this course, you should have completed React for Beginners or have experience with React basics, including components, state, and props. Familiarity with JavaScript ES6+ features and Git will also be helpful. If needed, we recommend reviewing the following courses:",
        links: [
          {
            link: "/course/pages/react-beginners",
            linkText: "React for Beginners",
          },
          {
            link: "/course/pages/advanced-javascript",
            linkText: "Advanced JavaScript",
          },
          {
            link: "/course/pages/git-mastery",
            linkText: "Git & GitHub Mastery",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the prestigious Certificate of Excellence from LearnLogicify Technologies. This certificate is a testament to your dedication and mastery of React Intermediate, showcasing your commitment to continuous learning and your ability to apply advanced skills. It will be a valuable addition to your professional portfolio, helping you stand out to potential employers and opening doors to new career opportunities.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To earn certification, you must complete all course modules and pass the final assessment.The assessment evaluates your ability to build real-world React applications with proper state management, routing, and API integrations.",
      ],
      assessmentDetails:
        "The final assessment consists of a project-based evaluation and coding exercises, making up 100% of your certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 65% in the final assessment."],
      retakeInfo:
        "One retake opportunity is available if the minimum score is not achieved.",
      finalNote:
        "This certification confirms your ability to build scalable and maintainable React applications.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "React Intermediate is a live online training program with interactive sessions, hands-on projects, and real-world exercises.",
      },
      {
        title: "Do I need prior React experience?",
        description:
          "Yes, a basic understanding of React fundamentals, including components, state, and props, is recommended before taking this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available on the LMS portal for 6 months after course completion.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on real-world projects involving advanced React concepts like React Router, global state management, and API integrations.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 80+ hours of training with live interactive sessions, scheduled for 1-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! Upon successfully completing the course and passing the assessment, you will receive a Certificate of Excellence from LearnLogicify Technologies.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have access to an LMS portal, live Q&A sessions, mentor support, and a dedicated community forum.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment consisting of coding challenges and a project evaluation is required to qualify for certification.",
      },
      {
        title: "What if I miss a live session?",
        description:
          "No worries! You can access all session recordings anytime through the LMS portal.",
      },
    ],
    syllabusData: [
      {
        icon: "FaRoute",
        title: "Module 1",
        subtitle: "Routing with React Router",
        topics: [
          "Introduction",
          "Setting Up Routing",
          "Navigation",
          "Passing Data with Route Parameters",
          "Getting Data about the Current Route",
          "Nested Routes",
          "Exercise - Working with Nested Routes",
          "Styling the Active Link",
          "Handling Errors",
          "Private Routes",
          "Layout Routes",
          "Part Two - Project Work",
          "Exercise - Setting Up Routing",
          "Exercise - Handling Errors",
          "Exercise - Fetching a Game",
          "Exercise - Refactoring Entities",
          "Exercise - Building Expandable Text",
          "Exercise - Building Game Attributes",
          "Exercise - Building Game Trailer",
          "Exercise - Building Game Screenshots",
          "Exercise - Improving the Layout",
          "Exercise - Fixing the NavBar",
          "Exercise - Refactoring Entities",
          "Summary",
        ],
      },
      {
        icon: "FaDatabase",
        title: "Module 2",
        subtitle: "Global State Management",
        topics: [
          "Introduction",
          "Consolidating State Logic with a Reducer",
          "Creating Complex Actions",
          "Exercise - Working with Reducers",
          "Sharing State using React Context",
          "Exercise - Working with Context",
          "Debugging with React DevTools",
          "Creating a Custom Provider",
          "Creating a Hook to Access Context",
          "Exercise - Creating a Provider",
          "Organizing Code for Scalability and Maintainability",
          "Exercise - Organizing Code",
          "Splitting Contexts for Efficiency",
          "When to Use Context",
          "Context vs Redux",
          "Managing Application State with Zustand",
          "Exercise - Working with Zustand",
          "Preventing Unnecessary Renders with Selectors",
          "Inspecting Stores with Zustand DevTools",
          "Part Two - Project Work",
          "Exercise - Picking the Right State Management Solution",
          "Exercise - Setting Up a Zustand Store",
          "Exercise - Removing Props",
          "Discussion - Building Reusable Components",
        ],
      },
      {
        icon: "FaCloudDownloadAlt",
        title: "Module 3",
        subtitle: "Fetching and Updating Data with React Query",
        topics: [
          "Introduction",
          "What is React Query",
          "Setting Up React Query",
          "Fetching Data",
          "Handling Errors",
          "Showing a Loading Indicator",
          "Creating a Custom Query Hook",
          "Using React Query DevTools",
          "Customizing Query Settings",
          "Exercise - Fetching Data",
          "Parameterized Queries",
          "Paginated Queries",
          "Infinite Queries",
          "Part Two - Mutating Data",
          "Mutating Data",
          "Handling Mutation Errors",
          "Showing Mutation Progress",
          "Optimistic Updates",
          "Creating a Custom Mutation Hook",
          "Creating a Reusable API Client",
          "Creating a Reusable HTTP Service",
          "Understanding the Application Layers",
          "Part Three - Project Work",
          "Exercise - Fetching Genres",
          "Exercise - Fetching Platforms",
          "Exercise - Fetching Games",
          "Exercise - Removing Duplicate Interfaces",
          "Exercise - Creating a Reusable API Client",
          "Exercise - Implementing Infinite Queries",
          "Exercise - Implementing Infinite Scroll",
          "Exercise - Simplifying Query Objects",
          "Exercise - Creating Lookup Hooks",
          "Exercise - Simplifying Time Calculations",
        ],
      },
    ],
  },

  // react - testing
  {
    courseTitle: "Testing React Apps",
    instructor: "Sachin",
    rating: 4.8,
    reviews: "3.2k Ratings",
    courseIcon: "FaFlask",
    level: "Intermediate",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1.5 Hours/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 70 Hours",
    topicsCount: "3 Modules",
    problemsCount: "100+ Testing Scenarios",
    projectsCount: "3+ Real-World Testing Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 5999,
    discountedPrice: 2999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "Testing React Apps is designed to equip developers with the necessary skills to test React components effectively. This course covers the fundamentals of unit testing, integration testing, and end-to-end testing. You'll learn how to write robust test cases using Jest, React Testing Library, and Cypress, ensuring the stability and reliability of your applications.",
        "Through hands-on exercises and real-world projects, you'll explore test-driven development (TDD), mocking dependencies, testing asynchronous code, and handling complex state management scenarios. By the end of this course, you'll have mastered best practices for writing maintainable, high-quality tests in React applications.",
      ],
      structure: [
        "Weekdays: 1.5 Hours per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 70 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "To get the most out of this course, you should have a solid grasp of React fundamentals, including components, state, props, and hooks. Familiarity with JavaScript ES6+ features like async/await, destructuring, and arrow functions is recommended. Prior experience with managing API requests and handling application state using React Context or Redux will be beneficial. Basic knowledge of Git for version control is also useful, as you'll be working on structured projects. If you need to strengthen these skills, we suggest reviewing the following courses:",

        links: [
          {
            link: "/course/pages/react-beginners",
            linkText: "React for Beginners",
          },
          {
            link: "/course/pages/react-intermediate",
            linkText: "React Intermediate",
          },
          {
            link: "/course/pages/git-mastery",
            linkText: "Git & GitHub Mastery",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certificate validates your ability to write high-quality tests for React applications, making your codebase more reliable and maintainable.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To earn certification, you must complete all course modules and pass the final assessment. The assessment evaluates your ability to write effective unit and integration tests for React applications.",
        "You will be required to complete real-world testing projects and demonstrate proficiency in Jest, React Testing Library, and Cypress.",
      ],
      assessmentDetails:
        "The final assessment consists of a project-based evaluation and multiple-choice questions, making up 100% of your certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 70% in the final assessment."],
      retakeInfo:
        "One retake opportunity is available if the minimum score is not achieved.",
      finalNote:
        "This certification confirms your expertise in testing React applications effectively.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Testing React Apps is a live online training program with interactive sessions, hands-on exercises, and real-world projects.",
      },
      {
        title: "Do I need prior React experience?",
        description:
          "Yes, a basic understanding of React, including components, state, and props, is recommended before taking this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available on the LMS portal for 6 months after course completion.",
      },
      {
        title: "What testing frameworks will be covered?",
        description:
          "This course covers Jest and React Testing Library for unit and integration testing, along with Cypress for end-to-end testing.",
      },
      {
        title: "Will I learn how to test API calls and mock data?",
        description:
          "Yes! The course includes lessons on testing API calls using Mock Service Worker (MSW) and mocking data in unit and integration tests.",
      },
      {
        title: "Are there any real-world projects in this course?",
        description:
          "Yes, you will build multiple real-world test cases, covering React components, forms, API calls, authentication, and state management.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have access to live Q&A sessions, mentor support, community forums, and LMS resources.",
      },
      {
        title: "How much coding experience do I need?",
        description:
          "You should be comfortable with JavaScript (ES6+) and have experience with React basics before enrolling in this course.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment consisting of a test suite evaluation and real-world testing challenges is required to qualify for certification.",
      },
      {
        title: "Will this course help me prepare for a React testing job role?",
        description:
          "Absolutely! This course will provide hands-on experience with modern testing tools and best practices, making you industry-ready.",
      },
    ],
    syllabusData: [
      {
        icon: "FaFlask",
        title: "Module 1",
        subtitle: "Getting Started",
        topics: [
          "Introduction",
          "Prerequisites",
          "Course Structure",
          "How to Take this Course",
          "Setting Up the Development Environment",
          "Setting Up the Starter Project",
          "Setting Up Vitest",
          "Setting Up React Testing Library",
        ],
      },
      {
        icon: "FaVial",
        title: "Module 2",
        subtitle: "Testing React Components",
        topics: [
          "Introduction",
          "What to Test",
          "Testing Rendering",
          "Simplifying Test Setup",
          "Exercise - Testing UserAccount",
          "Testing Lists",
          "Exercise - Testing ProductImageGallery",
          "Testing User Interactions",
          "Exercise - Testing ExpandableText",
          "Simplifying Tests",
          "Exercise - Testing SearchBox",
          "Testing Asynchronous Code",
          "Exercise - Testing ToastDemo",
          "Working with Component Libraries",
          "Exercise - Simplifying Code",
          "Exercise - Testing OrderStatusSelector",
          "Is Unit Testing Worth It",
          "Catching Common Issues with ESLint",
        ],
      },
      {
        icon: "FaServer",
        title: "Module 3",
        subtitle: "Mocking APIs",
        topics: [
          "Introduction",
          "Setting Up Mock Service Worker",
          "Testing Data Fetching",
          "Exercise - Testing Data Fetching",
          "Generating Fake Data",
          "Mocking Data",
          "Exercise - Mocking Data",
          "Testing Errors",
          "Exercise - Testing Errors",
          "Testing the Loading State",
          "Exercise - Testing the Loading State",
          "Refactoring - Using React Query",
          "Wrapping Components for Testing",
          "Exercise - Using React Query",
          "Exercise - Testing BrowseProductsPage",
          "Exercise - Testing Loading Skeletons",
          "Exercise - Testing Error Handling",
          "Exercise - Testing Data Rendering",
          "Exercise - Refactoring Tests",
          "Exercise - Testing Filtering",
          "Exercise - Refactoring Tests",
          "Code Coverage",
          "Exercise - Refactoring with React Query",
          "Exercise - Extracting CategorySelect",
          "Exercise - Extracting ProductTable",
        ],
      },
      {
        icon: "FaWpforms",
        title: "Module 4",
        subtitle: "Testing Forms",
        topics: [
          "Introduction",
          "What to Test",
          "Testing Rendering",
          "Exercise - Testing Initial Data",
          "Exercise - Refactoring Tests",
          "Exercise - Testing Focus",
          "Testing Validation Rules",
          "Parameterizing Tests",
          "Exercise - Testing Validation Rules",
          "Exercise - Extracting a Function for Filling Forms",
          "Resolving the Act Warning",
          "Exercise - Testing Form Submission",
          "Testing Form Feedback",
          "Additional Exercises",
        ],
      },
      {
        icon: "FaDatabase",
        title: "Module 5",
        subtitle: "Testing State Management",
        topics: [
          "Introduction",
          "What to Test",
          "Exercise - Testing Components that Use Context",
          "Exercise - Testing Quantity Selector",
          "Exercise - Extracting Utility Functions",
          "Exercise - Testing Components that Use Redux",
          "Exercise - Replacing Redux with React Query",
        ],
      },
      {
        icon: "FaLock",
        title: "Module 6",
        subtitle: "Testing Authentication",
        topics: [
          "Introduction",
          "What to Test",
          "Mocking the Authentication Status",
          "Exercise - Testing AuthStatus",
        ],
      },
      {
        icon: "FaRoute",
        title: "Module 7",
        subtitle: "Testing Routing",
        topics: [
          "Introduction",
          "What to Test",
          "Testing Routes",
          "Extracting navigateTo",
          "Exercise - Testing Routes with Parameters",
          "Exercise - Testing Invalid Routes",
          "Testing Protected Routes",
          "Exercise - Testing ProductDetailPage",
        ],
      },
    ],
  },

  // Nextjs Mastery
  {
    courseTitle: "Next.js Mastery",
    instructor: "Sachin",
    rating: 4.9,
    reviews: "4.5k Ratings",
    courseIcon: "RiNextjsFill",
    level: "Intermediate to Advanced",
    liveClasses: "Live Classes",
    weekdays: "Weekdays: 1.5 Hours/Day",
    weekends: "Weekends: 3 Hours/Day",
    totalHours: "Total: 90 Hours",
    topicsCount: "7 Modules",
    problemsCount: "150+ Exercises",
    projectsCount: "3+ Real-World Projects",
    portalAccess: "LMS Portal Access (6 Months)",
    sessionRecordings: "Session Recordings in LMS",
    certificate: "Certificate of Completion",
    originalPrice: 7999,
    discountedPrice: 3999,
    discountPercentage: 50,
    courseIntroVideo: "/course-intro.mp4",
    videoPoster: "/images/thumbnail/image.png",
    aboutData: {
      description: [
        "Next.js Mastery is a deep-dive course designed to help developers build fast, scalable, and SEO-friendly applications using Next.js. This course covers everything from basic routing and API routes to advanced performance optimization, static site generation (SSG), and server-side rendering (SSR).",
        "Through hands-on projects and real-world examples, you'll gain practical experience in creating dynamic, full-stack applications with Next.js. You will also explore NextAuth for authentication, Tailwind CSS for styling, and Vercel for deployment. By the end of the course, you'll have the skills to build production-ready applications using Next.js.",
      ],
      structure: [
        "Weekdays: 1.5 Hours per Day",
        "Weekends: 3 Hours per Day",
        "Total Duration: 90 Hours of Live Training",
      ],
    },
    prerequisites: [
      {
        text: "Before starting this course, you should have a solid understanding of JavaScript and React fundamentals, including hooks, state management, and routing. Familiarity with API calls and asynchronous JavaScript will be helpful. If needed, we recommend reviewing the following courses:",
        links: [
          {
            link: "/course/pages/react-beginners",
            linkText: "React for Beginners",
          },
          {
            link: "/course/pages/react-intermediate",
            linkText: "React Intermediate",
          },
          {
            link: "/course/pages/advanced-javascript",
            linkText: "Advanced JavaScript",
          },
        ],
      },
    ],
    certificateData: {
      imageUrl: "/images/certificate/c-1.png",
      title: "Certificate of Excellence",
      description:
        "Upon successfully completing the course, you will be awarded the Certificate of Excellence from LearnLogicify Technologies. This certification validates your expertise in Next.js, demonstrating your ability to build fast and scalable applications.",
      certificateLink: "/images/certificate/c-1.png",
    },
    certificationProcessData: {
      title: "Certification Process and Requirements",
      description: [
        "To qualify for certification, you must complete all course modules and pass a final assessment.",
        "The assessment evaluates your ability to build real-world Next.js applications with proper routing, API handling, and performance optimization.",
      ],
      assessmentDetails:
        "The final assessment consists of a project-based evaluation and coding exercises, making up 100% of your certification score.",
      criteriaTitle: "Certification Eligibility Criteria",
      criteria: ["Achieve a minimum score of 65% in the final assessment."],
      retakeInfo:
        "One retake opportunity is available if the minimum score is not achieved.",
      finalNote:
        "This certification confirms your ability to build high-performance and scalable applications using Next.js.",
    },
    faqData: [
      {
        title: "What is the format of this course?",
        description:
          "Next.js Mastery is a live online training program with interactive sessions, hands-on projects, and real-world exercises.",
      },
      {
        title: "Do I need prior React experience?",
        description:
          "Yes, familiarity with React fundamentals, including hooks, state management, and API calls, is recommended before taking this course.",
      },
      {
        title: "Will I have access to recorded sessions?",
        description:
          "Yes! All live session recordings will be available on the LMS portal for 6 months after course completion.",
      },
      {
        title: "What projects will I work on?",
        description:
          "You will work on real-world projects involving Next.js routing, API integration, authentication, and performance optimization.",
      },
      {
        title: "How long is the course and what is the schedule?",
        description:
          "The course includes 90+ hours of training with live interactive sessions, scheduled for 1.5-hour sessions on weekdays and 3-hour sessions on weekends.",
      },
      {
        title: "Do I receive a certificate upon completion?",
        description:
          "Yes! Upon successfully completing the course and passing the assessment, you will receive a Certificate of Excellence from LearnLogicify Technologies.",
      },
      {
        title: "What kind of support is available during the course?",
        description:
          "You will have access to an LMS portal, live Q&A sessions, mentor support, and a dedicated community forum.",
      },
      {
        title: "Is there a final assessment?",
        description:
          "Yes, a final assessment consisting of coding challenges and a project evaluation is required to qualify for certification.",
      },
      {
        title: "What if I miss a live session?",
        description:
          "No worries! You can access all session recordings anytime through the LMS portal.",
      },
      {
        title: "Will I learn how to deploy my Next.js apps?",
        description:
          "Yes! The course covers deployment strategies, including deploying Next.js applications on Vercel with best practices.",
      },
    ],
    syllabusData: [
      {
        icon: "FaRoad",
        title: "Module 1",
        subtitle: "Next.js Fundamentals",
        topics: [
          "Introduction",
          "What is Next.js",
          "Setting Up the Development Environment",
          "Creating Your First Next.js Project",
          "Project Structure",
          "Routing and Navigation",
          "Client and Server Components",
          "Data Fetching",
          "Caching",
          "Static and Dynamic Rendering",
        ],
      },
      {
        icon: "FaPalette",
        title: "Module 2",
        subtitle: "Styling in Next.js",
        topics: [
          "Introduction",
          "Global Styles",
          "CSS Modules",
          "Tailwind CSS",
          "DaisyUI",
        ],
      },
      {
        icon: "FaRoute",
        title: "Module 3",
        subtitle: "Routing and Navigation",
        topics: [
          "Introduction",
          "Routing Overview",
          "Dynamic Routes",
          "Catch-all Segments",
          "Accessing Query String Parameters",
          "Layouts",
          "Navigation",
          "Programmatic Navigation",
          "Showing Loading UIs",
          "Handling Not Found Errors",
          "Handling Unexpected Errors",
        ],
      },
      {
        icon: "FaServer",
        title: "Module 4",
        subtitle: "Building APIs",
        topics: [
          "Introduction",
          "Getting a Collection of Objects",
          "Getting a Single Object",
          "Creating an Object",
          "Updating an Object",
          "Deleting an Object",
          "Validating Requests with Zod",
          "Exercise - Building Products API",
        ],
      },
      {
        icon: "FaDatabase",
        title: "Module 5",
        subtitle: "Database Integration with Prisma",
        topics: [
          "Introduction",
          "Installing MySQL",
          "Setting Up Prisma",
          "Defining Models",
          "Creating Migrations",
          "Creating a Prisma Client",
          "Getting Data",
          "Creating Data",
          "Updating Data",
          "Deleting Data",
          "Exercise - Storing Products in DB",
        ],
      },
      {
        icon: "FaCloudUploadAlt",
        title: "Module 6",
        subtitle: "Uploading Files",
        topics: [
          "Introduction",
          "Choosing a Cloud Platform",
          "Setting Up Cloudinary",
          "Uploading Files",
          "Showing Uploaded Images",
          "Customizing the Upload Widget",
        ],
      },
      {
        icon: "FaKey",
        title: "Module 7",
        subtitle: "Authentication with NextAuth",
        topics: [
          "Introduction",
          "Setting Up NextAuth",
          "Configuring Google Provider",
          "Understanding Authentication Sessions",
          "Accessing Sessions on the Client",
          "Accessing Sessions on the Server",
          "Signing Out Users",
          "Protecting Routes",
          "Database Adapters",
          "Configuring CredentialsProvider",
          "Registering Users",
        ],
      },
      {
        icon: "FaEnvelope",
        title: "Module 8",
        subtitle: "Sending Emails",
        topics: [
          "Introduction",
          "Setting Up React Email",
          "Creating an Email Template",
          "Previewing Emails",
          "Styling Emails",
          "Sending Emails",
        ],
      },
      {
        icon: "FaChartLine",
        title: "Module 9",
        subtitle: "Optimizations in Next.js",
        topics: [
          "Introduction",
          "Optimizing Images",
          "Using Third-party Scripts",
          "Using Fonts",
          "Search Engine Optimization",
          "Lazy Loading",
        ],
      },
      {
        icon: "FaCloudUploadAlt",
        title: "Module 10",
        subtitle: "Deployment",
        topics: [
          "Introduction",
          "Preparing for Production",
          "Pushing the Code to GitHub",
          "Deploying to Vercel",
          "Troubleshooting Deployment Errors",
        ],
      },
      {
        icon: "FaProjectDiagram",
        title: "Module 11",
        subtitle: "Setting Up the Project",
        topics: [
          "Project Roadmap",
          "Setting Up the Development Environment",
          "Creating the Project",
          "Building the Navbar",
          "Styling the Active Link",
        ],
      },
      {
        icon: "FaTasks",
        title: "Module 12",
        subtitle: "Creating Issues",
        topics: [
          "Setting Up MySQL",
          "Setting Up Prisma",
          "Creating the Issue Model",
          "Building an API",
          "Setting Up Radix UI",
          "Building the New Issue Page",
          "Customizing Radix UI Theme",
          "Adding a Markdown Editor",
          "Handling Form Submission",
          "Handling Errors",
          "Implementing Client-side Validation",
          "Extracting the ErrorMessage Component",
          "Adding a Spinner",
          "Discussion - Code Organization",
          "Troubleshooting - Extra attributes from the server",
        ],
      },
      {
        icon: "FaEye",
        title: "Module 13",
        subtitle: "Viewing Issues",
        topics: [
          "Showing the Issues",
          "Building the Issue Status Badge",
          "Adding Loading Skeletons",
          "Showing Issue Details",
          "Styling the Issue Detail Page",
          "Adding Markdown Preview",
          "Building a Styled Link Component",
          "Additional Loading Skeletons",
          "Disabling Server-side Rendering",
          "Refactoring - Organizing Imports",
        ],
      },
      {
        icon: "FaEdit",
        title: "Module 14",
        subtitle: "Updating Issues",
        topics: [
          "Adding the Edit Button",
          "Applying the Single Responsibility Principle",
          "Building the Edit Issue Page",
          "Building an API",
          "Updating Issues",
          "Understanding Caching",
          "Improving the Loading Experience",
        ],
      },
      {
        icon: "FaTrash",
        title: "Module 15",
        subtitle: "Deleting Issues",
        topics: [
          "Adding a Delete Button",
          "Adding a Confirmation Dialog Box",
          "Building an API",
          "Deleting an Issue",
          "Handling Errors",
          "Improving the User Experience",
          "Removing Duplicate Skeletons",
        ],
      },
      {
        icon: "FaLock",
        title: "Module 16",
        subtitle: "Authentication",
        topics: [
          "Setting Up NextAuth",
          "Configuring Google Provider",
          "Adding the Prisma Adapter",
          "Adding the Login and Logout Links",
          "Changing the Layout of the NavBar",
          "Adding a Drop-down Menu",
          "Troubleshooting - Avatar Not Loading",
          "Refactoring the NavBar",
          "Adding a Loading Skeleton",
          "Securing the Application",
        ],
      },
      {
        icon: "FaUserTag",
        title: "Module 17",
        subtitle: "Assigning Issues to Users",
        topics: [
          "Building the Assignee Select Component",
          "Populating the Assignee Select Component",
          "Setting Up React Query",
          "Fetching Data with React Query",
          "Adding Assigned Issues to Prisma Schema",
          "Implementing the API",
          "Assigning an Issue to a User",
          "Showing Toast Notifications",
          "Refactoring the Assignee Select Component",
        ],
      },
      {
        icon: "FaFilter",
        title: "Module 18",
        subtitle: "Filtering, Sorting, and Pagination",
        topics: [
          "Building the Filter Component",
          "Filtering Issues",
          "Making Columns Sortable",
          "Sorting Issues",
          "Fix Filtering Bugs",
          "Generating Dummy Data",
          "Building the Pagination Component",
          "Implementing Pagination",
          "Paginating Issues",
          "Refactoring - Extracting IssueTable Component",
        ],
      },
      {
        icon: "FaChartPie",
        title: "Module 19",
        subtitle: "Dashboard",
        topics: [
          "Building the LatestIssues Component",
          "Building the IssueSummary Component",
          "Building the BarChart Component",
          "Laying Out the Dashboard",
        ],
      },
      {
        icon: "FaServer",
        title: "Module 20",
        subtitle: "Going to Production",
        topics: [
          "Adding Metadata",
          "Optimizing Performance Using React Cache",
          "Removing .env File",
          "Setting Up Error Tracking",
          "Setting Up the Production Database",
          "Deploying to Vercel",
        ],
      },
    ],
  },
];
