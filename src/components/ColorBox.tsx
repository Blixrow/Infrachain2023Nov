import React from 'react';

type ColorBoxProps = {
  statut: number; // Assurez-vous que le statut est bien un nombre
};

const ColorBox: React.FC<ColorBoxProps> = ({ statut }) => {
  const getBoxColor = (value: number): string => {
    const scale = Math.min(Math.max(value, 0), 2); // Assurez-vous que le statut est entre 0 et 2
    const red = Math.max(0, 255 - (scale-1) * 255); // Rouge à Orange
    const green = Math.min(255, scale * 255); // Orange à Vert
    const blue = 0;
    
    return `rgb(${red}, ${green}, ${blue})`;
    
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Centrer les éléments verticalement
  };

  const boxStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: getBoxColor(statut),
    border: '1px solid #000', // Ajoutez une bordure noire
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}></div>
      <div style={{ marginLeft: '10px' }}>
        {statut === 0 && <span style={{ color: 'black' }}>No Submission</span>}
        {statut === 1 && <span style={{ color: 'black' }}>Nft Submited</span>}
        {statut === 2 && <span style={{ color: 'black' }}>Nft approved by the CSSF</span>}
        {/* Ajoutez d'autres conditions pour les autres statuts */}
      </div>
    </div>
  );
};

export default ColorBox;
