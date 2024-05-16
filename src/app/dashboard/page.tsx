/* eslint-disable react/no-unescaped-entities */
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileVideo } from "@fortawesome/free-solid-svg-icons";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import MessageParser from "../../bot/MessageParser";
import ActionProvider from "../../bot/ActionProvider";
import config from "../../bot/config";
import "react-chatbot-kit/build/main.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import withDashboardContext from "@/hoc/withDashboardContext";
import Header from "@/components/Header";

const Dashboard = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    window.addEventListener("unload", () =>
      localStorage.removeItem("messages")
    );
  }, []);

  const saveMessages = (messages: any) => {
    localStorage.setItem("messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = localStorage.getItem("messages");
    return messages
      ? JSON.parse(messages)
      : [
          createChatBotMessage(`Hi there. Got a question? I'm here to help.`, {
            loading: true,
          }),
        ];
  };

  return (
    <div>
      <Header />
      <div
        style={{
          background: "darkred",
          color: "white",
          padding: ".5rem",
          textAlign: "center",
          fontWeight: "bold",
          position: "fixed",
          top: "3.5rem",
          width: "100%",
        }}
      >
        If you have got any questions or clarification, talk to us now by
        clicking on &nbsp;
        <a
          href="mailto:student@thecanadapathway.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            fontSize: "1",
            padding: ".2rem",
          }}
        >
          THIS LINK
        </a>
      </div>

      <div
        style={{
          background: "rgb(204,204,204,.5)",
          minHeight: "91vh",
          display: "flex",
          padding: "10rem 2rem",
          flexDirection: "column",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
          }}
        >
          BONUS (The Ultimate Guide Extra)
        </div>
        <a href="/course/faq" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          FREQUENTLY ASKED QUESTIONS
        </a>
        <a href="/course/htsicp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          How To Settle In Canada Promptly
        </a>
        <a href="/course/ica" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          IMPORTANT CANADA ABBREVIATIONS
        </a>
        <a href="/course/lt" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          LANGUAGE TESTING
        </a>
        <a href="/course/stlbrtc" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          SKILLS TO LEARN BEFORE RELOCATING TO CANADA
        </a>
        <a href="/course/tanjc" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          TEER AND NOC JOB CLASSIFICATION
        </a>
        <a href="/video/htcaolp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          HOW TO CREATE AN OUTSTANDING LINKEDIN PROFILE
        </a>
        <a href="/video/jcic" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          JOB CLASSIFICATION IN CANADA
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Provincial Nomination Program
        </div>
        <a href="/course/ainp1" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ALBERTA IMMIGRANT NOMINEE PROGRAM 1
        </a>
        <a href="/course/ainp2" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ALBERTA IMMIGRANT NOMINEE PROGRAM 2
        </a>
        <a href="/course/bcpp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          BRITISH COLUMBIA PNP PROGRAM
        </a>
        <a href="/course/oinp1" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ONTARIO IMMIGRANT NOMINEE PROGRAM 1
        </a>
        <a href="/course/oinp2" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ONTARIO IMMIGRANT NOMINEE PROGRAM 2
        </a>
        <a href="/course/pnp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          PROVINCIAL NOMINATION PROGRAMS
        </a>
        <a href="/course/wpsisic" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          WHAT PROVINCE SHOULD I SETTLE IN CANADA
        </a>
        <a href="/course/sinp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          SASKATCHEWAN IMMIGRANT NOMINEE PROGRAM
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Getting A Sponsored Job
        </div>
        <a href="/course/crac" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          CANADIAN RESUME AND CV
        </a>
        <a href="/course/htcavvtwp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          How To Convert A Visitor Visa To Work Permit
        </a>
        <a href="/course/steayji" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          SECRETS TO EXCEL AT YOUR JOB INTERVIEWS
        </a>
        <a href="/course/tazosajic" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          THE A - Z OF SECURING A JOB IN CANADA
        </a>
        <a href="/video/htafowpcosbsasocwph" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          HOW TO APPLY FOR OPEN WORK PERMIT CANADA ONLINE STEP BY STEP AS SPOUSE
          OF CLOSED WORK PERMIT HOLDER
        </a>
        <a href="/video/htafsowpicowpfs" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          HOW TO APPLY FOR SPOUSE OPEN WORK PERMIT INSIDE CANADA OPEN WORK
          PERMIT FOR SPOUSE
        </a>
        <a href="/video/htgjnic" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          HOW TO GET JOB NOTIFICATION IN CANADA
        </a>
        <a href="/video/lfwr" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          LICENSED FOREIGN WORKER RECRUITERS
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Canadian Federal Pathways
        </div>
        <a href="/course/cec" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          CANADIAN EXPERIENCE CLASS
        </a>
        <a href="/course/fsw" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          FEDERAL SKILLED WORKER
        </a>
        <a href="/course/tfstp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          THE FEDERAL SKILLED TRADES PROGRAM
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          All About Visitor's Visa
        </div>
        <a href="/course/htcvvtwp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          How To Convert Visitor Visa To Work Permit
        </a>
        <a href="/course/tcbocvv" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          THE COMPLETE BREAKDOWN OF CANADA VISITOR'S VISA
        </a>
        <a href="/video/htfacvvastp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          HOW TO APPLY FOR A CANADA VISITOR VISA AND STAY THERE PERMANENTLY
        </a>
        <a href="/video/htfvvo" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          HOW TO FILL VISITOR'S VISA ONLINE
        </a>
        <a href="/video/vvd" className="pdfLink">
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          VISITOR'S VISA DOCUMENTS
        </a>
      </div>

      {showChatBot && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            zIndex: "2",
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            saveMessages={saveMessages}
          />
        </div>
      )}

      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px",
          zIndex: "1",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setShowChatBot(!showChatBot)}
      >
        <svg
          className="sc-1k07fow-1 cbnSms"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z"
            transform="translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) "
            fill="rgb(232, 230, 227)"
          ></path>
        </svg>
      </button>

      <Footer />
    </div>
  );
};

export default withDashboardContext(Dashboard);
