function Portfolio() {
  const services = [
    {
      title: "Plano Inicial",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, eveniet.",
      features: ["creacion de contenido", "soporte por email"],
    },
    {
      title: "Plano Profesional",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, eveniet.",
      features: [
        "creacion de contenido",
        "campaña facebook ads",
        "soporte 24/7",
      ],
    },
    {
      title: "Plano Premium",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, eveniet.",
      features: [
        "creacion de contenido",
        "campaña facebook ads",
        "soporte 24/7",
        "ladingpage o e-commerce",
      ],
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            labore neque sapiente nam, eum qui? Voluptatum dolor quibusdam
            fugiat perspiciatis.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.price}
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secundary">
                  Contactanos
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
