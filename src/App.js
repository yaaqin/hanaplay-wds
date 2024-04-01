import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;