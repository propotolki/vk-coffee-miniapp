import BottomNavigation from './components/BottomNavigation';
import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  SplitLayout,
  SplitCol,
  View,
  ScreenSpinner,
} from '@vkontakte/vkui';

import {
  RouterProvider,
  useActiveVkuiLocation,
} from '@vkontakte/vk-mini-apps-router';

import { router } from './routes';
import { DEFAULT_VIEW_PANELS } from './routes';

import Home from './pages/Home';
import Menu from './pages/Menu';
import News from './pages/News';
import Profile from './pages/Profile';
import Promos from './pages/Promos';

export const AppContent = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await bridge.send('VKWebAppGetUserInfo');
        setUser(user);
      } catch (e) {
        console.error('Ошибка получения данных пользователя', e);
      } finally {
        setPopout(null);
      }
    }
    fetchData();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
    <View activePanel={activePanel}>
      <Home id={DEFAULT_VIEW_PANELS.HOME} fetchedUser={fetchedUser} />
      <Menu id={DEFAULT_VIEW_PANELS.MENU} />
      <News id={DEFAULT_VIEW_PANELS.NEWS} />
      <Profile id={DEFAULT_VIEW_PANELS.PROFILE} />
      <Promos id={DEFAULT_VIEW_PANELS.PROMOS} />
    </View>
    <BottomNavigation />
</SplitCol>
    </SplitLayout>
  );
};
export default App;
export const App = () => (
  <RouterProvider router={router}>
    <AppContent />
  </RouterProvider>
);
