export default function CTA() {
    return (
        <section id="cta" className="py-24 bg-gradient-to-br from-dark-900 via-primary-900/20 to-dark-900 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Main CTA */}
                <div className="glass-effect rounded-3xl p-12 md:p-16 hover:bg-white/10 transition-all duration-500">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient from-white to-gray-300">
                            Ready to Build Your
                        </span>
                        <br />
                        <span className="text-gradient from-primary-400 to-primary-600">
                            AI Agent System?
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how production-grade AI agents can transform your business.
                        Book a free consultation to explore possibilities.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="mailto:agenticalabs121@gmail.com"
                            className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold rounded-lg shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Book a Consultation
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a
                            href="mailto:agenticalabs121@gmail.com"
                            className="w-full sm:w-auto px-10 py-5 glass-effect text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                        >
                            Send us an Email
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a
                                href="mailto:agenticalabs121@gmail.com"
                                className="text-primary-400 hover:text-primary-300 transition-colors"
                            >
                                agenticalabs121@gmail.com
                            </a>
                        </div>

                        <p className="text-sm text-gray-500">
                            Typical response time: Within 24 hours
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="text-white font-semibold mb-2">Fast Turnaround</h3>
                        <p className="text-sm text-gray-400">From concept to MVP in weeks</p>
                    </div>
                    <div className="p-6">
                        <div className="text-3xl mb-3">🔒</div>
                        <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
                        <p className="text-sm text-gray-400">Your data stays private and secure</p>
                    </div>
                    <div className="p-6">
                        <div className="text-3xl mb-3">💡</div>
                        <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
                        <p className="text-sm text-gray-400">End-to-end support and consulting</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


