import { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevListesi from "../components/GorevListesi";

const baslangicGorevler = [
  { id: 1, metin: "React Öğren", oncelik: "Yüksek", tamamlandi: true },
  { id: 2, metin: "Software Persona Staj", oncelik: "Yüksek", tamamlandi: false },
  { id: 3, metin: "JavaScript Öğren ", oncelik: "Yüksek", tamamlandi: false },
   { id: 4, metin: "Kitap Oku", oncelik: "Orta", tamamlandi: false },
  { id: 5, metin: "Kahve Molası Yap", oncelik: "Düşük", tamamlandi: false },
];

export default function AnaSayfa() {
  const [gorevler, setGorevler] = useState(baslangicGorevler);
  const [karanlik, setKaranlik] = useState(false);

  const gorevEkle = ({ metin, oncelik }) => {
    const yeni = { id: Date.now(), metin, oncelik, tamamlandi: false };
    setGorevler([...gorevler, yeni]);
  };

  const gorevSil = (id) => setGorevler(gorevler.filter((g) => g.id !== id));
  const gorevGuncelle = (id, d) => setGorevler(gorevler.map((g) => g.id === id ? { ...g, ...d } : g));
  const tamamlandiDegistir = (id) => setGorevler(gorevler.map((g) => g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g));

  return (
    <div className={`min-h-screen flex items-start justify-center p-4 sm:p-6 sm:items-center transition-colors duration-300 ${karanlik ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`}>
      <div className={`rounded-3xl shadow-xl p-4 sm:p-8 w-full max-w-2xl mt-4 sm:mt-0 transition-colors duration-300 ${karanlik ? "bg-gray-800" : "bg-white/60 backdrop-blur-sm"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 rounded-xl p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className={`text-2xl font-bold ${karanlik ? "text-white" : "text-gray-800"}`}>Görevlerim</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className={`border rounded-full px-4 py-1.5 text-sm ${karanlik ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-500"}`}>
              {gorevler.length} Görev
            </span>
            {/* Dark mode butonu */}
            <button
              onClick={() => setKaranlik(!karanlik)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition ${karanlik ? "bg-yellow-400 hover:bg-yellow-300" : "bg-gray-800 hover:bg-gray-700"}`}
            >
              {karanlik ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <GorevEkle gorevEkle={gorevEkle} karanlik={karanlik} />
        <GorevListesi
          gorevler={gorevler}
          gorevSil={gorevSil}
          gorevGuncelle={gorevGuncelle}
          tamamlandiDegistir={tamamlandiDegistir}
          karanlik={karanlik}
        />
      </div>
    </div>
  );
}