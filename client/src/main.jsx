import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Expenses from "./pages/Expenses";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { fetchApi, sendData } from "./services/api.service";
import {
  baseExpensesUrl,
  baseLoginUrl,
  baseRegisterUrl,
  baseUserUrl,
} from "./services/urls";
import AuthProtected from "./services/AuthProtected";
import EditProfil from "./pages/EditProfil";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const username = formData.get("username");
          const email = formData.get("email");
          const city = formData.get("city");
          const password = formData.get("password");
          const response = await sendData(
            `${baseRegisterUrl}`,
            {
              username,
              email,
              city,
              password,
            },
            "POST"
          );
          if (response.status === 201) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "/login",
        element: <Login />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const email = formData.get("email");
          const password = formData.get("password");
          const response = await sendData(
            `${baseLoginUrl}`,
            {
              email,
              password,
            },
            "POST"
          );
          if (response) {
            const authData = await response.json();
            localStorage.setItem("token", authData.token);
            return redirect("/dashboard");
          }
          return null;
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "profil/:id",
            element: (
              <AuthProtected>
                <Profil />
              </AuthProtected>
            ),
            loader: async ({ params }) => {
              const [userData, pictureData] = await Promise.all([
                fetchApi(`${baseUserUrl}/${params.id}`),
              ]);
              return { userData, pictureData };
            },
          },
          {
            path: "/profile/:id/edit",
            element: <EditProfil />,
            loader: ({ params }) => fetchApi(`${baseUserUrl}/${params.id}`),
            action: async ({ request, params }) => {
              const formData = await request.formData();
              const username = formData.get("username");
              const city = formData.get("city");
              const email = formData.get("email");
              await sendData(
                `${baseUserUrl}${params.id}`,
                {
                  username,
                  city,
                  email,
                },
                "PUT"
              );
              return redirect(`/profile/${params.id}`);
            },
          },
          {
            path: "expenses",
            element: <Expenses />,
            action: async ({ request }) => {
              try {
                const formData = await request.formData();
                const category = formData.get("category");
                const amount = formData.get("amount");

                // console.log("FormData:", formData);

                const response = await sendData(
                  `${baseExpensesUrl}/add`,
                  {
                    category,
                    amount,
                  },
                  "POST"
                );

                if (response.status === 201) {
                  return redirect("expenses");
                }

                return null;
              } catch (error) {
                console.error("Error submitting data:", error);
                return null;
              }
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
