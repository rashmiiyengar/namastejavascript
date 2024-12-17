let date=new Date();
const expectedMonthShort = date.toLocaleString("En-US", { month: "short" });
const expectedYear = date.getFullYear();
console.log(date.getDate);
console.log(expectedYear);