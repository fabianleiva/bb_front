
import { UserCart } from "../../components/UserCart";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { UserDashboard } from "./UserDashboard";

const secondaryNavigation = [
  {
    name: "Usuario",
    href: "/user/profile",
    icon: UserCircleIcon,
    current: true,
  },
  {
    name: "Compras",
    href: "/user/cart",
    icon: ShoppingCartIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("Usuario"); // Estado para controlar la pestaña activa

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-10 mx-10 py-16 sm:py-16">
      <div className="bg-white border rounded-3xl border-gray-300 mx-auto lg:flex lg:gap-x-0 lg:px-8 lg:mx-5 lg:my-10">
        <h1 className="sr-only">General Settings</h1>

        {/*Navigation*/}
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-48 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleTabChange(item.name)}
                    className={classNames(
                      activeTab === item.name
                        ? "bg-gray-50 text-buddies-blue-700"
                        : "text-gray-700 hover:text-buddies-blue-700 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        activeTab === item.name
                          ? "text-buddies-blue-700"
                          : "text-gray-400 group-hover:text-buddies-blue-700",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className=" w-full mx-auto lg:flex lg:gap-x-16 lg:mx-2 lg:py-20 lg:px-2">
          {activeTab === "Usuario" && <UserDashboard />}
          {activeTab === "Compras" && <UserCart />}
        </div>
      </div>
    </div>
  );
};
