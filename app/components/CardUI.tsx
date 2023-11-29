import React, { useState } from 'react';
import { Card, CardFooter, Image, CardBody, useDisclosure } from '@nextui-org/react';
import ProductModal from './ProductModal';
import { ProductInfo } from '@/interfaces/ProductInfoInterface';

interface CardUIProps {
  imageUrl: string;
  description: string;
  price: number;
  titulo: string;
}

const CardUI: React.FC<CardUIProps> = ({ imageUrl, description, price, titulo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  // Función para abrir el modal con información específica
  const openModal = () => {
    const product: ProductInfo = {
        title: 'Product Title 1',
        description: 'Product Description',
        price: 50,
        imageUrl: 'path/to/image.jpg',
        moredescription:'Mas descripcion',
        // Add other properties as needed
      };
    setSelectedProduct(product);
    onOpen();
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedProduct(null);
    onClose();
  };

  return (
    <>
      <Card
        shadow="sm"
        isPressable
        onClick={openModal}
        className="border border-gray-300 hover:border-gray-500 transition duration-300"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={description}
            className="w-full object-cover h-[140px]"
            src={imageUrl}
          />
        </CardBody>
        <CardFooter className="text-small flex flex-col items-start justify-between h-full">
          <div>
            <b>{titulo}</b>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-default-900">${price}</p>
          </div>
        </CardFooter>
      </Card>
      <ProductModal isOpen={isOpen} onClose={closeModal} productInfo={selectedProduct} />
    </>
  );
};

export default CardUI;
