import { LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  color: 'blue' | 'orange' | 'dark' | 'purple';
  rotation: number;
  icon?: LucideIcon;
  label?: string;
  variant?: 'default' | 'profile';
  profileData?: {
    name: string;
    avatar: string;
    message: string;
  };
  delay?: number;
}

const colorClasses = {
  blue: 'bg-blue-600 text-white border-blue-400',
  orange: 'bg-orange-500 text-white border-orange-300',
  dark: 'bg-gray-800 text-orange-400 border-gray-600',
  purple: 'bg-purple-300 text-gray-700 border-purple-200',
};

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  variant = 'default',
  profileData,
  delay = 0,
}: FloatingCardProps) {
  if (variant === 'profile' && profileData) {
    return (
      <div
        className="floating-card rounded-full backdrop-blur-sm"
        style={{
          transform: `rotate(${rotation}deg)`,
          animationDelay: `${delay}ms`,
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        }}
      >
        <div
          className={`flex items-center gap-4 px-6 py-4 rounded-full border-2 ${colorClasses[color]}`}
          style={{ transform: `rotate(${-rotation}deg)` }}
        >
          <div className="w-3 h-8 bg-orange-500 rounded-full"></div>
          <img
            src={profileData.avatar}
            alt={profileData.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-semibold text-sm">{profileData.name}</div>
            <div className="text-xs opacity-80 max-w-[180px]">
              {profileData.message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="floating-card rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-300"
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}ms`,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), 0 10px 25px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      }}
    >
      <div
        className={`flex items-center gap-3 px-8 py-5 rounded-full border-2 ${colorClasses[color]}`}
        style={{ transform: `rotate(${-rotation}deg)` }}
      >
        {Icon && <Icon className="w-6 h-6" />}
        <span className="font-semibold text-lg">{label}</span>
      </div>
    </div>
  );
}
