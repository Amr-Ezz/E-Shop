import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
import useInView from "../Hooks/useInView";
import { FlexColumn, FlexRow } from "../Utilities/StyledUtilities.styled";
import getDynamicThreshold from "../Utilities/DynamicThreshold";
import React from "react";

const CommentsMain = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "isvisible"})<{ isvisible: boolean }>`
  display: flex;
  padding: 5rem 1rem;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  align-items: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.tertiary} 100%
  );
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: ${(props) =>
    props.isvisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CommentRow = styled(FlexRow)`
  padding: 2.5rem;
  height: auto;
  transition: transform 0.5s ease-in-out;
`;

const Comment = styled(FlexColumn)`
  border: 1px solid black;

  padding: 1rem;
  width: 100%;
  max-width: 655px;
  border: 1px solid ${(props) => props.theme.colors.black};
  height: auto;
  min-height: 252px;
  border-radius: 12px;
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  p {
    color: ${(props) => props.theme.colors.text};
    padding-top: 1rem;
    text-align: start;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

const User = styled(FlexRow)`
  width: 100%;
  padding: 1rem;

  div:last-child {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Name = styled(FlexColumn)`
  gap: 10px;
  margin-left: 1rem;
  position: relative;

  h5 {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    color: ${(props) => props.theme.colors.grey};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding-top: 1.5rem;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const CommentsSection = React.memo(() => {
  const commentsArray = [
    {
      id: 1,
      avatar: "/Avatar.png",
      name: "John Doe",
      description: "john_doe",
      comment:
        "This dress is absolutely stunning! The fit is perfect, and the floral print is even more beautiful in person. I received so many compliments when I wore it to a wedding.",
    },
    {
      id: 2,
      avatar: "/Ellipse 22.png",
      name: "Sophie",
      description: "sophie_luv",
      comment:
        "I am in love with this midi dress! The fabric is so soft and comfortable, and it flows beautifully. It's now my go-to outfit for any special occasion.",
    },
    {
      id: 3,
      avatar: "/Ellipse 23.png",
      name: "Sophie",
      description: "sophie_luv",
      comment:
        "I couldn't be happier with this purchase. The quality is top-notch, and the dress looks exactly like it does in the pictures.",
    },
    {
      id: 4,
      avatar: "/Ellipse 24.png",
      name: "Sophia",
      description: "sophie_luv",
      comment:
        "This dress exceeded my expectations. It’s elegant, stylish, and the perfect length. I’ve worn it multiple times already and always get compliments.",
    },
  ];
  const { ref, isInView } = useInView(getDynamicThreshold);
  return (
    <CommentsMain ref={ref} isvisible={isInView}>
      <h1>What Are People Saying</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        style={{ width: "100%" }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          
        }}
      >
        <CommentsDiv>
          {commentsArray.map((comment) => (
            <SwiperSlide key={comment.id}>
              <CommentRow>
                <Comment>
                  <User>
                    <img src={comment.avatar} alt={`${comment.name} Avatar`} loading="lazy" />
                    <Name>
                      <h5>
                        <strong>{comment.name}</strong>
                      </h5>
                      <p>{comment.description}</p>
                    </Name>
                    <div>
                      <img src="/Vector.png" alt="Vector" loading="lazy" />
                    </div>
                  </User>
                  <p>{comment.comment}</p>
                </Comment>
              </CommentRow>
            </SwiperSlide>
          ))}
        </CommentsDiv>
      </Swiper>
    </CommentsMain>
  );
});

export default CommentsSection;
