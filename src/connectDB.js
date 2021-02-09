  const connectDB=()=>{
    const sqlit3= require('sqlite3').verbose();
    let db= new sqlit3.Database('C:/Users/mjfc37/Documents/Motorola/RATF/database/RATF.db', (err)=>{
        err? console.log(err) : console.log ('Connect to the sqlite DB');
    });
    return db;
}

module.exports= connectDB;