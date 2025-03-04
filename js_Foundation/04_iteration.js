let salesData = [
    { product : "laptop", price: 1200 },
    { product : "samrtphone", price : 800 },
    { product : "headphone", price : 150 },
    { product : "keyboard" , price : 80 },
];


let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0)

console.log(totalSales);

let inventory = [
    { name : "widget A", stock: 30 },
    { name : "widget B", stock: 120 },
    { name : "widget C", stock: 45 },
    { name : "widget D", stock: 70 },
];

// filter give output as array 
let lowStockItems = inventory.filter((item) => (item.stock < 50))

// another way to decalre function
let lowStockItems2 = inventory.filter((item) => {
   return item.stock < 50;
});

console.log(lowStockItems);

let userActivity = [
    {user : "Alice", activityCount : 45 },
    {user : "Bob", activityCount : 72 },
    {user : "Charlie", activityCount : 33 },
];

// find most active user using reduce

let mostAciveUser = userActivity.reduce((maxUser, user) => 
    user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser); 


let expenses = [
    {description: "Groceries", amount: 50, category: "Food" },
    {description: "Electricity Bill", amount: 100, category: "Utilities" },
    {description: "Dinner", amount: 30, category: "Food" },
    {description: "Internet Bill", amount: 50, category: "Utilities" },
];

// one way to solution 
let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category]+= expense.amount;
    return report;
}, { Food: 0, Utilities: 0});

// second way to solution 
let expenseReport1 = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount;

    return report;
}, { Food: 0, Utilities: 0});

console.log("Expense Report", expenseReport);
console.log("Expense Report", expenseReport1);

let tasks = [
    { description: "write report", completed: false, priority: 2 },
    { description: "send email", completed: true, priority: 3 },
    { description: "Prepare presentaiton", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);

let movieRatings = [
    { title: "Movie A", rating: [4, 5, 3] },
    { title: "Movie B", rating: [5, 5, 4] },
    { title: "Movie C", rating: [3, 4, 2] },
]

let averageRatings = movieRatings.map((movie) => {
    let total = movie.rating.reduce((sum, rating) => sum + rating, 0)
    let average = total / movie.rating.length;
    movie.ratings = average;
    
    return {title: movie.title, averageRatings: average.toFixed(2)}
})


console.log(averageRatings);