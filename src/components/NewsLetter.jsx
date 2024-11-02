import { useForm } from "react-hook-form";

export const NewsLetter = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 mt-16 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Unite a nuestra NewsLetter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Recibí las últimas noticias y actualizaciones directamente en tu
          correo.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(enviar)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("nombre")}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("email")}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secundary focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
