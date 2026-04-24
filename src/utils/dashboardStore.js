// Lightweight localStorage-backed store for dashboard data.
// Persists orders, wallet balance, transactions across sessions.

const STORAGE_KEY = 'tikytop_dashboard_v1';

const seedOrders = () => ([
  { id: '#TK-7821', service: 'TikTok Followers', platform: 'tiktok', serviceId: 'followers', amount: 1000, delivered: 1000, status: 'completed', startTime: Date.now() - 86400000 * 3, cost: 5.60, url: 'https://tiktok.com/@demo' },
  { id: '#IG-3421', service: 'Instagram Likes', platform: 'instagram', serviceId: 'likes', amount: 500, delivered: 500, status: 'completed', startTime: Date.now() - 86400000 * 2, cost: 2.99, url: 'https://instagram.com/demo' },
  { id: '#YT-1203', service: 'YouTube Subscribers', platform: 'youtube', serviceId: 'subscribers', amount: 100, delivered: 45, status: 'processing', startTime: Date.now() - 3600000, cost: 13.90, url: 'https://youtube.com/@demo' },
  { id: '#TK-9954', service: 'TikTok Likes', platform: 'tiktok', serviceId: 'likes', amount: 2000, delivered: 0, status: 'pending', startTime: Date.now() - 600000, cost: 0.16, url: 'https://tiktok.com/@demo/video/1' },
]);

const defaultState = () => ({
  orders: seedOrders(),
  wallet: {
    balance: 50.00,
    transactions: [
      { id: 't1', type: 'deposit', amount: 50.00, label: 'Welcome bonus', timestamp: Date.now() - 86400000 * 5 },
    ],
  },
});

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const init = defaultState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
      return init;
    }
    const parsed = JSON.parse(raw);
    return {
      orders: Array.isArray(parsed.orders) ? parsed.orders : seedOrders(),
      wallet: parsed.wallet || defaultState().wallet,
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function resetState() {
  const init = defaultState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
  return init;
}
