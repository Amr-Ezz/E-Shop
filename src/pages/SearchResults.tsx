import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../api/requests";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  useEffect(() => {
    if (query) {
      axios
        .get(`https://fakestoreapi.in/api/products?search=${query}`)
        .then((response) => setProducts(response.data.products))
        .catch((error) => console.error(error, "error fetch search"));
    }
  }, [query]);

  return (  <div>
    <h1>Search Results for "{query}"</h1>
    {products.length > 0 ? (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} width="100" />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No results found.</p>
    )}
  </div>
);
};

export default SearchResults;
