
function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div >
        <img height="300" width="500" src="http://localhost:5001/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
