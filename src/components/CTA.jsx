function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-rose-500 text-white p-10">
          <div className="absolute right-0 top-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to ship your next idea?</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Start from a polished base and iterate quickly with a delightful developer experience.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-100">Create project</a>
              <a href="#features" className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20">See features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
