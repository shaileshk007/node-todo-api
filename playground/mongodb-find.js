// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect(`mongodb://localhost:27017/`, (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b192ecc27e095bbdbc80998')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch document because', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:', count);
    // }, (err) => {
    //     console.log('Unable to fetch document because', err);
    // });

    db.collection('Users').find({ name: 'Shailesh' }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data because ', err);
    });

    // client.close();
});