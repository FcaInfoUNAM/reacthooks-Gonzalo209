import { useEffect, useState } from "react";

const ProductDescription = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error al obtener el producto:", error));
  }, []);

  if (!product) {
    return <p className="text-center text-gray-600">Cargando...</p>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <h2 className="text-lg font-semibold text-gray-800 mt-2">{product.title}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-bold text-orange-500 mt-2">${product.price}</p>
    </div>
  );
};

export default ProductDescription;
