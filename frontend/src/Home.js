import { useState, useEffect } from 'react'

function Home() {

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {

    const getLoggedInUser = async () => {
      let response = await fetch('http://localhost:5000/authentication/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      let user = await response.json()
      setCurrentUser(user)
    }
    getLoggedInUser()
  }, [])

  return (
    <main>
      <h1>HOME</h1>
      {currentUser
        ? (
          <h3>Logged in as {currentUser.firstName} {currentUser.lastName}</h3>
        )
        : null}
      <div>
        <img height="300" width="500" src="http://localhost:5000/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
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
