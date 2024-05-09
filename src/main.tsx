import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/header/Header";
import ContactForm from "./components/body/ContactForm.tsx";

const formDescriptor =
  "If you have any questions or concerns, please feel free to contact us. We will get back to you as soon as possible.";

const contactImageSrc =
  "https://plus.unsplash.com/premium_photo-1682310473661-7a334b46e164?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const contactImageAlt = "Illustration of a man sitting infront of e-mails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/contact",
    element: (
      <ContactForm
        formDescription={formDescriptor}
        imageSrc={contactImageSrc}
        imageAlt={contactImageAlt}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
