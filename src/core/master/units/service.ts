import { Unit, UnitId, CreateUnitInput, UpdateUnitInput } from "./model";
import { UnitRepository } from "./repository";

export class UnitService {
  constructor(private readonly repository: UnitRepository) {}

  async getAll(): Promise<Unit[]> {
    return this.repository.getAll();
  }

  async getById(id: UnitId): Promise<Unit | null> {
    return this.repository.getById(id);
  }

  async create(data: CreateUnitInput): Promise<Unit> {
    return this.repository.create(data);
  }

  async update(id: UnitId, data: UpdateUnitInput): Promise<Unit> {
    return this.repository.update(id, data);
  }

  async activate(id: UnitId): Promise<void> {
    return this.repository.activate(id);
  }

  async deactivate(id: UnitId): Promise<void> {
    return this.repository.deactivate(id);
  }
}
