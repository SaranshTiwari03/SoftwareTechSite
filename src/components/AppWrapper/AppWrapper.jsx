import React, { useState, useEffect } from 'react';
import { offerStripConfig } from '../../data/offerStripData';
import styles from './AppWrapper.module.css';

export default function AppWrapper({ children }) {
  const [stripClosed, setStripClosed] = useState(false);

  // Listen for strip close event
  useEffect(() => {
    const handleStripClose = () => {
      setStripClosed(true);
    };

    window.addEventListener('offerstrip-closed', handleStripClose);
    return () => window.removeEventListener('offerstrip-closed', handleStripClose);
  }, []);

  // Calculate top margin for navbar based on strip state
  const getNavbarMargin = () => {
    if (!offerStripConfig.enabled) return '0px';
    if (stripClosed) return '0px';
    return 'var(--offer-strip-height, 50px)'; // Will be set dynamically
  };

  return (
    <div 
      className={styles.appWrapper}
      style={{ '--navbar-top-margin': getNavbarMargin() }}
    >
      {children}
    </div>
  );
}
