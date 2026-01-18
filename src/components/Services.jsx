// Cyber-themed Services Component
export default function Services() {
    const services = [
        {
            title: "AI AGENTS",
            subtitle: "AGENTICA LABS",
            icon: "🤖",
            description: "Build intelligent, autonomous agents that understand, reason, and act on complex tasks.",
            features: ["Multi-Agent Orchestration", "Autonomous Decision Making", "Real-time Learning", "Task Automation"],
            color: "from-cyan-500 to-blue-600"
        },
        {
            title: "CHATBOTS",
            subtitle: "AGENTICA LABS",
            icon: "💬",
            description: "Create conversational AI that delivers natural, context-aware interactions at scale.",
            features: ["NLP Integration", "Context Understanding", "Multi-turn Conversations", "24/7 Availability"],
            color: "from-blue-500 to-purple-600"
        },
        {
            title: "GENERATIVE AI",
            subtitle: "AGENTICA LABS",
            icon: "✨",
            description: "Harness the power of LLMs and generative models for content creation and automation.",
            features: ["Content Generation", "Code Synthesis", "Data Augmentation", "Creative AI"],
            color: "from-purple-500 to-pink-600"
        },
        {
            title: "AGENTOPS",
            subtitle: "AGENTICA LABS",
            icon: "⚙️",
            description: "Production-grade monitoring, deployment, and optimization for AI agent systems.",
            features: ["Performance Monitoring", "Cost Optimization", "A/B Testing", "Continuous Improvement"],
            color: "from-cyan-500 to-teal-600"
        }
    ];

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-[#050c16] via-[#0a1628] to-[#0f1f3d] relative overflow-hidden">
            {/* Cyber Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff05_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-block px-4 py-2 mb-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                        <span className="text-cyan-400 text-sm font-semibold">OUR EXPERTISE</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Future of Work
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Transforming businesses with cutting-edge AI technology
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-up overflow-hidden"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                        {service.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-gray-400 text-sm">
                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 group-hover:animate-pulse"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Hover CTA */}
                                <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-semibold">Explore more</span>
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-scale-in" style={{ animationDelay: '800ms' }}>
                    <a
                        href="#cta"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 group"
                    >
                        Start Your AI Journey
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
