interface StatBoxProps {
  number: string;
  label: string;
  variant?: 'default' | 'highlight';
}

export function StatBox({ number, label, variant = 'default' }: StatBoxProps) {
  const bgGradient = variant === 'highlight'
    ? 'from-red-500/20 to-red-500/5'
    : 'from-cyan-500/20 to-blue-500/5';
  
  const borderColor = variant === 'highlight' ? 'border-red-400/40' : 'border-cyan-400/40';
  const numberColor = variant === 'highlight' ? 'text-red-300' : 'text-cyan-300';

  return (
    <div className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300
      bg-gradient-to-br ${bgGradient}
      border ${borderColor} hover:border-cyan-400/70
      hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105
      backdrop-blur-sm`}>
      
      {/* Animated background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 
        rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

      <div className="relative z-10 text-center">
        <div className={`text-5xl font-black ${numberColor} mb-3 tracking-tight
          group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
          {number}
        </div>
        <div className="text-gray-400 text-sm font-semibold leading-tight
          group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );
}
