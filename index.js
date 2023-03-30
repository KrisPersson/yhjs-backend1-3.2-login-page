
const express = require('express')
const { resourceLimits } = require('worker_threads')
const app = express()
const PORT = process.env.PORT || 8000

const { loginRouter } = require('./routes/login')
const { signupRouter } = require('./routes/signup')
const { userRouter } = require('./routes/user')

app.use(express.json())

app.use('/api/login', loginRouter)
app.use('/api/signup', signupRouter)
app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Started server at: http://localhost:${PORT}`)
})
