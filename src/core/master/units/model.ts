export type UnitId = string;

export interface Unit {
  id: UnitId;
  name: string;
  symbol: string;

  allowDecimal: boolean;

  active: boolean;
  system: boolean;

  sortOrder: number;

  createdAt: number;
  updatedAt: number;
}

export interface CreateUnitInput {
  name: string;
  symbol: string;

  allowDecimal: boolean;
}

export interface UpdateUnitInput {
  name?: string;
  symbol?: string;

  allowDecimal?: boolean;

  active?: boolean;

  sortOrder?: number;
}
