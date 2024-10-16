import ReactDOM from "react-dom/client"; 
import Header from "./components/header";
const App = () => {
    return (
      <div>
        <Header/>    
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("main"));
  
  root.render(<App />);