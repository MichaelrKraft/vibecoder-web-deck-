import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurText from './components/BlurText.jsx';
import InteractiveMarketChart from './components/InteractiveMarketChart.jsx';
import VibeCoderLogo from './components/VibeCoderLogo.jsx';
import AITeamSection from './components/AITeamSection.jsx';
import ShinyText from './components/ShinyText.jsx';
import './App.css';

function App() {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  // Animated Counter Component (using pure JS/React)
  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime = null;
            const animate = (currentTime) => {
              if (startTime === null) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              setCount(Math.floor(progress * end));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span id={`counter-${end}`}>{count.toLocaleString()}</span>;
  };

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Hero Section */}
      <motion.section 
        className="relative hero-gradient text-white min-h-screen flex items-center justify-center px-4" 
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1716703742196-9986679eb03f)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-slate-900/80" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card p-12 rounded-3xl backdrop-blur-xl"
          >
            <div className="mb-6">
              <ShinyText 
                text="VibeCoder is where startups are born from prompts—not code."
                speed={6}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              The first platform where you can build software, pitch live, and get funded—without writing a single line of code.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.button 
                className="premium-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Watch How It Works
              </motion.button>
              <motion.button 
                className="premium-button-outline border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 Download One-Pager
              </motion.button>
              <motion.button 
                className="premium-button-outline border-2 border-purple-400/50 text-purple-300 px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-purple-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <section className="bg-gradient-to-br from-red-900/20 to-gray-900 text-white min-h-screen flex items-center justify-center px-4" id="problem">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511203466129-824e631920d7" 
                alt="Frustrated Developer"
                className="rounded-3xl shadow-2xl w-full object-cover h-96"
              />
            </div>
            
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Problem
              </h2>
              
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  Creators have ideas.<br/>
                  But they don't launch.<br/>
                  Because building software is still hard, expensive, and disconnected from users.
                </p>
                
                <div className="space-y-4 text-xl">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">🚫</span>
                    <span>Devs are expensive</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">🚫</span>
                    <span>AI tools are fragmented</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">🚫</span>
                    <span>Most "builders" are just stuck in idea mode</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-green-900/20 to-blue-900/20 text-white min-h-screen flex items-center justify-center px-4" id="solution">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build → Launch → Get Backed. In One Platform.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1622260872090-5c558010a67e" 
                alt="Collaborative Teamwork"
                className="rounded-3xl shadow-2xl w-full object-cover h-96"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "✍️", title: "Canvas mapping" },
                { icon: "💬", title: "Prompt box" },
                { icon: "🔧", title: "Live UI/code preview" },
                { icon: "👥", title: "Feedback feed" },
                { icon: "🗳️", title: "Pitch event leaderboard" },
                { icon: "💸", title: "Marketplace coin flow" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <div className="text-lg font-semibold">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              VibeCoder = ChatGPT meets Notion meets Product Hunt
            </p>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 text-white min-h-screen flex items-center justify-center px-4" id="traction">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Traction
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "✅", stat: "1500", suffix: "+", label: "waitlist signups" },
              { icon: "✅", stat: "20", suffix: "+", label: "MVPs shipped in alpha" },
              { icon: "✅", stat: "3", suffix: "", label: "builders already monetized" },
              { icon: "✅", stat: "8", suffix: "", label: "investor intros pre-launch" },
              { icon: "✅", stat: "12", suffix: "", label: "community collabs initiated" },
              { icon: "✅", stat: "100", suffix: "+", label: "prompts run per day" }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  <AnimatedCounter end={parseInt(item.stat)} />
                  {item.suffix}
                </div>
                <div className="text-lg text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1717452716963-bc51037bd958" 
              alt="Business Growth"
              className="rounded-3xl shadow-2xl w-full object-cover h-64 mx-auto"
            />
            <button className="mt-8 premium-button bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
              View Live MVPs →
            </button>
          </div>
        </div>
      </section>

      {/* Market Size Section */}
      <section className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 text-white min-h-screen flex items-center justify-center px-4" id="market">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Market Size
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <InteractiveMarketChart />
            </div>

            <div className="space-y-8">
              {[
                { title: "Creator Economy", size: "$104B", growth: "+22% YoY" },
                { title: "Indie SaaS", size: "$15B", growth: "+35% YoY" },
                { title: "AI + Prompt Tools", size: "$8B", growth: "+180% YoY" },
                { title: "No-Code Ecosystems", size: "$12B", growth: "+40% YoY" }
              ].map((market, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:scale-102 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{market.title}</h3>
                      <p className="text-green-400 font-bold">{market.growth}</p>
                    </div>
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
                      {market.size}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              VibeCoder sits at the intersection of 3 explosive markets.
            </h3>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 text-white min-h-screen flex items-center justify-center px-4" id="business">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Business Model
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💵", title: "$99/mo Pro Builder Plan", desc: "Premium features and tools" },
              { icon: "🛒", title: "10–15% marketplace fees", desc: "Transaction-based revenue" },
              { icon: "📈", title: "Premium features", desc: "Featured templates, paid pitch slots" },
              { icon: "🎤", title: "Investor memberships", desc: "Future phase revenue stream" },
              { icon: "🪙", title: "VibeCoin economy", desc: "Coin velocity drives platform value" }
            ].map((model, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
                  {model.title}
                </h3>
                <p className="text-gray-300">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Event Loop Section */}
      <section className="bg-gradient-to-br from-orange-900/20 to-red-900/20 text-white min-h-screen flex items-center justify-center px-4" id="pitch-loop">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            The Pitch Event Loop
          </h2>

          <div className="relative">
            <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 mb-12">
              {[
                "Build something", "Share it", "Get coins + feedback", "Apply to pitch", 
                "Launch in public", "Get interest, funding", "Repeat (or sell template)"
              ].map((step, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl relative hover:scale-105 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mb-3 mx-auto">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold">{step}</p>
                  {index < 6 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-orange-400 to-red-400"></div>
                  )}
                </div>
              ))}
            </div>

            <button className="premium-button bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
              Watch a Past Pitch →
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 text-white min-h-screen flex items-center justify-center px-4" id="team">
        <AITeamSection />
      </section>

      {/* Ask Section */}
      <section className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 text-white min-h-screen flex items-center justify-center px-4" id="ask">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              The Ask
            </h2>

            <p className="text-2xl md:text-3xl font-light mb-12 leading-relaxed">
              🔥 We're raising a <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text">[$X] Pre-Seed</span> to build the platform, grow the builder base, and dominate this new category.
            </p>

            <p className="text-3xl md:text-4xl font-bold mb-12">
              Want in?
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="premium-button bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
                📞 Schedule Call
              </button>
              <button className="premium-button-outline border-2 border-pink-400/50 text-pink-300 px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-pink-500/20 transition-all duration-300">
                📄 Download Investor Memo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-black text-white relative overflow-hidden min-h-screen flex items-center justify-center px-4" id="vision">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="space-y-12">
            <ShinyText 
              text="The next billion-dollar startups won't be born in boardrooms."
              speed={8}
              className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            />
            
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              They'll be built in public, in days, with prompts."
            </h3>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
              <VibeCoderLogo size="xl" className="animate-pulse-glow" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <button className="premium-button bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
                💬 Let's Talk
              </button>
              <button className="premium-button-outline border-2 border-purple-400/50 text-purple-300 px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-purple-500/20 transition-all duration-300">
                📈 Join the Pitch Event
              </button>
              <button className="premium-button-outline border-2 border-pink-400/50 text-pink-300 px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-pink-500/20 transition-all duration-300">
                🌐 Explore MVPs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

