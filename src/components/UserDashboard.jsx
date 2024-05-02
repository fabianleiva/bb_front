import { useState, useEffect, lazy } from "react";
import { Navigate } from "react-router-dom";
import { storeBulkBuddies } from "../state/state";
import axios from "axios";
import { useForm } from "react-hook-form";

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
  console.log(user);

  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

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
    // getDataUser()
  }, [])


  // const getDataUser = async () => {
  //   try {
  //     const fetch = axios.get(`/user/${user.id}`)
  //     console.log(fetch.data.data)
  //   } catch (error) {

  //   }
  //   finally {

  //   }
  // }

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
        <main className="px-4 my-2 sm:px-6 lg:flex-auto lg:px-0">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            {/*Profile info*/}
            <div className="h-full">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Información personal
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Estos datos serán de carácter público, ten precaución con lo que
                compartes.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">

                <FieldProfile
                  label={"Nombre"}
                  userValue={user.first_name}
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
                  userValue={user.last_name}
                  editing={editing}
                  setEditing={setEditing}
                  register={register}
                  registerName={"last_name"}
                />
                <FieldProfile
                  label={"Emial"}
                  userValue={user.email}
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
    </>
  );
};
