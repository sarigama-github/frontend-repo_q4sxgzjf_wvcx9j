import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Showcase from './components/Showcase';
import AISection from './components/AISection';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
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
    </div>
  );
}

export default App;
