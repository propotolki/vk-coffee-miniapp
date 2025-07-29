// src/pages/Home.jsx
import React from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Avatar,
  Header,
  Cell,
  CardGrid,
  Card,
  Button,
  Div,
  useAdaptivityConditionalRender,
  Spacing,
} from '@vkontakte/vkui';
import { Icon28HomeOutline, Icon28ShoppingCartOutline } from '@vkontakte/icons';

const Home = ({ id }) => {
  const user = {
    name: 'Александр',
    status: 'Постоянный клиент',
    points: 150,
    avatar: 'https://vk.com/images/camera_200.png', // Замени на фото клиента, если есть API
  };

  return (
    <Panel id={id}>
      <PanelHeader
        before={<Icon28HomeOutline />}
        after={<Icon28ShoppingCartOutline />}
      >
        Bart & Coffee
      </PanelHeader>

      {/* ВЕРХНЯЯ КАРТОЧКА */}
      <Group header={<Header mode="secondary">Ваш профиль</Header>}>
        <Cell
          before={<Avatar size={72} src={user.avatar} />}
          subtitle={`Баллов: ${user.points}`}
        >
          {user.name} — {user.status}
        </Cell>
      </Group>

      <Spacing size={12} />

      {/* БЛОКИ */}
      <Group header={<Header mode="primary">Меню</Header>}>
        <Div>
          <Button size="l" stretched mode="secondary">
            Посмотреть меню
          </Button>
        </Div>
      </Group>

      <Group header={<Header mode="primary">Акции</Header>}>
        <CardGrid size="l">
          <Card mode="shadow">
            <Div>Купи 2 — получи 3!</Div>
          </Card>
        </CardGrid>
      </Group>

      <Group header={<Header mode="primary">Новости</Header>}>
        <CardGrid size="l">
          <Card mode="shadow">
            <Div>Новый бабл-чай уже в продаже!</Div>
          </Card>
        </CardGrid>
      </Group>

      <Group>
        <Div style={{ display: 'flex', gap: 8 }}>
          <Button stretched mode="commerce">Мы на карте</Button>
          <Button stretched mode="outline">Ищем бариста</Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Home;
