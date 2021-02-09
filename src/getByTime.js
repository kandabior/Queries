const connectDB= require ('./connectDB');
const closeDB= require ('./closeConnection');

const errorGap=600000   //600000 is 10 minutes

const filterByMinutes=(events,date)=>{
    return events.filter((event)=>{
        const dateStr=event['time'];
                
        const [date2,time]= dateStr.split(',');
        const [hour,minutes,seconds]= time.split(':').map((str)=>parseInt(str));
        const [day,mounth,year]= date2.split('.').map((str)=>parseInt(str));

        const rowDate=new Date(year,mounth-1,day,hour,minutes,seconds);
        return (Math.abs(rowDate-date))<=errorGap;
    });
};

const Query= (date)=>{
    return new Promise ((resolve, reject)=> {
        let db= connectDB();
        let sql=`
            SELECT * 
            FROM Events
            `;
            //now the query fetchs all the records and proccess them in "filterByMinuts"
        let rows=[]
        db.each(sql,[],(err,row)=>{
            err ? reject(err) : 
                rows.push(row);
        }, (err,n)=>{
            err? reject(err):
                resolve(filterByMinutes(rows,date));

        });
        closeDB(db);
    });
};

const getByTime=(date,callback)=> {
    let promise=Query(date);
    promise.then(callback).catch((err)=>console.log(err));
}



module.exports =getByTime;

//*********** checks *************
const date=new Date (2019,04,17,16,35);

const print=(res)=>{
    console.log(res);
} 
getByTime(date,print);

//********************************