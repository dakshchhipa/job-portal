import "./App.css";
import { initializeApp } from "firebase/app";
import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBpm5pd3AIkjBxhc_JJYp1PZWffZoPMQTI",
    authDomain: "job-portal-demo-efd14.firebaseapp.com",
    projectId: "job-portal-demo-efd14",
    storageBucket: "job-portal-demo-efd14.appspot.com",
    messagingSenderId: "412916715373",
    appId: "1:412916715373:web:8267ca62adca2a4fbc1464",
  };

  const app = initializeApp(firebaseConfig);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
