import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { storeBulkBuddies } from "../../state/state";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setAlert } = storeBulkBuddies();

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  const login = async (data) => {
    try {
      const request = await axios.post("http://localhost:3000/login", data);
      console.log(request.data);
      const { first_name, last_name, token } = request.data;

      setAlert({ type: "success", message: `Bienvenido ${first_name} ${last_name}` });
      localStorage.setItem("token", token);
    } catch ({ response }) {
      setAlert({ type: "error", message: response.data.message });
    }
  };

  const loginGoogle = async () => {
    window.open(`http://localhost:3000/auth/google`, "_self");
  };

  return (
    <>
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto" src="/bulkbuddies_logo.png" alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="relative -space-y-px rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Email address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Correo es requerido",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Correo no es válido",
                      },
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <small className="ml-1.5 text-red-600">{errors.email?.message}</small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small className="ml-1.5 text-red-600">{errors.email?.message}</small>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Contraseña es requerida",
                      },
                    })}
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                  {errors.password?.type === "required" && (
                    <small className="ml-1.5 text-red-600">{errors.password?.message}</small>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-buddies-blue-700 focus:ring-buddies-blue-700"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                    Recuérdame
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <Link to="#" className="font-semibold text-buddies-blue-700 hover:text-buddies-blue-500">
                    Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              {/*Login*/}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-buddies-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700">
                  Ingresar
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">O continúa con</span>
                </div>
              </div>

              {/*Login with google*/}
              <div className="mt-6">
                <button
                  onClick={loginGoogle}
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
                </button>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aún no eres miembro?{" "}
            <Link
              to="/auth/register"
              className="font-semibold leading-6 text-buddies-blue-700 hover:text-buddies-blue-500">
              Regístrate!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
