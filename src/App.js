// src/App.js

import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import Home from './pages/Home';
import { DEFAULT_VIEW_PANELS } from './routes';

const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setFetchedUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await bridge.send('VKWebAppGetUserInfo');
        setFetchedUser(user);
      } catch (err) {
        console.error('Ошибка получения данных пользователя:', err);
      } finally {
        setPopout(null);
      }
    };

    fetchData();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
