import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/index";
import WelcomeRaiseScreen from "./Screens/WelcomeRaiseScreen/index";
import WelcomeTrackScreen from './Screens/WelcomeTrackScreen';
import ComplainScreen from './Screens/ComplainScreen';
import TrackScreen from './Screens/TrackScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/welcome-raise-complaint" element={ <WelcomeRaiseScreen />} />
        <Route path="/welcome-track-complaint" element={ <WelcomeTrackScreen />} />
        <Route path="/complain-screen" element={ <ComplainScreen />} />
        <Route path="/track-screen" element={ <TrackScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
