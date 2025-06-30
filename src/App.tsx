import "./index.css";

function App() {
  return (
    <>
      <div className="flex justify-center pt-5">
        <h1 className="text-4xl font-bold">Nur Hotel Panel</h1>
      </div>
      <div className="flex text-4xl justify-center gap-260 mt-5">
        <p>Otaqlar</p>
        <button className="bg-sky-500 hover:bg-sky-700 border-2 rounded-2xl p-1 cursor-pointer ">
          Rezerv et
        </button>
      </div>
    </>
  );
}

export default App;
