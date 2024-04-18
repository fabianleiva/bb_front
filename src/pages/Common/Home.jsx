import {
  CloudArrowUpIcon,
  LinkIcon,
  ShoppingBagIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";
import Testimonials from "../../components/Testimonials";
import Newsletter from "../../components/Newsletter";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Footer } from "../../components/Footer";
const primaryFeatures = [
  {
    name: "Crea un post.",
    description:
      "Publica un artículo de tu interés y deja que nosotros te ayudemos a difundirlo.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Conecta.",
    description:
      "Encuentra personas que quieran comprar el mismo producto y permiteles ser parte del negocio.",
    icon: LinkIcon,
  },
  {
    name: "Compra.",
    description:
      "Llega a la meta de items y nosotros nos encargamos de traerlo y distribuirlo!",
    icon: ShoppingBagIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Compra asegurada",
    description:
      "Si algo sale mal con tu compra, no te preocupes, te devolvemos el dinero a ti y a tus socios para que puedan volver a buscar.",
    href: "/info",
    icon: ShieldCheckIcon,
  },
  {
    name: "Despacho dividido",
    description:
      "Te ayudamos a gestionar el despacho a cada uno de tus socios desde nuestra bodega, solo recibiras lo que te corresponde.",
    href: "/info",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Aduanas e impuestos",
    description:
      "Nos encargamos de gestionar los costos de importación al momento de la compra, dividiendo proporcionalmente este entre los socios.",
    href: "/info",
    icon: CurrencyDollarIcon,
  },
];

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section>
        {/* Hero Section */}
        <section className="relative isolate">
          {/* Grid */}
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          {/* Bg color */}
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                {/* Text */}
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="flex text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    BulkBuddies <h1 className="text-buddies-blue-700">.</h1>
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none">
                    <b>
                      Asóciate con personas y compra en el extranjero, al mejor
                      precio!
                    </b>
                    <br />
                    Mediante nuestro sistema de bulking facilitamos que accedas
                    a precios mayoristas sin tener que comprar unidades en
                    exceso, compra en base a lo que puedas vender!
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      to="/posts/explore"
                      className="rounded-md bg-buddies-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700"
                    >
                      Comienza
                    </Link>
                    <HashLink
                      smooth
                      to="/home/#testimonials"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Ver experiencias <span aria-hidden="true">→</span>
                    </HashLink>
                  </div>
                </div>
                {/* Images */}
                <div className="mt-14 flex justify-center gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1620306677888-10e367e6293d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1592963219838-6045ccbe0563?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo cloud */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 grayscale">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://amazon-prensa.es/dam/jcr:19614906-2857-47ca-8b4e-92606c927f2b/Amazon%20Business%20logo.png"
              alt="amazon_business"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://1000logos.net/wp-content/uploads/2018/10/Alibaba-Logo.png"
              alt="alibaba"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://s.globalsources.com/IMAGES/website/image/home/ic_logo_gs.svg"
              alt="global_sources"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://1000logos.net/wp-content/uploads/2020/07/DHgate-Logo.png"
              alt="dhgate"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://www.chinavasion.com/themes/whitecat/images/chinavasion_logo_newsletter.png"
              alt="chinavision"
              width={158}
              height={48}
            />
          </div>
        </section>

        {/* Feature section 1 */}
        <section className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-buddies-blue-700 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Aumenta tus ganancias.
                  <br />
                  Comienza hoy el Bulking.
                </h2>
                <p className="mt-6 text-lg leading-8 text-buddies-blue-300">
                  Publica un articulo que desees comercializar y encuentra
                  socios para importarlo rápido, y siempre al mejor precio.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-buddies-blue-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-buddies-bg">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-buddies-bg"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Feature section 2 */}
        <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-buddies-blue-700">
              Compra fácil, compra seguro
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Importar nunca fue tan sencillo
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Olvídate del trabajo que genera hacer compras en el extranjero, o
              de los montos mínimos para compras al por mayor, tú nos dices que
              producto quieres, te ayudamos a conseguir socios con el mismo
              interés y gestionamos tu compra y despacho mientras tu planificas
              las ventas!.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-buddies-blue-700"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        to={feature.href}
                        className="text-sm font-semibold leading-6 text-buddies-blue-700"
                      >
                        Conoce más <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Newsletter section */}
        <section>
          <Newsletter />
        </section>

        {/* Testimonials section */}
        <section id="testimonials">
          <Testimonials />
        </section>
      </section>
      <Footer />
    </div>
  );
};
