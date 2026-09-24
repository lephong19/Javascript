function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('User')
        }, 1000)
    })
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Orders')
        }, 2000)
    })
}

function getNotifications() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('Notifications')
        }, 3000)
    })
}

Promise.all([
    getUser(),
    getOrders(),
    getNotifications()
])
.then((data) => {
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})