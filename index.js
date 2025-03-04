const express = require('express'); // load express module
const nedb=require('nedb-promises');

const app = express(); // init app
const db=nedb.create('myfile.json');

app.use(express.static('public')); // enablle static routing

// insert and search route
app.get('/search',(request,response)=>{
    try{
        const query=JSON.parse(request.query.find);
        db.find(query)
        .then(docs=>{
            const results = docs.map(docs=>
                JSON.stringify(docs,null,2)) //can also do for each eg docs.forEach()
            .join('\n');
        response.send(results);
    })
    }catch(err){
        response.send('Could not execute query');
    }
});

app.get('/insert',(request,response)=>{
    try{
        const doc=JSON.parse(request.query.doc);
        db.insertOne(doc)
        .then(doc=>{
            response.send('Inserted:\n'+ JSON.stringify(doc,null,2)) //null ,2 is just to make it nicer when it is printed
        })
    }
    catch(err){
        response.send('Could not insert document');
    }
});

// default route

app.all('*',(request,response)=>{response.status(404).send('Invalid URL.')});
// start server
const PORT=3000;
app.listen( PORT, ()=>console.log('server started… http://localhost:'+ PORT));