import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home.jsx";
import CreateJob from "../Pages/CreateJob.jsx";
import MyJobs from "../Pages/MyJobs.jsx";
import SalaryPage from "../Pages/SalaryPage.jsx";
import UpdateJob from "../Pages/UpdateJob.jsx";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";
import JobDetails from "../Pages/JobDetails.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    
    {
      path: "/post-job" , 
      element: <CreateJob/>
    },
    {
      path: "/my-job" , 
      element: <MyJobs/>
    },
    {
      path: "/salary" , 
      element: <SalaryPage/>
    },
    {
      path: "edit-job/:id",
      element: <UpdateJob/>,
      loader: ({params}) => fetch(`http://localhost:4000/all-jobs/${params.id}`)
    },
    {
      path:"/login",
      element:  <Login/>

    },
    {
      path:"/sign-up",
      element: <Signup/>

    },
    {
      path:"/job/:id",
      element: <JobDetails/>
    }


  ],

  },
]);
export default router;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import App from "../App";
// import Home from "../Pages/Home.jsx";
// import CreateJob from "../Pages/CreateJob.jsx";
// import MyJobs from "../Pages/MyJobs.jsx";
// import SalaryPage from "../Pages/SalaryPage.jsx";

// const CustomRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/post-job" element={<CreateJob />} />
//         <Route path="/my-job" element={<MyJobs />} />
//         <Route path="/salary" element={<SalaryPage />} />
//       </Routes>
//     </Router>
//   );
// };
 
// export default CustomRoutes;


