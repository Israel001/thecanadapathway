"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import withLoginContext from "@/hoc/withLoginContext";

function Home() {
  const [accessCode, setAccessCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`${process.env.BACKEND_URL || 'http://localhost:8085'}/login`, {
        accessCode,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response?.data?.accessToken);
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        localStorage.setItem("date", new Date().getTime().toString());
        router.push("/dashboard");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <div style={{ background: "black", color: "white", padding: "1rem" }}>
        <h2 style={{ margin: "0" }}>Thecanadapathway.com</h2>
      </div>
      <div
        style={{
          background: "rgb(204,204,204,.5)",
          height: "91vh",
          display: "flex",
        }}
      >
        <div
          style={{
            background: "white",
            height: "fit-content",
            padding: "3.5rem 1rem 7rem 1.5rem",
            width: "70%",
            margin: "auto",
            borderTop: "3px solid orange",
          }}
        >
          <form
            style={{ textAlign: "center" }}
            onSubmit={(event) => handleSubmit(event)}
          >
            <span style={{ fontWeight: "bold", display: "block" }}>
              Login using your Access Code
            </span>
            <span
              style={{ fontWeight: "bold", display: "block", color: "red" }}
            >
              Use your Access Code to Login
            </span>
            <input
              type="password"
              required
              value={accessCode}
              onChange={(event) => setAccessCode(event.target.value)}
            />
            <button
              style={{
                display: "block",
                margin: "auto",
                background: "#b60000",
                color: "white",
                padding: "1rem 1.5rem",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="accessCourse"
            >
              Access Course
            </button>
            <span
              style={{
                display: "block",
                marginTop: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Register a new membership
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withLoginContext(Home);
