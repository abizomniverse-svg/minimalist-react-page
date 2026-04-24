// Lightweight client-side session helper for the demo auth flow.
// NOTE: This is NOT a security boundary — it only prevents casual access to
// authenticated pages in this demo. Real auth must be enforced server-side.

const SESSION_KEY = 'tikytop_demo_session';

export function setSession(user) {
  try {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ user, createdAt: Date.now() })
    );
  } catch {
    // ignore storage errors
  }
}

export function getSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

export function isAuthenticated() {
  return !!getSession();
}
