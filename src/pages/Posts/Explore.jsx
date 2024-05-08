import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_POSTS_URL } from "../../api/urls";
import { storeBulkBuddies } from "../../state/state";
import dayjs from "dayjs";
import { LinearProgress } from "@mui/material";

export const Explore = () => {
  const { products, setProducts } = storeBulkBuddies();
  const categories = storeBulkBuddies((state) => state.categories);

  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState();
  //Get posts and categories data*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get(GET_POSTS_URL);
        setProducts(postsResponse.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (categories) {
      const newList = Object.values(categories);
      setCategoryList(newList);
    }
    console.log(category);
    fetchData();
  }, [category]);

  return loading ? (
    <>
      <div className="mt-16">
        <LinearProgress />
      </div>
    </>
  ) : (
    <div className="px-2 py-24 sm:py-32 border min-h-[100vh]">
      <div className="mx-auto max-w-7xl xl:max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Publicaciones
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Busca un artículo interesante y une fuerzas para comprar al menor
            precio.
          </p>
        </div>
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
              value={(e) => setCategory(e.target.value)}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Seleccione una opción</option>
              {categoryList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 place-content-center">
          {/*Render Cards*/}
          {products.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start bg-white rounded-3xl p-5 shadow-md justify-between max-w-2xl"
            >
              <div>
                <span className="text-gray-500 mb-2 text-sm">
                  {categories[post?.category_id].name}
                </span>
                {/*Image url*/}
                <Link to={`/posts/${post.id}`} className="w-full">
                  <div className="relative w-full group overflow-hidden rounded-2xl">
                    <img
                      src={post.img_url}
                      alt={post.title}
                      className="overflow-auto overflow-hidden aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-500 transform group-hover:scale-110"
                    />

                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 w-full" />
                  </div>
                </Link>
                {/*Post Info*/}
                <Link to={`/posts/${post.id}`} className="w-full">
                  <div className="mt-5 flex-col items-center gap-x-4 text-xs justify-between"></div>
                  <div className="group relative ">
                    <h3 className="uppercase mt-3 mb-5 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 group-hover:underline">
                      <p className="hover:underline">{post.title} </p>
                    </h3>
                    <p className="capitalize mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                    <div className="flex text mt-5">
                      <p className="mr-1 line-clamp-3 text-lg font-semibold leading-6 text-gray-600">
                        ${post.unit_price} usd
                      </p>
                      <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                        / Precio unitario
                      </p>{" "}
                    </div>
                    <p className=" line-clamp-3 text-sm leading-6 text-gray-600">
                      Aporte minimo: {post.min_contribution} un
                    </p>
                  </div>
                </Link>
              </div>
              <div className="flex-col w-full mt-5 justify-start">
                {/*Expiration date*/}
                <div className="mt-5">
                  <time className="text-red-500 text-xs">
                    Expira: {dayjs(post.expiration_date).format("DD/MM/YYYY")}{" "}
                  </time>
                </div>
                {/*Go to product url*/}
                <div className="justify-start lg:flex mt-5">
                  <Link
                    to={post.url}
                    className="flex w-full justify-center w-auto rounded-full bg-white border border-buddies-blue-700 px-6 py-1 text-sm font-semibold text-buddies-blue-700 shadow-sm hover:bg-buddies-blue-700 hover:text-buddies-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700"
                  >
                    Ir al producto
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
