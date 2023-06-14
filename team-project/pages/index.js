import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/Home.module.css';
import backgroundVideo from 'public/backvideo.mp4';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        {/* <h1>TimeCrafter</h1>
        <h3>Your Online Publishing Platform</h3>
        <h6>Create and share your own stories</h6> */}
        <div className={styles.buttonContainer}>
          <Link href="/login">
            <div className={styles.button}>Login</div>
          </Link>
          <Link href="/home_page">
            <div className={styles.button} onClick={() => router.push('/home_page')}>
              Enter as a Guest
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
