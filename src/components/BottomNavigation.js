import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import {
  Icon28HomeOutline,
  Icon28ListOutline,
  Icon28DiscountOutline,
  Icon28NewsfeedOutline,
  Icon28UserCircleOutline,
} from '@vkontakte/icons';
import { useRouteNavigator, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_VIEW_PANELS } from '../routes';

const BottomNavigation = () => {
  const routeNavigator = useRouteNavigator();
  const { panel: activePanel } = useActiveVkuiLocation();

  return (
    <Tabbar>
      <TabbarItem
        text="Главная"
        selected={activePanel === DEFAULT_VIEW_PANELS.HOME}
        onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.HOME)}
      >
        <Icon28HomeOutline />
      </TabbarItem>

      <TabbarItem
        text="Меню"
        selected={activePanel === DEFAULT_VIEW_PANELS.MENU}
        onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.MENU)}
      >
        <Icon28ListOutline />
      </TabbarItem>

      <TabbarItem
        text="Акции"
        selected={activePanel === DEFAULT_VIEW_PANELS.PROMOS}
        onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.PROMOS)}
      >
        <Icon28DiscountOutline />
      </TabbarItem>

      <TabbarItem
        text="Новости"
        selected={activePanel === DEFAULT_VIEW_PANELS.NEWS}
        onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.NEWS)}
      >
        <Icon28NewsfeedOutline />
      </TabbarItem>

      <TabbarItem
        text="Профиль"
        selected={activePanel === DEFAULT_VIEW_PANELS.PROFILE}
        onClick={() => routeNavigator.push(DEFAULT_VIEW_PANELS.PROFILE)}
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
    </Tabbar>
  );
};

export default BottomNavigation;
