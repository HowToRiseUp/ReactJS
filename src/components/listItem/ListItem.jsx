import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 50px;
  background-color: #ccc;
`;

const ListItem = (prop) => {
  return <List>{prop.children}</List>;
};

export default ListItem;
