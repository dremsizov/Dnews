# Dnews - This is a web-site for news!
Hey there! If you're reading this, that means you've opened my first React project. The name I've given to my project is Dnews. If you're wondering what my project is all about – it's a news app where users can read the latest articles. All the articles on the site are written by journalists. Currently, since this project is for learning purposes, anyone with a registration can create news articles.


# Deployment

- The application is successfully deployed.
  
   **DEMO**  - https://dnewsbg.vercel.app/

Link to repository - https://github.com/dremsizov/Dnews---

  **For Deploy I Used:**
  
  Vercel for the frontend deployment.
  Render for the backend deployment.
        
   **For test you can use:**
  
   username: vito@abv.bg
   pass: 123456


## App Structure and Architecture

This is my APP structure

![Screenshot 2023-12-06 at 18 45 44](https://github.com/dremsizov/Dnews/assets/106909276/4bec5d91-062a-48fa-811b-cf81473b69ef)


### Use/ install the app Local

- Clone or download the repository to your local machine.
- Open the app in Visual Studio Code.
- Start the server:
   - Navigate to the server folder (cd .\server)
   - Run `node ./server.js` to start the backend.
- Start the React app (frontend):
   - Navigate to the client folder (cd .\client)
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the development server and run the app.
   - Open your browser and go to http://localhost:5173 to access the application.


### Starting the APP
        For a quick exploration, you can use the following demo accounts:

This is the users that are saved by default

set User 1:
        Email: vito@abv.bg
        Password: 123456
set User 2:
        Email: peter@abv.bg
        Password: 123456

# Users Guards 
**Guest**
        - Can view all news that are created in the app
        - Can use the search functionality
        - If the news have a comments the guest can see it
**Logged-in user**
        -create,profile,logout
        - write comments
**Logged-in user who is Owner**
        - write comments
        - delete, edit the news that he is created


## Features
   ### Public part visible without authentication:

- Home page is accessible by all users.On Home page there is a information about the last 7 news that are createt in the App.
**Categories**
  In the app there are some categories. All categories are accessible by all users.
  "Последно"
  Here is the information about all news that are created in the app. The array is sorted from last one to first one. Every news has a button "Прочети повече". With this buttont the client can see the all information about the news. Also if there are comments he can see the comments from the first one to the last one. 
  - Login page. For login the person should give a information about the email and the password. The email and password must be valid for login
  - Register Page - Here all clients should give basic information like: First name, Last name, email, username, Password and repeat password. In this form all fields are requiered. There are some validations.
            
   ### Private part visible after login.

  -The user can see all news.
  If we are creator of the news, we can see the options **Редактирай** and **Изтрий**
  If the user is not creator he can just read the news and just leave the **comment**
   
  - Create page, each user can create their own news:
        all fields in the form are required with different validations, if the form does not meet all the validations, the submit button is disabled. With red errors the users can see where are the mistakes and change it.

  - Search page, users can search the news. The search looking for the match letter ot word that is in **fullinfo** news text. If there is a match from the search all results are rendered, users can also access details. If there isn't a match an informative message is displayed.

  - Profile page:
       Here the user can see the profil information and all news that are created by the user.

# Security

The project incorporates several security enhancements:
- The application requires the user to be authenticated to take advantage of the full functionalities
- Guards: By utilizing public and private guards effectively, an application can ensure a balance between providing necessary information publicly while safeguarding sensitive functionalities and data
-  404 Page: An exclusive 404 page is implemented to handle undefined routes gracefully
-  Error boundary: catch JavaScript errors anywhere in the child component tree, log those errors, and display a fallback UI instead of crashing the whole app

        
# Deployment

**Frontend**
       The frontend of Dnews is deployed on Vercel. 

**Backend Deployment**

The backend of Dnews is deployed on Render. 

      
# Application Pages

If you don't have time here you can see how the web-site looks. There are some screenshots

### Home Page


![homePage](https://github.com/dremsizov/Dnews/assets/106909276/bb80d0d1-e4c2-4a59-a3cb-29589e4f64ab)

- NavBar Guest
![notLoginNav](https://github.com/dremsizov/Dnews/assets/106909276/7f66f629-04f9-4393-b43a-2011595a11be)

- NavBar User
![loginNav](https://github.com/dremsizov/Dnews/assets/106909276/4adad9fa-5dcf-4056-af75-e3e8436ac8fa)


### Login Page



![login](https://github.com/dremsizov/Dnews/assets/106909276/429dd882-bac1-48bc-943e-088f615a6b12)

- Login Error

  ![logineror](https://github.com/dremsizov/Dnews/assets/106909276/8582dd01-c724-41e7-ba58-079583508136)

![loginError](https://github.com/dremsizov/Dnews/assets/106909276/96eb4404-75ab-4128-8db4-ad6ae62e35d7)


### Register Page

![register](https://github.com/dremsizov/Dnews/assets/106909276/1a84c656-532c-486c-880b-a7a1b5a63715)


### Profile Page



![profile](https://github.com/dremsizov/Dnews/assets/106909276/a5183795-5bf4-41aa-9e7c-c124be1379b3)


### Create Page



![create](https://github.com/dremsizov/Dnews/assets/106909276/9b12cc68-ad9f-496a-925d-97daba46224c)


- Create Page Confirm


![createConfurm](https://github.com/dremsizov/Dnews/assets/106909276/56b5f94f-7936-45fb-9656-78ce44fadcd7)


### Details Page


  - Is not owner
![detailsNotOwner](https://github.com/dremsizov/Dnews/assets/106909276/be329445-4fb0-4224-9b30-eb6c0d4508d4)

  - Is Owner

![detailsOwner](https://github.com/dremsizov/Dnews/assets/106909276/82e8f0bb-ffd7-4cff-9c1e-87e0033bba03)

  - Delete

    ![deleteNews](https://github.com/dremsizov/Dnews/assets/106909276/c8afc38f-df00-4ce6-8548-91200e9e87e3)


### Catalog


![catalog](https://github.com/dremsizov/Dnews/assets/106909276/55dfecaf-8923-4c3e-9377-fdfd9789d118)


### Catalog - Current Page


![world](https://github.com/dremsizov/Dnews/assets/106909276/d38844ce-a387-4d0e-b023-94ffca3d2847)


![sport - nonews](https://github.com/dremsizov/Dnews/assets/106909276/12493f8d-898d-46fe-9acb-fd2deed4ac60)



### Search Page

![searchFound](https://github.com/dremsizov/Dnews/assets/106909276/35ad4f88-937e-474b-9284-0b1f4a1d65a4)


![search](https://github.com/dremsizov/Dnews/assets/106909276/001b4898-2628-4a89-8798-dba03cce4a72)


### Not Found 

![Screenshot 2023-12-08 at 15 04 57](https://github.com/dremsizov/Dnews/assets/106909276/7dd04fc6-3f2b-4e04-a06b-6b97d23457db)

