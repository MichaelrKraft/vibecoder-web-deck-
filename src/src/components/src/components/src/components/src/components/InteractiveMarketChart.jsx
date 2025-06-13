import React, { useState, useEffect } from 'react';

const InteractiveMarketChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animated, setAnimated] = useState(false);

  const marketData = [
    { title: "Creator Economy", size: 104, growth: "+22% YoY", color: "from-blue-400 to-blue-600" },
    { title: "Indie SaaS", size: 15, growth: "+35% YoY", color: "from-purple-400 to-purple-600" },
    { title: "AI + Prompt Tools", size: 8, growth: "+180% YoY", color: "from-pink-400 to-pink-600" },
    { title: "No-Code Ecosystems", size: 12, growth: "+40% YoY", color: "from-indigo-400 to-indigo-600" }
  ];

  const maxSize = Math.max(...marketData.map(d => d.size));

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
      <div className="flex flex-col h-full">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Market Opportunity</h3>
          <p className="text-gray-300">Total Addressable Market: $139B+</p>
        </div>
        
        <div className="flex-1 flex items-end justify-between gap-4">
          {marketData.map((market, index) => {
            const heightPercentage = (market.size / maxSize) * 100;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Value Display */}
                <div className={`mb-4 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                  <div className="text-2xl font-bold text-white">${market.size}B</div>
                  <div className="text-sm text-green-400 font-semibold">{market.growth}</div>
                </div>
                
                {/* Bar */}
                <div 
                  className={`w-full max-w-16 bg-gradient-to-t ${market.color} rounded-t-lg transition-all duration-1000 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/30`}
                  style={{ 
                    height: animated ? `${heightPercentage}%` : '0%',
                    minHeight: '20px'
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                  
                  {/* Glow effect on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse" />
                  )}
                </div>
                
                {/* Label */}
                <div className="mt-4 text-center">
                  <div className={`text-sm font-semibold text-gray-300 transition-all duration-300 leading-tight ${isHovered ? 'text-white scale-105' : ''}`}>
                    {market.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Interactive Summary */}
        <div className="mt-6 text-center">
          {hoveredIndex !== null ? (
            <div className="glass-card p-4 rounded-xl">
              <p className="text-white font-semibold">
                {marketData[hoveredIndex].title}: ${marketData[hoveredIndex].size}B market
              </p>
              <p className="text-gray-300 text-sm">
                Growing at {marketData[hoveredIndex].growth} annually
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">
              Hover over bars to explore each market segment
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
