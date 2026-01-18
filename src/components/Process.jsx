// Enhanced Process component with more animations
export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Discover",
            description: "Deep-dive into your business needs, technical constraints, and AI opportunities.",
            details: ["Requirements gathering", "Feasibility analysis", "Success metrics definition"]
        },
        {
            number: "02",
            title: "Design",
            description: "Architect the agent system, define workflows, and plan the technical implementation.",
            details: ["System architecture", "Agent design patterns", "Integration planning"]
        },
        {
            number: "03",
            title: "Build",
            description: "Develop production-ready AI agents with best practices, testing, and iteration.",
            details: ["Rapid prototyping", "Iterative development", "Quality assurance"]
        },
        {
            number: "04",
            title: "Deploy",
            description: "Ship to production with proper monitoring, observability, and deployment infrastructure.",
            details: ["CI/CD pipelines", "Monitoring setup", "Performance optimization"]
        },
        {
            number: "05",
            title: "Scale",
            description: "Optimize, maintain, and expand your AI systems as your business grows.",
            details: ["Cost optimization", "Feature expansion", "Continuous improvement"]
        }
    ];

    return (
        <section id="process" className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient from-white to-gray-400">Our Process</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A proven methodology for building production-grade AI agents
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-5 gap-8 relative">
                    {/* Connection Line with animation */}
                    <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 opacity-50"></div>
                    <div className="hidden md:block absolute top-16 left-0 h-0.5 bg-primary-400 animate-[pulse_2s_ease-in-out_infinite]" style={{ width: '20%' }}></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group animate-slide-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Step Card with enhanced hover effects */}
                            <div className="relative z-10 p-6 glass-effect rounded-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                                {/* Number Badge with glow effect */}
                                <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-500 text-white font-bold text-xl shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:shadow-primary-500/50 transition-all duration-300">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-primary-400 transition-colors">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-300 mb-4 leading-relaxed text-center">
                                    {step.description}
                                </p>

                                {/* Details with animated bullets */}
                                <ul className="space-y-1.5">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start text-gray-400 text-xs">
                                            <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 mt-1.5 flex-shrink-0 group-hover:animate-pulse"></span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Arrow (Desktop only) with animation */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 -right-4 z-20 text-primary-400 text-2xl group-hover:scale-125 group-hover:translate-x-1 transition-all duration-300">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA with animation */}
                <div className="text-center mt-16 animate-scale-in" style={{ animationDelay: '1s' }}>
                    <p className="text-gray-300 mb-6">
                        Ready to transform your business with AI agents?
                    </p>
                    <a
                        href="#cta"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 group"
                    >
                        Start Your Project
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
