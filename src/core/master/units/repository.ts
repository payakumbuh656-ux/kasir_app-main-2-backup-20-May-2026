import { Unit, UnitId, CreateUnitInput, UpdateUnitInput } from "./model";

export interface UnitRepository {
  getAll(): Promise<Unit[]>;

  getActive(): Promise<Unit[]>;

  getById(id: UnitId): Promise<Unit | null>;

  existsByName(name: string): Promise<boolean>;

  create(data: CreateUnitInput): Promise<Unit>;

  update(id: UnitId, data: UpdateUnitInput): Promise<Unit>;

  activate(id: UnitId): Promise<void>;

  deactivate(id: UnitId): Promise<void>;
}
