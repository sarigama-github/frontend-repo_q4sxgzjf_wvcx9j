import { MessageSquare, Sparkles, Workflow, Bot } from 'lucide-react';

const cards = [
  {
    icon: Bot,
    title: 'Adaptive tutoring',
    desc: 'Dynamic hints, formative checks, and spaced repetition for every learner.'
  },
  {
    icon: Workflow,
    title: 'Course co-pilot',
    desc: 'Generate outlines, quizzes, and labs; align content to your skills ontology.'
  },
  {
    icon: MessageSquare,
    title: 'Natural conversations',
    desc: 'Multi-modal chat with context grounding across lessons, notes, and activity.'
  },
  {
    icon: Sparkles,
    title: 'Quality & safety',
    desc: 'Human-in-the-loop reviews, prompt governance, and evaluation suites.'
  },
];

function AISection() {
  return (
    <section id="ai" className="relative bg-[#0a0a10] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_20%,rgba(139,92,246,0.12),transparent),radial-gradient(600px_300px_at_80%_80%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">AI that accelerates learning</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">From content creation to personalized coaching, our AI suite empowers teams to learn faster and smarter.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-fuchsia-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AISection;
