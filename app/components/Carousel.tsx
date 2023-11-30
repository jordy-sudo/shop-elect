'use client'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CardUI from './CardUI';
import { ProductInfo } from '@/interfaces/ProductInfoInterface';



const Carousel: React.FC = () => {
  const productos: ProductInfo[] = [
    {
      id: 1,
      title: 'Producto 1',
      description: 'Descripción del Producto 1',
      moredescription:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imageUrl: '/transistor.webp',
      price: 2.50,
    },
    {
      id: 2,
      title: 'Producto 2',
      description: 'Descripción del Producto 2',
      moredescription:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imageUrl: '/transistor.webp',
      price: 53.50,
    },
    {
      id: 3,
      title: 'Producto 3',
      description: 'Descripción del Producto 3',
      moredescription:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imageUrl: '/transistor.webp',
      price: 33.50,
    },
    {
      id: 4,
      title: 'Producto 4',
      description: 'Descripción del Producto 4',
      moredescription:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imageUrl: '/transistor.webp',
      price: 43.50,
    },
    {
      id: 5,
      title: 'Producto 5',
      description: 'Descripción del Producto 5',
      moredescription:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imageUrl: '/transistor.webp',
      price: 13.50,
    },
    {
      id: 6,
      title: 'Producto 6',
      description: 'Descripción del Producto 6',
      moredescription:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      imageUrl: '/transistor.webp',
      price: 23.50,
    },

    // ... otros productos
  ];

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
    },
  });

  return (
    <div ref={ref} className="keen-slider mt-4">
      {productos.map((producto) => (
        <div key={producto.id} className="keen-slider__slide number-slide mx-2">
          <CardUI description={producto.description} 
              imageUrl={producto.imageUrl}
              price={producto.price}
              title={producto.title}
              moredescription={producto.moredescription}
              id={producto.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
