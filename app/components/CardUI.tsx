import React, { useState } from 'react';
import { Card, CardFooter, Image, CardBody, useDisclosure } from '@nextui-org/react';
import ProductModal from './ProductModal';
import { ProductInfo } from '@/interfaces/ProductInfoInterface';



const CardUI: React.FC<ProductInfo> = ({ imageUrl, description, price, title, moredescription, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  // Función para abrir el modal con información específica
  const openModal = () => {
    const product: ProductInfo = {
        id:id,
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        moredescription:moredescription,
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
            <b>{title}</b>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-default-500 line-through mr-2">$546545</p>
            <p className="text-default-900 ml-8">${price}</p>
          </div>
        </CardFooter>
      </Card>
      <ProductModal isOpen={isOpen} onClose={closeModal} productInfo={selectedProduct} />
    </>
  );
};

export default CardUI;
