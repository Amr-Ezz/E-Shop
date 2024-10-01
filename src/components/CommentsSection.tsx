import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
import useInView from "../Hooks/useInView";

const CommentsMain = styled.div<{isVisible: boolean}>`
  display: flex;
  padding: 5rem 1rem;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};

  align-items: center;
  background: ${(props) => props.theme.colors.quaternary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.tertiary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.primary} 100%
  );
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const CommentRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
  height: auto;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Comment = styled.div`
  display: flex;
  border: 1px solid black;

  flex-direction: column;
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

const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;

  div:last-child {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
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


const CommentsSection = () => {
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
  const {ref, isInView} = useInView({threshold: 0.1})
  return (
    <CommentsMain ref={ref} isVisible={isInView}>
      <h1>What Are People Saying</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        style={{ width: "100%" }}
      >
        <CommentsDiv>
          {commentsArray.map((comment) => (
            <SwiperSlide key={comment.id}>
              <CommentRow>
                <Comment>
                  <User>
                    <img src={comment.avatar} alt={`${comment.name} Avatar`} />
                    <Name>
                      <h5>
                        <strong>{comment.name}</strong>
                      </h5>
                      <p>{comment.description}</p>
                    </Name>
                    <div>
                      <img src="/Vector.png" alt="Vector" />
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
};

export default CommentsSection;
