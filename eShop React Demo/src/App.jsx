const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image: "",
    },
    {
      id: 2,
      title: "Jackets",
      image: "",
    },
    {
      id: 3,
      title: "Sneakers",
      image: "",
    },
    {
      id: 4,
      title: "Womens",
      image: "",
    },
    {
      id: 5,
      title: "Mens",
      image: "",
    },
  ];

  return (
    <main className="main__container">

      <section className="main__categories-container">

        {
          categories.map(({id, title}) => {

            return (

              <div className="main__category-container" key={id}>
                {/* image go here*/}
                <div className="category__body-container">
                  <h3>{title}</h3>
                  <p>Shop Now</p>
                </div>
              </div>

            );
          })
        }

      </section>

    </main>
  );
};

export default App;
