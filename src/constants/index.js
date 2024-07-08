import benefitIcon1 from "../assets/benefits/icon-1.svg";
import benefitIcon2 from "../assets/benefits/icon-2.svg";
import benefitIcon3 from "../assets/benefits/icon-3.svg";
import benefitIcon4 from "../assets/benefits/icon-4.svg";
import benefitImage2 from "../assets/benefits/image-2.png";

import brightspace from '../assets/collaboration/D2L.png';
import email from '../assets/collaboration/email.svg';
import firebase from '../assets/collaboration/firebase.png';
import moodle from '../assets/collaboration/moodle.svg';
import slack from '../assets/collaboration/slack.svg';
import tally from '../assets/collaboration/tally.png';
import webhook from '../assets/collaboration/wbhook.jpeg';
import skyward from '../assets/collaboration/skyward-logo-white.svg';
import chatbot from '../assets/services/chatbot.png';
import cut from '../assets/services/cut.png';
import document from '../assets/services/Document.png';
import test from '../assets/services/online test.png';
import question from '../assets/services/Question Gen.png';
import tutor from '../assets/services/tutor.png';
export const navigation = [
    {
      id: "0",
      title: "Products",
      url: "/products",
      subItems: [
        {
          id: 1,
          title: "Ask AI",
          description: "Talking made easier with AI",
          url: "/askai",
        },
        {
          id: 2,
          title: "Document Listener",
          description: "Listen to your Documents",
          url: "/documentlistener",
        },
        {
          id: 3,
          title: "AI Question Gen",
          description: "Generate questions with AI",
          url: "/aiquestiongen",
        },
        {
          id: 4,
          title: "AI Tutor",
          description: "Learning with AI Assistance",
          url: "/aitutor",
        },
        {
          id: 5,
          title: "Online Tests",
          description: "Affordable and reliable",
          url: "/onlinetest",
        },
        {
          id: 6,
          title: "ProCut",
          description: "Create Memes,jokes and videos",
          url: "/procut",
        },
      ],
    },
    {
      id: "1",
      title: "Pricing",
      url: "/pricing",
    },
   
    {
      id: "2",
      title: "About Us",
      url: "#aboutus",
    },
    {
      id: "3",
      title: "Sign Up",
      url: "/signup",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Log in",
      url: "/signin",
      onlyMobile: true,
    },
  ];



export const benefits = [
  {
    id: "0",
    title: "ChatGPT-4",
    text: "Enhance conversational AI for customer support, content creation, and interactive applications.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Claude-3",
    text: "Leverage advanced analytics and complex problem-solving for data-driven insights.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Mistral AI",
    text: "Utilize state-of-the-art predictive analytics and machine learning for superior decision-making.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Cloud Instant",
    text: "Achieve real-time processing and immediate insights with unmatched speed and efficiency.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },

];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Slack",
    icon: slack,
    width: 26,
    height: 36,
    url: "https://slack.com",
  },
  {
    id: "1",
    title: "Firebase",
    icon: firebase,
    width: 34,
    height: 36,
    url: "https://firebase.google.com",
  },
  {
    id: "2",
    title: "Webhook",
    icon: webhook,
    width: 36,
    height: 28,
    url: "https://webhook.site",
  },
  {
    id: "3",
    title: "Email",
    icon: email,
    width: 34,
    height: 35,
    url: "mailto:someone@example.com",
  },
  {
    id: "4",
    title: "Skyward",
    icon: skyward,
    width: 34,
    height: 34,
    url: "https://www.skyward.com",
  },
  {
    id: "5",
    title: "Tally",
    icon: tally,
    width: 34,
    height: 34,
    url: "https://tally.so",
  },
  {
    id: "6",
    title: "Moodle",
    icon: moodle,
    width: 26,
    height: 34,
    url: "https://moodle.org",
  },
  {
    id: "7",
    title: "Brightspace",
    icon: brightspace,
    width: 38,
    height: 32,
    url: "https://www.d2l.com/brightspace",
  },
];



export const roadmap = [
  {
    id: "0",
    title: "Ask AI",
    text: "Experience ChatGPT-4, cloude-3 , Mistral AI , Cloude Instant and many leading AI Model with One Simple Subscription!.Your personal AI-powered chat companion, Ask AI, enhances online conversations by providing engaging, informative, and enjoyable interactions.",
    date: "1",
    status: "done",
    imageUrl: chatbot,
    colorful: true,
    url: "/askai", // Adjusted URL for Ask AI
  },
  {
    id: "1",
    title: "AI Question Generator",
    text: "With Ai QuestionGen, you can simply upload your file or enter a paragraph, enter your desired topics, and watch as our advanced AI technology instantly creates customized tests tailored to your specifications.",
    date: "2",
    status: "done",
    imageUrl: question,
    colorful: true,
    url: "/aiquestiongen", // Adjusted URL for AI Question Generator
  },
  {
    id: "2",
    title: "Document Listener",
    text: "Document Listener is a revolutionary feature designed to enhance your user experience by providing automatic playback for any text or file you input. ",
    date: "3",
    status: "done",
    imageUrl: document,
    colorful: true,
    url: "/documentlistener", // Adjusted URL for Document Listener
  },
  {
    id: "3",
    title: "Online Testing",
    text: " It has advanced security measures and intuitive controls, so users can focus on their assessments without any distractions or concerns.",
    date: "4",
    status: "done",
    imageUrl: test,
    colorful: true,
    url: "/onlinetest", // Adjusted URL for Online Testing
  },
  {
    id: "4",
    title: "ProCut",
    text: " Whether you're looking to entertain your audience or promote your brand, Procut streamlines the creation process, saving you time and effort.",
    date: "5",
    status: "done",
    imageUrl: cut,
    colorful: true,
    url: "/procut", // Adjusted URL for ProCut
  },
  {
    id: "5",
    title: "AI Tutor",
    text: "Whether you're studying a new subject or honing a skill, AI Tutor provides tailored guidance to support your learning journey.",
    date: "6",
    status: "coming soon",
    imageUrl: tutor,
    colorful: true,
    url: "/aitutor", // Adjusted URL for AI Tutor
  },
];