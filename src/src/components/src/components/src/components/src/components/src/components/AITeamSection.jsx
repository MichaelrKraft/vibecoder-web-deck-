import React from 'react';
import ProfileCard from './ProfileCard.jsx';

const AITeamSection = () => {
  const teamMembers = [
    {
      name: "You",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1649768870222-17848797d6b4?w=400&h=400&fit=crop&crop=face",
      tagline: "Human. Builder. Strategy + Vision.",
      gradient: "from-blue-400 to-purple-400",
      cta: null
    },
    {
      name: "AI Dave",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      tagline: "Built 8 modules before coffee.",
      gradient: "from-purple-400 to-pink-400",
      cta: "🔍 View His Prompt Stack"
    },
    {
      name: "AI Megan",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      tagline: "A/B tests everything. Charisma level: 99.",
      gradient: "from-pink-400 to-orange-400",
      cta: "💬 Read a Vibe Ad She Wrote"
    },
    {
      name: "AI Amy",
      role: "Ops",
      image: "https://images.unsplash.com/photo-1594736797933-d0d18d7ab3db?w=400&h=400&fit=crop&crop=face",
      tagline: "Keeps the whole platform running. And never panics.",
      gradient: "from-orange-400 to-red-400",
      cta: "⚙️ Her Launch Checklist"
    },
    {
      name: "AI Rico",
      role: "Sales",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      tagline: "Closed 3 builders before you finished reading this.",
      gradient: "from-green-400 to-blue-400",
      cta: "🤝 Book a Sales Call... with AI?"
    },
    {
      name: "BotBro",
      role: "Support Bot",
      image: null,
      tagline: "Solves issues before they exist.",
      gradient: "from-cyan-400 to-purple-400",
      cta: "💬 Chat With BotBro",
      isBot: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Meet the AI-Powered Team
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            avatarUrl={member.image}
            miniAvatarUrl={member.image}
            name={member.name}
            title={member.role}
            handle={member.name.toLowerCase().replace(/\s+/g, '')}
            status={member.tagline}
            contactText={member.cta || "View Profile"}
            showUserInfo={true}
            onContactClick={() => console.log(`Contact ${member.name}`)}
          />
        ))}
      </div>
      
      <div className="glass-card p-8 rounded-3xl">
        <p className="text-xl text-gray-300 leading-relaxed">
          <strong className="text-white">Our Revolutionary Approach:</strong> VibeCoder combines human leadership with AI team members, 
          creating the first truly hybrid workforce. Each AI specialist works 24/7, never takes breaks, 
          and brings specialized expertise to accelerate our mission.
        </p>
      </div>
    </div>
  );
};

export default AITeamSection;
