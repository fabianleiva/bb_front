import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { storeBulkBuddies } from "../../state/state";
import { LinearProgress } from "@mui/material";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Post = () => {
  const { post_id } = useParams();
  const POST_DETAIL_URL = `https://bulkbuddies.onrender.com/api/v1/post/${post_id}`;
  const [post, setPost] = useState([]);
  const [postLog, setPostLog] = useState(null);
  const [isUserJoined, setIsUserJoined] = useState(false);
  const [loading, setLoading] = useState(true);
  const [remainingRequiredStock, setRemainingRequiredStock] = useState(0);
  const [isSubmmited, setIsSubmitted] = useState(false)
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
        `http://localhost:3000/api/v1/post/stock/${post_id}`,
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
        `http://localhost:3000/api/v1/post/log/${post_id}`
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

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

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
          <div className="py-6 flex">
            {/* Image gallery */}
            <div className="my-6 w-2xl sm:px-6 lg:w-6xl lg:px-8">
              <div className=" hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={post.img_url}
                  alt={post.img_url}
                  className="w-full h-auto object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {post?.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <Link
                      to={reviews.href}
                      className="ml-3 text-sm font-medium text-buddies-blue-700 hover:text-buddies-blue-500"
                    >
                      {reviews.totalCount} reviews
                    </Link>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                      <Link
                        to="#"
                        className="text-sm font-medium text-buddies-blue-700 hover:text-buddies-blue-500"
                      >
                        Size guide
                      </Link>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active ? "ring-2 ring-buddies-blue-700" : "",
                                "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </form>
                <form
                  action=""
                  className="flex flex-col justify-center mt-3"
                  onSubmit={onSubmit}
                >
                  {remainingRequiredStock <= 0 ? (
                    <p className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                      Finalizado
                    </p>
                  ) : isUserJoined ? (
                    <button
                      type="submit"
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded"
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

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                  <div>
                    <h3>Contribución minima</h3>
                    {post?.min_contribution}

                    <h3>Unidades requeridas en total</h3>
                    {post?.required_stock}

                    <h3>Unidades faltantes para completar</h3>
                    {remainingRequiredStock < 0 ? (
                      <p className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                        Se ha completado
                      </p>
                    ) : (
                      remainingRequiredStock
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
