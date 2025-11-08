import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Showcase from './components/Showcase';
import AISection from './components/AISection';
import Pricing from './components/Pricing';
import DemoRequestModal from './components/DemoRequestModal';
import Admin from './components/Admin';

function Landing({ onOpenDemo }) {
  // Listen for clicks to #demo to open modal
  useEffect(() => {
    const handler = () => {
      if (window.location.hash === '#demo') onOpenDemo();
    };
    window.addEventListener('hashchange', handler);
    // open if already #demo
    if (window.location.hash === '#demo') onOpenDemo();
    return () => window.removeEventListener('hashchange', handler);
  }, [onOpenDemo]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Platform />
        <Showcase />
        <AISection />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} OrbitX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#platform">Platform</a>
            <a className="hover:text-white" href="#blockchain">Blockchain Certs</a>
            <a className="hover:text-white" href="#ai">AI</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const closeDemo = () => {
    setDemoOpen(false);
    if (window.location.hash === '#demo') history.replaceState(null, '', ' ');
  };

  const onSubmitted = () => {
    // keep modal open to show success; could auto-close if desired
  };

  // Simple hash routing: #admin shows the admin console
  if (route === '#admin') {
    return (
      <div className="min-h-screen bg-black text-white antialiased">
        <Admin />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Landing onOpenDemo={() => setDemoOpen(true)} />
      <DemoRequestModal open={demoOpen} onClose={closeDemo} onSubmitted={onSubmitted} />
    </div>
  );
}

export default App;
