const NewsLetter = () => {
  return (
    <div>
      <div className="md:py-28 text-center space-y-6 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 mb-10 p-8">
        <h1 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-blue-500">
          Get Exclusive Offer On Your Email
        </h1>
        <p>Subscribe on our email and stay updated</p>
        <div className="flex md:w-3/5 mx-auto my-6">
        <input
          type="text"
          placeholder="Enter your text..."
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <button className=" inset-y-0 right-0 px-4 py-2 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
