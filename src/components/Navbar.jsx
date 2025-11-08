import { Rocket, Home, Settings, User } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="tracking-tight">Vibe Starter</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-1"><Home className="h-4 w-4" />Home</a>
          <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-1"><Settings className="h-4 w-4" />Features</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors flex items-center gap-1"><User className="h-4 w-4" />Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#get-started" className="hidden sm:inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
