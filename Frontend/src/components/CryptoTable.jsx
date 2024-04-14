import React from "react";

const CryptoTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-800 bg-gray-900 text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 sm:py-3">Serial No</th>
            <th className="px-4 py-2 sm:py-3">Base Unit</th>
            <th className="px-4 py-2 sm:py-3">Quote Unit</th>
            <th className="px-4 py-2 sm:py-3">Low</th>
            <th className="px-4 py-2 sm:py-3">High</th>
            <th className="px-4 py-2 sm:py-3">Last</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
            >
              <td className="border border-gray-800 px-4 py-2 sm:py-3">
                {index + 1}
              </td>
              <td className="border border-gray-800 px-4 py-2 sm:py-3">
                {item.base_unit}
              </td>
              <td className="border border-gray-800 px-4 py-2 sm:py-3">
                {item.quote_unit}
              </td>
              <td className="border border-gray-800 px-4 py-2 sm:py-3">
                {item.low}
              </td>
              <td className="border border-gray-800 px-4 py-2 sm:py-3">
                {item.high}
              </td>
              <td className="border border-gray-800 px-4 py-2 sm:py-3">
                {item.last}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
