import { CollectionReference, Firestore, collection } from "firebase/firestore";

import { db } from "@/lib/firebase";

import { CreateUnitInput, Unit, UnitId, UpdateUnitInput } from "./model";

import { UnitRepository } from "./repository";

export class FirestoreUnitRepository implements UnitRepository {
  private readonly collection: CollectionReference;

  constructor(firestore: Firestore = db) {
    this.collection = collection(firestore, "units");
  }

  async getAll(): Promise<Unit[]> {
    throw new Error("Method not implemented.");
  }

  async getActive(): Promise<Unit[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: UnitId): Promise<Unit | null> {
    throw new Error("Method not implemented.");
  }

  async existsByName(name: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async create(data: CreateUnitInput): Promise<Unit> {
    throw new Error("Method not implemented.");
  }

  async update(id: UnitId, data: UpdateUnitInput): Promise<Unit> {
    throw new Error("Method not implemented.");
  }

  async activate(id: UnitId): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async deactivate(id: UnitId): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
