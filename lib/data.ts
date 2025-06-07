import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import advisorailogo from "@/public/images/advisorAIlogo.png"
import websiteLogo from "@/public/images/atom.png"
import owlmarklogo from "@/public/images/owlmarklogo.png"
import smartbiteslogo from "@/public/images/smartbites-2-removebg-preview.png"
import panchangapilogo from "@/public/images/panchangapilogo.png"
import wildifireanalysis from "@/public/images/wildfireanalysis.png"
import ubclogo from "@/public/images/ubclogo.png"
import geeringuplogo from "@/public/images/geeringuplogo.png"
import codeinitiative from "@/public/images/codeinitiative.png"
import mysqllogo from "@/public/images/mysqllogo.png"
import Rlogo from "@/public/images/R_logo.svg.png"
import NestJSlogo from "@/public/images/nestjslogo.png"
import PostgresLogo from "@/public/images/postgres.png"
import Langchainlogo from "@/public/images/langchain.png"
import fairshareLogo from "@/public/images/fairshare_logo_2.png"
import calendargramLogo from "@/public/images/calendargram_logo.png"
import snugStayLogo from "@/public/images/snugStaySystems_logo.png"
import picamyLogo from "@/public/images/picamy_logo.png"
import uofcLogo from "@/public/images/uofc_logo.png"
import ciscoLogo from "@/public/images/cisco_logo.png"
import wsLogo from "@/public/images/wealthsimple_logo.png"
import javaScript from "@/public/skills_logo/javascript.png"
import typeScript from "@/public/skills_logo/typescript.png"
import akka from "@/public/skills_logo/akka.png"
import aws from "@/public/skills_logo/aws.png"
import chef from "@/public/skills_logo/chef.png"
import docker from "@/public/skills_logo/docker.png"
import flask from "@/public/skills_logo/flask.png"
import git from "@/public/skills_logo/git.png"
import java from "@/public/skills_logo/java.png"
import kafka from "@/public/skills_logo/kafka.png"
import nextJS from "@/public/skills_logo/nextJS.png"
import nodeJS from "@/public/skills_logo/nodeJS.png"
import python from "@/public/skills_logo/python.jpeg"
import rabbitMQ from "@/public/skills_logo/rabbitMQ.png"
import react from "@/public/skills_logo/react.png"
import ruby from "@/public/skills_logo/ruby.jpeg"
import scala from "@/public/skills_logo/scala.png"
import tailwind from "@/public/skills_logo/tailwind.png"
import flink from "@/public/skills_logo/flink.jpeg"
import makerspacelogo from "@/public/images/makerspacelogo.png";



import { MdWorkOutline } from "react-icons/md";


export const linkedInLink = "https://www.linkedin.com/in/parth-patel-692418211/"
export const githubLink = "https://github.com/ParthPatel100"
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        name: "University of British Columbia",
        title: "BSc Computer Science",
        location: "Kelowna,BC",
        description:
            "Major in Computer Science",
        icon: React.createElement(LuGraduationCap),
        date: "Sept 2020 - 2025",
        logo: ubclogo
    },
    {
        name: "UBC Faculty of Science",
        title: "Full Stack Engineer",
        location: "Kelowna,BC",
        description:
            "During my 6 internship with the UBC Directed Studies team, I contributed to the development of full stack application by designing the user and admin dashboard, and integrating payment system using Stripe.",
        icon: React.createElement(MdWorkOutline),
        date: "Jan 2025 - May 2025",
        logo: ubclogo
    },
    {
        name: "UBC Faculty of Science",
        title: "Generative AI Developer",
        location: "Kelowna,BC",
        description:
            "Worked on the Course Planner Website to integrate an AI Powered Course Advising bot",
        icon: React.createElement(MdWorkOutline),
        date: "Sept 2024 - Dec 2024",
        logo: ubclogo
    },
    {
        name: "UBC Geering Up Engineering Outreach",
        title: "Programming Assistant",
        location: "Vancouver,BC",
        description:
            "Programming Assistant for the UBC Geering Up Engineering team to assist students in learning programming and AI concepts through workshops and camps.",
        icon: React.createElement(MdWorkOutline),
        date: "May 2023 - Aug 2023",
        logo: geeringuplogo
    },
    {
        name: "The Code Initiative",
        title: "Programming Instructor",
        location: "Remote",
        description:
            "Programming Assistant for the Code Initiative team to teach students programming concepts like Java, Python, Web Development through interactive lessons",
        icon: React.createElement(MdWorkOutline),
        date: "Sept 2022-Apr 2023",
        logo: codeinitiative
    },


] as const;

export const projectsData = [

    {
        title: "Makerspace Membership Management System",
        description:
            "a full stack application for managing memberships, bookings, and payment for Makerspace in Yellowknife",
        tags: ["Remix V7", "PostgreSQL", "Tailwind", "Typescript", "Node.js"],
        imageUrl: makerspacelogo,
        githubLink: "https://github.com/University-of-British-Columbia-Okanagan/MSYK_Membership.git"
    },
    {
        title: "Advisor AI - UBC Academic Advisor",
        description:
            "AI powered academic advisor that uses LangChain framework to build a RAG system with a vector database to answer course related queries and provide academic advice.",
        tags: ["React, Typescript, PostgreSQL, LangChain, OpenAI"],
        imageUrl: advisorailogo,
        githubLink: "https://github.com/engasa/CoursePlanner-Web.git"
    },
   
    {
        title: "OwlMark - Optical Marking Management System",
        description:
            "An Optical Marking Management System using Yolov8 for OCR based grading of multiple choice exams, with a dashboard interface for teachers to upload exams and students to view results.",
        tags: ["NextJS", "NestJS", "MySQL", "Typescript", "Python"],
        imageUrl: owlmarklogo,
        githubLink: "https://github.com/UBCO-COSC499-Summer-2024/team-7-capstone-team-7-falcon.git"
    },
    {
        title: "SmartBites",
        description:
            "A mobile app using React Native to gamify the purchase of sustainable food items, allowing users to earn points and rewards for making eco-friendly choices.",
        tags: ["React Native", "OpenCV", "Supabase"],
        imageUrl: smartbiteslogo,
        githubLink: "https://github.com/ishikaubc/SmartBites.git"
    },

    {
        title: "Panchang API Gateway",
        description:
            " API Gateway for accessing Panchang (Hindu calendar) and Hindu festival data. This project is under active development and aims to provide secure and efficient public access to the core Panchang API used by the QuickPanchang macOS app.",
        tags: ["Go", "Typescript", "Next JS"],
        imageUrl: panchangapilogo,
        githubLink: "https://github.com/ParthPatel100/Website"
    },
    {
        title: "Wildifre Analysis - Prediction Modelling",
        description:
            "A simple photo library management application to handle the traditional image uploading, storing, deleting, sorting, and tagging with a unique marketplace for images, where users can buy and sell images.",
        tags: ["R", "Network Science", "Data Analysis"],
        imageUrl: wildifireanalysis,
        githubLink: "https://github.com/atharvaj0gtap/Network-Science-Team-4.git"
    },

] as const;

export const skillsData = [
    {
        logo: javaScript,
        text: "JavaScript"
    },
    {
        logo: typeScript,
        text: "TypeScript"
    },
    {
        logo: react,
        text: "React"
    },
    {
        logo: nextJS,
        text: "Next.js"
    },
    {
        logo: nodeJS,
        text: "Node.js"
    },
    {
        logo: git,
        text: "Git"
    },
    {
        logo: tailwind,
        text: "Tailwind"
    },
    {
        logo: python,
        text: "Python"
    },
    {
        logo: java,
        text: "Java"
    },
    {
        logo: aws,
        text: "AWS"
    },
    {
        logo: ruby,
        text: "Ruby"
    },
    {
        logo: docker,
        text: "Docker"
    },
    {
        logo: mysqllogo,
        text: "MySQL"
    },
    {
        logo: Rlogo,
        text: "R"
    },
    {
        logo: NestJSlogo,
        text: "Nest.js"
    },
    {
        logo: PostgresLogo,
        text: "PostgreSQL"
    },
    {
        logo: Langchainlogo,
        text: "LangChain"
    }


] as const;