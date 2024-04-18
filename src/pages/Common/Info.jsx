import Navbar from "../../components/Navbar";

const timeline = [
  {
    name: "Publica",
    description:
      "Registrate en BulkBuddies, inicia sesión, crea una publicación, y comparte lo que deseas importar con otros usuarios.",
    step: "Paso 1",
  },
  {
    name: "Conecta",
    description:
      "Une fuerzas con otros usuarios, o buddies, que apoyen tu compra y deseen importar lo mismo para conseguir el monto mínimo.",
    step: "Paso 2",
  },
  {
    name: "Concreta",
    description:
      "Al conseguir el mínimo de artículos, se gestiona la compra y el despacho a los socios, de aqui en adelante todo va por nuestra cuenta ;).",
    step: "Paso 3",
  },
  {
    name: "Despacho",
    description:
      "Recibe los productos en la puerta de tu casa o donde desees, ahora es tu turno de poner en marcha la maquina!",
    step: "Paso 4",
  },
];

export const Info = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-buddies-bg shadow-xl ring-1 ring-buddies-blue-700-0 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Nos interesa conectar personas, conectar ideas, y colaborar con
                nuevos neogocios.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  En BulkBuddies trabajamos día a día para facilitar los
                  procesos de compra en el extranjero, con el fin de que este
                  sea cada vez mas accesible a personas que comienzan en el
                  mundo de las ventas.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <p className="flex items-center text-sm font-semibold leading-6 text-buddies-blue-700">
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.step}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </p>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-buddies-blue-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-buddies-bg sm:text-4xl">
              Nuestros clientes nos aman
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Muchas personas que antes no tenian los conocimientos o tiempo
              para poder importar, hoy en día ven crecer sus negocios mientas
              nosotros los ayudamos con la materia prima.
              <br />
              <br />
              Hemos generado nexos con grandes empresas que nos ayudan a
              agilizar los envios y conseguir aún mejores precios!
            </p>
            <div className="bg-buddies-bg px-10 rounded-full mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
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
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="https://s.globalsources.com/IMAGES/website/image/home/ic_logo_gs.svg"
                alt="global_sources"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://1000logos.net/wp-content/uploads/2020/07/DHgate-Logo.png"
                alt="dhgate"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://www.chinavasion.com/themes/whitecat/images/chinavasion_logo_newsletter.png"
                alt="chinavision"
                width={158}
                height={48}
              />
            </div>
            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 mr-40">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Nuestro equipo
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  En BulkBuddies trabajamos con profesionales de distintas
                  áreas, lo que genera una sinergia que permite que día a día
                  sigamos innovando y mejorando la experiencia de nuestros
                  usuarios.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="team1"
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="team2"
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      alt="team3"
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661881097614-1335b0ffad9d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="team4"
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 mb-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nosotros acercamos el mundo a nuestros usuarios, mediante procesos
              confiables de compra que entregan valor a quienes los utilizan.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              BulkBuddies se posiciona hoy como la unica empresa capaz de
              entregar un servicio intermedio entre grandes vendedores y
              pequeños compradores.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                250k
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">
                  Usuarios en la plataforma
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Cifra no menor pensando que nuestra empresa comienza sus
                  operaciones en 2023.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                $8.9 billion
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Estamos orgullosos de que nuestros usuarios hayan realizado
                  compras durante el ultimo año de mas de $8 billones de
                  dolares.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  Las compras promedio son de alrededor de los $300.000 usd.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-buddies-blue-700 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                401,093
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Transacciones este año
                </p>
                <p className="mt-2 text-base leading-7 text-indigo-200">
                  El total de transacciones realizadas durante el último año no
                  deja de crecer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
