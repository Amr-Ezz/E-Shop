import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../api/requests";
import axios from "axios";
import styled from "styled-components";
import { Card } from "../components/SaleSection";

const ResultsDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  border: 1px solid red;
`;

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

  return (
    <>
      <h1>Search Results for "{query}"</h1>

      <ResultsDiv>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <Card key={product.id}>
                <img src={product.image} alt={product.title} width="100" style={{alignSelf: "flex-start"}} />

                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                  Price: <span>$</span>
                  {product.price}
                </p>
              </Card>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </ResultsDiv>
    </>
  );
};

export default SearchResults;
