import styled from "styled-components";

const CommentsMain = styled.div`
  display: flex;
  padding: 5rem 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
`;
const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  padding-top: 2rem;
  height: 252px;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.white};
`;
const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 655px;
  border: 1px solid ${(props) => props.theme.colors.black};
  height: 252px;
  border-radius: 12px;
  p {
    color: #4f4f4f;
    padding-top: 1rem;
    text-align: start;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
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
  }
`;
const CommentsSection = () => {
  return (
    <CommentsMain>
      <h1>What Are People Saying</h1>
      <CommentsDiv>
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
              compliments when I wore it to a wedding
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
              for any special occasion
            </p>
          </Comment>
          {/* <Comment>
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
              compliments when I wore it to a wedding
            </p>
          </Comment> */}
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
          {/* <Comment>
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
              compliments when I wore it to a wedding
            </p>
          </Comment> */}
        </CommentRow>
      </CommentsDiv>
    </CommentsMain>
  );
};

export default CommentsSection;
