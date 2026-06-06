// ContentsSlide uses an inline centered header

interface ContentsItem {
  num: string;
  title: string;
  desc: string;
}

interface ContentsSlideProps {
  title: string;
  items: ContentsItem[];
}

export function ContentsSlide({ title, items }: ContentsSlideProps) {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden py-2">
      <div className="w-full max-w-5xl mx-auto flex h-full min-h-0 flex-col">
        <div className="shrink-0 mb-4 md:mb-5 text-center">
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
          <h2 className="relative z-20 text-3xl md:text-5xl font-black text-cyan-200 leading-tight drop-shadow-lg">
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-sm md:text-base">Overview of the presentation structure and main sections.</p>
        </div>
      
        {/* Decorative line top */}
        <div className="hidden md:flex shrink-0 items-center justify-center mb-6">
          <svg width="100" height="32" viewBox="0 0 100 40" className="text-cyan-400/30">
            <path d="M 10 20 Q 25 5, 50 20 T 90 20" stroke="currentColor" fill="none" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="10" cy="20" r="3" fill="currentColor" />
            <circle cx="90" cy="20" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Centered timeline layout */}
        <div className="relative w-full min-h-0 flex-1 mx-auto">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-400 to-transparent" />

          <div className="h-full flex flex-col justify-center overflow-hidden">
            <div className="space-y-5 md:space-y-7">
              {items.map((item, i) => {
                const rowClass = i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
                const textAlign = i % 2 === 0 ? 'md:text-right' : 'md:text-left';
                const connectorPos = i % 2 === 0 ? 'right-full pr-6' : 'left-full pl-6';
                
                return (
                  <div
                    key={i}
                    className={`flex flex-col ${rowClass} gap-4 md:gap-10 items-start md:items-center`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${textAlign} md:px-6`}> 
                      <h3 className="text-lg md:text-2xl font-semibold md:font-bold text-cyan-300 mb-1 md:mb-2 uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Badge and connector */}
                    <div className="w-full md:w-24 flex justify-center md:flex-col items-center md:pl-2 md:pr-2">
                      <div className="relative z-10 flex items-center">
                        {/* Connector line (only on md and up) */}
                        <div className={`hidden md:block absolute top-1/2 ${connectorPos} w-4 h-0.5 bg-cyan-400`} />

                        {/* Badge */}
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 
                          flex items-center justify-center font-bold text-sm md:text-xl text-white
                          shadow-lg shadow-cyan-400/40 transition-transform">
                          {item.num}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative line bottom */}
        <div className="hidden md:flex shrink-0 items-center justify-center mt-6">
          <svg width="100" height="32" viewBox="0 0 100 40" className="text-cyan-400/30">
            <path d="M 10 20 Q 25 35, 50 20 T 90 20" stroke="currentColor" fill="none" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="10" cy="20" r="3" fill="currentColor" />
            <circle cx="90" cy="20" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
