import { Button, Divider, Image } from '@nextui-org/react';
import Link from 'next/link';
import Carousel from './components/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Introduction Section */}
      <section className="bg-gray-100 py-2 relative">
        {/* Full-width image */}
        <Image
          src="/home.jpg"
          alt="NextUI hero Image"
        />

        {/* Content container */}
        <div className="absolute inset-0 flex flex-col justify-center text-white z-10 px-4 sm:px-8">
          <h2 className="font-bold mb-4 sm:text-5xl md:text-6xl">
            Bienvenido a MegaOHM
          </h2>
          <p className="text-lg mb-4 sm:text-xl md:text-2xl max-w-md">
            Descubre nuestros servicios electrónicos en línea y encuentra soluciones para tus necesidades.
          </p>
          <div className="max-w-xs mt-2">
            <Button color="primary" variant="shadow" size="lg">
              <Link href="/services">
                Explora nuestros servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Divider className="my-2" />

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Nuestros Productos</h2>
          <p className="text-lg">
            Descubre nuestra gama de productos electrónicos de alta calidad diseñados para satisfacer tus necesidades.
          </p>
          <div className="mt-3">
            <Carousel />
          </div>
          <Button
            className="mt-7"
            color="success"
            variant="shadow"
            size="sm"
          >
            <Link href="/products" className="text-white">
              Ver productos
            </Link>
          </Button>
        </div>
      </section>

      <Divider className="my-1" />

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Conócenos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            En MegaOHM, nos dedicamos a brindar servicios electrónicos con un compromiso inquebrantable con la excelencia. Conoce más sobre nuestra historia, valores y equipo.
          </p>
          <Link href="/about">
            <div className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300">
              Acerca de nosotros
            </div>
          </Link>
        </div>
      </section>
      {/* footer */}

    </div>
  );
};

export default Home;
