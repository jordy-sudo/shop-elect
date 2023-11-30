import React from 'react'

const Contactos = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contáctanos</h2>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="/contact-us-image.jpg" // Ajusta la ruta de tu imagen
              alt="Contáctanos"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-gray-700 text-lg mb-4">
              ¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti! Puedes contactarnos de las siguientes maneras:
            </p>

            <ul className="list-disc text-gray-700 text-lg pl-6 mb-4">
              <li>Correo Electrónico: info@tudominio.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: [Tu dirección]</li>
            </ul>

            <p className="text-gray-700 text-lg">
              Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactos