// ExportImg.tsx
import React from 'react';

interface ExportImgProps {
  logoUrl: string;
  altText: string;
}

export const ExportImg: React.FC<ExportImgProps> = ({ logoUrl, altText }) => {
  return (
    <img
      src={logoUrl}
      alt={altText}
      style={{ width: '30px', height: '30px', borderRadius: '100%' }}
    />
  );
};

export default ExportImg;

