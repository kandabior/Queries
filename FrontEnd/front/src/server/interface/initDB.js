// let db=null;
// const connectDB=()=>{
//     const sqlit3= require('sqlite3').verbose();
//     db= new sqlit3.Database('C:/Users/mjfc37/Documents/Motorola/Queries/Queries/FrontEnd/front/src/server/DB/RATF.db', (err)=>{
//         err? console.log(err) : console.log ('Connect to the sqlite DB');
//     });
// };

// const insertResolutions=()=>{
//     let resolutions= [
//         [1,'4k']
//         ,[2,'1080']
//         ,[3,'720']
//         ,[4,'480']
//     ];
//     let sql='INSERT INTO Resolutions (resolutionID,resolution) VALUES (?,?)';
//     resolutions.map((res)=>db.run(sql,res,function (err){
//     err? console.log(err.message): console.log(`Inserted row [${res[0]},${res[1]}]`)
//     }));
// };

// const insertCategories=()=>{
//     let categories=[
//         [1,'assualt']
//         ,[2,'traffic']
//         ,[3,'robbery']
        
//     ]
    
//     let sql='INSERT INTO Categories (categoryID,category) VALUES (?,?)';
//     categories.map((cat)=>db.run(sql,cat,function (err){
//         err? console.log(err.message): console.log(`Inserted row [${cat[0]},${cat[1]}]`)
//     }));  
// };

// const insertEvents=()=>{
//     const dates=[
//         new Date(2020,11,31),
//         new Date(2021,0,28),
//         new Date(2019,6,17,16,30)
//     ]
//     let Events=[
//         [1,'url1',1,1,dates[0].toLocaleString(),true,true],
//         [2,'url2',2,2,dates[1].toLocaleString(),true,false],
//         [3,'url3',3,3,dates[0].toLocaleString(),false,true],
//         [4,'url4',1,4,dates[2].toLocaleString(),false,false],
//     ]
    
//     let sql='INSERT INTO Events (eventID,url,categoryID,resolutionID,time,protected,prioritize) VALUES (?,?,?,?,?,?,?)';
//     Events.map((event)=>db.run(sql,event,function (err){
//         err? console.log(err.message): console.log(`Inserted row [event #${event[0]}]`)
//     }));  
// };

// const getResolutions=()=>{
//     sql= 'SELECT * FROM Resolutions'

//     db.all(sql,[],(err,rows)=>{
//         err? console.log(err.message): rows.forEach((row)=> {
//             console.log(row)
//         })
//     });
// };

// const getCategories=()=>{
//     sql= 'SELECT * FROM Categories'
//     db.all(sql,[],(err,rows)=>{
//         err? console.log(err.message): rows.forEach((row)=> {
//             console.log(row)
//         })
//     });
// };

// const getEvents=()=>{
//     sql= 'SELECT * FROM Events'
//     db.all(sql,[],(err,rows)=>{
//         err? console.log(err.message): rows.forEach((row)=> {
//             console.log(row)
//         })
//     });
// };

// const closeDB=()=>{
//     db.close((err)=>{
//         err? console.log(err.message) : console.log ('Close the sqlite DB');
//     });
// };

// const runAllFunctions=()=>{
//     connectDB();
//     insertResolutions();
//     insertCategories();
//     insertEvents();
//     getResolutions();
//     getCategories();
//     getEvents();
//     closeDB();
// }
// export default runAllFunctions;