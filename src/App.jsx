import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./AppLayOut";
import Home from "./ui/Home";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Services from "./ui/Services";

const Router = createBrowserRouter([
  {
    element: <AppLayout />, // Wraps pages inside a layout
    // errorElement: <Error />, // Handles errors
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
