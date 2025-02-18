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
];
