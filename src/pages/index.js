import { useRouter } from 'next/router';
import styles from '../styles/LandingPage.module.css';

export default function LandingPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/task');
  };

  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <h1 className={styles.title}>SnapTask ✨</h1>
        <p className={styles.subtitle}>Snap it. Plan it. Do it.</p>
        <button onClick={handleStart} className={styles.button}>Get Started</button>
      </div>
    </div>
  );
}
