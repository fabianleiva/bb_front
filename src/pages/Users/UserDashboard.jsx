import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { storeBulkBuddies } from "../../state/state";
import axios from "axios";
import { set, useForm } from "react-hook-form";

export const FieldProfile = ({
  label, userValue, editing,
  register, registerName, registerOptions,
  disabled = false,
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
                    disabled={disabled}
                    type="text"
                    id={registerName}
                    name={`${registerName}`}
                    className="border border-gray-300 rounded-md px-3 py-1"
                    {...register(`${registerName}`, registerOptions)}
                  />
                  {disabled && <small className="text-gray-500">
                    No puedes editar este campo
                  </small>
                  }
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

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      rut: userData.rut,
      phone: userData.phone,
      address: userData.address,
      postal_code: userData.postal_code
    }
  })

  useEffect(() => {
    if (!isAuth) {
      Navigate("/auth/login");
    } else {
      getUserData();
    }
  }, []);

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/user/${user.id}`);
      setUserData(response.data);

      setValue("first_name", user.first_name);
      setValue("last_name", user.last_name);
      setValue("username", user.username);
      setValue("email", user.email);
      setValue("rut", response.data.rut);
      setValue("phone", response.data.phone);
      setValue("address", response.data.address);
      setValue("postal_code", response.data.postal_code);


      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      setLoading(false);
    }
  };

  const setAlert = storeBulkBuddies((state) => state.setAlert);

  const submit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await axios.put(`/profile/${user.id}`, data);

      await getUserData();
      console.log("Perfil actualizado correctamente", data);

      setAlert({
        type: "success",
        message: `Perfil actualizado correctamente`,
      });
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setAlert({
        type: "error",
        message: error.message || `Error al actualizar el perfil`,
      });
    } finally {
      setLoading(false);
      setEditing(false);
    }
  });

  const handleEditingEvent = () => {
    if (editing) {
      submit();
      return;
    }
    setEditing(!editing);
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
                registerOptions={{
                  required: {
                    value: true,
                    message: "El Apellido es requerido",
                  }
                }}
              >
                {errors.last_name?.type === "required" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.last_name?.message}
                  </small>
                )}
                {errors.last_name?.type === "pattern" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.last_name?.message}
                  </small>
                )}
              </FieldProfile>

              <FieldProfile
                label={"Nombre de Usuario"}
                userValue={user.username}
                editing={editing}
                setEditing={setEditing}
                register={register}
                registerName={"username"}
                registerOptions={{
                  required: {
                    value: true,
                    message: "El username es requerido",
                  }
                }}
              >
                {errors.username?.type === "required" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.username?.message}
                  </small>
                )}
                {errors.username?.type === "pattern" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.username?.message}
                  </small>
                )}
              </FieldProfile>

              <FieldProfile
                label={"Rut"}
                userValue={userData.rut || "Sin información"}
                editing={editing}
                setEditing={setEditing}
                register={register}
                registerName={"rut"}
                registerOptions={{
                  required: {
                    value: true,
                    message: "El Rut es requerido",
                  }
                }}
              >
                {errors.rut?.type === "required" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.rut?.message}
                  </small>
                )}
                {errors.rut?.type === "pattern" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.rut?.message}
                  </small>
                )}
              </FieldProfile>

              <FieldProfile
                label={"Telefono"}
                userValue={userData.phone || "Sin información"}
                editing={editing}
                setEditing={setEditing}
                register={register}
                registerName={"phone"}
                registerOptions={{
                  required: {
                    value: true,
                    message: "El telefono es requerido",
                  }
                }}
              >
                {errors.phone?.type === "required" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.phone?.message}
                  </small>
                )}
                {errors.phone?.type === "pattern" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.phone?.message}
                  </small>
                )}
              </FieldProfile>

              <FieldProfile
                label={"Direccion"}
                userValue={userData.address || "Sin información"}
                editing={editing}
                setEditing={setEditing}
                register={register}
                registerName={"address"}
                registerOptions={{
                  required: {
                    value: true,
                    message: "La direccion es requerida",
                  }
                }}
              >
                {errors.address?.type === "required" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.address?.message}
                  </small>
                )}
                {errors.address?.type === "pattern" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.address?.message}
                  </small>
                )}
              </FieldProfile>


              <FieldProfile
                label={"Codigo Postal"}
                userValue={userData.postal_code || "Sin información"}
                editing={editing}
                setEditing={setEditing}
                register={register}
                registerName={"postal_code"}
                registerOptions={{
                  required: {
                    value: true,
                    message: "La comuna es requerida",
                  }
                }}
              >
                {errors.postal_code?.type === "required" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.postal_code?.message}
                  </small>
                )}
                {errors.postal_code?.type === "pattern" && (
                  <small className="ml-1.5 text-red-600">
                    {errors.postal_code?.message}
                  </small>
                )}
              </FieldProfile>

              <FieldProfile
                label={"Email"}
                disabled={true}
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
