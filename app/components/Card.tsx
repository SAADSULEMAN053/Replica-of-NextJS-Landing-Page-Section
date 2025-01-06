interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLastCard?: boolean;
  cardIndex: number;
}

export function Card({ icon, title, description, isLastCard, cardIndex }: CardProps) {
  const renderSvg = () => {
    switch(cardIndex) {
      case 0:
        return (
          <svg width="127" height="2" viewBox="0 0 127 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H126.5" stroke="url(#paint0_radial_665_384)"/>
            <defs>
              <radialGradient id="paint0_radial_665_384" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63.25 1.5) scale(63.25 0.5)">
                <stop stopColor="#2BC6FF"/>
                <stop offset="0.855" stopColor="#2BC6FF"/>
                <stop offset="1" stopColor="#272727"/>
              </radialGradient>
            </defs>
          </svg>
        );
      case 1:
        return (
          <svg width="127" height="2" viewBox="0 0 127 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H126.5" stroke="url(#paint0_radial_665_386)"/>
            <defs>
              <radialGradient id="paint0_radial_665_386" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63.25 1.5) scale(63.25 0.5)">
                <stop stopColor="#DC2F6D"/>
                <stop offset="0.855" stopColor="#8E53A1"/>
                <stop offset="1" stopColor="#272727"/>
              </radialGradient>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg width="219" height="2" viewBox="0 0 219 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H219" stroke="url(#paint0_radial_665_388)"/>
            <defs>
              <radialGradient id="paint0_radial_665_388" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(109.5 1.5) scale(109.5 0.5)">
                <stop stopColor="#F5D142"/>
                <stop offset="0.855" stopColor="#FBB868"/>
                <stop offset="1" stopColor="#272727" stopOpacity="0.5"/>
              </radialGradient>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-[90dvw] h-[230px] xl:w-[380px] xl:h-[240px] lg:w-[300px] lg:h-[220px] rounded-[10px] border border-[#272727] bg-[#111111]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px]">
        {renderSvg()}
      </div>

      <div 
        className="absolute inset-[5px] rounded-[7px]"
        style={{
          background: 'linear-gradient(to top, #080808, #111111, #202020)'
        }}
      >
        <div className={`p-4 xl:p-8 lg:p-4 flex flex-col ${isLastCard ? 'gap-12' : 'gap-8'}`}>
          <div className="">
            {icon}
          </div>
          <div className={`flex flex-col gap-2`}>
            <h3 className="text-[16px] xl:text-[20px] lg:text-[16px] font-bold text-white leading-tight font-['Arial']">
              {title}
            </h3>
            <p className="text-[14px] xl:text-[14px] lg:text-[12px] text-[#888888] leading-relaxed font-['Arial']">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 