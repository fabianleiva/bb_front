import { UserDashboard } from "../../components/UserDashboard";

export const MyProfile = () => {
  return (
    <div className="py-16 sm:py-16">
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Panel de usuario
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aca puedes ver y controlar toda tu información.
          </p>
        </div>
      </div> */}
      <div>
        <UserDashboard />
      </div>
    </div>
  );
};
