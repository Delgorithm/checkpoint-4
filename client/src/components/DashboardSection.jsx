import { Link } from "react-router-dom";
import { useContext } from "react";
import { LogOut, House, User } from "lucide-react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function DashboardSection() {
  const { auth } = useContext(CurrentUserContext);
  return (
    <article className="flex h-screen w-16 flex-col justify-between border-e bg-white">
      <section>
        <div className="inline-flex size-16 items-center justify-center">
          <p className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            AD
          </p>
        </div>

        <section className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              <Link
                to="/dashboard/expenses"
                className="t group relative flex justify-center rounded bg-[#7434db]/10 px-2 py-1.5 "
              >
                <House />
              </Link>
            </div>

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <Link
                  to={`profil/${auth?.id}`}
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <User />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <Link
          to="/"
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <LogOut />
        </Link>
      </div>
    </article>
  );
}

export default DashboardSection;
