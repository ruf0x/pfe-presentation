interface ContentCardProps {
  title: string;
  description: string;
  icon?: string;
  highlight?: boolean;
  variant?: 'default' | 'warning';
}

export function ContentCard({
  title,
  description,
  icon,
  highlight = false,
  variant = 'default',
}: ContentCardProps) {
  const borderColor = highlight ? 'border-red-400/40' : variant === 'warning' ? 'border-red-400/40' : 'border-cyan-400/30';
  const bgColor = highlight ? 'from-red-500/10' : 'from-cyan-500/10';
  const textColor = highlight ? 'text-red-300' : 'text-cyan-300';
  const accentColor = highlight ? 'bg-red-400/20' : 'bg-cyan-400/20';

  return (
    <div className={`group relative p-8 rounded-xl transition-all duration-300
      bg-gradient-to-br ${bgColor} to-blue-500/10 
      border ${borderColor} hover:border-cyan-400/60
      hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105
      backdrop-blur-sm cursor-pointer`}>
      
      {/* Background accent */}
      <div className={`absolute inset-0 ${accentColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 
        group-hover:w-full rounded-t-xl transition-all duration-300"></div>

      <div className="relative z-10">
        {icon && (
          <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">
            {icon}
          </span>
        )}
        <h3 className={`text-xl font-bold ${textColor} mb-3 group-hover:text-cyan-200 transition-colors duration-300`}>
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
