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
import { sendData } from "./services/api.service";
import {
  baseExpensesUrl,
  baseLoginUrl,
  baseRegisterUrl,
} from "./services/urls";
import AuthProtected from "./services/AuthProtected";
import { CurrentUserProvider } from "./contexts/CurrentUserProvider";

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
          const password = formData.get("password");
          const response = await sendData(
            `${baseRegisterUrl}`,
            {
              username,
              email,
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
          },
          {
            path: "expenses",
            element: <Expenses />,
            action: async ({ request }) => {
              try {
                const formData = await request.formData();
                const category = formData.get("category");
                const amount = formData.get("amount");
                const userId = formData.get("user_id");
                const categoryId = formData.get("category_id");

                const response = await sendData(
                  `${baseExpensesUrl}`,
                  {
                    category,
                    amount,
                    userId,
                    categoryId,
                  },
                  "POST"
                );

                if (response.status === 201) {
                  alert("Bien joué sheguey");
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
    <CurrentUserProvider>
      <RouterProvider router={router} />
    </CurrentUserProvider>
  </React.StrictMode>
);
