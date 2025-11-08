import { useEffect, useMemo, useState } from 'react';
import { ShieldCheck, LogOut, Menu, Inbox, Settings } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.detail || 'Login failed');
      localStorage.setItem('ox_token', data.access_token);
      onSuccess?.(data.access_token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-neutral-900/70 p-8 text-white shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Admin Console</h2>
          <p className="text-sm text-slate-300">Sign in to view demo requests</p>
        </div>
      </div>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-fuchsia-400" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-fuchsia-400" />
        </div>
        {error && <p className="text-sm text-rose-400">{error}</p>}
        <button disabled={loading} className="w-full rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`relative h-full shrink-0 border-r border-white/10 bg-black/40 ${collapsed ? 'w-16' : 'w-64'} transition-[width] duration-200` }>
      <div className="flex h-16 items-center justify-between px-3">
        <button onClick={onToggle} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10">
          <Menu className="h-4 w-4" />
        </button>
        {!collapsed && <span className="text-sm font-medium text-slate-300">Navigation</span>}
      </div>
      <nav className="px-2">
        <a href="#admin" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white hover:bg-white/5">
          <Inbox className="h-4 w-4" />
          {!collapsed && <span>Demo Requests</span>}
        </a>
        <button disabled className="mt-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-slate-400">
          <Settings className="h-4 w-4" />
          {!collapsed && <span>Settings</span>}
        </button>
      </nav>
    </aside>
  );
}

function RequestsTable({ token }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const headers = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token]);

  useEffect(() => {
    let active = true;
    const run = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${API_BASE}/demo-requests`, { headers });
        const data = await res.json().catch(() => ([]));
        if (!res.ok) throw new Error(data.detail || 'Failed to fetch');
        if (active) setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };
    run();
    return () => { active = false; };
  }, [headers]);

  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-medium">Demo Requests</h3>
        <span className="text-xs text-slate-400">{items.length} total</span>
      </div>
      {loading ? (
        <p className="text-slate-300">Loading...</p>
      ) : error ? (
        <p className="text-rose-400">{error}</p>
      ) : items.length === 0 ? (
        <p className="text-slate-300">No requests yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-300">
              <tr>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">WhatsApp</th>
                <th className="px-3 py-2">Company</th>
                <th className="px-3 py-2">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((r) => (
                <tr key={r.id} className="hover:bg-white/5">
                  <td className="px-3 py-2">{r.email}</td>
                  <td className="px-3 py-2">{r.whatsapp}</td>
                  <td className="px-3 py-2">{r.company}</td>
                  <td className="px-3 py-2 text-slate-400">{new Date(r.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem('ox_token') || '');
  const [collapsed, setCollapsed] = useState(false);

  const logout = () => {
    localStorage.removeItem('ox_token');
    setToken('');
  };

  if (!token) {
    return (
      <section className="relative min-h-[80vh] bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AdminLogin onSuccess={setToken} />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] bg-black">
      <div className="flex h-[80vh]">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
        <div className="flex-1">
          <div className="flex h-16 items-center justify-between border-b border-white/10 bg-black/40 px-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-semibold">OrbitX Admin</h2>
            </div>
            <button onClick={logout} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/5">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
          <div className="p-4">
            <RequestsTable token={token} />
          </div>
        </div>
      </div>
    </section>
  );
}
