import { Link } from "react-router-dom";
import { useState } from "react";
import HttpService from "../../service/http.service";
import { REGISTER_URL } from "../../api/urls";

export const Register = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const [validForm, setValidForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Formulario inválido");
    }
    registerUser();
  };

  const validateForm = () => {
    if (form.first_name === "") {
      return false;
    }
    if (form.last_name === "") {
      return false;
    }
    if (form.email === "") {
      return false;
    }
    if (form.password === "") {
      return false;
    }
    if (form.password !== form.repeat_password) {
      return false;
    }
    return true;
  };

  const registerUser = async () => {
    try {
      const response = await HttpService.post(REGISTER_URL, form);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setValidForm(validateForm());
  };

  return (
    <>
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto" src="/bulkbuddies_logo.png" alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Regístrate</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div className="relative -space-y-px rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                <div>
                  <label htmlFor="first_name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="first_name"
                    required
                    onChange={handleChange}
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="sr-only">
                    Apellido
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="last_name"
                    onChange={handleChange}
                    required
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Apellido"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    required
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Correo"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Contraseña"
                  />
                </div>
                <div>
                  <label htmlFor="repeat_password" className="sr-only">
                    Repetir Contraseña
                  </label>
                  <input
                    id="repeat_password"
                    name="repeat_password"
                    type="password"
                    autoComplete="off"
                    required
                    onChange={handleChange}
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Repetir Contraseña"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={!validForm}
                  onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-buddies-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700
                  disabled:opacity-50 disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:focus-visible:outline-offset-0 disabled:text-gray-500 disabled:focus-visible:outline-0 
                  ">
                  Crear cuenta
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">O regístrate con</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                  <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">Google</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
