const express = require('express')
const app = express()
const port = 9090

app.get('/', (req, res) => {
  res.json([
    {
      name:"bob",
      email:"bob@gmail.com"
    },
    {
      name:"alice",
      email:"alice@gmail.com"
    }
])
})

app.listen(port, () => {
  console.log(`Example app:http://localhost:${port}`)
})

// docker run --name -d user-api -d -p 9090:9090 user-ervice