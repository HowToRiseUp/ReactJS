import styled, { css } from "styled-components";

const Itemc = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const Images = styled.div`
  height: 400px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  width: 90%;
  background-color: white;
  transform: translateY(50%);
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-image: linear-gradient(to right, #7d6aff, #ffb86c, #fc2872);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  ${(props) =>
    props.secondary &&
    css`
      background-image: linear-gradient(to right, #fc2872, #ffb86c, #7d6aff);
    `};
`;

const Item = (prop) => {
  return (
    <Itemc>
      <Images>
        <Img src="https://cdn.dribbble.com/userupload/12146149/file/original-8c5cd96b6e9983193a374ab49cf9bd18.jpg?resize=1024x768" />
      </Images>
      <Title>
        <Name>Cosmic Perspective</Name>
        <Price secondary={prop.secondary}>12,000 PSL</Price>
      </Title>
    </Itemc>
  );
};

export default Item;
