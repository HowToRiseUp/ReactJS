import Item from "./Item";
import { data } from "../data";

const ListItem = () => {
  return (
    <div className="list-item">
      {data.map((item, index) => (
        <Item
          key={index}
          image={item.image}
          des={item.des}
          title={item.title}
          avatar={item.avatar}
        >
          {index}
        </Item>
      ))}
    </div>
  );
};

export default ListItem;
