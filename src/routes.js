// src/routes.js
import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';
export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  MENU: 'menu',
  NEWS: 'news',
  PROFILE: 'profile',
  PROMOS: 'promos',
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.MENU, '/menu', []),
      createPanel(DEFAULT_VIEW_PANELS.NEWS, '/news', []),
      createPanel(DEFAULT_VIEW_PANELS.PROFILE, '/profile', []),
      createPanel(DEFAULT_VIEW_PANELS.PROMOS, '/promos', []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
