const Shimmer = () => {
  return (
    <div className="flex flex-wrap" data-testid="shimmer">
      {Array(30)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-56 p-2 m-2 h-40 bg-gray-200 rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;

/*
.restaurant-list {
    display: flex;
    flex-wrap: wrap;
}

.shimmer-card {
    width: 200px;
    height: 200px;
    background: lightgrey;
    margin: 20px;
}
*/
