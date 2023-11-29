import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card, CardBody, Image, Slider
} from '@nextui-org/react';
import { ProductInfo } from '@/interfaces/ProductInfoInterface';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productInfo: ProductInfo | null;
}


const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, productInfo }) => {
  const { onOpen } = useDisclosure();
    console.log(productInfo);


  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {productInfo ? productInfo.title : 'Modal Title'}
        </ModalHeader>
        <ModalBody>
        <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="/card.jpeg"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{productInfo?.description}</h3>
                <p className="text-small text-foreground/80">{productInfo?.price}</p>
                <h1 className="text-large font-medium mt-2">{productInfo?.moredescription}</h1>
              </div>
             
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={onClose}>
            Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
