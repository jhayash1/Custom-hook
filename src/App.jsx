import UseFetch from "./customhook/UseFetch";

function App() {
  const { loading, error, data } = UseFetch(
    "https://jsonplaceholder.typicode.com/photos",
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  return (
    <>
      <div className="grid grid-cols-3 gap-4 place-content-center">
        {data.slice(0, 10).map((item, i) => (
          <div key={i}>
            <div className="border bg-black text-amber-50 p-5 justify-center align-center flex">
              <div className="img">
                <img src={item.thumbnailUrl} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
