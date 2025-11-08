import { ShieldCheck, Wand2, Coins, Users } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'On-chain Certificates',
    desc: 'Issue verifiable, tamper-proof credentials backed by blockchain with instant verification portals.'
  },
  {
    icon: Wand2,
    title: 'AI Tutor & Authoring',
    desc: 'Personalized coaching, adaptive paths, and AI-generated content aligned to your org’s skills map.'
  },
  {
    icon: Coins,
    title: 'Branded Discount Coins',
    desc: 'Create your company coin to reward learning, drive course completion, and power internal perks.'
  },
  {
    icon: Users,
    title: 'Multi-tenant Control',
    desc: 'Isolated spaces for each company with SSO, roles, analytics, and audit logs built-in.'
  },
];

function Platform() {
  return (
    <section id="platform" className="relative bg-[#06060a] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">One platform, every capability</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Everything your enterprise needs to design, deliver, and verify world‑class learning experiences.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-fuchsia-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
              <div className="pointer-events-none absolute -inset-20 -z-[1] rotate-6 bg-gradient-to-tr from-fuchsia-500/15 via-violet-500/15 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Platform;
