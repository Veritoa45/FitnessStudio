import { Link } from "react-router-dom";

const Order = ({ order }) => {
  console.log(order);

  return (
    <div className="h-[calc(100vh-270px)]">
      <div className=" mx-auto w-full max-w-md p-4 bg-gray-800 border-gray-700 rounded-lg shadow-sm sm:p-8">
        <h5 className="text-2xl mt-4 text-center font-bold leading-none text-white mb-[40px]">
          Su reserva se realizó con éxito
        </h5>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-white truncate">
                    Clase:
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-white">
                  {order.clase.nombre}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-white truncate">
                    Día:
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-white">
                  {order.clase.dia}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-white truncate">
                    Fecha:
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-white">
                  {order.clase.fecha}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-white truncate">
                    Hora:
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-white">
                  {order.clase.hora}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h5 className="text-xl text-center font-bold leading-none text-white mt-[40px] mb-3">
          Te esperamos! ❤
        </h5>
        <Link to={"/"} className="flex justify-center">
          <button className="text-white bg-gray-700 hover:bg-gray-800  hover:border hover:border-gray-900 font-medium rounded-lg px-5 py-2.5 mx-auto my-4 cursor-pointer">
            Listo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
