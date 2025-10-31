import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">COUNTER</h1>
      <h3 className="text-2xl mb-4">Count: {count}</h3>
      <div className="space-x-4">
        <button
          onClick={() => setcount(count - 1)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        >
          -
        </button>

        <button
          onClick={() => setcount(0)}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
        >
          Reset
        </button>

        <button
          onClick={() => setcount(count + 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
