import { useEffect } from 'react';
import { Div, Image } from '@vkontakte/vkui';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // Показывать заставку 2.5 секунды

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image
        src="/splash.jpg"
        size={320}
        style={{ objectFit: 'cover', borderRadius: 16 }}
        alt="Заставка"
      />
    </Div>
  );
};

export default SplashScreen;
