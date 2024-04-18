import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-[100vh]">
      <main className="min-h-[100vh] grid place-items-center bg-buddies-bg px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-buddies-blue-700">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Página no encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Perdón, no hemos encontrado la página que estas buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/home"
              className="rounded-md bg-buddies-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-g-buddies-blue-700"
            >
              Volver a BulkBuddies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
