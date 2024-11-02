import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-footer text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-white text-3xl font-bold mb-4">
              S H I N R Y U
            </Link>
            <p className="text-white">Cuidamos de tu empresa</p>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contáctanos
            </h3>
            <p className="text-white">Email: shinryu.agency@gmail.com</p>
            <p className="text-white">Teléfono: +54 9 351 875-5243</p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-white"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.595 0 0 .593 0 1.324v21.351C0 23.407.595 24 1.325 24h11.494v-9.294H9.688v-3.622h3.131V8.413c0-3.1 1.892-4.785 4.659-4.785 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.762v2.31h3.591l-.467 3.622h-3.124V24h6.125c.73 0 1.325-.593 1.325-1.325V1.324C24 .593 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shinryu_agency/"
                className="text-white"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.975.975 1.255 2.243 1.317 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.975.975-2.243 1.255-3.608 1.317-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.975-1.255-2.243-1.317-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608.975-.975 2.243-1.255 3.608-1.317 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.755 0 8.345.015 7.052.073 5.72.134 4.457.412 3.403 1.465 2.35 2.518 2.073 3.78 2.012 5.112.953 6.405.938 6.815.938 12s.015 5.594.073 6.888c.061 1.332.338 2.594 1.391 3.647 1.053 1.053 2.315 1.33 3.647 1.391 1.293.058 1.703.073 6.888.073s5.594-.015 6.888-.073c1.332-.061 2.594-.338 3.647-1.391 1.053-1.053 1.33-2.315 1.391-3.647.058-1.293.073-1.703.073-6.888s-.015-5.594-.073-6.888c-.061-1.332-.338-2.594-1.391-3.647-1.053-1.053-2.315-1.33-3.647-1.391C16.595.015 16.185 0 12 0zM12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.144a3.982 3.982 0 1 1 0-7.963 3.982 3.982 0 1 1 0 7.963zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 1 0 0 2.88z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-white"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.558-3.59-1.558-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.698 4.375 3.946 4.827-.414.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.416-1.68 1.318-3.809 2.103-6.102 2.103-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.497 14.002-13.986 0-.213-.004-.425-.014-.637.961-.693 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-500">
            © 2024 S H I N R Y U. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
