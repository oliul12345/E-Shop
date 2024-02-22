import popularWomenData from "../../../public/popular.json";
const PopularWomen = () => {
  console.log(popularWomenData);

  return (
    <div className="md:mt-10">
        <h1 className="text-3xl md:text-6xl font-bold text-center my-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">Popular Women <br /> Collections</h1>
      <div className="md:grid md:grid-cols-4 gap-4 ">
        {popularWomenData.map((product) => (

          <div className="border p-4" key={product.id}>
            <div>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <div className="flex justify-between">
                <p className="text-sm font-bold">Old Price : {product.old_price}</p>
                <p className="text-sm font-bold">New Price : {product.new_price}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularWomen;
