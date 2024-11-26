import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import MentalHealthBody from "./components/MentalHealthBody";
import DynamicQuotes from "./components/DynamicQuotes";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import IndividualsBlogsPage from "./components/IndividualsBlogsPage";
import ChildrenBlogsPage from "./components/ChildrenBlogsPage";
import CorporationsBlogsPage from "./components/CorporationsBlogsPage";
import CouplesBlogsPage from "./components/CouplesBlogsPage";
import Anxiety from "./components/Anxiety";
import PremaritalCounselling from "./components/PremaritalCounselling";
import Stress from "./components/Stress";
import Trauma from "./components/Trauma";
import PersonalGrowth from "./components/PersonalGrowth";
import RelationshipConcerns from "./components/RelationshipConcerns";
import Depression from "./components/Depression";
import MaritalDiscords from "./components/MaritalDiscords";
import EmotionalAndDevelopmentalConcerns from "./components/EmotionalAndDevelopmentalConcerns";
import LearningDisabilities from "./components/LearningDisabilities";
import Autism from "./components/Autism";
import Adhd from "./components/Adhd";
import WorkplaceCounselling from "./components/WorkplaceCounselling";
import MentalWellnessProgram from "./components/MentalWellnessProgram";
import EmployeeAssistanceProgram from "./components/EmployeeAssistanceProgram";
import ExecutiveCoaching from "./components/ExecutiveCoaching";
import ContactUs from "./components/ContactUs";

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
              element: <Body />, // Render Body directly when visiting '/'
          },
          {
              path: "/about-us",
              element: <About />,
          },
          {
              path: "/individuals-blogs",
              element: <IndividualsBlogsPage />,
          },
          {
              path: "/couples-blogs",
              element: <CouplesBlogsPage />,
          },
          {
              path: "/children-blogs",
              element: <ChildrenBlogsPage />,
          },
          {
              path: "/corporation-blogs",
              element: <CorporationsBlogsPage />,
          },
          {
              path: "/anxiety",
              element: <Anxiety />,
          },
          {
              path: "/premarital-counselling",
              element: <PremaritalCounselling />,
          },
          {
              path: "/stress",
              element: <Stress />,
          },
          {
              path: "/trauma",
              element: <Trauma />,
          },
          {
              path: "/personal-growth",
              element: <PersonalGrowth />,
          },
          {
              path: "/relationship-concerns",
              element: <RelationshipConcerns />,
          },
          {
              path: "/depression",
              element: <Depression />,
          },
          {
              path: "/marital-discords",
              element: <MaritalDiscords />,
          },
          {
              path: "/emotional-concern",
              element: <EmotionalAndDevelopmentalConcerns />,
          },
          {
              path: "/learning-disabilities",
              element: <LearningDisabilities />,
          },
          {
              path: "/autism",
              element: <Autism />,
          },
          {
              path: "/adhd",
              element: <Adhd />,
          },
          {
              path: "/workplace-counselling",
              element: <WorkplaceCounselling />,
          },
          {
              path: "/mental-wellness",
              element: <MentalWellnessProgram />,
          },
          {
              path: "/employee-assistance-program",
              element: <EmployeeAssistanceProgram />,
          },
          {
              path: "/executive-coaching",
              element: <ExecutiveCoaching />,
          },
          {
              path: "/contact-us",
              element: <ContactUs />,
          }
      ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider router={appRouter} />)
