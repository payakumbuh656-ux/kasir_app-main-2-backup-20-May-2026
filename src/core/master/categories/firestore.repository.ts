import {
  CollectionReference,
  Firestore,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import { Category, CategoryId, CreateCategoryInput, UpdateCategoryInput } from "./model";

import { CategoryRepository } from "./repository";
import { mapCategoryDocument } from "./mapper";

export class FirestoreCategoryRepository implements CategoryRepository {
  private readonly collection: CollectionReference;

  constructor(firestore: Firestore = db) {
    this.collection = collection(firestore, "categories");
  }

  async getAll(): Promise<Category[]> {
    const snapshot = await getDocs(query(this.collection, orderBy("sortOrder"), orderBy("name")));

    return snapshot.docs.map(mapCategoryDocument).filter((category): category is Category => category !== null);
  }

  async getActive(): Promise<Category[]> {
    const snapshot = await getDocs(
      query(this.collection, where("active", "==", true), orderBy("sortOrder"), orderBy("name"))
    );

    return snapshot.docs.map(mapCategoryDocument).filter((category): category is Category => category !== null);
  }

  async getById(id: CategoryId): Promise<Category | null> {
    const snapshot = await getDoc(doc(this.collection, id));

    if (!snapshot.exists()) {
      return null;
    }

    return mapCategoryDocument(snapshot);
  }

  async existsByName(name: string): Promise<boolean> {
    const snapshot = await getDocs(query(this.collection, where("name", "==", name.trim()), limit(1)));

    return !snapshot.empty;
  }

  async create(data: CreateCategoryInput): Promise<Category> {
    const now = Timestamp.now();

    const payload = {
      name: data.name.trim(),
      active: true,
      system: false,
      sortOrder: 0,
      createdAt: now,
      updatedAt: now,
    };

    const document = await addDoc(this.collection, payload);

    return {
      id: document.id,
      ...payload,
      createdAt: now.toMillis(),
      updatedAt: now.toMillis(),
    };
  }

  async update(id: CategoryId, data: UpdateCategoryInput): Promise<Category> {
    const reference = doc(this.collection, id);

    const current = await this.getById(id);

    if (!current) {
      throw new Error("Category not found.");
    }

    await updateDoc(reference, {
      ...(data.name !== undefined && { name: data.name.trim() }),
      ...(data.active !== undefined && { active: data.active }),
      ...(data.sortOrder !== undefined && { sortOrder: data.sortOrder }),
      updatedAt: Timestamp.now(),
    });

    const snapshot = await getDoc(reference);

    const category = snapshot.exists() ? mapCategoryDocument(snapshot) : null;

    if (!category) {
      throw new Error("Category not found.");
    }

    return category;
  }

  async activate(id: CategoryId): Promise<void> {
    await updateDoc(doc(this.collection, id), {
      active: true,
      updatedAt: Timestamp.now(),
    });
  }

  async deactivate(id: CategoryId): Promise<void> {
    await updateDoc(doc(this.collection, id), {
      active: false,
      updatedAt: Timestamp.now(),
    });
  }
}
