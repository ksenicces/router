import { createBrowserRouter, Navigate } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import UsersList from "./components/UsersList";
import UserData from "./components/UserData";
import AlbumsList from "./components/AlbumsList";
import AlbumData from "./components/AlbumData";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" />,
      },
      {
        path: "users",
        element: <UsersList />,
      },
      {
        path: "user/:id",
        element: <UserData />,
      },
      {
        path: "albums",
        element: <AlbumsList />,
      },
      {
        path: "album/:id",
        element: <AlbumData />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;