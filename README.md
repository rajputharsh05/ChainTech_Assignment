lets have an indepth discussion of this project

there are two main files app.js (This content the creation of the express server ). index.js (the ConnectTodatabase function is called from the databasefolder and express server is called )

lets see the routes

/api/v1/task/add -> this route take title , description , duedate and category from the req.body and update it to the database  (post route) .                        
/api/v1/task/delete -> this route takes _id of the user from the req.body and delete from the database (post route) .
/api/v1/task/update -> this take the  _id and the updated detail i had used findByIdAndUpdate method on _id (post route) .
/api/v1/task/tasks ->  this route dont take anything it just display all the tasks (get route) .
/api/v1/task/category ->  this route dont take any parameter its display all the tasks in the groups based on there category used aggegartion pipelines here  (get route) .



I had also implemented an ApiError class that help me to don't repeat the code while sending the error from the api.


