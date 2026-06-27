import Test from "./components/Test";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Profiles from "./components/Profiles";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Welcome />
      <Home />
      <DashBoard />
      <Profiles />
      <Settings />
      <Test />
    </div>
  );
}

export default App;
