// src/pages/Home.jsx
import React from 'react';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Group,
  Avatar,
  Header,
  Cell,
  CardGrid,
  Card,
  Button,
  Div,
  Spacing,
} from '@vkontakte/vkui';

import {
  Icon28HomeOutline,
  Icon28ShoppingCartOutline,
} from '@vkontakte/icons';

const Home = ({ id, fetchedUser }) => {
  // Если нет данных от VK, используем фолбэк
  const user = fetchedUser || {
    first_name: 'Александр',
    last_name: '',
    status: 'Постоянный клиент',
    points: 150,
    photo_200: 'https://vk.com/images/camera_200.png',
  };

  return (
    <Panel id={id}>
      {/* Верхнее меню с кнопками */}
      <PanelHeader
        before={
          <PanelHeaderButton>
            <Icon28HomeOutline />
          </PanelHeaderButton>
        }
        after={
          <PanelHeaderButton>
            <Icon28ShoppingCartOutline />
          </PanelHeaderButton>
        }
      >
        Bart & Coffee
      </PanelHeader>

      {/* ВЕРХНЯЯ КАРТОЧКА */}
      <Group header={<Header mode="secondary">Ваш профиль</Header>}>
        <Cell
          before={<Avatar size={72} src={user.photo_200} />}
          subtitle={`Баллов: ${user.points || 150}`}
        >
          {user.first_name} {user.last_name} — {user.status || 'Постоянный клиент'}
        </Cell>
      </Group>

      <Spacing size={12} />

      {/* МЕНЮ */}
      <Group header={<Header mode="primary">Меню</Header>}>
        <Div>
          <Button size="l" stretched mode="secondary">
            Посмотреть меню
          </Button>
        </Div>
      </Group>

      {/* АКЦИИ */}
      <Group header={<Header mode="primary">Акции</Header>}>
        <CardGrid size="l">
          <Card mode="shadow">
            <Div>☕ Купи 2 — получи 3!</Div>
          </Card>
          <Card mode="shadow">
            <Div>🎉 Кэшбэк 10% на первый заказ!</Div>
          </Card>
        </CardGrid>
      </Group>

      {/* НОВОСТИ */}
      <Group header={<Header mode="primary">Новости</Header>}>
        <CardGrid size="l">
          <Card mode="shadow">
            <Div>📢 Новый бабл-чай уже в продаже!</Div>
          </Card>
          <Card mode="shadow">
            <Div>📅 Бариста недели: Аня, 5 звёзд!</Div>
          </Card>
        </CardGrid>
      </Group>

      {/* КНОПКИ */}
      <Group>
        <Div style={{ display: 'flex', gap: 8 }}>
          <Button stretched mode="commerce">
            Мы на карте
          </Button>
          <Button stretched mode="outline">
            Ищем бариста
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Home;
