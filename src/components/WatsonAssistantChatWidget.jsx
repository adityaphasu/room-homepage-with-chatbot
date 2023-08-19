import { useEffect } from "react";

const WatsonAssistantChatWidget = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: import.meta.env.VITE_INTEGRATION_ID,
      region: "au-syd",
      serviceInstanceID: import.meta.env.VITE_SERVICE_INSTANCE_ID,
      onLoad: function (instance) {
        instance.render();
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove the script tag when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return;
};

export default WatsonAssistantChatWidget;
