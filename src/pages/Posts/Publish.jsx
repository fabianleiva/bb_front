import { CreatePost } from "../../components/CreatePost";

export const Publish = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nueva publicación
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Comparte lo que deseas importar y nosotros te ayudamos.
          </p>
        </div>
      </div>
      <div className="m-10 lg:mx-40 lg:my-20">
        <CreatePost />
      </div>
    </div>
  );
};
