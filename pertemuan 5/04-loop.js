// for loop sederhana
// untuk mejalankan array

const dailyincome = [50, 70, 150, 300, 64]
let totalincome = 0

for (let i = 0; i < dailyincome.length; i++) {
     totalincome += dailyincome[i];
    
}

console.log(`Total Income: $`, totalincome)