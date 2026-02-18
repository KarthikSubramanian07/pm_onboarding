import { useState, useEffect } from 'react'
import InventoryList from './components/InventoryList'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name: '', category: '', quantity: '', status: 'Available' })

  function fetchInventory() {
    fetch('http://localhost:3001/inventory')
      .then(res => res.json())
      .then(data => setItems(data))
  }

  // fetch inventory when the page loads
  useEffect(() => {
    fetchInventory()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, quantity: Number(form.quantity) })
    }).then(() => {
      fetchInventory()
      setForm({ name: '', category: '', quantity: '', status: 'Available' })
    })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Inventory Management Dashboard</h1>
      </header>
      <main>
        <form className="add-form" onSubmit={handleSubmit}>
          <h2>Add Item</h2>
          <input
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            required
          />
          <input
            placeholder="Quantity"
            type="number"
            value={form.quantity}
            onChange={e => setForm({ ...form, quantity: e.target.value })}
            required
          />
          <select
            value={form.status}
            onChange={e => setForm({ ...form, status: e.target.value })}
          >
            <option>Available</option>
            <option>Unavailable</option>
          </select>
          <button type="submit">Add</button>
        </form>
        <InventoryList items={items} />
      </main>
    </div>
  )
}

export default App
