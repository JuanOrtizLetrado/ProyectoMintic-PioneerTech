const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://JFernando:Aur8snuh6y@cluster0.vjpzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
 //   useCreateIndex: true,
 //   useNewUrlParser: true,
 //   useFindAndModify: false     
})

.then(db =>console.log('DB is connected'))
.catch(err => console.error(err));
