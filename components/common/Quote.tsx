interface QuoteProps {
  text: string;
}

export function Quote({ text }: QuoteProps) {
  return (
    <div className="relative my-10 p-8 rounded-xl 
      bg-gradient-to-br from-cyan-500/10 to-blue-500/10
      border border-cyan-400/30 hover:border-cyan-400/60
      transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20
      backdrop-blur-sm">
      
      {/* Quotation marks */}
      <div className="absolute top-4 left-4 text-cyan-400/20 text-6xl font-bold">"</div>
      <div className="absolute bottom-4 right-4 text-cyan-400/20 text-6xl font-bold">"</div>
      
      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-xl"></div>
      
      <p className="relative z-10 text-gray-300 italic text-lg leading-relaxed text-center">
        {text}
      </p>
    </div>
  );
}
