const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo' , {
    text : {
        type : String ,
        required : true ,
        trim : true
    },
    completed : {
        type : Boolean ,
        default : false
    },
    completedAt : {
        type : Number ,
        default : null
    }
});

var newTodo = Todo({
    text : "Something is cooking" ,
    completed : true , 
    completedAt : 122311
});

newTodo.save().then((result) => {
    console.log(result);
}, (err) => {
    console.log("Cant run bruv, Sorry");
});