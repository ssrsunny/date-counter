// src/components/BootstrapLoader.js
import { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    // Create a link element
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";

    // Append the link element to the head of the document
    document.head.appendChild(link);

    // Cleanup function to remove the link element when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null; // This component does not render anything
};

export default BootstrapLoader;
