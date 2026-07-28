import { Staff } from "./types";

const SESSION_KEY = "pos_session";

function getSessionKey(ownerUid: string) {
  return `${SESSION_KEY}_${ownerUid}`;
}

export type POSMode = "OWNER" | "OPERATOR" | null;

export interface POSSession {
  ownerUid: string;

  mode: POSMode;

  staff: Staff | null;

  loginAt: Date;
}

let currentOwnerUid: string | null = null;
let currentSession: POSSession | null = null;

export function resetSessionMemory() {
  currentOwnerUid = null;
  currentSession = null;
}

function saveSession(ownerUid: string, session: POSSession | null) {
  if (!session) {
    localStorage.removeItem(getSessionKey(ownerUid));
    return;
  }

  localStorage.setItem(getSessionKey(ownerUid), JSON.stringify(session));
}

function loadSession(ownerUid: string): POSSession | null {
  const stored = localStorage.getItem(getSessionKey(ownerUid));

  if (!stored) {
    return null;
  }

  return JSON.parse(stored) as POSSession;
}

// ambil session aktif
export function getCurrentSession(ownerUid: string) {
  if (currentOwnerUid !== ownerUid) {
    currentOwnerUid = ownerUid;
    currentSession = null;
  }

  if (!currentSession) {
    currentSession = loadSession(ownerUid);
  }

  return currentSession;
}

// ambil staff aktif
// kalau OWNER maka hasilnya null
export function getCurrentStaff(ownerUid: string) {
  if (!currentSession) {
    currentSession = loadSession(ownerUid);
  }

  return currentSession?.staff ?? null;
}

// cek mode sekarang
export function getCurrentMode(ownerUid: string): POSMode {
  if (!currentSession) {
    currentSession = loadSession(ownerUid);
  }

  return currentSession?.mode ?? null;
}

// login sebagai operator
export function setOperatorSession(ownerUid: string, staff: Staff) {
  currentOwnerUid = ownerUid;

  currentSession = {
    ownerUid,
    mode: "OPERATOR",
    staff,
    loginAt: new Date(),
  };

  saveSession(ownerUid, currentSession);
}

// login sebagai owner
export function setOwnerSession(ownerUid: string) {
  currentOwnerUid = ownerUid;

  currentSession = {
    ownerUid,
    mode: "OWNER",
    staff: null,
    loginAt: new Date(),
  };

  saveSession(ownerUid, currentSession);
}

// logout / end shift
export function clearPOSSession(ownerUid: string) {
  currentSession = null;
  currentOwnerUid = null;

  localStorage.removeItem(getSessionKey(ownerUid));
}
