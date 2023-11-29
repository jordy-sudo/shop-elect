import Link from 'next/link';
import React from 'react';
import { CreditCard, DollarSign, MapPin, Mail, PhoneCall } from 'react-feather';

const FooterUI = () => {
    return (
        <section className="w-full py-14 bg-gray-700 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Columna 1 */}
                <div className="col-span-1 flex flex-col  md:items-end">
                    <h2 className="text-lg md:text-xl font-bold mb-4">Formas De Pago</h2>
                    <div className="flex items-center mb-4">
                        <CreditCard  className="md:w-12 md:h-12" />
                        <p className="ml-2 text-sm md:text-base">Tu texto aquí. Puedes agregar más contenido según sea necesario.</p>
                    </div>
                    <div className="flex items-center">
                        <DollarSign  className="md:w-12 md:h-12" />
                        <p className="ml-2 text-sm md:text-base">Otro texto aquí. Puedes agregar más contenido según sea necesario.</p>
                    </div>
                </div>

                {/* Columna 2 */}
                <div className="col-span-1 item">
                    <h2 className="text-lg md:text-xl font-bold mb-4">Otros Servicios</h2>
                    <ul className="list-none pl-0">
                        <li className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                            <span className="text-sm md:text-base">Servicio 1</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                            <span className="text-sm md:text-base">Servicio 2</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                            <span className="text-sm md:text-base">Servicio 3</span>
                        </li>
                        {/* Agrega más ítems según sea necesario */}
                    </ul>
                </div>

                {/* Columna 3 */}
                <div className="col-span-1">
                    <h2 className="text-lg md:text-xl font-bold mb-4">Contáctanos</h2>
                    <div className="flex items-center mb-4">
                        <MapPin className="md:w-10 md:h-10" />
                        <span className="ml-4 text-sm md:text-base">Bartolomé Dávila N57-106 y Pedro de Valverde. Sector La Prensa 400m al norte de la Base Aérea Mariscal Sucre.</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <Mail className="md:w-10 md:h-10" />
                        <span className="ml-4 text-sm md:text-base">pattoquila@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <PhoneCall className="md:w-10 md:h-10" />
                        <span className="ml-4 text-sm md:text-base">02-3260496</span>
                        <span className="ml-4 text-sm md:text-base">0984581915</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterUI;
