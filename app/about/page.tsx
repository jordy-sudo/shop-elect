import { Image } from '@nextui-org/react'
import React from 'react'

const SobreNosotros = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h2>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              src="/about-us-image.jpg"
              alt="Sobre Nosotros"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-gray-700 text-lg mb-4">
              Bienvenido a [Nombre de tu empresa], donde nos dedicamos a [descripción breve de tu empresa].
            </p>

            <p className="text-gray-700 text-lg mb-4">
              Nuestro equipo está comprometido a proporcionar [servicios/productos] de la más alta calidad, asegurando la satisfacción de nuestros clientes.
            </p>

            <p className="text-gray-700 text-lg">
              En [Nombre de tu empresa], valoramos [principio/valor clave] y nos esforzamos por [otro principio/valor clave].
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros