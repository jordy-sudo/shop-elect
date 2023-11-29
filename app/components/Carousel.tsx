'use client'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CardUI from './CardUI';

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  price:number;
  // Agrega otras propiedades según tus necesidades
}

const Carousel: React.FC = () => {
  const productos: Producto[] = [
    {
      id: 1,
      titulo: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      imagen: '/transistor.webp',
      price: 2.50,
    },
    {
      id: 2,
      titulo: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      imagen: '/transistor.webp',
      price: 53.50,
    },
    {
      id: 3,
      titulo: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      imagen: '/transistor.webp',
      price: 33.50,
    },
    {
      id: 4,
      titulo: 'Producto 4',
      descripcion: 'Descripción del Producto 4',
      imagen: '/transistor.webp',
      price: 43.50,
    },
    {
      id: 5,
      titulo: 'Producto 5',
      descripcion: 'Descripción del Producto 5',
      imagen: '/transistor.webp',
      price: 13.50,
    },
    {
      id: 6,
      titulo: 'Producto 6',
      descripcion: 'Descripción del Producto 6',
      imagen: '/transistor.webp',
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
          <CardUI description={producto.descripcion} imageUrl={producto.imagen}
              price={producto.price}
              titulo={producto.titulo}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
