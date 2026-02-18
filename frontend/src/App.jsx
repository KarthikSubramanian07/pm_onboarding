import InventoryList from "./components/InventoryList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Inventory Management Dashboard</h1>
      </header>
      <main>
        <InventoryList />
      </main>
    </div>
  );
}

export default App;
