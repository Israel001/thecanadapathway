"use client";

import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import config from "../../../bot/config.js";
import MessageParser from "../../../bot/MessageParser";
import ActionProvider from "../../../bot/ActionProvider";
import "react-chatbot-kit/build/main.css";
import { useParams } from "next/navigation.js";
import Header from "@/components/Header";
import Link from "next/link.js";
import Footer from "@/components/Footer";
import withDashboardContext from "@/hoc/withDashboardContext";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CoursePage = () => {
  const params = useParams();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [showChatBot, setShowChatBot] = useState(false);

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(+1);
  };

  const onDocumentLoadSuccess = ({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void => {
    setNumPages(nextNumPages);
    setPageNumber(1);
  };

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
          background: "rgb(204,204,204,.5)",
          minHeight: "91vh",
          display: "flex",
          padding: "2rem 2rem",
          flexDirection: "column",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{
            background: "white",
            minHeight: "250px",
            margin: "0 auto",
            padding: "1rem 2rem",
            marginTop: "5rem",
          }}
        >
          <Link
            href="/dashboard"
            style={{
              color: "red",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            className="backLink"
          >
            {"<"} Back to Course
          </Link>
          <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              style={{ marginRight: "1rem" }}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
          <Document
            file={`/${params.id}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess as any}
            onContextMenu={(e) => e.preventDefault()}
            className={"pdf-container"}
          >
            <Page pageNumber={pageNumber || 1} />
            {/* {Array.from(new Array(numPages), (_el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))} */}
          </Document>
          <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              type="button"
              style={{ marginRight: "1rem" }}
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
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

export default withDashboardContext(CoursePage);
