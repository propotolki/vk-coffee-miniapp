// src/App.js

import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import Home from './pages/Home';
import SplashScreen from './components/SplashScreen';
import { DEFAULT_VIEW_PANELS } from './routes';

const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setFetchedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await bridge.send('VKWebAppGetUserInfo');
        setFetchedUser(user);
      } catch (err) {
        console.error('Ошибка получения данных пользователя:', err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // Задержка для красивого отображения splash (по желанию)
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
