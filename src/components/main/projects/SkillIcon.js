import {
  AmazonwebservicesOriginal,
  AppleOriginal,
  AndroidOriginal,
  AzureOriginal,
  Css3Original,
  FigmaOriginal,
  FirebasePlain,
  FlaskOriginal,
  GooglecloudOriginal,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  JestPlain,
  MysqlOriginal,
  NodejsOriginal,
  PythonOriginal,
  RaspberrypiOriginal,
  ReactOriginal,
  SketchOriginal,
  SwiftOriginal,
  TensorflowOriginal,
  TypescriptOriginal,
} from "devicons-react";

import { GiBrain } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";

const SkillIcon = (skill) => {
  switch (skill) {
    case "React":
      return <ReactOriginal height={20} />;
    case "TypeScript":
      return <TypescriptOriginal height={20} />;
    case "JavaScript":
      return <JavascriptOriginal height={20} />;
    case "Jest":
      return <JestPlain height={20} />;
    case "HTML":
      return <Html5Original height={20} />;
    case "CSS":
      return <Css3Original height={20} />;
    case "React Native":
      return <ReactOriginal height={20} />;
    case "Android":
      return <AndroidOriginal height={20} />;
    case "Java":
      return <JavaOriginal height={20} />;
    case "iOS":
      return <AppleOriginal height={20} />;
    case "Swift":
      return <SwiftOriginal height={20} />;
    case "Flask":
      return <FlaskOriginal height={20} />;
    case "Python":
      return <PythonOriginal height={20} />;
    case "ML":
      return <GiBrain height={20} />;
    case "NLP":
      return <GiBrain height={20} />;
    case "RNN":
      return <GiBrain height={20} />;
    case "TensorFlow":
      return <TensorflowOriginal height={20} />;
    case "Firebase":
      return <FirebasePlain height={20} />;
    case "AWS":
      return <AmazonwebservicesOriginal height={20} />;
    case "Azure":
      return <AzureOriginal height={20} />;
    case "GCP":
      return <GooglecloudOriginal height={20} />;
    case "MySQL":
      return <MysqlOriginal height={20} />;
    case "Raspberry Pi":
      return <RaspberrypiOriginal height={20} />;
    case "Verilog":
      return <GrPersonalComputer height={20} />;
    case "Figma":
      return <FigmaOriginal height={20} />;
    case "Sketch":
      return <SketchOriginal height={20} />;
    case "Node.js":
      return <NodejsOriginal height={20} />;
    default:
  }
  return <div>SkillIcon</div>;
};

export default SkillIcon;
