import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />
      <div className="relative z-10 w-full">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7 py-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> New: AI Tutor 2.0 + On-chain Certificates
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              OrbitX — enterprise learning reinvented with AI and blockchain
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Deliver immersive learning at scale. Issue tamper-proof certificates on-chain, launch branded discount coins, and give every learner an AI copilot.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:from-violet-400 hover:to-fuchsia-400">
                Book a live demo
              </a>
              <a href="#platform" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                Explore the platform
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-transparent blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 shadow-2xl">
                <dl className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <dt className="text-slate-400">Companies onboarded</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">1,200+</dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <dt className="text-slate-400">Certificates issued</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">350k</dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <dt className="text-slate-400">AI sessions</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">5.8M</dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <dt className="text-slate-400">Avg. satisfaction</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">98%</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
