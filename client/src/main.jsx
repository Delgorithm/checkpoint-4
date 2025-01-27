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
            return redirect("/dashboard/expenses");
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
            loader: async () => {
              const allExpensesData = await fetchApi(`${baseExpensesUrl}`);
              return allExpensesData;
            },
            action: async ({ request }) => {
              const formData = await request.formData();

              const expenseIds = formData.getAll("expenseIds[]");

              if (expenseIds.length > 0) {
                const promises = expenseIds.map((id) =>
                  sendData(`${baseExpensesUrl}/${id}`, {}, "DELETE")
                );
                await Promise.all(promises);
                return null;
              }

              const categoryId = formData.get("categoryId");
              const amount = formData.get("amount");
              const userId = formData.get("user_id");

              const response = await sendData(
                `${baseExpensesUrl}`,
                {
                  categoryId,
                  amount,
                  userId,
                },
                "POST"
              );

              if (response.status === 201) {
                return true;
              }
              return null;
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CurrentUserProvider>
    <RouterProvider router={router} />
  </CurrentUserProvider>
);
