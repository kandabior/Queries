const connectDB= require ('./connectDB');
const closeDB= require ('./closeConnection');

const Query= ()=>{
    return new Promise ((resolve, reject)=> {
        let db= connectDB();
        let sql=`
            SELECT * 
            FROM Categories
            `;
        const rows=[]
        db.each(sql,[],(err,row)=>{
            err ? reject(err) : 
                rows.push(row);
        },(err,n)=> {
            err? reject(err) :
                resolve(rows);
        });
        closeDB(db);
    });
};

const getAllCategoryies=(callback)=>{
    
    let promise=Query();
    promise.then(callback).catch((err)=>console.log(err));
}

module.exports= getAllCategoryies;
//******* check ******* */
const print =(res)=>{
    console.log(res);
}
getAllCategoryies(print);

