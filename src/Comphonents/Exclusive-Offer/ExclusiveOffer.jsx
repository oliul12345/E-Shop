const ExclusiveOffer = () => {
  return (
    <div className="md:flex p-5 bg-gradient-to-br from-blue-500 to-blue-100">
      <div className="md:w-1/2 flex items-center md:p-7">
        <div className="">
          <h1 className="text-6xl font-bold">Exclusive Offers Only For You</h1>
          <p className="text-xl font-semibold">
            Only on the best selling products
          </p>
          <button className="bg-red-700 text-white rounded-3xl p-4">
            Check Now
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/public/Ecommerce_Frontend_Assets/Assets/exclusive_image.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ExclusiveOffer;
