/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { storeBulkBuddies } from "../state/state";
import DatePicker from "./DatePicker";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_CATEGORIES_URL, CREATE_NEW_POST } from "../api/urls";
import { storeDatePicker } from "../state/datepicker.store";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
export const CreatePost = () => {
  const { categories, setCategories } = storeBulkBuddies();
  const { isoDate } = storeDatePicker();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      img_url:
        "https://www.trschools.com/templates/imgs/default_placeholder.png",
    },
  });
  const { setIsPostCreated, isPostCreated } = storeBulkBuddies();
  //Get posts and categories data*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(GET_CATEGORIES_URL);
        setCategories(categoriesResponse.data.categories);
        console.log(isPostCreated);
        if (isPostCreated) {
          navigate("/posts/explore");
        }
      } catch (error) {
        console.log(error);
      }
    };
    setIsPostCreated(false);
    fetchData();
  }, [isPostCreated, setCategories]);

  const [date, setDate] = useState(null);

  const setAlert = storeBulkBuddies((state) => state.setAlert);
  const setIsAuth = storeBulkBuddies((state) => state.setIsAuth);
  const axiosPrivate = useAxiosPrivate();
  const onSubmit = handleSubmit(async (data) => {
    const finalData = {
      ...data,
      expiration_date: isoDate,
    };
    await createNewPost(finalData);
    console.log(finalData);
    setIsPostCreated(true);
  });

  const createNewPost = async (data) => {
    try {
      const request = await axiosPrivate.post(CREATE_NEW_POST, data);
      setAlert({
        type: "success",
        message: `Post creado`,
      });
    } catch ({ response }) {
      setAlert({
        type: "error",
        message:
          response.data.message["expiration_date"] || response.data.message,
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Información del producto
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Compártenos de que trata lo que quieres comprar.
            </p>
            {/*PRODUCT DETAILS*/}
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              {/*POST TITLE*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Título de la publicación
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="title"
                    id="post_title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Debes ingresar un título",
                      },
                    })}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>
              </div>

              {/*PRODUCT URL*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Url del producto
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="url"
                    id="post_url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("url", {
                      required: {
                        value: true,
                        message: "Debes ingresar una url del producto",
                      },
                    })}
                    placeholder="http://..."
                  />
                  {errors.url && (
                    <p className="text-sm text-red-500">{errors.url.message}</p>
                  )}
                </div>
              </div>

              {/*DESCRIPTION*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Descripción
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:text-sm sm:leading-6"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    defaultValue={""}
                  />
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Escribe una breve descripción del producto que quieres
                    comprar.
                  </p>
                </div>
              </div>

              {/*REREFENCE IMG*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="img_url"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Imagen de referencia (url)
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="img_url"
                    id="img_url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    placeholder="http://..."
                    {...register("img_url", {
                      required: {
                        value: false,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="w-100 flex justify-center">
                <img src={watch("img_url")} alt="" className="ml-4 w-64" />
              </div>
              {/*CATEGORY SELECT*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Categoria
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category_id"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("category_id", { required: true })}
                  >
                    <option>Seleccione una opción</option>
                    {categories.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/*BUYING DETAILS*/}
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Detalles de la compra
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Cuéntale a tus futuros buddies las condiciones de compra.
            </p>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              {/*MINIMUM UNITS*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="min_units"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Stock requerido para la compra
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="required_stock"
                    id="min_units"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("required_stock", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      max: {
                        value: 10000,
                        message: "El limite son 10 mil por producto",
                      },
                    })}
                  />
                  {errors.required_stock && (
                    <p className="text-red-500">
                      {errors.required_stock.message}
                    </p>
                  )}
                </div>
              </div>

              {/*MINIMUM CONTRIBUTION*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="min_contribution"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Aporte mínimo
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="min_contribution"
                    id="min_contribution"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("min_contribution", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      validate: (value) => {
                        if (Number(value) > Number(watch("required_stock"))) {
                          return "El aporte mínimo no puede ser mayor al stock requerido";
                        } else {
                          return true;
                        }
                      },
                    })}
                  />
                  {errors.min_contribution && (
                    <span className="text-red-500">
                      {errors.min_contribution.message}
                    </span>
                  )}
                </div>
              </div>
              {/*INITIAL CONTRIBUTION*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="initial_contribution"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Tu contribución inicial
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="user_stock"
                    id="initial_contribution"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("user_stock", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      validate: (value) => {
                        if (Number(value) > Number(watch("required_stock"))) {
                          return "La contribución inicial no puede ser mayor al stock requerido";
                        } else if (
                          Number(value) < Number(watch("min_contribution"))
                        ) {
                          return "La contribución inicial no puede ser menor al aporte mínimo";
                        } else {
                          return true;
                        }
                      },
                    })}
                  />
                  {errors.user_stock && (
                    <span className="text-red-500">
                      {errors.user_stock.message}
                    </span>
                  )}
                </div>
              </div>

              {/*UNIT PRICE*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="unit_price"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Precio unitario
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0 flex items-center gap-2 ">
                  <input
                    type="number"
                    name="unit_price"
                    id="unit_price"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buddies-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register("unit_price", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      min: {
                        value: 1,
                        message: "El valor debe ser mayor que 0",
                      },
                    })}
                  />
                  <span>$</span>
                  {errors.unit_price && (
                    <span className="text-red-500">
                      {errors.unit_price.message}
                    </span>
                  )}
                </div>
              </div>

              {/*EXPITRATION DATE*/}
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="exp_date"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Fecha límite del bulking
                </label>
                <div className="col-span-2 w-full">
                  <DatePicker />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-500"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-buddies-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700"
          >
            Publicar
          </button>
        </div>
      </form>
    </>
  );
};
