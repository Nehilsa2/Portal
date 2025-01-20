import React from 'react';
import { MdEmail } from 'react-icons/md'; // Make sure to import the icon
import styles from './Email.module.css'; // Import your CSS module for styling

const Email = () => {
  return (
    <div className={styles.emailContainer}>
      <MdEmail className={styles.emailIcon} />
      <a href="mailto:your-email@example.com" className={styles.emailLink}>
        your-email@example.com
      </a>
    </div>
  );
};

export default Email;