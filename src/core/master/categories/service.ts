import { Category, CategoryId, CreateCategoryInput, UpdateCategoryInput } from "./model";
import { CategoryRepository } from "./repository";

export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  async getAll(): Promise<Category[]> {
    return this.repository.getAll();
  }

  async getById(id: CategoryId): Promise<Category | null> {
    return this.repository.getById(id);
  }

  async create(data: CreateCategoryInput): Promise<Category> {
    const name = data.name.trim();

    if (await this.repository.existsByName(name)) {
      throw new Error("Category name already exists.");
    }

    return this.repository.create({
      ...data,
      name,
    });
  }

  async update(id: CategoryId, data: UpdateCategoryInput): Promise<Category> {
    const current = await this.repository.getById(id);

    if (!current) {
      throw new Error("Category not found.");
    }

    if (data.name !== undefined) {
      const name = data.name.trim();

      if (name.toLowerCase() !== current.name.toLowerCase() && (await this.repository.existsByName(name))) {
        throw new Error("Category name already exists.");
      }

      data = {
        ...data,
        name,
      };
    }

    return this.repository.update(id, data);
  }

  async activate(id: CategoryId): Promise<void> {
    return this.repository.activate(id);
  }

  async deactivate(id: CategoryId): Promise<void> {
    return this.repository.deactivate(id);
  }
}
