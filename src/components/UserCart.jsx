import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { storeBulkBuddies } from "../state/state";
import axios from "axios";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";


export const UserCart = () => {
  const isAuth = storeBulkBuddies((state) => state.isAuth);
  const user = storeBulkBuddies((state) => state.user);
  const categories = storeBulkBuddies((state) => state.categories);
  const [loading, setLoading] = useState(false)

  const [post, setPosts] = useState(null)

  useEffect(() => {
    if (!isAuth) {
      Navigate("/auth/login");
    }

    setLoading(true)
    const getPost = async () => {
      const { data: { logs } } = await axios.get(`/post/user/log/${user.id}`)
      if (!logs) return
      setLoading(false)
      setPosts(logs)
      console.log(logs)
    }

    getPost()

  }, []);

  return (
    <>
      <main className="px-4 my-2 sm:px-6 lg:flex-auto lg:px-0">
        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
          {/*Shopping details*/}
          <div className="h-full">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Bulkings
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              Aquí puedes ver información de las publicaciones que has creado o te haz unido
            </p>


            <dl className="mt-6 space-y-6 divide-y divide-gray-100 text-sm leading-6">
              {/*Table details*/}
              <div id="table">
                <div className="px-4 sm:px-6">
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-2">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-buddies-blue-700 sm:pl-0"
                              >
                                Producto
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Categoría
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Rol
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-buddies-blue-700"
                              >
                                Fecha límite
                              </th>

                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {!loading ?
                              (post && post.map((item, index) => (
                                <tr key={item.post_id + index}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    {item.title}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {categories[item.category_id].name}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {item.role}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {item.status === 'activo' ? <span
                                      className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded capitalize"
                                    >
                                      {item.status}
                                    </span>
                                      : <span
                                        className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded capitalize"
                                      >
                                        {item.status}
                                      </span>
                                    }
                                  </td>
                                  <td className="whitespace-nowrap px-3 text-left py-4 text-sm text-gray-500">
                                    {dayjs(item.date).format('L')}
                                  </td>
                                  <td className="whitespace-nowrap px-3 text-right py-4 text-sm text-buddies-700 ">
                                    <Link
                                      to={`/posts/${item.post_id}`}
                                      className="flex w-full justify-end items-center gap rounded-md px-1.5 py-1.5 text-sm font-semibold leading-6 text-buddies-blue-700 hover:text-buddies-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buddies-blue-700
                                      "
                                    >
                                      Ver Post
                                      <ChevronDoubleRightIcon className="h-5 w-5" />

                                    </Link>
                                  </td>
                                </tr>
                              )))
                              :
                              <tr colSpan={12} >
                                <p>Cargando Datos </p>
                              </tr>
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dl>

          </div>

          <div className="flex gap-4 justify-end"></div>
        </div>
      </main>
    </>
  );
};
