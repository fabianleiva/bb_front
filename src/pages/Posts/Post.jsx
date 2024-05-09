import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { storeBulkBuddies } from "../../state/state";
import { LinearProgress } from "@mui/material";
import dayjs from "dayjs";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
export const Post = () => {
  const { post_id } = useParams();
  const POST_DETAIL_URL = `/post/${post_id}`;
  const [post, setPost] = useState({});
  const [postLog, setPostLog] = useState(null);

  const [isUserJoined, setIsUserJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  const [remainingRequiredStock, setRemainingRequiredStock] = useState(0);
  const [isSubmmited, setIsSubmitted] = useState(false);
  const [user, setUser] = useState();
  const axiosPrivate = useAxiosPrivate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const setAlert = storeBulkBuddies((state) => state.setAlert);

  const onSubmit = handleSubmit(async (data) => {
    const currentUserInfo = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    try {
      await joinPost({
        ...data,
        user_id: currentUserInfo.id,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchAll();
  }, [isSubmmited]);

  const fetchAll = async () => {
    const getDetailsPost = async () => {
      try {
        const { data } = await axios.get(POST_DETAIL_URL);
        if (!data) return;
        const highlights = [
          `Unidades requeridas: ${data.required_stock},
          Contribución minima: ${data.min_contribution}`,
        ];
        setPost({
          ...data,
          highlights,
        });
      } catch (error) {
        console.log(error);
      }
    };
    await getDetailsPost();
    await getPostLog();
  };

  useEffect(() => {
    console.log("is there a post", post);
    if (post && post.created_by) {
      const GET_USER_URL = `/user/${post.created_by}`;
      const getUserData = async () => {
        try {
          const userResponse = await axios.get(GET_USER_URL);
          setUser(userResponse.data);
        } catch (error) {
          console.log(error);
        }
      };
      getRemainingRequiredStock(postLog);
      getUserData();
    }
  }, [remainingRequiredStock]);

  const joinPost = async (data) => {
    try {
      const response = await axiosPrivate.patch(`/post/stock/${post_id}`, data);
      console.log(response.data);
      setAlert({
        type: "success",
        message: `Te has unido al post`,
      });
      setPost(response.data.post);
    } catch (error) {
      console.log(error);
      setAlert({
        type: "error",
        message: `Error al unirte al post`,
      });
    }
  };
  const checkIfUserJoined = (postLog) => {
    try {
      if (!postLog) return;
      const currentUserInfo = JSON.parse(localStorage.getItem("user"));
      console.log(currentUserInfo.id);
      const findUser = postLog.some(
        (log) => log.user_id === currentUserInfo.id
      );
      findUser ? setIsUserJoined(true) : setIsUserJoined(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getRemainingRequiredStock = (logs) => {
    try {
      console.log(logs);
      if (!logs) return;
      const sum = logs.reduce((acc, log) => {
        return acc + log.item_by_this_user;
      }, 0);

      const required_stock = post.required_stock;

      const result = required_stock - sum;
      setRemainingRequiredStock(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostLog = async () => {
    setLoading(true);
    try {
      const postResponse = await axios.get(
        `https://bulkbuddies.onrender.com/api/v1/post/log/${post_id}`
      );
      const { logs } = postResponse.data;
      if (!logs) return;
      setLoading(false);
      setPostLog(logs);

      getRemainingRequiredStock(logs);
      checkIfUserJoined(logs);
    } catch (error) {
      console.log(error);
    }
  };

  //Get posts and categories data*/

  return loading ? (
    <>
      <div className="mt-16">
        <LinearProgress />
      </div>
    </>
  ) : (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        {/*Post Title*/}
        <div className="mx-auto max-w-2xl text-center mb-6">
          <h2 className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h2>
        </div>

        {/* Product section */}
        <div className="bg-white shadow-lg rounded-3xl">
          {/* FLEX CONTAINER */}
          <div className="px-10 py-10 flex flex-col lg:flex-row">
            {/* Reference Image */}
            <div className="max-w-full lg:py-8 w-2xl lg:w-6xl lg:px-8">
              <div className=" overflow-hidden rounded-lg lg:block ">
                <img
                  src={post.img_url}
                  alt={post.img_url}
                  className="w-full h-auto object-center lg:w-[35vw] lg:min-w-[35vw]"
                />
              </div>
            </div>

            {/* Product general info */}
            <div className="mx-auto w-full py-8 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:py-8">
              {/* Add contribution */}
              <div className="mt-4 lg:col-span-3 lg:mt-0">
                {/* Price and expiration date */}
                <div className="flex justify-between">
                  <div>
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-lg tracking-tight text-gray-500">
                      {post.required_stock} unidades
                    </p>
                    <p className="text-3xl tracking-tight text-gray-900 font-bold">
                      ${post.unit_price} /usd
                    </p>
                  </div>
                  <div>
                      <p className="text-lg tracking-tight text-red-500 outline outline-1 outline-red-500 px-6 py-1 rounded-md">
                        Fecha límite: {""}
                      {dayjs(post.expiration_date).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </div>

                <form
                  action=""
                  className="flex flex-col justify-center mt-3"
                  onSubmit={onSubmit}
                >
                  {remainingRequiredStock <= 0 ? (
                      <p className="bg-red-500 text-white font-bold py-2 px-4 rounded-md text-center">
                      Finalizado
                    </p>
                  ) : isUserJoined ? (
                        <span className=" bg-emerald-500 text-white font-bold py-2 px-4 rounded-md text-center">
                      Ya te has unido
                    </span>
                  ) : (
                    <>
                      <label
                        htmlFor="contribution"
                        className="text-gray-900 text-center font-semibold"
                      >
                        Ingresa tu contribución
                      </label>
                      <input
                        type="number"
                        id="contribution"
                        name="user_contribution"
                        {...register("user_contribution")}
                        className="rounded-md"
                      />
                      {errors.user_contribution?.type === "validate" && (
                        <small className="text-red-500">
                          {errors.user_contribution.message}
                        </small>
                      )}
                      <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-buddies-blue-700 px-8 py-3 text-base font-medium text-white hover:bg-buddies-blue-500 focus:outline-none focus:ring-2 focus:ring-buddies-blue-700 focus:ring-offset-2"
                      >
                        Unirse
                      </button>
                    </>
                  )}
                </form>
              </div>

              {/* Info */}
              <div className="py-10 lg:col-span-3 lg:col-start-1 lg:pt-0">
                {/* Details */}
                <div className="lg:mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Descripción del producto
                  </h2>
                  <div className="mt-2 space-y-6">
                    <p className="text-sm text-gray-600">
                    {post.description}
                    </p>
                  </div>

                  <h2 className="text-sm font-medium text-gray-900 mt-10">
                    Detalles de compra
                  </h2>

                  <ul
                    role="list"
                    className="list-disc space-y-2 pl-4 text-sm mt-2"
                  >
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Total de unidades requeridas: {post?.required_stock} un
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Contribución minima: {post?.min_contribution} un
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <p className="text-gray-600">
                        Unidades faltantes:
                        {remainingRequiredStock < 0 ? (
                          <span className="text-red-500 font-bold py-2 px-4 rounded">
                            Se ha completado
                          </span>
                        ) : (
                          remainingRequiredStock
                        )}
                      </p>
                    </li>
                  </ul>
                </div>

                {/* User */}
                <div className="lg:mt-10">
                  <h2 className="text-sm font-medium text-gray-900 mt-10">
                    Creado por:
                      <span className="ml-1 lowercase text-gray-400 font-normal">
                      {user?.username}
                    </span>
                  </h2>
                </div>

                {/* Link to product */}
                <div className="lg:mt-10">
                  <h2 className="text-sm font-medium text-gray-900 mt-10">
                    Ver producto:{" "}
                  </h2>
                  <a
                    href={post?.url}
                    target="_blank"
                    className="lowercase font-normal text-buddies-blue-700"
                  >
                    {post?.url}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
