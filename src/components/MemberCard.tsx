import React from 'react';
import { Member } from '../types';

interface MemberCardProps {
  member: Member;
  onSubscribe: (member: Member) => void;
  isDarkMode: boolean;
}

function MemberCard({ member, onSubscribe, isDarkMode }: MemberCardProps) {
  return (
    <div 
      className={`relative group rounded-xl overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
        isDarkMode 
          ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
          : 'bg-white/80 border-slate-200/50 hover:bg-white/90'
      }`}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className={`text-sm font-semibold truncate ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {member.name}
        </h3>
        <p className={`text-xs ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          }).format(member.price)}
        </p>
      </div>
      <button
        onClick={() => onSubscribe(member)}
        className={`absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <span className="px-3 py-1 rounded-full bg-white text-black text-sm font-medium">
          Subscribe
        </span>
      </button>
    </div>
  );
}

export default MemberCard;