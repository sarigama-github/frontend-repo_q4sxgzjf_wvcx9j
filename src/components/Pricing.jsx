function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(217,70,239,0.12),transparent),radial-gradient(600px_200px_at_20%_80%,rgba(99,102,241,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Start small and scale to your entire enterprise. No hidden fees.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Startup</h3>
            <p className="mt-1 text-slate-300">Up to 100 users • Basic analytics</p>
            <p className="mt-4 text-3xl font-bold text-white">$99<span className="text-base font-medium text-slate-400">/mo</span></p>
            <a href="#demo" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/15 hover:bg-white/20">Start trial</a>
          </div>
          <div className="relative rounded-2xl border border-fuchsia-500/40 bg-gradient-to-b from-fuchsia-500/10 to-violet-500/10 p-6 shadow-xl shadow-fuchsia-500/10">
            <div className="absolute -top-3 right-6 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-fuchsia-200">Most Popular</div>
            <h3 className="text-lg font-semibold text-white">Growth</h3>
            <p className="mt-1 text-slate-300">Up to 5,000 users • Certs + Coins + AI</p>
            <p className="mt-4 text-3xl font-bold text-white">$599<span className="text-base font-medium text-slate-400">/mo</span></p>
            <a href="#demo" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white hover:from-violet-400 hover:to-fuchsia-400">Talk to sales</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
            <p className="mt-1 text-slate-300">Unlimited users • SSO • Custom SLAs</p>
            <p className="mt-4 text-3xl font-bold text-white">Custom</p>
            <a href="#demo" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/15 hover:bg-white/20">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
