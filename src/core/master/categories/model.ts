export type CategoryId = string;

export interface Category {
  id: CategoryId;

  name: string;

  active: boolean;

  system: boolean;

  sortOrder: number;

  createdAt: number;
  updatedAt: number;
}

export interface CreateCategoryInput {
  name: string;
}

export interface UpdateCategoryInput {
  name?: string;

  active?: boolean;

  sortOrder?: number;
}
