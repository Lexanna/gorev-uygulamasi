import { useState } from "react";

const oncelikRenk = {
  Yüksek: "bg-red-400 text-white",
  Orta: "bg-yellow-400 text-white",
  Düşük: "bg-green-400 text-white",
};

export default function GorevKart({ gorev, gorevSil, gorevGuncelle, tamamlandiDegistir }) {
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [yeniMetin, setYeniMetin] = useState(gorev.metin);
  const [yeniOncelik, setYeniOncelik] = useState(gorev.oncelik);

  const handleKaydet = () => {
    gorevGuncelle(gorev.id, { metin: yeniMetin, oncelik: yeniOncelik });
    setDuzenlemeModu(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow px-4 py-3 mb-3 flex flex-col gap-2">
      {/* Üst satır: öncelik + metin */}
      <div className="flex items-center gap-2">
        <span className={`text-xs font-bold px-2 py-1 rounded-full shrink-0 ${oncelikRenk[gorev.oncelik]}`}>
          {gorev.oncelik}
        </span>
        <span className={`flex-1 text-sm font-medium break-words ${gorev.tamamlandi ? "line-through text-gray-400" : "text-gray-800"}`}>
          {gorev.metin}
        </span>
      </div>

      {/* Alt satır: butonlar */}
      {duzenlemeModu ? (
        <div className="flex flex-col gap-2">
          <input
            value={yeniMetin}
            onChange={(e) => setYeniMetin(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          <select
            value={yeniOncelik}
            onChange={(e) => setYeniOncelik(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none w-full"
          >
            <option>Düşük</option>
            <option>Orta</option>
            <option>Yüksek</option>
          </select>
          <div className="flex gap-2">
            <button onClick={handleKaydet} className="flex-1 bg-blue-500 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition">Kaydet</button>
            <button onClick={() => setDuzenlemeModu(false)} className="flex-1 bg-gray-200 text-gray-600 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition">İptal</button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => setDuzenlemeModu(true)} className="border border-gray-200 text-gray-600 px-3 py-1.5 rounded-xl text-xs hover:bg-gray-50 transition">Düzenle</button>
          <button onClick={() => gorevSil(gorev.id)} className="bg-red-400 hover:bg-red-500 text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition">Sil</button>
          // Aslında burayı da duzenleme ve sil ile aynı şekilde yapacaktım ama görüntü bugları oluştu o yüzden css ile yapmaya karar verdim
          <button
            onClick={() => tamamlandiDegistir(gorev.id)}
            style={{
              width: "44px",
              height: "24px",
              borderRadius: "9999px",
              backgroundColor: gorev.tamamlandi ? "#2dd4bf" : "#e5e7eb",
              position: "relative",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
              flexShrink: 0,
              }}
>
  <span
    style={{
      position: "absolute",
      top: "2px",
      left: gorev.tamamlandi ? "22px" : "2px",
      width: "20px",
      height: "20px",
      backgroundColor: "white",
      borderRadius: "9999px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      transition: "left 0.3s",
    }}
  />
</button>
        </div>
      )}
    </div>
  );
}