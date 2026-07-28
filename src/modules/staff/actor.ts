import { auth } from "../../lib/firebase";
import { getCurrentMode, getCurrentStaff } from "./session";


export interface POSActor {
  accountUid: string | null;
  accountEmail: string | null;
  accountRole: "owner";

  mode: "OWNER" | "OPERATOR" | null;

  actorType: "OWNER" | "STAFF";

  actorId: string | null;
  actorName: string | null;
  actorRole: string | null;
}


export function getCurrentActor(): POSActor {
  const user = auth.currentUser;

  const mode = getCurrentMode();

  const staff = getCurrentStaff();


  if (mode === "OPERATOR" && staff) {
    return {
      accountUid: user?.uid ?? null,
      accountEmail: user?.email ?? null,
      accountRole: "owner",

      mode,

      actorType: "STAFF",

      actorId: staff.id,
      actorName: staff.name,
      actorRole: staff.role,
    };
  }


  return {
    accountUid: user?.uid ?? null,
    accountEmail: user?.email ?? null,
    accountRole: "owner",

    mode,

    actorType: "OWNER",

    actorId: user?.uid ?? null,
    actorName: "OWNER",
    actorRole: "OWNER",
  };
}