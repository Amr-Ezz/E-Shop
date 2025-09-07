import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById, Product } from "../api/requests";
import styled from "styled-components";
import useQuantity from "../Hooks/useQuantity";
import { Counter, CounterButton, CounterText } from "../shared/Counter";
import ActionButtons from "../shared/ActionButtons";
// import SplitText from "./SplitText";

import { auth } from "../firebase";
import LoginForm from "./LoginForm/LoginForm";
import Modal from "./Modal/Modal";
// import { useUser } from "../Context/UserContext";
import BuyModal from "./Modal/BuyModal";
import { Loader } from "./Loader/Loader";

const Main = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
  ${({ theme }) => `
  @media (max-width: ${theme.breakPoints.md}) {
  }
  `}
`;
const ProductDiv = styled.div`
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
  padding: 0;
  
  }`}
`;
const Specifications = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  h4 {
    border-bottom: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 1rem;
    font-size: 20px;
  }
`;
const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s ease;

  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
  grid-template-columns: 1fr;
  padding: 1rem;
      gap: 1rem;


  }
      @media(max-width: ${theme.breakPoints.sm}) {
  padding: 0.5rem;
border-width: 5px;

  }`}
`;
const StickyImageContainer = styled.div`
  position: sticky;
  top: 140px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
  position: relative;
  top: 0;
  }
  @media(max-width: ${theme.breakPoints.md}) {
 }
  
  @media(max-width: ${theme.breakPoints.sm}) {
  position: relative;
  padding-top: 2rem;
  }`}
`;
const ProductImage = styled.img`
  height: auto;
  max-width: 100%;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  object-fit: contain;
  cursor: pointer;
  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
width: 100%;
max-height: 500px;
  }
 @media(max-width: ${theme.breakPoints.md}) {
width: 100%;
max-height: 300px;
  }
   @media(max-width: ${theme.breakPoints.sm}) {
      max-width: 90%;
      height: auto;
    }`}

  ${StickyImageContainer}:hover & {
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
 
  gap: 1.5rem;
  text-align: left;
   ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
  }`}
  
  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
      ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
font-size: 1.5rem;
align-self: flex-start;
  }
 @media(max-width: ${theme.breakPoints.md}) {
width: 80%;
  }
 @media(max-width: ${theme.breakPoints.xs}) {
text-align: left;
font-size: 1.2rem;  }
`}
  

  p:nth-child(6) {
    font-weight: 600;
    span {
      color: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
const PriceTag = styled.p`
  display: flex;
  gap: 5px;
  font-weight: 500;
  font-size: 2rem;
  text-align: left;
  align-self: center;
  color: ${(props) => props.theme.colors.quaternary};
  ${({ theme }) => `
    @media (max-width: ${theme.breakPoints.md}) {
font-size: 1.5rem; 
font-weight: 200;  
text-align: center;
align-self: flex-start;

}
    `}

  span {
    color: grey;
    font-size: 0.6em;
    margin-top: 10px;
  }
`;
const ContentDesc = styled.div`
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 10px 40px 40px rgba(0.95, 0.95, 0.25, 0.15);
  p:nth-child(1) {
    color: ${(props) => props.theme.colors.text};
    font-weight: 800;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    font-size: 1.5rem;
   
  }
  p:nth-child(2) {
    font-weight: 300;
    font-size: 14px;
    padding-top: 10px;
     ${({theme}) => `
     @media(max-width: ${theme.breakPoints.lg}) {
width: 70%;
  }
    `}
  }
`;
const ColumnCart = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  flex-direction: column;
  border-radius: 20px;
  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
gap: 0;
  }`}

  div {
    ${({ theme }) => `
    @media(max-width: ${theme.breakPoints.lg}) {
align-self: flex-start;
padding-top: 10px;
    }
 @media(max-width: ${theme.breakPoints.xs}) {
padding-top: 10px;
    }`}  
  }
    
`;
const ListedSpecifications = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  list-style-type: none;
  padding: 0;
   ${({theme}) => `
     @media(max-width: ${theme.breakPoints.lg}) {
gap: 0;
width: 80%;
  }
    `}
  li {
    margin: 8px 15px;
    font-size: 16px;
    text-align: left;
    list-style-type: disc;
    span {
      font-weight: 600;
    }
  }
`;
const QuantityTag = styled.p`
  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
align-self: flex-start;  }`}`;
const PriceSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
`;

const ProductDetail = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [product, setProduct] = useState<Product | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { increment, decrement, quantity } = useQuantity();
  // const localQuantity = quantity;
  const totalPrice = product ? product.price * quantity : 0;
  // const { phoneNumber } = useUser();
  //////////////////////////////////////////////////// useEffect ////////////////////////////////////
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsById(Number(id));
        setProduct(response);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    if (id) {
      fetchProducts();
    }
    if (error) {
      console.log(error, "Error");
    }
    if (loading) {
      <Loader />;
    }
  }, [id]);

  useEffect(() => {
    if (!auth.currentUser) {
      setShowModal(true);
    }
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  if (!product) {
    return <div>Loading...</div>;
  }
  // const handleBuyButton = () => {
  //   if (!user) {
  //     setShowModal(true);
  //   } else {
  //     setShowPayment(true);
  //     return {quantity, totalPrice}
  //   }
  // };
  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (!stripe || !elements) {
  //     return;
  //   }
  //   if (!auth.currentUser) {
  //     setShowModal(true);
  //     return;
  //   }
  //   try {
  //     const customerCreate = await fetch(
  //       "http://localhost:3001/create-customer",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: userName,
  //           email: userEmail,
  //         }),
  //       }
  //     );
  //     if (!customerCreate.ok) {
  //       throw new Error("Error creating customer!");
  //     }
  //     const customerData = await customerCreate.json();
  //     const customerId = customerData.id;
  //     const response = await fetch(
  //       "http://localhost:3001/create-payment-intent",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           price: product.price,
  //           quantity: quantity,
  //           productId: product.id,
  //           productName: product.title,
  //           customer_name: userName,
  //           customer_email: userEmail,
  //           customerId: customerId,
  //           phone: phoneNumber,
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setClientSecret(data.clientSecret);
  //     console.log(data.clientSecret);
  //     const cardElement = elements.getElement(CardElement);
  //     if (cardElement && clientSecret) {
  //       const { error, paymentIntent } = await stripe.confirmCardPayment(
  //         clientSecret,
  //         {
  //           payment_method: {
  //             card: cardElement,
  //             billing_details: {
  //               email: userEmail,
  //               name: userName || "Anonmynus",
  //               phone: phoneNumber,
  //             },
  //           },
  //         }
  //       );

  //       if (error) {
  //         console.error("payment Error:", error);
  //       } else if (paymentIntent && paymentIntent.status === "succeeded") {
  //         console.log("Successfull:", paymentIntent);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error creating payment intent", error);
  //   }
  // };

  return (
    <Main>
      <ProductDiv>
        <ProductRow>
          <StickyImageContainer>
            <ProductImage
              src={product.image}
              alt={product.title}
              loading="lazy"
            />
          </StickyImageContainer>{" "}
          <Content>
            <br />

            <ColumnCart>
              <h1>
                {product.title}
                {/* <SplitText
                  words={product.title.split(" ")}
                  // style={{
                  //   margin: 0,
                  //   padding: "2px",
                  //   lineHeight: 1.1,
                  //   fontSize: "26px",
                  //   fontWeight: 800,
                  // }}
                /> */}
              </h1>
<PriceSection>
              <PriceTag>
                {totalPrice}.99
                <span>USD</span>
              </PriceTag>


              <Counter>
              <QuantityTag>Quantity</QuantityTag>
                <CounterButton onClick={decrement}>-</CounterButton>
                <CounterText>{quantity}</CounterText>
                <CounterButton onClick={increment}>+</CounterButton>
              </Counter>

</PriceSection>
              <ActionButtons product={product} showBuyButton={true} />
              <ContentDesc>
                <p>Description</p>
                <p>{product.description}</p>
              </ContentDesc>
              <Specifications>
                <h4>Specifications</h4>
                <ListedSpecifications>
                  <li>
                    <span>Free Returns</span>
                  </li>
                  <li>
                    <span>In Stock</span>
                  </li>
                  <li>
                    Color: <span>{product.color}</span>
                  </li>

                  <li>
                    Model: <span>{product.model}</span>
                  </li>

                  <li>
                    Discount: <span>{product.discount}%</span>
                  </li>
                  <li>
                    Brand: <span>{product.brand}</span>
                  </li>
                </ListedSpecifications>
              </Specifications>
              {showPayment && (
                <>
                  <Modal
                    show={showPayment}
                    onClose={() => setShowPayment(false)}
                  >
                    <BuyModal
                    // product={product}
                    // onClose={() => setShowPayment(false)}
                    // localQuantity={localQuantity}
                    // totalPrice={totalPrice}
                    // phoneNumber={phoneNumber}
                    />
                  </Modal>
                </>
              )}
            </ColumnCart>
          </Content>
        </ProductRow>
      </ProductDiv>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <LoginForm onSuccess={() => setShowModal(false)} />
      </Modal>
    </Main>
  );
};

export default ProductDetail;
