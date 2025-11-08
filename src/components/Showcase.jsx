import { CheckCircle2, Cpu, Link2, Sparkles } from 'lucide-react';

const bullets = [
  { icon: Cpu, text: 'AI copilots for learners, creators, and admins' },
  { icon: Link2, text: 'Instant certificate verification via public explorers' },
  { icon: CheckCircle2, text: 'Compliance ready: SSO, SCIM, SOC2, GDPR' },
  { icon: Sparkles, text: 'Delightful dark UI with motion and clarity' },
];

function Showcase() {
  return (
    <section id="blockchain" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(217,70,239,0.15),transparent),radial-gradient(600px_200px_at_20%_80%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Blockchain-backed trust</h3>
          <p className="mt-4 text-slate-300">Every certificate is hashed and anchored on-chain. Employers and partners can verify authenticity in seconds, from anywhere.</p>
          <ul className="mt-6 space-y-3 text-slate-300">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl">
            <div className="h-64 w-full rounded-lg bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-transparent" />
            <div className="pointer-events-none absolute -inset-20 -z-[1] rotate-6 bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-transparent blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
