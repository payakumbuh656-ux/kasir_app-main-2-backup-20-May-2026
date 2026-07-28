import bcrypt from "bcryptjs";
import CryptoJS from "crypto-js";

// ===============================
// SHA256 LEGACY SUPPORT
// ===============================

export async function hashSHA256(value: string): Promise<string> {
  return CryptoJS.SHA256(value).toString();
}

// ===============================
// BCRYPT NEW PASSWORD
// ===============================

export async function hashPassword(value: string): Promise<string> {
  return await bcrypt.hash(value, 10);
}

// ===============================
// VERIFY PASSWORD
// SUPPORT:
// - bcrypt
// - old SHA256
// ===============================

export async function verifyPassword(value: string, storedHash: string): Promise<boolean> {
  // bcrypt format
  if (storedHash.startsWith("$2a$") || storedHash.startsWith("$2b$")) {
    return await bcrypt.compare(value, storedHash);
  }

  // legacy SHA256
  const oldHash = await hashSHA256(value);

  return oldHash === storedHash;
}

// ===============================
// DETECT HASH TYPE
// ===============================

export function isBcryptHash(hash: string): boolean {
  return hash.startsWith("$2a$") || hash.startsWith("$2b$");
}
