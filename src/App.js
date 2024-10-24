import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";

import Gap from "./components/gap";

import Body from "./components/Body";

import MentalHealthBody from "./components/MentalHealthBody";
import DynamicQuotes from "./components/DynamicQuotes";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
const App = () => {
  return (
      <div>
          <Header />
          <Outlet />      
          <Footer/>
      </div>
  );
};
const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" /> // Redirect to /home
        },
          {
              path: "/home",
              element: <Body />,
          },
          {
              path: "/about-us",
              element: <About />,
          },
         
      ],
  },
]);
  
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider router={appRouter} />)