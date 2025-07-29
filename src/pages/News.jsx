const News = ({ id }) => {
  return (
    <div id={id} className="p-4">
      <h1 className="text-xl font-bold">Новости</h1>
      <p>Новости кофейни и новинки в меню.</p>
    </div>
  );
};

export default News;
