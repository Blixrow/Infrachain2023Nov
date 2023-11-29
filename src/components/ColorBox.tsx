import React from 'react';

type ColorBoxProps = {
  statut: number; // Assurez-vous que le statut est bien un nombre
};

const ColorBox: React.FC<ColorBoxProps> = ({ statut }) => {
  const getBoxColor = (value: number, boxIndex: number): string => {
    if (value === boxIndex) {
      const scale = Math.min(Math.max(value, 0), 2); // Assurez-vous que le statut est entre 0 et 2
      const red = Math.max(0, 255 - (scale - 1) * 255); // Rouge à Orange
      const green = Math.min(255, scale * 255); // Orange à Vert
      const blue = 0;

      return `rgb(${red}, ${green}, ${blue})`;
    } else {
      // Retourne une chaîne vide si le statut ne correspond pas à l'index de la boîte
      return '';
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center', // Centrer les éléments verticalement
    textAlign: 'center', // Centrer le texte horizontalement
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Mettez en colonne pour avoir une boîte au-dessus de l'autre
    alignItems: 'center', // Centrer les éléments horizontalement

  };

  const boxStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    border: '1px solid #000', // Ajoutez une bordure noire
    marginBottom: '5px', // Espace entre les boîtes
    borderRadius: '50%', // Rend les coins de la boîte ronds
    marginRight :'20px',
    marginLeft :'20px',
  };


  return (
    <div style={containerStyle}>
      {/* Première boîte */}
      <div style={columnStyle}>
        {/* Texte pour la première boîte */}
        <span style={{ color: 'black' }}>To Do</span>
        {/* Boîte de couleur avec le style spécifique */}
        <div style={{ ...boxStyle, backgroundColor: getBoxColor(statut, 0) }}></div>
      </div>



      {/* Deuxième boîte */}
      <div style={columnStyle}>
        {/* Texte pour la deuxième boîte */}
        <span style={{ color: 'black' }}>Calculated</span>
        {/* Boîte de couleur avec le style spécifique */}
        <div style={{ ...boxStyle, backgroundColor: getBoxColor(statut, 1) }}></div>
      </div>



      {/* Troisième boîte */}
      <div style={columnStyle}>
        {/* Texte pour la troisième boîte */}
        <span style={{ color: 'black' }}>Validated</span>
        {/* Boîte de couleur avec le style spécifique */}
        <div style={{ ...boxStyle, backgroundColor: getBoxColor(statut, 2) }}></div>
      </div>
    </div>
  );
};

export default ColorBox;
