import { useState } from "react";
import countries from "./countries";
import "./App.css";

function App() {
  const [count, setCount] = useState(countries);
  const [search, setSearch] = useState("");
  const [type, setType] = useState(true);

  const handleClick1 = (event) => {
    let letters = event.target.value;
    setSearch(letters);
    let result = [];
    if (type) {
      result = countries.filter((country) =>
        country.toLowerCase().startsWith(letters.toLowerCase())
      );
    } else {
      result = countries.filter((country) =>
        country.toLowerCase().includes(letters.toLowerCase())
      );
    }
    setCount(result);
  };

  return (
    <div>
      <div className="bg-[url('./assets/images/globe-2.jpg')]">
        <h1 className="tracking-widest font-bold text-3xl text-white p-4">
          WORLD COUNTRIES LIST
        </h1>

        <p className="font-bold text-orange-500">
          Total Number of countries: 193
        </p>
        <button
          className="bg-indigo-600 p-2 text-white font-bold"
          onClick={() => setType(true)}
        >
          STARTING WORD
        </button>
        <button
          className="bg-indigo-400 p-2 text-white font-bold ml-2"
          onClick={() => setType(false)}
        >
          SEARCH WITH ANY WORD
        </button>

        <br />
        <input
          className="py-3 px-25 rounded-xl mb-5 text-center"
          type="text"
          value={search}
          placeholder="search country..."
          onChange={handleClick1}
        />
      </div>
      <div>
        {count.map((country, index) => (
          <div
            className="bg-[url('./assets/images/map_image.jpg')]"
            key={index}
          >
            {country}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
