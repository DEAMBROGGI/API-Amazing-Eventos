const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://AdrianDeambroggi:Cintia33395@cluster0.rgm70.mongodb.net/amazingEvents?retryWrites=true&w=majority",
{
    useUnifiedTopology: true, 
    useNewUrlParser: true,
})
.then(()=> console.log('Database connected'))
.catch(err => console.error(err))
