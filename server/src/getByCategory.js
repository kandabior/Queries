const connectDB= require ('./connectDB');
const closeDB= require ('./closeConnection');


const Query= (category)=>{
    return new Promise ((resolve, reject)=> {
        let db= connectDB();
        let sql=`
            SELECT * 
            FROM Events JOIN Categories ON Events.categoryID==Categories.categoryID
            WHERE Categories.category== ?`;
        const rows=[]
        db.each(sql,[category],(err,row)=>{
            err ? reject(err) : 
                rows.push(row);
        },(err,n)=> {
            err? reject(err) :
                resolve(rows);
        });
        closeDB(db);
    });
};

const getByCategory=(category,callback)=>{
    
    let promise=Query(category);
    promise.then(callback).catch((err)=>console.log(err));
}

module.exports= getByCategory;










