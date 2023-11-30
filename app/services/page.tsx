import React from 'react';

const Servicios = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full p-8">
        <h2 className="text-4xl font-bold mb-8 text-center">La Especialidad </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Subsección 1 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* Imagen */}
            <img
              src="https://via.placeholder.com/500"
              alt="Imagen Principal"
              className="mb-4 mx-auto rounded-full"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />

            {/* Título */}
            <h3 className="text-xl font-bold mb-4">Título de la Subsección 1</h3>

            {/* Texto "Lorem Ipsum" */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Subsección 2 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* Imagen */}
            <img
              src="https://via.placeholder.com/500"
              alt="Imagen Principal"
              className="mb-4 mx-auto rounded-full"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />

            {/* Título */}
            <h3 className="text-xl font-bold mb-4">Título de la Subsección 2</h3>

            {/* Texto "Lorem Ipsum" */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Subsección 3 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* Imagen */}
            <img
              src="https://via.placeholder.com/500"
              alt="Imagen Principal"
              className="mb-4 mx-auto rounded-full"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />

            {/* Título */}
            <h3 className="text-xl font-bold mb-4">Título de la Subsección 3</h3>

            {/* Texto "Lorem Ipsum" */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
