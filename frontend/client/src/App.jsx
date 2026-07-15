import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    async function loadClients() {
      try {
        // 1. Updated to the absolute backend URL
        const response = await fetch('http://localhost:8080/clients')
        const body = await response.json()
        setClients(body)
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    }

    loadClients()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* 2. Removed the undefined reactLogo image so the app won't crash */}
        <div className="App-intro">
          <h2>My Clients</h2>
          {clients.length === 0 ? (
            <p>Loading or no clients found...</p>
          ) : (
            clients.map(client => 
              <div key={client.id}>
                <strong>{client.name}</strong> - ({client.email})
              </div>
            )
          )}
        </div>
      </header>
    </div>
  )
}

export default App