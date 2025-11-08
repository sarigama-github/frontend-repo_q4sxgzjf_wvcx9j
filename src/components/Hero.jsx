import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5VBv4g7ZrS9i1n8H/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="py-16">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
              Build modern UIs fast
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-prose">
              A beautiful starting point with React, Tailwind, and delightful interactions. Tweak, ship, and scale your next idea without the boilerplate.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                Start Building
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-indigo-200 via-transparent to-rose-200 opacity-60 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative bg-white/70 backdrop-blur rounded-2xl border border-slate-200 shadow-xl p-6">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <p className="font-medium text-slate-900">Vite + React</p>
                  <p className="text-slate-600 mt-1">Fast dev server and instant HMR.</p>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <p className="font-medium text-slate-900">Tailwind CSS</p>
                  <p className="text-slate-600 mt-1">Utility-first styling out of the box.</p>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <p className="font-medium text-slate-900">Framer Motion</p>
                  <p className="text-slate-600 mt-1">Polished micro-interactions.</p>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 bg-white">
                  <p className="font-medium text-slate-900">Icons</p>
                  <p className="text-slate-600 mt-1">Lucide icon set included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
