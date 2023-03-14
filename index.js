
const express = require('express')
const { resourceLimits } = require('worker_threads')
const app = express()
const port = 8000

app.use(express.json())

const userData = [
    {
        username: 'krispersson',
        password: 'dilkington',
        email: 'krisperssonmusic@gmail.com'
    }
]


app.get('/', (request, response) => {
    response.send(userData)
})

app.post('/api/login', (request, response) => {

    const result = {
        success: false,
        username: 'Username and/or password not found'
    }

    const userObj = request.body
    if (userObj.hasOwnProperty('username') &&
        userObj.hasOwnProperty('password') 
    ) {
        userData.forEach(user => {
            if (user.username === userObj.username && 
                user.password === userObj.password) {
                    result.success = true
                    result.username = user.username
                    console.log(`Successfully logged in as ${user.username}!`)
            }
        })
    }
    response.json(result)
})

app.post('/api/signup', (request, response) => {

    const result = {
        success: true,
        userNameExists: false,
        emailExists: false
    }

    const userObj = request.body

    if (userObj.hasOwnProperty('username') && 
        userObj.hasOwnProperty('password') &&
        userObj.hasOwnProperty('email')
    ) {
        userData.forEach(user => {
            if (user.username === userObj.username) {
                result.userNameExists = true
                result.success = false
            }
            if (user.email === userObj.email) {
                result.emailExists = true
                result.success = false
            }
        })
    }

    if (result.success) {
        userData.push(userObj)
    }

    response.json(result)

})


app.listen(port, () => {
    console.log(`Started server at: http://localhost:${port}`)
})
