<h1 align="center">[Array]</h1>
<h3 align="center">A social media platform for developers to share their code</h3>

<p align="center"><img src="https://github.com/bobbycoleman-dev/array-v2/blob/main/client/public/profileBanner.png" alt="array-banner" align="center"/></p>


## Table of Contents

-   [Background](#background)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Screenshots](#Screenshots)
-   [Functionality](#functionality)
-   [Design](#design)
-   [Running Locally](#running-locally)

---

## Background

I know I wanted to build a SPA that people would enjoy using, but also have a purpose to use it. So, one night while thinking about a piece of code I had been working on earlier that day, I was thinking about how I could share it.

Sharing code is a big portion of being a part of the dev community as well as sharing code that you created and are proud of. And as far as I knew, there wasn't a platform where the main purpose was to share code and connect with other dev with similar interests.

And so, [Array] was born.

[Return to Table of Contents](#table-of-contents)

---

## Features

-   Login & Registration
-   Maintain Login State after browser close
-   Post creation
    -   Built in Code Block
    -   Language Selection (top 25)
    -   Syntax Highlighting
    -   280 character Description
-   Post Commenting
-   Post Liking
-   Personal Profile
    -   Editable Name field
    -   Editable Username field (must be unique)
    -   Editable Description
    -   Profile image (next feature)
    -   Banner image (next feature)
    -   Followers and Following
-   Search and Filter Posts by Language and/or Description
-   Search users
-   Follow users
-   Trending Languages sections shows top posted languages
-   Fully Responsive Design from mobile to ultra-wide
-   Light/Dark Mode compatible based on user system preference

[Return to Table of Contents](#table-of-contents)

---

## Technologies Used

-   MERN Tech Stack
    -   MongoDB
    -   ExpressJS
    -   ReactJS
    -   NodeJS
-   Vite
-   Axios and RESTful API routing
-   Google Firebase Authentication
-   Server-side and Firebase validations
-   Tailwind and DailyUI
-   CodeReader
-   LocalStorage

[Return to Table of Contents](#table-of-contents)

---

## Functionality

When first visiting the site, you are brought to the Login screen if you have an account, or you can travel to the Registration screen to create an account. The registration form takes your full name, a selected (unique) username, your email, and password/confirm password. After successfully registering, you are taken to the login screen to login in.

After logging in, your information is stored in your personal browser local storage to maintain your login state even after closing the browser, and you are brought to the home screen which features a navigation on the left, users and trending languages on the right, and the main post feed in the middle.

From the home screen, a user can post code, traverse to their personal profile, view other user profiles, and search all posts in the [Array] array.

A user can view a single post, like that post, and comment on that post. A user can also follow other users and view their own followers.

Because [Array] is fully responsive, a user can also view posts and make posts from their tablet or mobile device.

[Return to Table of Contents](#table-of-contents)

---

## Design

I wanted to take a mobile-first approach to my design while also ensuring it can be comfortably viewed on larger screens and in light or dark mode.

The light mode design has a subtle white to light gray gradient, while the dark mode design has a pleasing blueish green gradient with light green primary colors. Dark mode also features a dark gray code block, making the syntax highlighting easy to read.

The layout of [Array] intentionally leaves the left and right sections static while changing the middle section to display the information the user wants to view such as the feed, a single post, or theirs and other users profiles.

[Return to Table of Contents](#table-of-contents)

---

## Running Locally

1. You will need a MongoDB account, I used [Atlas](https://www.mongodb.com/cloud/atlas/register)
2. You will need a [Firebase](https://firebase.google.com/) account to set up Authentication
3. Clone the repository, run `npm i` to install dependencies
4. Create a `.env` file for both the server and the client
5. Server side `.env` file will need:

    ```env
    PORT=8000
    MONGODB_URI=mongodb+srv://{username}:{password}{db_conection_string}?retryWrites=true&w=majority
    ```

6. Client side `.env` file will need (for Firebase authentication):

    ```env
    # All values auto-generated when creating a Firebase application
    VITE_FIREBASE_APIKEY= {firebase_api_key}
    VITE_FIREBASE_AUTH_DOMAIN= {firebase_auth_domain}
    VITE_FIREBASE_PROJECT_ID= {project_id}
    VITE_FIREBASE_STORAGE_BUCKET= {storage_bucket}
    VITE_FIREBASE_MESSAGING_SENDER_ID= {messaging_sender_id}
    VITE_FIREBASE_APP_ID= {app_id}
    ```

7. Open server in terminal, run `nodemon server.js` to start server
8. Open client in terminal, run `npm run dev` to start client

[Return to Table of Contents](#table-of-contents)
