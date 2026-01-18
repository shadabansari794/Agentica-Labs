// Futuristic Hero Component - Simplified Centered Layout
import ToptalBadge from './ToptalBadge';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#1a2942]">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0">
                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>

                {/* Scanlines effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,212,255,0.03)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Production-Grade AI Systems
                </div>

                {/* Main Headline */}
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        AGENTICA LABS
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto">
                    Building autonomous AI agents, multi-agent systems, and intelligent automation for the future of work.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {['LangGraph', 'CrewAI', 'AutoGen', 'LangChain', 'RAG', 'AgentOps'].map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs rounded-md hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <a
                        href="#cta"
                        className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                    >
                        Book Consultation
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 bg-white/5 border border-cyan-500/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
                    >
                        Explore Services
                    </a>
                </div>

                {/* Toptal Badge */}
                <div className="inline-block">
                    <ToptalBadge />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
