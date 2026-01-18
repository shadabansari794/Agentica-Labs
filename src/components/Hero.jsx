// Futuristic Hero Component with Cyber Aesthetic
import ToptalBadge from './ToptalBadge';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#1a2942]">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0">
                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

                {/* Glowing orbs - Cyber style */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}

                {/* Scanlines effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,212,255,0.03)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text Content */}
                    <div className="text-left animate-fade-in">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm animate-slide-down">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                            Production-Grade AI Systems
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="block text-white animate-slide-up">
                                GENERATIVE AI
                            </span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                AGENTICA LABS
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            Building autonomous AI agents, multi-agent systems, and intelligent automation for the future of work.
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                            {['LangGraph', 'CrewAI', 'AutoGen', 'LangChain', 'RAG', 'AgentOps'].map((tech, i) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs rounded-md hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-scale-in" style={{ animationDelay: '0.8s' }}>
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
                        <div className="mt-12">
                            <ToptalBadge />
                        </div>
                    </div>

                    {/* Right side - Animated Visual */}
                    <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                        {/* Central hub visualization */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Center circle - AI Brain */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/40 backdrop-blur-sm flex items-center justify-center animate-pulse" style={{ animationDuration: '3s' }}>
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center">
                                    <div className="text-4xl animate-pulse" style={{ animationDuration: '2s' }}>🤖</div>
                                </div>
                            </div>

                            {/* Orbiting nodes - Multi-Agent System */}
                            {[
                                { emoji: '🧠', angle: 0, delay: '0s' },
                                { emoji: '⚡', angle: 72, delay: '0.5s' },
                                { emoji: '🔄', angle: 144, delay: '1s' },
                                { emoji: '💡', angle: 216, delay: '1.5s' },
                                { emoji: '🎯', angle: 288, delay: '2s' }
                            ].map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                                    style={{
                                        transform: `rotate(${node.angle}deg) translateY(-180px)`,
                                        animation: `spin 20s linear infinite`,
                                        animationDelay: node.delay
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/40 backdrop-blur-sm flex items-center justify-center text-2xl hover:scale-125 transition-transform duration-300"
                                        style={{ transform: `rotate(-${node.angle}deg)` }}
                                    >
                                        {node.emoji}
                                    </div>
                                </div>
                            ))}

                            {/* Connection lines */}
                            <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.2)' }}>
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                                {[...Array(5)].map((_, i) => (
                                    <line
                                        key={i}
                                        x1="50%"
                                        y1="50%"
                                        x2={`${50 + 40 * Math.cos((i * 72 * Math.PI) / 180)}%`}
                                        y2={`${50 + 40 * Math.sin((i * 72 * Math.PI) / 180)}%`}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="2"
                                        className="animate-pulse"
                                        style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            {/* Add rotation animation */}
            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg)  translateY(-180px);
          }
          to {
            transform: rotate(360deg) translateY(-180px);
          }
        }
      `}</style>
        </section>
    );
}
