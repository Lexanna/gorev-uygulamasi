import GorevKart from "./GorevKart";

export default function GorevListesi({ gorevler, gorevSil, gorevGuncelle, tamamlandiDegistir, karanlik }) {
  return (
    <div>
      <h2 className="text-blue-500 font-semibold text-base mb-4">Görev Listesi</h2>
      {gorevler.length === 0 && (
        <p className={`text-sm text-center py-6 ${karanlik ? "text-gray-400" : "text-gray-400"}`}>Henüz görev eklenmedi.</p>
      )}
      {gorevler.map((gorev) => (
        <GorevKart
          key={gorev.id}
          gorev={gorev}
          gorevSil={gorevSil}
          gorevGuncelle={gorevGuncelle}
          tamamlandiDegistir={tamamlandiDegistir}
          karanlik={karanlik}
        />
      ))}
    </div>
  );
}