![](\public\images\work2.png)
This is a feedback form that takes input requests from users and stores them into the database.<br />
I used React and Styled-components for the frontend , node(express framework) for backened and Postgresql database.<br />
I used redux toolkit query for this assignment.
After installing redux-toolkit, I created services.js and handled the post request using mutation,created a hook that I used in the front-end to post data and made a reducerPath in the services.js and exported the service into the  store.<br />
I wrapped my whole app with the store in order to access data globally in my app and imported the hook made in services into app.js and used it to make the post request<br/>
