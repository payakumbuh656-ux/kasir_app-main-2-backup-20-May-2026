type Props = {
  summary: Record<string, number>;

  activeFilter: string;

  onFilterChange: (filter: string) => void;
};

const items = [
  {
    key: "RESTOCK",
    title: "Restock",
    subtitle: "Aktivitas",
    color: "border-emerald-100 bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    key: "SALE",
    title: "Penjualan",
    subtitle: "Transaksi",
    color: "border-red-100 bg-red-50",
    text: "text-red-700",
  },
  {
    key: "ADJUSTMENT",
    title: "Adjustment",
    subtitle: "Penyesuaian",
    color: "border-amber-100 bg-amber-50",
    text: "text-amber-700",
  },
  {
    key: "REDUCE",
    title: "Pengurangan",
    subtitle: "Aktivitas",
    color: "border-blue-100 bg-blue-50",
    text: "text-blue-700",
  },
];

export default function ActivitySummary({
  summary,
  activeFilter,
  onFilterChange,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 border-t border-slate-200 bg-white px-6 py-4 sm:grid-cols-2">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => onFilterChange(item.key)}
          className={`rounded-2xl border p-4 text-left cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] ${item.color} ${activeFilter === item.key ? "ring-2 ring-indigo-500 shadow-lg" : ""}`}
        >
          <div className="flex items-center justify-between">
            <p className={`font-bold ${item.text}`}>{item.title}</p>

            <span className={`text-2xl font-black ${item.text}`}>
              {summary[item.key] ?? 0}
            </span>
          </div>

          <p className="mt-2 text-xs text-slate-500">{item.subtitle}</p>

          <p className="mt-2 text-[11px] font-medium text-slate-400">
            Klik untuk melihat →
          </p>
        </button>
      ))}
    </div>
  );
}
