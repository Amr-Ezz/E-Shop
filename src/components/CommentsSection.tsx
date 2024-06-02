import styled from "styled-components";

const CommentsMain = styled.div`
  display: flex;
  padding: 5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const CommentsDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 252px;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.white};
`;
const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 655px;
  border: 1px solid ${(props) => props.theme.colors.black};
  height: 252px;
  border-radius: 12px;
  p {
    color: #4F4F4F;
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
  gap: 2px;
  align-items: flex-start;
  justify-items: flex-start;
  margin-left: 1rem;
  position: relative;
  h5 {
    position: absolute;
    top: 0;
    left: 0;
  }
  p {
    color: ${(props) => props.theme.colors.grey};
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
        </CommentRow>
     
      </CommentsDiv>
    </CommentsMain>
  );
};

export default CommentsSection;
