import { Category, CategoryId, CreateCategoryInput, UpdateCategoryInput } from "./model";

export interface CategoryRepository {
  getAll(): Promise<Category[]>;

  getActive(): Promise<Category[]>;

  getById(id: CategoryId): Promise<Category | null>;

  existsByName(name: string): Promise<boolean>;

  create(data: CreateCategoryInput): Promise<Category>;

  update(id: CategoryId, data: UpdateCategoryInput): Promise<Category>;

  activate(id: CategoryId): Promise<void>;

  deactivate(id: CategoryId): Promise<void>;
}
