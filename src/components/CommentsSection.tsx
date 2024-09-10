import styled from "styled-components";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";

const CommentsMain = styled.div`
  display: flex;
  padding: 5rem 1rem;
  flex-direction: column;
  justify-content: space-around;
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

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  height: auto;
  gap: 20px;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Comment = styled.div`
  display: flex;
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
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <CommentsMain>
      <h1>What Are People Saying</h1>
      <CommentsDiv>
        <CommentRow>
          <div className="swiper">
            <div className="swiper-wrapper"></div>
          </div>
          <Comment>
            <User>
              <img src="/Avatar.png" alt="Avatar" />
              <Name>
                <h5>
                  <strong>Name</strong>
                </h5>
                <p>Description</p>
              </Name>
              <div>
                <img src="/Vector.png" alt="Vector" />
              </div>
            </User>
            <p>
              This dress is absolutely stunning! The fit is perfect, and the
              floral print is even more beautiful in person. I received so many
              compliments when I wore it to a wedding.
            </p>
          </Comment>
        </CommentRow>
      </CommentsDiv>
      {/* <CommentsDiv>
        <CommentRow>
          <Comment>
            <User>
              <img src="/Avatar.png" alt="Avatar" />
              <Name>
                <h5>
                  <strong>Name</strong>
                </h5>
                <p>Description</p>
              </Name>
              <div>
                <img src="/Vector.png" alt="Vector" />
              </div>
            </User>
            <p>
              This dress is absolutely stunning! The fit is perfect, and the
              floral print is even more beautiful in person. I received so many
              compliments when I wore it to a wedding.
            </p>
          </Comment>
          <Comment>
            <User>
              <img src="/Ellipse 22.png" alt="Avatar" />
              <Name>
                <h5>
                  <strong>Sophie</strong>
                </h5>
                <p>sophie_luv</p>
              </Name>
              <div>
                <img src="/Vector.png" alt="Vector" />
              </div>
            </User>
            <p>
              I am in love with this midi dress! The fabric is so soft and
              comfortable, and it flows beautifully. It's now my go-to outfit
              for any special occasion.
            </p>
          </Comment>
        </CommentRow>
        <CommentRow>
          <Comment>
            <User>
              <img src="/Ellipse 23.png" alt="Avatar" />
              <Name>
                <h5>
                  <strong>Sophie</strong>
                </h5>
                <p>sophie_luv</p>
              </Name>
              <div>
                <img src="/Vector.png" alt="Vector" />
              </div>
            </User>
            <p>
              I couldn't be happier with this purchase. The quality is
              top-notch, and the dress looks exactly like it does in the
              pictures.
            </p>
          </Comment>
          <Comment>
            <User>
              <img src="/Ellipse 24.png" alt="Avatar" />
              <Name>
                <h5>
                  <strong>Sophie</strong>
                </h5>
                <p>Sophie_Luv</p>
              </Name>
              <div>
                <img src="/Vector.png" alt="Vector" />
              </div>
            </User>
            <p>
              This dress exceeded my expectations. It’s elegant, stylish, and
              the perfect length. I’ve worn it multiple times already and always
              get compliments.
            </p>
          </Comment>
        </CommentRow>
      </CommentsDiv> */}
    </CommentsMain>
  );
};

export default CommentsSection;
