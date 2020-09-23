import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://admin:admin@cluster0.zuq7z.mongodb.net/portafolio?retryWrites=true&w=majority",{
    useNewUrlParser: true, //para evitar warnings
    useUnifiedTopology: true, //para evitar warnings
    useFindAndModify: true, //para evitar warnings
    useCreateIndex: true //para evitar warnings
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error));