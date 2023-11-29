// UserDisplayName.tsx
import React from 'react';
import { useWalletAddress } from '../contexts/Beacon';

const UserDisplayName = () => {
  const address = useWalletAddress();

  return (
    <div>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        {address ? 'John Doe' : 'Aucun utilisateur connecté'}
      </p>
      {/* Le reste de votre composant UserDisplayName */}
    </div>
  );
};

export default UserDisplayName;
