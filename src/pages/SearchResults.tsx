import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Card } from "../components/SaleSection"; 
import { Product } from "../api/requests";
import { useCart } from "../Context/CartContext"; 

const ResultsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const PriceHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 5px;

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
    align-self: flex-start;

    img {
      width: 20px;
      height: 20px;
    }
  }
    p:nth-child(2), p:nth-child(3) {
    align-self: flex-end;
    font-weight: 300;
    }
    p:nth-child(4) {
        font-size: 16px;

    }
   

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 1rem;

    button {
      width: 100px;
      height: 50px;
      border-radius: 50px;
      font-weight: 600;
      background-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.white};
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;
const Main = styled.div`
h1 {
padding: 1rem;}
`

const SearchResults = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [toggleDescription, setToggleDescription] = useState<{ [key: number]: boolean }>({});
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const { addToCart } = useCart(); 

  useEffect(() => {
    if (query) {
      axios
        .get(`https://fakestoreapi.in/api/products?search=${query}`)
        .then((response) => setProducts(response.data.products))
        .catch((error) => console.error(error, "error fetch search"));
    }
  }, [query]);

  const toggleHandler = (id: number) => {
    setToggleDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateDescription = (
    description: string,
    maxLength: number,
    id: number
  ) => {
    if (toggleDescription[id]) return description;
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}....`;
  };

  return (
    <Main>
      <h1>Search Results for "{query}"</h1>

      <ResultsDiv>
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id}>
              <img src={product.image} alt={product.title} width="100" style={{ alignSelf: "center", objectFit: "cover" }} />
              <h1 style={{width: "100%"}}>{product.title.substring(0, 50)}</h1>
              <p>
                {truncateDescription(product.description, 100, product.id)}
                {product.description.length > 100 && (
                  <span
                    onClick={() => toggleHandler(product.id)}
                    style={{
                      color: "#007bff",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {toggleDescription[product.id] ? "See less" : "See more"}
                  </span>
                )}
              </p>
              <PriceHolder>
                <p>
                  {product.price}
                  <img src="/icons/dollar-symbol.png" alt="dollar" />
                </p>
                <p>
                  {product.brand} <img src="/icons/star.png" alt="star" />
                </p>
                <p>
                  {product.discount}{" "}
                  <img src="/icons/trolley.png" alt="Items left" />
                </p>
                <p>Model: {product.model}</p>
                <div>
                  <button onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
              </PriceHolder>
            </Card>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ResultsDiv>
    </Main>
  );
};

export default SearchResults;
