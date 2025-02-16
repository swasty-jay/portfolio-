import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./AppLayOut";
import Home from "./ui/Home";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";

const Router = createBrowserRouter([
  {
    element: <AppLayout />, // Wraps pages inside a layout
    // errorElement: <Error />, // Handles errors
    children: [
      { path: "/", element: <Home /> },
      // { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
