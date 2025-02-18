import { IoLogoPython } from "react-icons/io";
export const CourseData = [
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
        "Upon successfully completing the C Programming course, you will be required to take a final assessment to qualify for certification.",
        "This assessment evaluates your understanding of C programming fundamentals, data structures, and real-world problem-solving skills covered in the course.",
        "It is conducted under structured guidelines to ensure fairness and integrity.",
      ],
      assessmentDetails:
        "The final assessment is for 100 marks and contributes 100% to your certification score. Throughout the course, students are encouraged to solve practice problems and complete exercises to strengthen their understanding, but these do not contribute to the final certification score.",
      criteriaTitle:
        "To be eligible for the certificate, you must meet the following criteria",
      criteria: ["Achieve a score of 50% or more in the final assessment."],
      retakeInfo:
        "If this condition is met, you will receive a certificate of completion for the C Programming course. If you do not achieve the required score, you will have the opportunity to retake the final assessment once.",
      finalNote:
        "This structured evaluation ensures that only those who demonstrate a solid understanding of the course material and its applications are awarded the certificate, maintaining the integrity and value of the certification.",
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
];
