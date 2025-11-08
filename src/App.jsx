import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Vibe Starter. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-700" href="#features">Features</a>
            <a className="hover:text-slate-700" href="#get-started">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
