import { Rocket, Shield, Brain, Coins } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight">OrbitX</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#platform" className="hover:text-white">Platform</a>
          <a href="#blockchain" className="hover:text-white">Blockchain Certs</a>
          <a href="#ai" className="hover:text-white">AI Learning</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#demo" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/15 hover:bg-white/20">
            Request demo
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
