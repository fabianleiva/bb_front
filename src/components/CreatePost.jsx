import { Link } from "react-router-dom";

export const CreatePost = () => {
  return (
    <form>
      <div className="space-y-12">
        {/*PRODUCT DETAILS SECTION*/}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Detalles del producto
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Agrega información del producto que quieres traer.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/*Post title*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="post_title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Título de la publicación
              </label>
              <div className="mt-2">
                <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-buddies-blue-700 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="post_title"
                    id="post_title"
                    autoComplete="post_title"
                    className=" block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Dale un nombre a tu publicación"
                  />
                </div>
              </div>
            </div>

            {/*Product url*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="product_url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Link al producto que quieres comprar (Url)
              </label>
              <div className="mt-2">
                <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-buddies-blue-700 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="product_url"
                    id="product_url"
                    autoComplete="product_url"
                    className=" block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="http://..."
                  />
                </div>
              </div>
            </div>

            {/*Reference image*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="img_url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Imagen de referencia (Url)
              </label>
              <div className="mt-2">
                <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-buddies-blue-700 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="img_url"
                    id="img_url"
                    autoComplete="img_url"
                    className=" block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="http://..."
                  />
                </div>
              </div>
            </div>

            {/*Product description*/}
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción del producto
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Escribe un breve resumen del producto que deseas comprar.
              </p>
            </div>
          </div>
        </div>

        {/*BUYING DETAILS*/}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Detalles de la compra
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Añade información útil para tus buddies.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            {/*Min units*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="required_stock"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cantidad mínima a comprar (Unidades)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="required_stock"
                  id="required_stock"
                  autoComplete="required_stock"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/*Unit price*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="unit_price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Precio por unidad
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="unit_price"
                  id="unit_price"
                  autoComplete="unit_price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            {/*Deadline*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fecha límite para realizar la compra
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Contry of origin*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                País de procedencia
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>China</option>
                  <option>Estados Unidos</option>
                  <option>Japón</option>
                  <option>Alemania</option>
                  <option>Corea del Sur</option>
                  <option>Reino Unido</option>
                  <option>Francia</option>
                  <option>Italia</option>
                  <option>Canadá</option>
                  <option>México</option>
                  <option>India</option>
                  <option>Países Bajos</option>
                  <option>Taiwán</option>
                  <option>Hong Kong</option>
                  <option>Suiza</option>
                  <option>Singapur</option>
                  <option>Malasia</option>
                  <option>Brasil</option>
                  <option>Australia</option>
                  <option>Indonesia</option>
                  <option>España</option>
                  <option>Rusia</option>
                  <option>Emiratos Árabes Unidos</option>
                  <option>Polonia</option>
                  <option>Suecia</option>
                  <option>Sudáfrica</option>
                  <option>Turquía</option>
                  <option>Tailandia</option>
                  <option>Argentina</option>
                  <option>Israel</option>
                  <option>Noruega</option>
                  <option>Dinamarca</option>
                  <option>Egipto</option>
                  <option>Irlanda</option>
                  <option>Finlandia</option>
                  <option>Grecia</option>
                  <option>Portugal</option>
                  <option>Arabia Saudita</option>
                  <option>Colombia</option>
                  <option>Chile</option>
                  <option>Nueva Zelanda</option>
                  <option>Bélgica</option>
                  <option>Hungría</option>
                  <option>Chequia</option>
                  <option>Rumania</option>
                  <option>Austria</option>
                  <option>Ucrania</option>
                  <option>Filipinas</option>
                  <option>Bulgaria</option>
                  <option>Kazajistán</option>
                  <option>Perú</option>
                  <option>Eslovaquia</option>
                  <option>Qatar</option>
                  <option>Ecuador</option>
                  <option>Croacia</option>
                  <option>Omán</option>
                  <option>Kenia</option>
                  <option>Lituania</option>
                  <option>Eslovenia</option>
                  <option>Costa Rica</option>
                  <option>Guatemala</option>
                  <option>Uruguay</option>
                  <option>Panamá</option>
                  <option>Islandia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Publish or cancel buttons*/}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </Link>
        <Link
          type="submit"
          className="rounded-md bg-buddies-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Publicar
        </Link>
      </div>
    </form>
  );
};
