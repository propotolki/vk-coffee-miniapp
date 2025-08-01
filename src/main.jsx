import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { router } from './routes';

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
