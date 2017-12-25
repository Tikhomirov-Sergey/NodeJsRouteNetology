const mongoClient = require('mongodb').MongoClient;
const Writable = require('stream').Writable;

const url = 'mongodb://localhost:27017/netology_test';


class DB {

    connect() {
        return new Promise((resolve, reject) => {
            if(this.db)
                resolve(this.db);
            mongoClient.connect(url, (error, db) => {
                if(error) {
                    console.log('Невозможно подключиться к серверу Mongo', error);
                    reject(error);
                } else {
                    console.log('Соединение установлено');
                    this.db = db;
                    resolve(this.db);
                }
            });
        });
    }


    getUserAll() {

        let write = new CWritable();

        this.connect().then(() => {
            this.db.collection("users").find({}).forEach((error, result) => {

                if(error) {
                    console.log(error);
                } else {
                    write.write(JSON.stringify(result));
                }
            });
        });

        return write;
    }
}

 class CWritable extends Writable {

    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, done) {
        done(chunk.toString());
    }
}

let dn = new DB();

dn.connect();
console.log(dn.getUserAll().on("data", (t) => console.log(t)));

