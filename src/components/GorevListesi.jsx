import GorevKart from "./GorevKart";

export default function GorevListesi({ gorevler, gorevSil, gorevGuncelle, tamamlandiDegistir }) {
  return (
    <div>
      <h2 className="text-blue-500 font-semibold text-base mb-4">Görev Listesi</h2>
      {gorevler.length === 0 && (
        <p className="text-gray-400 text-sm text-center py-6">Henüz görev eklenmedi.</p>
      )}
      {gorevler.map((gorev) => (
        <GorevKart
          key={gorev.id}
          gorev={gorev}
          gorevSil={gorevSil}
          gorevGuncelle={gorevGuncelle}
          tamamlandiDegistir={tamamlandiDegistir}
        />
      ))}
    </div>
  );
}