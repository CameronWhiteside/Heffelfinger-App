<!-- git push heroku master

heroku run npm run sequelize db:seed:undo:all
heroku run npm run sequelize db:migrate:undo:all
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all -->

# Heffelfinger Business Studios

<a href="https://recipeople.herokuapp.com/">Live Site</a>  |  <a href="https://github.com/MeiMeiYS/group-9-best-group/wiki"> Project Wiki</a> | <a href="https://github.com/MeiMeiYS/group-9-best-group/issue">Report Bug</a>

Heffelfinger Business Studios is a virtual coworking space where entrepreneurs can connect, build their team, and organize events to share ideas.

## Technologies Used
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  | [Express](https://expressjs.com/)   |  [React](https://reactjs.org/) |  [Redux](https://redux.js.org/) | [Sequelize](sequelize.org)   |  [PostgreSQL](https://www.postgresql.org/)   |  [JWT Authentication](https://jwt.io/introduction)

## Launching Locally

### Prerequisites
 - [Node.js 16.13.1](https://nodejs.org/en/)
 - [PostgreSQL 12](https://www.postgresql.org/docs/12/index.html)

### Getting Started

1. Clone the project repository
```
git clone https://github.com/CameronWhiteside/Heffelfinger-App.git
```
2. Install dependencies
```
    npm install
```

3.  Create a local .env file modeled after the .env.example file in the backend directory
```
   PORT=5000
   DB_USERNAME=heffelfinger_app
   DB_PASSWORD= <password>
   DB_DATABASE=heffelfinger_db
   DB_HOST=localhost
   JWT_SECRET= <secret>
   JWT_EXPIRES_IN=604800

```
4. Migrate and seed the database
 ```
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
```

5. Launch the project frontend and backend from their root directories
 ```
    npm start
 ```

## Site Preview


### User Registration and Authentication
New users can register for an account by entering a unique email address, a username, and a secure password.

<div align="center">
<br/>
<!-- <img src="https://i.ibb.co/7ybwmS4/sample123-register.gif" alt="Explore Recent Recipes" height="300" align="center"/> -->
<br/>
<br/>
</div>


Existing users can log in to their account by submitting their credentials via the login form.

<div align="center">
<br/>
<!-- <img src="https://i.ibb.co/mN1vsht/sample123-login.gif" alt="Explore Recent Recipes" height="300" align="center"/> -->
<br/>
<br/>
</div>


Logged in users can select a profile picture, or link a custom image via url

<div align="center">
<br/>
<!-- <img src="https://i.ibb.co/dc4Pv24/profile-picture-selection.gif" alt="Select Profile Image" height="450" align="center"/> -->
<br/>
<br/>
</div>

Users may log out of their account by clicking the **LOGOUT** button on the sitewide header.

<div align="center">
<br/>
<!-- <img src="https://i.ibb.co/3fCRrM2/Logout-Click.gif" alt="Logout" height="300" align="center"/> -->
<br/>
<br/>
</div>


## Contributors

**Cameron Whiteside** | <a href='https://github.com/CameronWhiteside'>Github</a> | <a href='https://www.linkedin.com/in/cameronwhiteside/'>LinkedIn</a>
