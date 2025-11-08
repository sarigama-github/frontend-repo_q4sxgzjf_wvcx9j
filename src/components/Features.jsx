import { Sparkles, Shield, Zap, Layout } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Beautiful by default',
    desc: 'Thoughtful spacing, typography, and color that looks great out of the box.'
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Instant reloads and optimized builds powered by Vite.'
  },
  {
    icon: Shield,
    title: 'Production ready',
    desc: 'Best practices and sensible defaults so you can ship with confidence.'
  },
  {
    icon: Layout,
    title: 'Composable',
    desc: 'Small, focused components that are easy to extend.'
  },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to start</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A curated set of tools and patterns so you can focus on your product, not the plumbing.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <div className="absolute inset-0 -z-[1] rounded-2xl bg-gradient-to-br from-indigo-100 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
