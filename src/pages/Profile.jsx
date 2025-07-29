const Profile = ({ id }) => {
  return (
    <div id={id} className="p-4">
      <h1 className="text-xl font-bold">Профиль</h1>
      <p>Информация о пользователе и баллы.</p>
    </div>
  );
};

export default Profile;
