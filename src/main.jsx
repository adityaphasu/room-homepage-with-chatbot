import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WatsonAssistantChatWidget from "./components/WatsonAssistantChatWidget.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <WatsonAssistantChatWidget />
  </>
);
