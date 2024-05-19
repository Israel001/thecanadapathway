"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import withDashboardContext from "@/hoc/withDashboardContext";
import Link from "next/link";
import { useParams } from "next/navigation";

const VideoPage = () => {
  const params = useParams();

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
        <div style={{ margin: "auto" }}>
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
          <br />
          <br />
          <iframe
            style={{ aspectRatio: "16 / 9", width: "100% important" }}
            src="https://www.youtube.com/embed/RapLpGPszFU"
            title="How to Apply for Open Work Permit Canada Online Step by Step As Spouse Of Closed Work Permit Holder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default withDashboardContext(VideoPage);
