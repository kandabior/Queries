const date1= new Date (2021,00,01,15,30);
// const date2= new Date (2021,00,01,15,20);
// const date3= new Date (2021,00,01,15,10);
// const date4= new Date (2021,00,02,00,00);
// const date5= new Date (2021,00,01,23,50);

// console.log(date1-date2);
// console.log(date2-date3);
// console.log(date3-date4);
// console.log(date4-date5);


const date2=date1.toLocaleString();
console.log(date2);
const date1again= new Date(date2);
console.log(date1again-date1);