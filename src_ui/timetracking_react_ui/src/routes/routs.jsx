import Home from '../home/home';
import Timesheet from '../timesheets/timesheet/timesheet';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/timesheet",
      element: <Timesheet/>
    }
  ]);