import { useState } from "react";
import { Webchat, Fab } from "@botpress/webchat";

const clientId = "be8e88c0-b011-4fdf-9b97-449cf213706f";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Webchat
        clientId={clientId}
        configuration={{
          botName: "Personalizime Magjike",
        }}
        style={{
          width: "380px",
          height: "600px",
          display: isOpen ? "flex" : "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: 99999,
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
          background: "#fff",
        }}
      />

      <Fab
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "62px",
          height: "62px",
          zIndex: 100000,
        }}
      />
    </>
  );
}
