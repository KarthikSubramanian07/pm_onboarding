function InventoryList({ items }) {
  return (
    <div className="inventory-container">
      <h2>Open Project — Inventory</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const isAvailable = item.status === "Available"
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>
                  <span className={isAvailable ? "status available" : "status unavailable"}>
                    {item.status}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryList
