import { useState, useEffect, lazy } from "react";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import { storeBulkBuddies } from "../state/state";
import axios from "axios";
import { useForm } from "react-hook-form";

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


export const FieldProfile = ({
  label, userValue, editing,
  register, registerName, registerOptions,
  children }) => {
  return (
    <>
      <div className="pt-6 sm:flex">
        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
          {label}
        </dt>
        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">


          <div className="text-gray-900">
            {editing ? (
              <>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id={registerName}
                    name={`${registerName}`}
                    className="border border-gray-300 rounded-md px-3 py-1"
                    {...register(`${registerName}`, {
                      required: {
                        value: true,
                        message: "Campo es requerido",
                      },
                    })}
                  />
                  {children}
                </div>
              </>
            ) : `${userValue}`
            }
          </div>
        </dd>
      </div>
    </>
  )
}



export const UserDashboard = () => {

  const isAuth = storeBulkBuddies((state) => state.isAuth)
  const user = storeBulkBuddies((state) => state.user)

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const MOCK_USER = {
    first_name: "Ramon",
    last_name: "Martinez",
    email: "ramonmartinezcordero@gmail.com",
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors,
      isDirty,
      dirtyFields
    },
  } = useForm()

  useEffect(() => {
    if (!isAuth) {
      Navigate("/auth/login")
    }
    getDataUser()
  }, [])


  const getDataUser = async () => {
    try {
      const fetch = axios.get(`/user/${user.id}`)
      console.log(fetch.data)
    } catch (error) {

    }
    finally {

    }
  }

  const submit = handleSubmit((data) => {
    console.log(data)
    console.log('errors =>', errors)
  })

  const handleEditingEvent = () => {

    console.log(isDirty)
    console.log(dirtyFields)

    if (editing) {
      console.log("Guardando")
      submit()
      return
    }
    setEditing(!editing)

  }

  const updateProfile = async () => {

    try {
      setLoading(true)
      const fetch = axios.put(`/user/${user.id}`)
      console.log(fetch.data)
    }
    catch (error) {

    }
    finally {
      setLoading(false)
    }

  }

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

                <FieldProfile
                  label={"Nombre"}
                  userValue={MOCK_USER.first_name}
                  editing={editing}
                  setEditing={setEditing}
                  register={register}
                  registerName={"first_name"}
                  registerOptions={{
                    required: {
                      value: true,
                      message: "El nombre es requerido",
                    }
                  }}
                >
                  {errors.first_name?.type === "required" && (
                    <small className="ml-1.5 text-red-600">
                      {errors.first_name?.message}
                    </small>
                  )}
                  {errors.first_name?.type === "pattern" && (
                    <small className="ml-1.5 text-red-600">
                      {errors.first_name?.message}
                    </small>
                  )}
                </FieldProfile>


                <FieldProfile
                  label={"Apellido"}
                  userValue={MOCK_USER.last_name}
                  editing={editing}
                  setEditing={setEditing}
                  register={register}
                  registerName={"last_name"}
                />
                <FieldProfile
                  label={"Emial"}
                  userValue={MOCK_USER.email}
                  editing={editing}
                  setEditing={setEditing}
                  register={register}
                  registerName={"email"}
                />
              </dl>
            </div>

            <div className="flex gap-4 justify-end">

              <button
                onClick={() => handleEditingEvent()}
                className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500 bg-buddies-blue-100 px-4 py-2 rounded-md"
              >
                {
                  editing ? "Guardar" : "Actualizar"
                }
              </button>

              {editing &&
                <button
                  onClick={() => setEditing(!editing)}
                  className="font-semibold text-red-700 hover:text-red-500">
                  Cancelar
                </button>
              }
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
