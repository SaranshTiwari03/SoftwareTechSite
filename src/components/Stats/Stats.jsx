import React from 'react';
import styles from './Stats.module.css';

export default function Stats({ data }) {
  // Default data if none provided
  const defaultStats = [
    {
      number: '5M',
      label: 'Number of',
      sublabel: 'downloads'
    },
    {
      number: '4.8',
      label: 'Ratings',
      sublabel: 'of apps'
    },
    {
      number: '25',
      label: 'Number',
      sublabel: 'of exits'
    }
  ];

  const statsData = data || defaultStats;

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>
              <div>{stat.label}</div>
              <div>{stat.sublabel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}