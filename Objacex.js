//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
<<<<<<< HEAD
let fullAddress = [restaurant["address"], restaurant["city"], restaurant["state"]]
=======
let fullAddress = restaurant["address"]
>>>>>>> eb02bd207b59fc5294b89747635ecbc46ab52c16
console.log(fullAddress)