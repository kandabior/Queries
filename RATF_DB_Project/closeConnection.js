const closeDB= (db)=>{
    db.close((err)=>{
        err? console.log(err.message) : console.log ('Close the sqlite DB');
    });
}

module.exports= closeDB