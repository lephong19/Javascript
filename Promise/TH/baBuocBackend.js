const user = {
    id: 111,
    password: '123435',
    name: 'T Ng Bao T',
    age: 19,
    city: 'HCM'
}

function login(id, pass) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!Number.isInteger(id) || id <= 0)
                return reject(new Error('loi_id'))

            if (typeof pass !== 'string' || pass.trim() === '')
                return reject(new Error('loi_pass'))

            if (id === user.id && pass === user.password) {
                return resolve(user.id)
            }

            return reject(new Error('Fail LOGIN'))

        }, 3000)
    })
}


function getUser(id) {

    return new Promise((resolve, reject) => {

        if (!Number.isInteger(id) || id <= 0)
            return reject(new Error('loi_id'))

        if (id === user.id) {
            return resolve({
                id: user.id,
                name: user.name
            })
        }

        return reject(new Error('Id_sai_user'))
    })
}


function getProfile(id) {

    return new Promise((resolve, reject) => {

        if (!Number.isInteger(id) || id <= 0)
            return reject(new Error('loi_id'))

        if (id === user.id) {
            return resolve({
                id: user.id,
                name: user.name,
                age: user.age,
                city: user.city
            })
        }

        return reject(new Error('id_sai_profile'))
    })
}


// Promise chaining

login(111, '123435')
    .then((userId) => {

        return getUser(userId)

    })
    .then((user) => {

        return getProfile(user.id)

    })
    .then((profile) => {

        console.log(profile)

    })
    .catch((err) => {

        console.log(err.message)

    })