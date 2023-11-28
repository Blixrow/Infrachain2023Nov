import React from 'react';

type ColorBoxProps = {
  statut: number; // Assurez-vous que le statut est bien un nombre
};

const ColorBox: React.FC<ColorBoxProps> = ({ statut }) => {
  const getBoxColor = (value: number): string => {
    // Utilisez une échelle de couleurs en fonction du statut
    const scale = Math.min(Math.max(value, 0), 2); // Assurez-vous que le statut est entre 0 et 2
    const red = 255 - scale * 255;
    const green = scale * 255;
    const blue = 0;

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const boxStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: getBoxColor(statut),
    border: '1px solid #000', // Ajoutez une bordure noire
  };

  return <div style={boxStyle}></div>;
};

export default ColorBox;