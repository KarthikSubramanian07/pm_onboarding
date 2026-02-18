const express = require('express')
const app = express()

app.use(express.json())

// placeholder data — this resets every time the server restarts
const items = [
  { id: 1, name: "Arduino Kit", category: "Hardware", quantity: 5, status: "Available" },
  { id: 2, name: "Figma License", category: "Software", quantity: 20, status: "Available" },
  { id: 3, name: "Raspberry Pi", category: "Hardware", quantity: 3, status: "Available" },
  { id: 4, name: "Slack License", category: "Software", quantity: 15, status: "Unavailable" },
  { id: 5, name: "Soldering Iron", category: "Hardware", quantity: 2, status: "Available" },
]

// return everything in the list
app.get('/inventory', (req, res) => {
  res.json(items)
})

// take the request body and add it as a new item
app.post('/inventory', (req, res) => {
  const { name, category, quantity, status } = req.body
  const newItem = {
    id: items.length + 1,
    name,
    category,
    quantity,
    status
  }
  items.push(newItem)
  res.json({ message: 'item added successfully' })
})

app.listen(3001, () => {
  console.log('running on http://localhost:3001')
})
