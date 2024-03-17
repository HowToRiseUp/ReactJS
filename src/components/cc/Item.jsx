const Item = (prop) => {
  return (
    <div className="item">
      <h1>{prop.children}</h1>
      <div className="img">
        <img src={prop.image} />
      </div>
      <div className="avatar">
        <img src={prop.avatar} />
        <div className="title">{prop.title}</div>
      </div>
      <div className="des">{prop.des}</div>
    </div>
  );
};

export default Item;
