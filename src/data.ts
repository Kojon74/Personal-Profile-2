import {
  PosFix1,
  PosFix2,
  Clearo1,
  LeftOrRight1,
  CounselConnect1,
  CounselConnect2,
  CounselConnect3,
  CounselConnect4,
  Foodo,
  Clearo2,
  ParkNGo1,
  ParkNGo2,
  UBC1,
  Swopshop1,
  Swopshop2,
  KnockNow1,
  TTT1,
  TTT2,
  WhatsInTheFridge1,
  WhatsInTheFridge2,
  Spacestagram,
  Bosch,
} from "./assets/projects";

enum ProjectType {
  Internship = "Internship",
  Hackathon = "Hackathon",
  Extracurricular = "Extracurricular",
  ClassProject = "Class Project",
  PersonalProject = "Personal Project",
}

enum Skills {
  React = "React",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Jest = "Jest",
  HTML = "HTML",
  CSS = "CSS",
  ReactNative = "React Native",
  Android = "Android",
  Java = "Java",
  iOS = "iOS",
  Swift = "Swift",
  Flask = "Flask",
  Python = "Python",
  ML = "ML",
  NLP = "NLP",
  RNN = "RNN",
  TensorFlow = "TensorFlow",
  Firebase = "Firebase",
  AWS = "AWS",
  Azure = "Azure",
  GCP = "GCP",
  SQL = "SQL",
  RaspberryPi = "Raspberry Pi",
  Verilog = "Verilog",
  Figma = "Figma",
  Sketch = "Sketch",
  Nodejs = "Node.js",
}

type projectsType = Array<{
  date: Array<string>;
  title: string;
  type: ProjectType; // One of Internship, Hackathon, Class Project, Personal Project (not shown on front-end)
  typeName: string;
  skills: Array<Skills>;
  intro: string;
  desc: Array<string>; // First description is project overview ~ 2 sentences
  githubURL?: string;
  companyURL?: string;
  projectURL?: string;
  images?: Array<{ id: number; src: any; alt: string }>; // First image is main image
  video?: string;
  pinned?: boolean;
}>;

const projects: projectsType = [
  {
    date: ["Feb 2021", "Present"],
    title: "Clearo iOS App",
    type: ProjectType.PersonalProject,
    typeName: "Personal Project",
    skills: [
      Skills.ReactNative,
      Skills.TypeScript,
      Skills.Firebase,
      Skills.Figma,
    ],
    intro:
      "A skin care journalling app to help users identify their acne triggers through machine learning inference",
    desc: [
      "A mobile application allowing users to keep a daily journal of their skin condition by taking selfies and recording skin condition, new pimples, skin care routine, diet, and more to help understand what is causing their skin to break out",
      "Developed the frontend with React Native and TypeScript, database management and authentication with Firebase, design with Figma, and deployed using Expo",
      "Published to the Apple App Store where the app currently has 226 downloads and a 5 star rating",
      "Journaled my progress through multiple blog entries on my website in the 'Blog' section",
    ],
    companyURL: "https://www.clearo-app.com",
    projectURL:
      "https://apps.apple.com/us/app/clearo/id1644641276?platform=iphone",
    images: [
      { id: 0, src: Clearo2, alt: "Clearo Daily Log Screen" },
      { id: 1, src: Clearo1, alt: "Clearo on the App Store" },
    ],
    pinned: true,
  },
  {
    date: ["Sep 2022", "Apr 2023"],
    title: "WhatsInTheFridge",
    type: ProjectType.ClassProject,
    typeName: "Class Project: New Venture Design (Team B6)",
    skills: [
      Skills.React,
      Skills.TypeScript,
      Skills.Firebase,
      Skills.Figma,
      Skills.Python,
      Skills.Nodejs,
      Skills.Azure,
      Skills.RaspberryPi,
      Skills.JavaScript,
      Skills.HTML,
      Skills.CSS,
    ],
    intro: "",
    desc: [
      "A camera based IoT device to allow users to conveniently keep track of the inventory in their fridge",
      "Used a camera attached to a Raspberry Pi placed on the inside of the fride looking outwards to identify whenever an item is being put in/taken out of the fridge",
      "Frames of the items being placed in/taken out are then sent to backend Node.js server, where we pass the image through an image classifier in Azure",
      "Using the response from the image classifier we update our inventory database and update the front-end respectively",
      "Created this project as a part of our New Venture Design class where we learned the building blocks to creating a successful start-up",
    ],
    companyURL: "https://github.com/NVDB6",
    projectURL:
      "https://design.engineering.ubc.ca/design-courses/new-venture-design/nvd-team-videos-2022-23/",
    images: [
      { id: 0, src: WhatsInTheFridge1, alt: "Hardware component" },
      { id: 1, src: WhatsInTheFridge2, alt: "Camera placement in fridge" },
    ],
    pinned: true,
    video: "Y2L-tUp1BHA",
  },
  {
    date: ["May 2022", "Aug 2022"],
    title: "Foodo Android App",
    type: ProjectType.ClassProject,
    typeName: "Class Project: Software Engineering",
    skills: [
      Skills.Android,
      Skills.Java,
      Skills.Nodejs,
      Skills.Azure,
      Skills.Jest,
      Skills.Figma,
    ],
    intro:
      "An Android mobile application to keep track of all the restaurants you want to visit and look up restaurant information",
    desc: [
      "An Android mobile application to keep track of all the restaurants you want to visit and look up restaurant information",
      "Developed the front-end with Java, back-end with Node.js running on a Azure VM",
      "Tested the front-end with Expresso, back-end with Jest to achieve over 90% coverage",
      "Developed CI/CD pipeline to run unit tests as well as automate Codacity tests on every PR",
      "Created UI design with Figma",
    ],
    githubURL: "https://github.com/FoodoCPEN321/foodo",
    images: [
      {
        id: 0,
        src: Foodo,
        alt: "Foodo Restaurant List Page Visited Animation",
      },
    ],
    video: "Y2L-tUp1BHA",
  },
  {
    date: ["Jan 2022", "Apr 2022"],
    title: "Park n' Go",
    type: ProjectType.ClassProject,
    typeName: "Class Project: Computer Engineering Design Studio II",
    skills: [
      Skills.ReactNative,
      Skills.Firebase,
      Skills.Python,
      Skills.Flask,
      Skills.JavaScript,
      Skills.Verilog,
      Skills.AWS,
    ],
    intro:
      "Automatic parking payment system using license plate recognition and hardware acceleration",
    desc: [
      "A system involving cameras to read the license plate of cars as they enter and exit parkades to create a seamless parking experience for parkade owners and users",
      "Created a prototype using a camera connected to a DE1-SoC, which runs a hardware accelerated automatic license plate recognition (ALPR) algorithm, and updates a companion app indicating how long the user has been parked for and how much they will be billed",
      "Developed the client mobile application with React Native, database management with Firebase, and back-end in Node.js which was hosted on an AWS server",
      "Achieved over 90% accuracy on the ALPR model",
    ],
    githubURL: "https://github.com/Kojon74/Park-n-Go",
    images: [
      {
        id: 0,
        src: ParkNGo1,
        alt: "Hardware Component - Camera Mounted on DE1-SoC",
      },
      {
        id: 0,
        src: ParkNGo2,
        alt: "Frontend Component - Parking Time and Amount Charged",
      },
    ],
    video: "7CVmkKwqOxI",
  },
  {
    date: ["Sep 2021", "Apr 2022"],
    title: "Machine Learning and Data Mining Teaching Assistant",
    type: ProjectType.Extracurricular,
    typeName: "UBC Department of Computer Science",
    skills: [Skills.Python, Skills.ML],
    intro:
      "Taught as a TA for two consectutive terms in UBC's CPSC 340: Machine Learning and Data Mining alongside professors Mike Gelbert and Jeffrey Clune",
    desc: [
      "Taught as a TA for two consectutive terms in UBC's CPSC 340: Machine Learning and Data Mining alongside professors Mike Gelbert, Danica Sutherland, and Jeffrey Clune",
      "Solidified understanding of core machine learning concepts by teaching them to other students",
      "Held weekly meetings to ensure students understand concepts taught in lecture (gradient descent, principal component analysis, neural networks)",
      "Graded assignments and exams to assess students level of understanding and gave relevant feedback",
      "Helped students debug their coding assignments",
    ],
    companyURL: "https://github.com/UBC-CS/cpsc340-2021w1",
    images: [{ id: 0, src: UBC1, alt: "UBC Logo" }],
  },
  {
    date: ["Jan 2022"],
    title: "SwopShop",
    type: ProjectType.Hackathon,
    typeName: "nwHacks 2022",
    skills: [
      Skills.ReactNative,
      Skills.Nodejs,
      Skills.Firebase,
      Skills.AWS,
      Skills.Figma,
    ],
    intro:
      "A mobile application platform to buy and sell products with an emphasis on trading",
    desc: [
      "A mobile application platform to buy and sell products with an emphasis on trading",
      "Developed the front-end in React Native, back-end with Node.js, database management with Firebase, VM on AWS, design with Figma, and published with Expo",
      "Submitted to nwHacks, but continued working on it and applied for entrepeneurship@UBC",
    ],
    images: [
      { id: 0, src: Swopshop1, alt: "Discover Screen" },
      { id: 1, src: Swopshop2, alt: "Profile Screen" },
    ],
    video: "D-RqCoTL1eM",
    pinned: true,
  },
  {
    date: ["Jan 2022"],
    title: "Spacestagram",
    type: ProjectType.PersonalProject,
    typeName: "Personal Project",
    skills: [Skills.React],
    intro:
      "An Instagram like social network feed with daily posts on interesting science facts",
    desc: [
      "An Instagram like social network feed with daily posts on interesting science facts",
      "Fetched space facts from NASAs API",
      "Developed the frontend using React, hosted on GitHub pages",
    ],
    projectURL: "https://kojon74.github.io/Shopify-Frontend/",
    githubURL: "https://github.com/Kojon74/Shopify-Frontend/tree/master",
    images: [{ id: 0, src: Spacestagram, alt: "Homepage" }],
  },
  {
    date: ["Jan 2022", "Aug 2022"],
    title: "Software Engineer",
    type: ProjectType.Internship,
    typeName: "TTT Studios",
    skills: [Skills.Python, Skills.AWS, Skills.TensorFlow, Skills.ML],
    intro: "Led the set up process of the AI services department",
    desc: [
      "Led the set up process of the AI services department",
      "Held client meetings as the lead AI engineer",
      "Designed and developed a Python based web application to visualize the progress of Covid-19 vaccinations around the world",
      "Deployed the website to AWS Elastic Beanstalk with continuous deployment and used AWS S3 to store data files",
      "Developed a PM analytics tool that increased project estimation accuracy by 60% using Monte Carlo simulations",
    ],
    projectURL: "http://covid-19-vaccination.us-west-2.elasticbeanstalk.com/",
    companyURL: "https://ttt.studio",
    images: [
      { id: 0, src: TTT1, alt: "TTT Studios" },
      { id: 1, src: TTT2, alt: "Covid-19 Vaccination Dashboard" },
    ],
    pinned: true,
  },
  {
    date: ["Jan 2024", "Aug 2024"],
    title: "Software Engineer",
    type: ProjectType.Internship,
    typeName: "KnockNow",
    skills: [Skills.Python, Skills.NLP, Skills.AWS, Skills.SQL],
    intro:
      "Developed a topic model that tagged real estate descriptions with relevant information using LDA and NMF (NLP)",
    desc: [
      "Developed a topic model that tagged real estate descriptions with relevant information using LDA and NMF (NLP)",
      "Created an SQL database on AWS RDS storing all project data",
      "Identified key features in real estate listings using NLP",
      "Cleaned data by removing random spaces and fixing abbrheviations",
    ],
    companyURL: "https://www.knocknow.ca",
    images: [{ id: 0, src: KnockNow1, alt: "KnockNow" }],
  },
  {
    date: ["Feb 2021"],
    title: "PosFix",
    type: ProjectType.Hackathon,
    typeName: "MakeUofT Hackathon 2021",
    skills: [
      Skills.ReactNative,
      Skills.Firebase,
      Skills.Figma,
      Skills.RaspberryPi,
    ],
    intro: "A smart t-shirt to indicate when you have poor posture",
    desc: [
      "A smart t-shirt to indicate when you have poor posture",
      "Monitored posture using a flex sensor on the users upper lower neck to measure the curvature of the users neck and four inertial measurement units (IMU) on the users shoulders, neck, and lower back to track their relative positions",
      "Collected sensor data on Raspberry Pi which updated a Firebase Firestore database",
      "Notified users via a mobile application developed in React Native to fix their posture if sensor values exceeded some threshold",
      "Designed the UI of the mobile application with Figma",
      "Placed 4th in the 'Well Being' category",
    ],
    projectURL: "https://devpost.com/software/posfix",
    githubURL: "https://github.com/Kojon74/PosFix",
    images: [
      { id: 1, src: PosFix2, alt: "Hardware setup" },
      { id: 0, src: PosFix1, alt: "PosFix Homepage" },
    ],
    video: "M4SF_171kio",
    pinned: true,
  },
  {
    date: ["Feb 2021"],
    title: "Classmates",
    type: ProjectType.Hackathon,
    typeName: "CalgaryHacks 2021",
    skills: [Skills.React, Skills.Firebase, Skills.Figma],
    intro:
      "Working together with fellow classmates can significantly improve your learning, however, it can be difficult to meet people in class especially during the pandemic. Classmates helps address this issue with a platform for students to interact with each other",
    desc: [
      "Working together with fellow classmates can significantly improve your learning, however, it can be difficult to meet people in class especially during the pandemic. Classmates helps address this issue with a platform for students to interact with each other",
      "Implemented the discussion style feature for this project, where users can post questions and answers powered by a React front-end and Firebase back-end",
      "Taught my teammates React for this project, by helping them answer specific questions and delegating specific tasks to each person",
    ],
    projectURL: "https://devpost.com/software/classmates",
    githubURL: "https://github.com/Kojon74/Classmates",
    images: [{ id: 0, src: Clearo1, alt: "Clearo on the App Store" }],
    video: "_HXv9RRJF04",
  },
  {
    date: ["Jan 2021"],
    title: "Right or Left",
    type: ProjectType.Hackathon,
    typeName: "Hack the Northeast 2021",
    skills: [Skills.React, Skills.Python, Skills.GCP, Skills.Flask],
    intro:
      "A Chrome Extension that detects the bias in the article the user is reading and classifies it as politically left or right leaning with a confidence interval and suggested similar articles but with opposing political bias to the user so they can gain a more well rounded understanding of the topic",
    desc: [
      "A Chrome Extension that detects the bias in the article the user is reading and classifies it as politically left or right leaning with a confidence interval and suggested similar articles but with opposing political bias to the user so they can gain a more well rounded understanding of the topic",
      "Created the front-end using React and the Chrome Extensions API",
      "Created two API calls using Flask; to calculate the bias in the current article, and find similar relevant articles",
      "Trained the bias detection model on the Google Cloud AutoML Natural Language platform on a dataset we created (manually)",
    ],
    projectURL: "https://devpost.com/software/right-or-left",
    githubURL: "https://github.com/cwen96/Right-or-Left",
    images: [{ id: 0, src: LeftOrRight1, alt: "Left or Right Demo" }],
    video: "c5SD3Z-D06A",
    pinned: true,
  },
  {
    date: ["Dec 2020", "Jan 2021"],
    title: "Day Trading Algorithm",
    type: ProjectType.PersonalProject,
    typeName: "Personal Project",
    skills: [Skills.Python],
    intro:
      "A program that reads market trends and looks for indicators to enter/exit the market",
    desc: [
      "A program that reads market trends and looks for indicators to enter/exit the market",
      "Created my own back testing environment to test my algorithms and calculate profits on historical data",
      "Learned many day trading concepts including leverage and margins, stop losses, risk assessment, and indicators such as the exponential moving average, relative rtrength index, moving average convergence divergence, and average true range",
      "Realized this method would not work since to overcome the high trading fees on Interactive Broker I would need to invest with larger volumes of money than I had available",
    ],
    images: [{ id: 0, src: Clearo1, alt: "Clearo on the App Store" }],
  },
  {
    date: ["Jun 2021", "Dec 2021"],
    title: "AI Research Scientist",
    type: ProjectType.Internship,
    typeName: "Bosch",
    skills: [
      Skills.Python,
      Skills.TensorFlow,
      Skills.ML,
      Skills.NLP,
      Skills.RNN,
    ],
    intro:
      "Worked on multiple projects in varying fields within AI including NLP, Data Visualization, Computer Vision, Deep Learning, Human Pose Estimation, Reinforcement Learning, and more in order to find patentable research",
    desc: [
      // TODO update desc from resume
      "Developed a skateboard video classification model using human pose detection and neural networks with Python, TensorFlow and Keras",
      "Experimented with stock market forecasting using RNN’s for time series data and NLP for sentimental analysis of relevant news articles",
      "Trained an AI agent to play complex mobile application games using reinforcement learning",
    ],
    companyURL: "https://www.bosch.ca",
    images: [{ id: 0, src: Bosch, alt: "Bosch Internship" }],
    pinned: true,
  },
  {
    date: ["Nov 2020"],
    title: "Spam Detector",
    type: ProjectType.PersonalProject,
    typeName: "Personal Project",
    skills: [Skills.Python, Skills.Flask, Skills.ML, Skills.NLP, Skills.AWS],
    intro:
      "A spam detector powered by a natural language processing and Naive Bayes model launched as a serverless API endpoint built with Flask on AWS Elastic Beanstalk",
    desc: [
      "A spam detector powered by a natural language processing and Naive Bayes model launched as a serverless API endpoint built with Flask on AWS Elastic Beanstalk",
      "Built the Naive Bayes spam detection model using the sklearn library and exported the trained model as a pickle file",
      "Learned how to switch between different versions of my web application and monitor my AWS servers using Elastic Beanstalk Management Console",
    ],
    githubURL: "https://github.com/Kojon74/SpamDetectorFlask",
    images: [{ id: 0, src: Clearo1, alt: "Clearo on the App Store" }],
  },
  {
    date: ["Jan 2020", "Apr 2020"],
    title: "Autonomous Line Following Robot",
    type: ProjectType.ClassProject,
    typeName: "Class Project: Computer Engineering Design Studio I",
    skills: [
      Skills.Python,
      Skills.Swift,
      Skills.iOS,
      Skills.Firebase,
      Skills.RaspberryPi,
    ],
    intro: "A Raspberry Pi powered autonomous line following robot",
    desc: [
      "A Raspberry Pi powered autonomous line following robot",
      "Placed first in race against all other groups in class around circuit",
      "Used four reflective optical sensors to determine the position of the robot relative to the line, and used a PID controller to adjust the direction of the robot by sending signals to the corrisponding motors",
      "Developed an iOS application in Swift to manually take control of the robot and used Firebase to communicate between the Raspberry Pi and the mobile app",
    ],
    images: [{ id: 0, src: Clearo1, alt: "Clearo on the App Store" }],
    video: "yPFNwrm5XgQ", // TODO also see if can find GitHub link
  },
  {
    date: ["Jan 2020"],
    title: "Mood",
    type: ProjectType.Hackathon,
    typeName: "nwHacks 2020",
    skills: [Skills.JavaScript, Skills.React, Skills.CSS],
    intro:
      "A relaxation/mental support web application where you can choose your current mood. This triggers some actions such as playing relevant music as well as assigning tasks to help relax you mind.",
    desc: [
      "A relaxation/mental support web application where you can choose your current mood. This triggers some actions such as playing relevant music as well as assigning tasks to help relax you mind",
      "Developed the front-end using React, and React Bootstrap and styled with CSS",
    ],
    companyURL: "https://nwhacks2020.devpost.com",
    githubURL: "https://github.com/Kojon74/nwhacks-2020-mood",
    projectURL: "https://devpost.com/software/mood-3zvp0n",
    images: [{ id: 0, src: Clearo1, alt: "Clearo on the App Store" }], // TODO
  },
  {
    date: ["Nov 2019"],
    title: "Councel Connect",
    type: ProjectType.Hackathon,
    typeName: "UBC Local Hack Day 2019",
    skills: [Skills.JavaScript, Skills.HTML, Skills.CSS, Skills.Sketch],
    intro:
      "Mental health needs candid, unshamed conversation. A heartfelt conversation could be what struggling UBC students need. Counsel Connect matches students who want to share and are willing to listen",
    desc: [
      "Mental health needs candid, unshamed conversation. A heartfelt conversation could be what struggling UBC students need. Counsel Connect matches students who want to share and are willing to listen",
      "Build over the course of 12 hours, without any prior web development experience",
    ],
    companyURL: "https://ubclhd19.devpost.com",
    githubURL: "https://github.com/Kojon74/ubc-lhd-2019-counsel-connect",
    projectURL: "",
    images: [
      { id: 0, src: CounselConnect1, alt: "Homepage" },
      { id: 1, src: CounselConnect2, alt: "Sign-up page" },
      { id: 2, src: CounselConnect3, alt: "Match result page" },
      { id: 3, src: CounselConnect4, alt: "Additional resources page" },
    ],
  },
];

export default projects;
