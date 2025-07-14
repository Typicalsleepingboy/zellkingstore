import React, { useState, useEffect } from 'react';
import { Trophy, Crown, Medal, Users, ArrowLeft, Star, Award } from 'lucide-react';
import { TopIdol } from '../types';

interface LeaderboardPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ isDarkMode, onBack }) => {
  const [topIdols, setTopIdols] = useState<TopIdol[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopIdols = async () => {
      try {
        const response = await fetch('https://production.jkt48pm.my.id/api/top-idol');
        const data = await response.json();
        
        if (data.success) {
          setTopIdols(data.data);
        } else {
          setError('Failed to fetch leaderboard data');
        }
      } catch (err) {
        setError('Error connecting to server');
      } finally {
        setLoading(false);
      }
    };

    fetchTopIdols();
  }, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-8 h-8 text-amber-400" />;
      case 1:
        return <Medal className="w-7 h-7 text-slate-400" />;
      case 2:
        return <Medal className="w-7 h-7 text-orange-400" />;
      default:
        return <Award className="w-6 h-6 text-blue-400" />;
    }
  };

  const getRankBadge = (index: number) => {
    const badges = [
      'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-amber-500/30',
      'bg-gradient-to-r from-slate-300 to-slate-400 text-black shadow-slate-400/30',
      'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-orange-500/30',
      'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-blue-500/30',
      'bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-purple-500/30'
    ];
    return badges[index] || 'bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-slate-500/30';
  };

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return isDarkMode 
        ? 'bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-amber-400/30' 
        : 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300/50';
    }
    return isDarkMode 
      ? 'bg-slate-800/30 border-slate-700/30' 
      : 'bg-white/60 border-slate-200/30';
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={onBack}
            className={`flex items-center mb-8 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-slate-800/50 text-white border border-slate-700/50' 
                : 'bg-white/60 text-slate-800 border border-slate-200/50'
            } backdrop-blur-sm`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Members
          </button>
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12 text-amber-400 mr-4" />
              <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Member Leaderboard
              </h1>
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Member paling aktif mengirim pesan
            </p>
          </div>

          <div className="animate-pulse space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${
                isDarkMode 
                  ? 'bg-slate-800/30 border-slate-700/30' 
                  : 'bg-white/60 border-slate-200/30'
              }`}>
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-slate-300 rounded-2xl"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-slate-300 rounded-lg w-1/3 mb-3"></div>
                    <div className="h-4 bg-slate-300 rounded-lg w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <button
            onClick={onBack}
            className={`flex items-center mb-8 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-slate-800/50 text-white border border-slate-700/50' 
                : 'bg-white/60 text-slate-800 border border-slate-200/50'
            } backdrop-blur-sm`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Members
          </button>
          
          <div className="text-center">
            <Trophy className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Unable to Load Leaderboard
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className={`flex items-center mb-8 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode 
              ? 'bg-slate-800/50 text-white border border-slate-700/50 hover:bg-slate-700/50' 
              : 'bg-white/60 text-slate-800 border border-slate-200/50 hover:bg-white/80'
          } backdrop-blur-sm shadow-lg`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Members
        </button>
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-amber-400 mr-4" />
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Member Leaderboard
            </h1>
          </div>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Member paling aktif mengirim pesan
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {topIdols.map((idol, index) => (
            <div
              key={idol.user_id}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm shadow-xl hover:shadow-2xl ${getCardStyle(index)}`}
            >
              <div className="flex items-center">
                <div className="flex items-center mr-8">
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-lg font-bold shadow-lg ${getRankBadge(index)}`}>
                    #{index + 1}
                  </span>
                  <div className="ml-4">
                    {getRankIcon(index)}
                  </div>
                </div>
                
                <div className="flex items-center flex-1">
                  <img
                    src={`https://production.jkt48pm.my.id${idol.profile_image}`}
                    alt={idol.nickname}
                    className="w-20 h-20 rounded-2xl object-cover mr-8 border-2 border-blue-400/30 shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className={`font-bold text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {idol.nickname}
                    </h3>
                    <p className={`text-sm mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      ID: {idol.idol_id}
                    </p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 mr-1" />
                      <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Active Member
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center px-6 py-3 rounded-xl border ${
                  isDarkMode 
                    ? 'bg-blue-500/10 border-blue-500/20' 
                    : 'bg-blue-50 border-blue-200/50'
                }`}>
                  <Users className="w-6 h-6 text-blue-500 mr-3" />
                  <div className="text-center">
                    <div className={`font-bold text-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {idol.subscription_count}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Subscribers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;