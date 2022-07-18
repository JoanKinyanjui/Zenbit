
# Feedback Form

This is a feedback form that takes input requests from users and stores them into the database.

I used redux toolkit query for this assignment. After installing redux-toolkit, I created services.js and handled the post request using mutation,created a hook that I used in the front-end to post data and made a reducerPath in the services.js and exported the service into the store.
I wrapped my whole app with the store in order to access data globally in my app and imported the hook made in services into app.js and used it to make the post request


## Tech Stack

**Client:** React, Redux, Styled-Components

**Server:** Node, Express

**Database:** Postgresql


## Screenshots
##### feedback form
![App Screenshot](https://github.com/JoanKinyanjui/Zenbit/blob/master/public/images/work2.png?raw=true)

##### feedback received to the database
![App Screenshot](https://github.com/JoanKinyanjui/Zenbit/blob/master/public/images/work1.png?raw=true)
