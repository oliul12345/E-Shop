import newCollection from "../../../public/newcollection.json";
console.log(newCollection);
const NewCollection = () => {
  return (
    <div>
        <h1 className="text-center text-6xl font-bold my-6 bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text">Top New Collection</h1>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newCollection.map((collection) => (
          <div key={collection.id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img className="w-full" src={collection.image} />
              </figure>
              <div className="card-body h-[180px]">
                <p>{collection.name}</p>
                <div className="card-actions flex justify-between">
                  <div className="badge badge-outline text-red-400">Old Price : {collection.old_price}</div>
                  <div className="badge badge-outline text-red-400">New Price : {collection.new_price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
