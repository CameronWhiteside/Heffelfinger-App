<!--

git push heroku master

heroku run npm run sequelize db:seed:undo:all
heroku run npm run sequelize db:migrate:undo:all
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all


 -->

# Heffelfinger Business Studios

<a href="https://heffelfinger.herokuapp.com/">Live Site</a>  |  <a href="https://github.com/CameronWhiteside/Heffelfinger-App/wiki"> Project Wiki</a> | <a href="https://github.com/CameronWhiteside/Heffelfinger-App/wiki">Report Bug</a>

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

New users can register for an account by entering a unique email address, a username, and a secure password.

<div align="center">
<br/>
<img src="https://i.ibb.co/5BBDxxP/chrome-capture-3.gif" alt="Registration Demo" height="300" align="center"/>
<br/>
<br/>
</div>


Existing users can log in to their account by submitting their credentials via the login form.

<div align="center">
<br/>
<img src="https://i.ibb.co/Cvs6W6c/login.gif" alt="Log-in" width="250" align="center"/>
<br/>
<br/>
</div>

Logged in users can end their session by clicking the log out button.

<div align="center">
<br/>
<img src="https://i.ibb.co/Cvs6W6c/login.gif" alt="Log-in"  width="250" align="center"/>
<br/>
<br/>
</div>


Users may log out of their account by clicking the **LOGOUT** button on the sitewide header.

<div align="center">
<br/>
<img src="https://i.ibb.co/HYF4K9f/logout.gif" alt="Select Profile Image"  align="center"  width="250" />
<br/>
<br/>
</div>

Donut-loving users may demo the site by automatically loggin in as former US President Harry Truman.

<div align="center">
<br/>
<img src="https://i.ibb.co/F8Bdp0h/demo-user.gif" alt="Demo User"  width="250"  align="center"/>
<br/>
<br/>
</div>

Logged-in users can navigate to site features via the welcome screen.

<div align="center">
<br/>
<img src="https://i.ibb.co/ryfCMkx/home-page.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

All users can view site information on the 'About Page' which has links to connect with the site's creator. Who would like you to hire him, please.

<div align="center">
<br/>
<img src="https://i.ibb.co/1MrMW3H/about-screen.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


All users can browser project entries on the projects page.

<div align="center">
<br/>
<img src="https://i.ibb.co/ynmZ5ZM/projects-logged-out.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

An "ADD PROJECTS" button is visible for logged-in users.
<div align="center">
<br/>
<img src="https://i.ibb.co/pzrkgGV/projects-page-logged-in.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Logged-in users can create a project by clicking the button, and entering a name, headline, and description.

<div align="center">
<br/>
<img src="https://i.ibb.co/x38GXJK/add-company.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Logged-in users can revise their project's information on the project profile page.

<div align="center">
<br/>
<img src="https://i.ibb.co/NZGTz1N/edit-profile.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Logged-in users can edit their project's primary image, which defaults to the first letter of the project title if no url is entered.

<div align="center">
<br/>
<img src="https://i.ibb.co/GCvF7Wx/edit-image.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Logged-in users can edit their external links section, which will auto-generate matching logos.

<div align="center">
<br/>
<img src="https://i.ibb.co/tBKTMjy/chrome-capture-5.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Logged-in users can delete their own projects, after confirming with an extra "Are You Sure?" click.

<div align="center">
<br/>
<img src="https://i.ibb.co/z6HTDMJ/delete-project.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Logged-in users can view projects of others, but do not have administrative controls to edit or delete those projects.

<div align="center">
<br/>
<img src="https://i.ibb.co/GcKy6hD/small-other-page.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>






## Contributors

**Cameron Whiteside** | <a href='https://github.com/CameronWhiteside'>Github</a> | <a href='https://www.linkedin.com/in/cameronwhiteside/'>LinkedIn</a>
