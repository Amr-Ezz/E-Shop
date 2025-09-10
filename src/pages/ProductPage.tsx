import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { CardContainer } from "../shared/Card";
import { useProduct } from "../Context/ProductContext";
import CategoryMenu from "../shared/CategoryMenu";

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

const Sidebar = styled.aside`
  width: 250px;
  margin-top: 2rem;
  background: ${(props) => props.theme.colors.secondary};
  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    display: none; 
  }
`;

const ProductsContainer = styled.div`
    flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 1rem;

  padding: 2rem;
  margin-top: 10px;

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    grid-template-columns: 1fr; 
  }
`;

const LoadingMessage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const ProductPage = () => {
  const { category } = useParams<{ category: string }>();
  const { products, setCategory } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState<string>(category || "");
  const navigate = useNavigate();

  const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];

  useEffect(() => {
    if (category) {
      setCategory(category);
    }
  }, [category, setCategory]);

  if (!products.length) {
    return (
      <LoadingMessage>
        {`No products available for category "${category}".`}
      </LoadingMessage>
    );
  }

  const handleMenuClick = (category: string) => {
    setSelectedCategory(category);
    navigate(`/products/category/${category}`);
  };

  return (
    <PageLayout>
      <Sidebar>
        <CategoryMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleMenuClick}
        />
      </Sidebar>
      <ProductsContainer>
        {products.map((product) => (
          <CardContainer product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </PageLayout>
  );
};

export default ProductPage;
