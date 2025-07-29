import {
  View,
  SplitLayout,
  SplitCol,
  ScreenSpinner,
  Tabbar,
  TabbarItem,
} from '@vkontakte/vkui';

import {
  Icon28HomeOutline,
  Icon28ShoppingOutline,
  Icon28GiftOutline,
  Icon28NewsfeedOutline,
  Icon28UserCircleOutline,
} from '@vkontakte/icons';

import Home from './pages/Home';
// Пока у нас есть только Home, позже добавим Menu, Акции, Новости, Профиль

const App = () => {
  const { panel = 'home' } = useActiveVkuiLocation();
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setFetchedUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await bridge.send('VKWebAppGetUserInfo');
        setFetchedUser(user);
      } catch (e) {
        console.error(e);
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
          <Home id="home" fetchedUser={fetchedUser} />
          {/* Добавим позже:
            <Menu id="menu" />
            <Promos id="promos" />
            <News id="news" />
            <Profile id="profile" />
          */}
        </View>

        {/* Нижняя навигация */}
        <Tabbar>
          <TabbarItem
            text="Главная"
            selected={activePanel === 'home'}
            onClick={() => setActivePanel('home')}
          >
            <Icon28HomeOutline />
          </TabbarItem>
          <TabbarItem
            text="Меню"
            selected={activePanel === 'menu'}
            onClick={() => setActivePanel('menu')}
          >
            <Icon28ShoppingOutline />
          </TabbarItem>
          <TabbarItem
            text="Акции"
            selected={activePanel === 'promos'}
            onClick={() => setActivePanel('promos')}
          >
            <Icon28GiftOutline />
          </TabbarItem>
          <TabbarItem
            text="Новости"
            selected={activePanel === 'news'}
            onClick={() => setActivePanel('news')}
          >
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            text="Профиль"
            selected={activePanel === 'profile'}
            onClick={() => setActivePanel('profile')}
          >
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
