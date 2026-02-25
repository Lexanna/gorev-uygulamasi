import { useState } from "react";

export default function GorevEkle({ gorevEkle, karanlik }) {
  const [metin, setMetin] = useState("");
  const [oncelik, setOncelik] = useState("Düşük");

  const handleEkle = () => {
    if (metin.trim() === "") return;
    gorevEkle({ metin, oncelik });
    setMetin("");
    setOncelik("Düşük");
  };

  return (
    <div className={`rounded-2xl shadow p-4 mb-6 transition-colors duration-300 ${karanlik ? "bg-gray-700" : "bg-white"}`}>
      <h2 className={`text-base font-semibold mb-3 ${karanlik ? "text-white" : "text-gray-700"}`}>Yeni Görev Ekle</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <input
          type="text"
          placeholder="Görevinizi girin..."
          value={metin}
          onChange={(e) => setMetin(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEkle()}
          className={`flex-1 border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${karanlik ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400" : "bg-white border-gray-200 text-gray-800"}`}
        />
        <button
          onClick={handleEkle}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition w-full sm:w-auto"
        >
          Görev Ekle
        </button>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-sm ${karanlik ? "text-gray-300" : "text-gray-500"}`}>Öncelik</span>
        <select
          value={oncelik}
          onChange={(e) => setOncelik(e.target.value)}
          className={`border rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${karanlik ? "bg-gray-600 border-gray-500 text-white" : "bg-white border-gray-200 text-gray-800"}`}
        >
          <option>Düşük</option>
          <option>Orta</option>
          <option>Yüksek</option>
        </select>
      </div>
    </div>
  );
}