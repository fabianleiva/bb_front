import { useState, useEffect, lazy } from "react";
import { Navigate } from "react-router-dom";
import { storeBulkBuddies } from "../state/state";
import axios from "axios";
import { useForm } from "react-hook-form";

export const FieldProfile = ({
  label,
  userValue,
  editing,
  register,
  registerName,
  registerOptions,
  children,
}) => {
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
            ) : (
              `${userValue}`
            )}
          </div>
        </dd>
      </div>
    </>
  );
};

export const UserCart = () => {
  const isAuth = storeBulkBuddies((state) => state.isAuth);
  const user = storeBulkBuddies((state) => state.user);
  console.log(user);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm();

  useEffect(() => {
    if (!isAuth) {
      Navigate("/auth/login");
    }
  }, []);

  const submit = handleSubmit((data) => {
    console.log(data);
    console.log("errors =>", errors);
  });

  const people = [
    {
      title: "Abrigos de perro",
      category: "Mascotas",
      role: "Creador",
      status: "2000/10000",
      exp_date: "13-09-2024"
    },
    // More people...
  ];

  return (
    <>
      <main className="px-4 my-2 sm:px-6 lg:flex-auto lg:px-0">
        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
          {/*Shopping details*/}
          <div className="h-full">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Detalle de compras
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              Aquí puedes ver información de las publicaciones que has creado o
              de las cuales participas.
            </p>

            <dl className="mt-6 space-y-6 divide-y divide-gray-100 text-sm leading-6">
              {/*Table details*/}
              <div id="table">
                <div className="px-4 sm:px-6">
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-2">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-buddies-blue-700 sm:pl-0"
                              >
                                Título del post
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Categoría
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Rol
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-right text-sm font-semibold text-buddies-blue-700"
                              >
                                Fecha límite
                              </th>

                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {people.map((person) => (
                              <tr key={person.email}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                  {person.title}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {person.category}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {person.role}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {person.status}
                                </td>
                                <td className="whitespace-nowrap px-3 text-right py-4 text-sm text-gray-500">
                                  {person.exp_date}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dl>
          </div>

          <div className="flex gap-4 justify-end"></div>
        </div>
      </main>
    </>
  );
};
