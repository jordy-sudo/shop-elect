import Link from 'next/link';
import React from 'react';
import { CreditCard, DollarSign, MapPin, Mail, PhoneCall } from 'react-feather';

const FooterUI = () => {
    return (
        <section className="w-full py-14 bg-gray-700 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Columna 1 */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg md:text-xl font-bold mb-4">Formas De Pago</h2>
                    <div className="flex items-center mb-4">
                        <CreditCard className="md:w-10 md:h-10 mr-2" />
                        <p className="text-sm md:text-base">Aceptamos todo tipo de tarjetas</p>
                    </div>
                    <div className="flex items-center">
                        <DollarSign className="md:w-10 md:h-10 mr-2" />
                        <p className="text-sm md:text-base">Precio acorde al mercado</p>
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
                <div className="col-span-1 item">
                    <h2 className="text-lg md:text-xl font-bold mb-4">Contáctanos</h2>
                    <div className="flex items-center mb-4">
                        <MapPin size={25} className="md:w-auto md:h-10 mr-2" />
                        <span className="text-sm md:text-base">Bartolomé Dávila N57-106 y Pedro de Valverde. </span>
                    </div>
                    <div className="flex items-center mb-4">
                        <Mail className="md:w-10 md:h-10 mr-2" />
                        <span className="text-sm md:text-base">pattoquila@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <PhoneCall className="md:w-10 md:h-10 mr-2" />
                        <span className="text-sm md:text-base">02-3260496</span>
                        <span className="ml-4 text-sm md:text-base">0984581915</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterUI;
