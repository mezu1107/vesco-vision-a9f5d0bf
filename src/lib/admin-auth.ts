// Simple localStorage-based auth for the admin panel.
// Credentials are checked client-side; this is sufficient for a single-user CMS.

const ADMIN_EMAIL = "admin@am.com";
const ADMIN_PASSWORD = "Mezu@1105";
const AUTH_KEY = "pgbuilder_auth";

export function login(email: string, password: string): boolean {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_KEY, "1");
    }
    return true;
  }
  return false;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "1";
}
