import type { POSActor } from "../staff/actor";

export type DashboardPeriod = "today" | "month" | "year";
export type PaymentChannel = "cash" | "qris" | "transfer" | "other";
export type CashActor = Pick<POSActor, "actorId" | "actorName" | "actorType" | "actorRole">;
export type CashTransaction = {
  id: string;
  date: unknown;
  total?: unknown;
  paidAmount?: unknown;
  paymentMethod?: unknown;
  status?: unknown;
};
export type CashRefund = {
  id: string;
  transactionId?: string;
  date: unknown;
  totalRefund?: unknown;
  paymentMethod?: unknown;
};
export type CashEntry = {
  id: string;
  kind: "IN" | "OUT";
  amount: number;
  note: string;
  date: number;
  createdBy?: CashActor;
};
export type CashDay = {
  openingBalance: number;
  openingRevision: number;
  updatedBy?: CashActor;
};
export type PaymentTotal = {
  channel: PaymentChannel;
  label: string;
  count: number;
  received: number;
  refunded: number;
};
export type PaymentSummary = {
  methods: PaymentTotal[];
  received: number;
  refunded: number;
  unclassifiedRefund: number;
};
export type CashSummary = {
  opening: number;
  sales: number;
  refunds: number;
  cashIn: number;
  cashOut: number;
  other: number;
  netFlow: number;
  estimated: number;
  unclassifiedRefund: number;
};
export type CashFormValues = { amount: number; note: string; kind: "IN" | "OUT" };
