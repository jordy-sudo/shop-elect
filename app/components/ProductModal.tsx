import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Card,
    CardBody,
    Image,
    CardFooter,
} from '@nextui-org/react';
import { ProductInfo } from '@/interfaces/ProductInfoInterface';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    productInfo: ProductInfo | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, productInfo }) => {
    const { onOpen } = useDisclosure();

    return (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                    {productInfo ? productInfo.title : 'Modal Title'}
                </ModalHeader>
                <ModalBody>
                    <Card shadow="sm">
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={productInfo?.title}
                                className="w-full object-cover h-[300px]"
                                src={productInfo?.imageUrl}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{productInfo?.title}</b>
                            <p className="text-default-500">${productInfo?.price}</p>
                        </CardFooter>
                        <CardBody>
                            <p className="text-default-900">{productInfo?.moredescription}</p>
                        </CardBody>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    );
};

export default ProductModal;
