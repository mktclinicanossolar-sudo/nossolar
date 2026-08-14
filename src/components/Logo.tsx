import React, { useState } from 'react';
import brandLogoImg from '../assets/images/brand_logo.png';

interface LogoProps {
  className?: string;
  variant?: 'cyan' | 'white';
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-11',
  variant = 'cyan'
}) => {
  const [imgError, setImgError] = useState(false);

  // If brand_logo.png fails to load (or is empty), fall back to SVG logo
  const logoSrc = imgError ? "/nosso_lar_logo.svg" : brandLogoImg;

  return (
    <div className="flex items-center shrink-0">
      <img
        src={logoSrc}
        onError={() => setImgError(true)}
        alt="Clínica Comportamental Nosso Lar"
        width={303}
        height={62}
        className={`w-auto object-contain max-h-[48px] sm:max-h-[54px] shrink-0 transition-opacity ${className} ${
          variant === 'white' ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
};



