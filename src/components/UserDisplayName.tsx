// UserDisplayName.tsx
import React from 'react';
import { useWalletAddress } from '../contexts/Beacon';

const UserDisplayName = () => {
  const address = useWalletAddress();

  return (
    <div>
      <p>Adresse : {address || 'Aucun utilisateur connecté'}</p>
      {/* Le reste de votre composant UserDisplayName */}
    </div>
  );
};

export default UserDisplayName;
