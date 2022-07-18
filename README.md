
# Feedback Form

This is a feedback form that takes input requests from users and stores them into the database.

I used redux toolkit query for this assignment. After installing redux-toolkit, I created services.js and handled the post request using mutation,created a hook that I used in the front-end to post data and made a reducerPath in the services.js and exported the service into the store.
I wrapped my whole app with the store in order to access data globally in my app and imported the hook made in services into app.js and used it to make the post request

On the backened I used express Framework and an created an express application that listens on port 3000.I served the react app from node express server .I established  connection with my postgresql database and performed a get request for all  existing data which I dispalyed on the '/users' route. I then wrote code that performed post operations for the feedback we get from users.


## Tech Stack

**Client:** React, Redux, Styled-Components

**Server:** Node, Express

**Database:** Postgresql


## Screenshots
##### feedback form
![App Screenshot](https://github.com/JoanKinyanjui/Zenbit/blob/master/public/images/work2.png?raw=true)

##### feedback received to the database
![App Screenshot](https://github.com/JoanKinyanjui/Zenbit/blob/master/public/images/work1.png?raw=true)
