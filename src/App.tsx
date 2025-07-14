import { useState, useEffect } from 'react';
import {Heart, Sparkles } from 'lucide-react';
import MemberCard from './components/MemberCard';
import SubscribeModal from './components/SubscribeModal';
import DarkModeToggle from './components/DarkModeToggle';
import LeaderboardBanner from './components/LeaderboardBanner';
import LeaderboardPage from './components/LeaderboardPage';
import Footer from './components/Footer';
import { Member } from './types';
import membersData from './data/members.json';

function App() {
  const [members] = useState<Member[]>(membersData.slice(0,57)); 
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleSubscribe = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleMessage = (member: Member) => {
    const message = `Hi ${member.name}! I would like to subscribe to your messages for ${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(member.price)} for 30 days.`;
    
    const whatsappUrl = `https://wa.me/${member.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleCloseModal();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleViewLeaderboard = () => {
    setShowLeaderboard(true);
  };

  const handleBackToMembers = () => {
    setShowLeaderboard(false);
  };

  if (showLeaderboard) {
    return (
      <div className={`min-h-screen transition-all duration-700 relative ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
      }`}>
        {/* Dotted Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className={`w-full h-full ${
            isDarkMode 
              ? 'bg-[radial-gradient(circle_at_1px_1px,rgba(116,180,218,0.3)_1px,transparent_0)]' 
              : 'bg-[radial-gradient(circle_at_1px_1px,rgba(116,180,218,0.2)_1px,transparent_0)]'
          } bg-[length:24px_24px]`}></div>
        </div>

        <div className="relative z-10">
          <LeaderboardPage isDarkMode={isDarkMode} onBack={handleBackToMembers} />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-700 relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className={`w-full h-full ${
          isDarkMode 
            ? 'bg-[radial-gradient(circle_at_1px_1px,rgba(116,180,218,0.3)_1px,transparent_0)]' 
            : 'bg-[radial-gradient(circle_at_1px_1px,rgba(116,180,218,0.2)_1px,transparent_0)]'
        } bg-[length:24px_24px]`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            <div>
              <h1 className={`text-4xl font-bold ${
                isDarkMode 
                  ? 'text-white' 
                  : 'text-slate-900'
              }`}>
                Zellsking
              </h1>
              <p className={`text-base mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                JKT48 Member Messages Store
              </p>
            </div>
          </div>
          <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        </div>

        {/* Welcome Section */}
        <div className={`rounded-2xl p-8 mb-10 border backdrop-blur-sm shadow-lg ${
          isDarkMode 
            ? 'bg-slate-800/50 border-slate-700/50' 
            : 'bg-white/80 border-slate-200/50'
        }`}>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-rose-500 mr-2" />
              <Sparkles className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className={`text-3xl font-bold mb-3 ${
              isDarkMode 
                ? 'text-white' 
                : 'text-slate-900'
            }`}>
              Welcome to Zellsking
            </h2>
            <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Terhubung langsung dengan member JKT48 favorit kamu! Dapatkan pesan eksklusif dan 
              rasakan pengalaman berinteraksi yang tak terlupakan dengan idola impianmu.
            </p>
          </div>
        </div>

        {/* Leaderboard Banner */}
        <LeaderboardBanner onViewLeaderboard={handleViewLeaderboard} isDarkMode={isDarkMode} />

        {/* Available Members */}
        <div className="flex items-center mb-8">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Available Members
          </h2>
          <span className={`ml-4 px-4 py-1 rounded-xl text-sm font-semibold border backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
              : 'bg-blue-100/80 text-blue-700 border-blue-200/50'
          }`}>
            {members.length} members
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-3">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onSubscribe={handleSubscribe}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        <SubscribeModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onMessage={handleMessage}
          isDarkMode={isDarkMode}
        />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;