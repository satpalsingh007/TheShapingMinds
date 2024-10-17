import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import {LampDemo} from "./components/Lamp";
import Gap from "./components/gap";
import { AuroraBackground } from "./components/ui/aurora-background";
import Body from "./components/Body";
import {VortexDemo}  from "./components/Vortex";
import MentalHealthBody from "./components/MentalHealthBody";
import ChooseUs from "./components/ChooseUs";
const App = () => {
    return (
      <div>
        <Header/>
        {/* <Gap/> */}
        <Body/> 
        <ChooseUs/>

        {/* <VortexDemo/>     */}
        {/* <AuroraBackground/>   */}
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("main"));
  
  root.render(<App />);