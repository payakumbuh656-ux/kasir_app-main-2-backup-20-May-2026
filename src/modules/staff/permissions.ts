import { Staff, StaffPermissions } from "./types";
import { getCurrentMode, getCurrentStaff } from "./session";

export function isOwner(staff: Staff | null): boolean {
  return staff?.role === "OWNER";
}

export function can(staff: Staff | null, permission: keyof StaffPermissions): boolean {
  if (!staff) return false;

  if (isOwner(staff)) {
    return true;
  }

  return staff.permissions?.[permission] ?? false;
}

export function canAccess(permission: keyof StaffPermissions): boolean {
  const mode = getCurrentMode();

  const staff = getCurrentStaff();

  if (mode === "OWNER") {
    return true;
  }

  if (mode === "OPERATOR" && staff) {
    return staff.permissions?.[permission] ?? false;
  }

  return false;
}
