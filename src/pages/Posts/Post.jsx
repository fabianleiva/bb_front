import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { storeBulkBuddies } from "../../state/state";
import { LinearProgress } from "@mui/material";
import dayjs from "dayjs";

export const Post = () => {
  const { post_id } = useParams();
  const POST_DETAIL_URL = `/post/${post_id}`;
  const [post, setPost] = useState([]);
  const [postLog, setPostLog] = useState(null);
  const [isUserJoined, setIsUserJoined] = useState(false);
  const [loading, setLoading] = useState(true);
  const [remainingRequiredStock, setRemainingRequiredStock] = useState(0);
  const [isSubmmited, setIsSubmitted] = useState(false);
  const [user, setUser] = useState();
  const {
    handleSubmit,
    register,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    watch,
  } = useForm();

  const setIsAuth = storeBulkBuddies((state) => state.setIsAuth);
  const setAlert = storeBulkBuddies((state) => state.setAlert);

  const onSubmit = handleSubmit(async (data) => {
    const currentUserInfo = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    const finalData = {
      user_id: currentUserInfo.id,
      ...data,
    };
    await joinPost(finalData);
    setIsSubmitted(true);
    console.log(isSubmmited);
    console.log(finalData);
  });

  const joinPost = async (data) => {
    try {
      const response = await axios.patch(
        `https://bulkbuddies.onrender.com/api/v1/post/stock/${post_id}`,
        data
      );
      console.log(response.data);
      setAlert({
        type: "success",
        message: `Te has unido al post`,
      });
    } catch (error) {
      console.log(error);
      setAlert({
        type: "error",
        message: `Error al unirte al post`,
      });
    }
  };
  const checkIfUserJoined = () => {
    try {
      const currentUserInfo = JSON.parse(localStorage.getItem("user"));
      if (!postLog) return;

      const findUser = postLog.some(
        (log) => log.user_id === currentUserInfo.id
      );
      const mapi = postLog.map((log) => {
        return log.user_id;
      });
      console.log("this is mapi", mapi, "and finduser", findUser);
      if (findUser) {
        setIsUserJoined(true);
      } else {
        setIsUserJoined(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRemainingRequiredStock = () => {
    try {
      if (!postLog) return;
      const sum = postLog.reduce((acc, log) => {
        return acc + log.item_by_this_user;
      }, 0);

      console.log("sum final", sum - post?.required_stock);
      const required_stock = post?.required_stock;
      console.log("post required stock", post?.required_stock);
      setRemainingRequiredStock(required_stock - sum);
      console.log("is not a number", isNaN(remainingRequiredStock));
    } catch (error) {
      console.log(error);
    }
  };
  const getPostLog = async () => {
    try {
      const postResponse = await axios.get(
        `https://bulkbuddies.onrender.com/api/v1/post/log/${post_id}`
      );
      const { logs } = postResponse.data;
      if (!postLog) {
        setPostLog(logs);
        setLoading(false);
      }
      console.log(logs);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  //Get posts and categories data*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(POST_DETAIL_URL);

        if (post.length === 0) {
          setPost(postResponse.data);
        }

        console.log(postResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    getPostLog();
    checkIfUserJoined();
    getRemainingRequiredStock();
    console.log("submitted", isSubmmited);
  }, [postLog, remainingRequiredStock, post, isSubmmited]);

  useEffect(() => {
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
      getUserData();
    }
  }, [post]);

  return loading ? (
    <>
      <LinearProgress />
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
                    <p className="text-lg tracking-tight text-red-500">
                      Fecha límite:{" "}
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
                    <p className="bg-red-500 text-white font-bold py-2 px-4 rounded-md">
                      Finalizado
                    </p>
                  ) : isUserJoined ? (
                    <button
                      type="submit"
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded-md"
                    >
                      Ya te has unido
                    </button>
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
                      Toocki New 20W Gan Charger Portable Mobile Phones Charger
                      USB Type C Fast Wall Charger for Iphone Android
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
                      <span className="text-gray-600">
                        Unidades faltantes:{" "}
                        {remainingRequiredStock < 0 ? (
                          <p className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                            Se ha completado
                          </p>
                        ) : (
                          remainingRequiredStock
                        )}{" "}
                        un
                      </span>
                    </li>
                  </ul>
                </div>

                {/* User */}
                <div className="lg:mt-10">
                  <h2 className="text-sm font-medium text-gray-900 mt-10">
                    Creado por:{" "}
                    <span className="lowercase text-gray-400 font-normal">
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
