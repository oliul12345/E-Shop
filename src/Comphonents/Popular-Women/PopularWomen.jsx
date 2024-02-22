import popularWomenData from "../../../public/popular.json";
const PopularWomen = () => {
  console.log(popularWomenData);

  return (
    <div>
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
