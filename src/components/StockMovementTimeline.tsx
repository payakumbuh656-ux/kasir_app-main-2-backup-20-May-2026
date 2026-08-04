import { useMemo, useRef, useState } from "react";
import { History, TrendingDown, TrendingUp } from "lucide-react";
import StockMovementCard from "./StockMovementCard";
import ActivitySummary from "./ActivitySummary";

type StockMovement = {
  id: string;
  type: string;
  qty: number;
  previousStock: number;
  currentStock: number;
  supplier?: string;
  note?: string;
  createdAt?: any;
};

type Props = {
  movements: StockMovement[];
};

function formatTimelineDate(createdAt: any) {
  if (!createdAt?.toDate) {
    return {
      group: "Tanpa Tanggal",
      time: "--:--",
      full: "Tanggal tidak tersedia",
    };
  }

  const date = createdAt.toDate();

  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diff = (today.getTime() - target.getTime()) / (1000 * 60 * 60 * 24);

  const time = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const full = date.toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  if (diff === 0)
    return {
      group: "Hari Ini",
      time,
      full,
    };

  if (diff === 1)
    return {
      group: "Kemarin",
      time,
      full,
    };

  return {
    group: date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    time,
    full,
  };
}

export default function StockMovementTimeline({ movements }: Props) {
  const [activityFilter, setActivityFilter] = useState("ALL");
  const [highlightedMovementId, setHighlightedMovementId] = useState<string | null>(null);
  const [pendingFocusType, setPendingFocusType] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const filteredMovements = useMemo(() => {
    if (activityFilter === "ALL") return movements;

    return movements.filter((m) => m.type === activityFilter);
  }, [activityFilter, movements]);

  const focusActivity = (type: string) => {
    setActivityFilter(type);

    requestAnimationFrame(() => {
      timelineRef.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      const firstMovement = movements.find((movement) => movement.type === type);

      if (!firstMovement) return;

      setHighlightedMovementId(firstMovement.id);

      document.getElementById(`movement-${firstMovement.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setHighlightedMovementId(null);
      }, 400);
    });
  };

  const groupedMovements = useMemo(() => {
    return filteredMovements.reduce(
      (acc, movement) => {
        const { group } = formatTimelineDate(movement.createdAt);

        if (!acc[group]) {
          acc[group] = [];
        }

        acc[group].push(movement);

        return acc;
      },
      {} as Record<string, StockMovement[]>
    );
  }, [filteredMovements]);

  const groupedSummaryMovements = useMemo(() => {
    return movements.reduce(
      (acc, movement) => {
        const { group } = formatTimelineDate(movement.createdAt);

        if (!acc[group]) {
          acc[group] = [];
        }

        acc[group].push(movement);

        return acc;
      },
      {} as Record<string, StockMovement[]>
    );
  }, [movements]);

  const groupSummaries = useMemo(() => {
    return Object.fromEntries(
      Object.entries(groupedSummaryMovements as Record<string, StockMovement[]>).map(([group, items]) => {
        const summary = items.reduce(
          (acc, movement) => {
            acc[movement.type] = (acc[movement.type] ?? 0) + 1;

            return acc;
          },
          {} as Record<string, number>
        );

        return [group, summary];
      })
    );
  }, [groupedSummaryMovements]);

  return (
    <div className="border-t border-slate-200">
      <div className="border-b border-slate-200 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100">
            <History size={20} className="text-indigo-600" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Riwayat Pergerakan Stok</h2>

            <p className="text-sm text-slate-500">Seluruh aktivitas perubahan stok akan tercatat otomatis.</p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[
            { label: "Semua", value: "ALL" },
            { label: "Restock", value: "RESTOCK" },
            { label: "Penjualan", value: "SALE" },
            { label: "Adjustment", value: "ADJUSTMENT" },
            { label: "Pengurangan", value: "REDUCE" },
            { label: "Edit Barang", value: "EDIT" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setActivityFilter(item.value)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activityFilter === item.value
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={timelineRef} className="max-h-[430px] overflow-y-auto overscroll-contain">
        {movements.length === 0 ? (
          <div className="p-6">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-inner ring-1 ring-indigo-100">
                <History size={34} strokeWidth={2.2} className="text-indigo-600" />
              </div>

              <h3 className="mt-7 text-[24px] font-black tracking-tight text-slate-900">Belum Ada Aktivitas</h3>

              <p className="mx-auto mt-4 max-w-[290px] text-[15px] leading-7 text-slate-500">
                Semua aktivitas seperti <span className="font-semibold text-slate-700">Restock</span>,{" "}
                <span className="font-semibold text-slate-700">Penjualan</span>,{" "}
                <span className="font-semibold text-slate-700">Penyesuaian</span>,{" "}
                <span className="font-semibold text-slate-700">Transfer</span>, maupun{" "}
                <span className="font-semibold text-slate-700">Retur</span> akan tercatat otomatis di sini.
              </p>
            </div>
          </div>
        ) : (
          Object.entries(groupedMovements as Record<string, StockMovement[]>).map(([group, items]) => (
            <div key={group}>
              <div className="z-10 border-y border-slate-200 bg-slate-50/95 backdrop-blur">
                <div className="px-6 py-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">{group}</h3>

                  <p className="mt-1 text-xs text-slate-400">Aktivitas pada periode ini</p>
                </div>

                <ActivitySummary
                  summary={groupSummaries[group] ?? {}}
                  activeFilter={activityFilter}
                  onFilterChange={focusActivity}
                />
              </div>

              {items.map((movement) => (
                <StockMovementCard
                  key={movement.id}
                  movement={movement}
                  highlighted={highlightedMovementId === movement.id}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
