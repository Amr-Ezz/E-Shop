import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Product } from "../api/requests";
import { CardContainer } from "../shared/Card";

const ResultsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    padding: 1rem;
    align-self: center;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.tertiary};
    border-radius: 50px;
    font-weight: 300;
  }
`;

const SearchResults = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.in/api/products`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error, "error fetch search"));
  }, []);
  useEffect(() => {
    if (query) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [query, products]);

  //  const navigate = useNavigate();

  // const handleBuy = (product: Product) => {
  //   const totalPrice = product.price;
  //   navigate("/pages/CheckoutPage", { state: { product, totalPrice } });
  // };

  return (
    <Main>
      <h2>Search Results for {query}</h2>

      <ResultsDiv>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CardContainer key={product.id} product={product} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ResultsDiv>
    </Main>
  );
};

export default SearchResults;
