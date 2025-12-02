
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  navigator.registerProtocolHandler("mailto", "https://mail.google.com/mail/?extsrc=mailto&url=%s");