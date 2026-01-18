// Animated Navbar Component
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-primary-500/20">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 animate-slide-down">
                        <img
                            src="/logo.png"
                            alt="Agentica Labs Logo"
                            className="h-12 w-auto animate-pulse"
                            style={{ animationDuration: '3s' }}
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#services"
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300 relative group"
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#process"
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300 relative group"
                        >
                            Process
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300 relative group"
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#cta"
                            className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-primary-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-pulse"></div>
        </nav>
    );
}
