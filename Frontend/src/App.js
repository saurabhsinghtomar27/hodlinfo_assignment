import React, { useState, useEffect } from "react";
import CryptoTable from "./components/CryptoTable";

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetching data from backend
    fetch("http://localhost:8000/api/crypto")
      .then((response) => response.json())
      .then((data) => setCryptoData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    console.log(cryptoData);
  }, [cryptoData]);

  return (
    <div className=" p-4 bg-gray-700 w-[100%] min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#007bff]">
        HOLDINFO
      </h1>
      <CryptoTable data={cryptoData.slice(0, 10)} />
    </div>
  );
};

export default App;
