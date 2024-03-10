const Products = () => {
  return (
    <div className="container">
      <div className="image-container">
        <h3>Ethiopia Coffee</h3>
        <img className="image" src="//source.unsplash.com/500x500" alt="pic1" />
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          deleniti?
        </p>
      </div>
      <div className="image-container">
        <h3>Kenya Coffee</h3>
        <img
          className="image"
          src="//source.unsplash.com/500x500"
          alt="Image 2"
        />
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laboriosam!</p>
      </div>
      <div className="image-container">
        <h3>Rwanda Coffee</h3>
        <img
          className="image"
          src="//source.unsplash.com/500x500"
          alt="Image 3"
        />
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quod.</p>
      </div>
    </div>
  );
};

export default Products;
