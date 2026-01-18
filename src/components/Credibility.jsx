// Future of Work - About Section
export default function Credibility() {
    const stats = [
        { value: "100+", label: "AI Projects Delivered", icon: "🚀" },
        { value: "50+", label: "Enterprise Clients", icon: "🏢" },
        { value: "24/7", label: "Support & Monitoring", icon: "⚡" },
        { value: "99.9%", label: "System Uptime", icon: "✅" }
    ];

    const capabilities = [
        { title: "LangGraph & LangChain", description: "Advanced agent frameworks", icon: "🔗" },
        { title: "Multi-Agent Systems", description: "Coordinated AI collaboration", icon: "🤖" },
        { title: "RAG & Vector DBs", description: "Intelligent knowledge retrieval", icon: "🧠" },
        { title: "Production AgentOps", description: "Enterprise-grade monitoring", icon: "📊" },
        { title: "Custom Integrations", description: "Seamless system connectivity", icon: "🔌" },
        { title: "GenAI Applications", description: "Cutting-edge AI solutions", icon: "✨" }
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-[#0f1f3d] to-[#0a1628] relative overflow-hidden">
            {/* Cyber Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff03_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff03_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-block px-4 py-2 mb-4 bg-purple-500/10 border border-purple-500/30 rounded-full">
                        <span className="text-purple-400 text-sm font-semibold">INNOVATING WITH AI</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                            Future of Work
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Empowering teams with intelligent automation and AI-driven workflows
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 text-center animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Capabilities Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Left - Image Placeholder / Illustration */}
                    <div className="relative animate-slide-up">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 p-8 flex items-center justify-center overflow-hidden">
                            {/* Collaborative work illustration simulation */}
                            <div className="relative w-full h-full">
                                <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-3xl animate-pulse">
                                    👩‍💼
                                </div>
                                <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/30 border border-purple-400/40 flex items-center justify-center text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>
                                    👨‍💻
                                </div>
                                <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-600/30 border border-blue-400/40 flex items-center justify-center text-3xl animate-pulse" style={{ animationDelay: '1s' }}>
                                    🤝
                                </div>

                                {/* Connection lines */}
                                <svg className="absolute inset-0 w-full h-full">
                                    <line x1="30%" y1="25%" x2="70%" y2="33%" stroke="#00d4ff" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" className="animate-pulse" />
                                    <line x1="70%" y1="33%" x2="50%" y2="66%" stroke="#00d4ff" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    <line x1="50%" y1="66%" x2="30%" y2="25%" stroke="#00d4ff" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                                </svg>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <div className="text-6xl mb-2">🚀</div>
                                    <div className="text-cyan-400 font-semibold text-sm">Accelerate Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Capabilities List */}
                    <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
                        {capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="group p-4 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                        {capability.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                                            {capability.title}
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            {capability.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    {[
                        { icon: "🔒", text: "Enterprise Security" },
                        { icon: "⚡", text: "Lightning Fast" },
                        { icon: "♾️", text: "Scalable Solutions" },
                        { icon: "🎯", text: "Proven Results" }
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full">
                            <span className="text-xl">{badge.icon}</span>
                            <span className="text-sm text-cyan-300">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
