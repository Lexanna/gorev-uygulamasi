// .jsx olan her yerde javascript temelleri kullandığım yerdir
import { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevListesi from "../components/GorevListesi";

const baslangicGorevler = [
  { id: 1, metin: "React Öğren", oncelik: "Yüksek", tamamlandi: true },
  { id: 2, metin: "Software Persona Staj", oncelik: "Yüksek", tamamlandi: false },
  { id: 3, metin: "JavaScript Öğren", oncelik: "Yüksek", tamamlandi: true },
  { id: 4, metin: "Kitap Oku", oncelik: "Orta", tamamlandi: false },
  { id: 5, metin: "Kahve Molası Yap", oncelik: "Düşük", tamamlandi: false },
];

export default function AnaSayfa() {
  const [gorevler, setGorevler] = useState(baslangicGorevler);

  const gorevEkle = ({ metin, oncelik }) => {
    const yeni = { id: Date.now(), metin, oncelik, tamamlandi: false };
    setGorevler([...gorevler, yeni]);
  };

  const gorevSil = (id) => setGorevler(gorevler.filter((g) => g.id !== id));

  const gorevGuncelle = (id, degisiklikler) => {
    setGorevler(gorevler.map((g) => (g.id === id ? { ...g, ...degisiklikler } : g)));
  };

  const tamamlandiDegistir = (id) => {
    setGorevler(gorevler.map((g) => (g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-start justify-center p-4 sm:p-6 sm:items-center">
  <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-4 sm:p-8 w-full max-w-2xl mt-4 sm:mt-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 rounded-xl p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Görevlerim</h1>
          </div>
          <span className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-500">
            {gorevler.length} Görev
          </span>
        </div>

        <GorevEkle gorevEkle={gorevEkle} />
        <GorevListesi
          gorevler={gorevler}
          gorevSil={gorevSil}
          gorevGuncelle={gorevGuncelle}
          tamamlandiDegistir={tamamlandiDegistir}
        />
      </div>
    </div>
  );
}