// Cyber-themed Footer
export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#0a1628] to-[#050c16] border-t border-cyan-500/20 py-12 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff02_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff02_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand with Logo */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.png"
                                alt="Agentica Labs"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Leading the future of work with production-grade AI agents, multi-agent systems, and intelligent automation.
                        </p>
                        <div className="mt-4 text-xs text-gray-500">
                            Innovating with AI
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-cyan-400 font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
                        <ul className="space-y-2">
                            {['Services', 'Process', 'About', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-cyan-400 font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:agenticalabs121@gmail.com"
                                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors group"
                            >
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                agenticalabs121@gmail.com
                            </a>
                            <div className="flex gap-3 mt-4">
                                {/* Social placeholders */}
                                {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-8 h-8 rounded-full bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                                        aria-label={social}
                                    >
                                        <span className="text-xs text-cyan-400">{social[0]}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} <span className="text-cyan-400">AGENTICA LABS</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Security
                        </a>
                    </div>
                </div>
            </div>

            {/* Glowing line effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </footer>
    );
}

