export interface ReturnItem {
  id: string;

  name: string;

  price: number;

  quantity: number;
}


export interface ReturnRecord {
  id: string;

  transactionId: string;

  items: ReturnItem[];

  totalRefund: number;

  reason?: string;

  createdBy: any;

  date: number;
}