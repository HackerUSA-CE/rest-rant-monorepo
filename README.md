# Project REST-Rant
REST-Rant is an app where users can review restaurants.

### Setup
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
DB_USERNAME=rest_rant_user
DB_PASSWORD=password
DB_DATABASE=rest_rant
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /places                              | Places index page                         |
| POST   | /places                              | Create new place                          |
| GET    | /places/:placeId                     | Details about a particular place          |
| PUT    | /places/:placeId                     | Update a particular place                 |
| DELETE | /places/:placeId                     | Delete a particular place                 |
| POST   | /places/:placeId/comments            | Create a comment about a particular place |
| DELETE | /places/:placeId/comments/:commentId | Delete a comment about a particular place |


### App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /places               | `places/PlaceIndex.js`    | List of places                                                                  |
| /places/new           | `places/NewPlaceForm.js`  | Form for creating a new place                                                   |
| /places/:placeId      | `places/PlaceDetails.js`  | Details of a place, including it's comments, and a form to create a new comment |
| /places/:placeId/edit | `places/EditPlaceForm.js` | Form for editing a place                                                        |