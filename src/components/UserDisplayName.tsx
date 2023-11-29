// UserDisplayName.tsx
import React from 'react';
import { useWalletAddress } from '../contexts/Beacon';

const UserDisplayName = () => {
  const address = useWalletAddress();

  return (
    <div>
      <span style={{fontSize: '35px', fontWeight: 'bold'}}>{'John Doe' || 'Aucun utilisateur connecté'}</span>
      {/* Le reste de votre composant UserDisplayName */}
    </div>
  );
};

export default UserDisplayName;
