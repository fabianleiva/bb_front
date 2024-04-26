import { useState } from "react";
import { Switch } from "@headlessui/react";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team members", href: "#", icon: UsersIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const UserDashboard = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);

  return (
    <>
      <div className="bg-white border rounded-3xl border-gray-300 mx-auto lg:flex lg:gap-x-16 lg:px-8 lg:mx-10 lg:my-10">
        <h1 className="sr-only">General Settings</h1>
        
        {/*Navigation*/}
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-buddies-blue-700"
                        : "text-gray-700 hover:text-buddies-blue-700 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-buddies-blue-700"
                          : "text-gray-400 group-hover:text-buddies-blue-700",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            {/*Profile info*/}
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Mi perfil
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Esta información será pública, ten precaución con lo que
                compartes.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Nombre
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Tom</div>
                    <Link
                      className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500"
                    >
                      Actualizar
                    </Link>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Apellido
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Cook</div>
                    <Link
                      className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500"
                    >
                      Actualizar
                    </Link>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Correo
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">tom.cook@example.com</div>
                    <Link
                      className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500"
                    >
                      Actualizar
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>

            {/*Language and date*/}
            <div >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Language and dates
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Choose what language and date format to use throughout your
                account.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Language
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">English</div>
                    <Link
                      className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500"
                    >
                      Update
                    </Link>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Date format
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">DD-MM-YYYY</div>
                    <Link
                      className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500"
                    >
                      Update
                    </Link>
                  </dd>
                </div>
                <Switch.Group as="div" className="flex pt-6">
                  <Switch.Label
                    as="dt"
                    className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
                    passive
                  >
                    Automatic timezone
                  </Switch.Label>
                  <dd className="flex flex-auto items-center justify-end">
                    <Switch
                      checked={automaticTimezoneEnabled}
                      onChange={setAutomaticTimezoneEnabled}
                      className={classNames(
                        automaticTimezoneEnabled
                          ? "bg-buddies-blue-700"
                          : "bg-gray-200",
                        "flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          automaticTimezoneEnabled
                            ? "translate-x-3.5"
                            : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};