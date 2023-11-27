// Data.tsx
import React, { useState } from 'react';

interface RiskData {
  id: string;
  label: string;
  risk: string;
}

const currencyData: RiskData[] = [
  { id: 'usd', label: 'Dollar américain', risk: 'Faible' },
  { id: 'eur', label: 'Euro', risk: 'Modéré' },
  { id: 'gbp', label: 'Livre sterling', risk: 'Élevé' },
  { id: 'jpy', label: 'Yen japonais', risk: 'Faible' },
  { id: 'aud', label: 'Dollar australien', risk: 'Modéré' },
  { id: 'cad', label: 'Dollar canadien', risk: 'Élevé' },
  // Ajoutez d'autres devises ici
];

const countryData: RiskData[] = [
  { id: 'usa', label: 'États-Unis', risk: 'Faible' },
  { id: 'ger', label: 'Allemagne', risk: 'Modéré' },
  { id: 'uk', label: 'Royaume-Uni', risk: 'Élevé' },
  { id: 'jpn', label: 'Japon', risk: 'Faible' },
  { id: 'aus', label: 'Australie', risk: 'Modéré' },
  { id: 'can', label: 'Canada', risk: 'Élevé' },
  // Ajoutez d'autres pays ici
];

const sectorData: RiskData[] = [
  { id: 'fin', label: 'Finance', risk: 'Faible' },
  { id: 'tech', label: 'Technologie', risk: 'Modéré' },
  { id: 'energy', label: 'Énergie', risk: 'Élevé' },
  { id: 'auto', label: 'Automobile', risk: 'Faible' },
  { id: 'mines', label: 'Mines', risk: 'Modéré' },
  { id: 'real', label: 'Immobilier', risk: 'Élevé' },
  // Ajoutez d'autres secteurs ici
];

const CurrencyPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<RiskData | null>(null);

  const handleItemClick = (item: RiskData) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '170px' }}>
      {/* Liste des devises */}
      <div style={{ margin: '10px' }}>
        <h2>Devises</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {currencyData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{
                padding: '15px',
                margin: '10px 0',
                border: '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedItem === item ? '#f0f0f0' : 'inherit',
                textAlign: 'left',
              }}
            >
              <strong>{item.label}</strong> - Risque: {item.risk}
            </li>
          ))}
        </ul>
      </div>

      {/* Liste des pays */}
      <div style={{ margin: '10px' }}>
        <h2>Pays</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {countryData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{
                padding: '15px',
                margin: '10px 0',
                border: '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedItem === item ? '#f0f0f0' : 'inherit',
                textAlign: 'left',
              }}
            >
              <strong>{item.label}</strong> - Risque: {item.risk}
            </li>
          ))}
        </ul>
      </div>

      {/* Liste des secteurs financiers */}
      <div style={{ margin: '10px' }}>
        <h2>Secteurs Financiers</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sectorData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{
                padding: '15px',
                margin: '10px 0',
                border: '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedItem === item ? '#f0f0f0' : 'inherit',
                textAlign: 'left',
              }}
            >
              <strong>{item.label}</strong> - Risque: {item.risk}
            </li>
          ))}
        </ul>
      </div>

      {selectedItem && (
        <div style={{ marginLeft: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2>Informations détaillées</h2>
          <p>
            <strong>{selectedItem.label}</strong>
          </p>
          <p>Risque: {selectedItem.risk}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyPage;
