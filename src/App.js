import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Records from './components/Records'
import AddHistory from './components/AddHistory'
import About from './components/About'
import ThankYou from './components/ThankYou'
import Done from './components/Done'

const App = () => {
  const [showAddHistory, setShowAddHistory] = useState(false)
  const [records, setRecords] = useState([])
  
  useEffect(() => {
    const getRecords = async () => {
      const recordsFromServer = await fetchRecords()
      setRecords(recordsFromServer)
    }
    getRecords()
  }, [])

  // Fetch Records
  const fetchRecords = async () => {
    const res = await fetch('http://localhost:5000/records')
    const data = await res.json()

    return data
  }

  // Fetch Event
  //const fetchHistory = async (id) => {
  //  const res = await fetch(`http://localhost:5000/records/${id}`)
  //  const data = await res.json()

  //  return data
  //}

  // Add History
  const addHistory = async (history) => {
    const res = await fetch('http://localhost:5000/records', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(history),
    })
    const data = await res.json()
    setRecords([...records, data])
  }

  // Delete History
  const deleteHistory = async (id) => {
    await fetch(`http://localhost:5000/records/${id}`, {
      method: 'DELETE',
    })

    setRecords(records.filter((history) => history.id !== id))
  }

  // Toggle Reminder
  //  const toggleReminder = async (id) => {
  //  const historyToToggle = await fetchHistory(id)
  //  const updHistory = { ...historyToToggle, reminder: !historyToToggle.reminder }
  //  const res = await fetch(`http://localhost:5000/records/${id}`, {
  //    method: 'PUT',
  //    headers: {
  //      'Content-type': 'application/json'
  //    },
  //    body: JSON.stringify(updHistory),
  //  })

  // const data = await res.json()

  //  setRecords(records.map((history) => history.id === id ? { ...history, reminder: data.reminder } : history))
  // }

  return (
    <Router>
      <body>
        
      </body>
      <div className="container">
        <Header onAdd={() => setShowAddHistory(!showAddHistory)} showAdd={showAddHistory} />
        <Route path='/' exact render={(props) => (
          <>
            {showAddHistory && <AddHistory onAdd={addHistory} />}
            {records.length > 0 ? (
            <Records
              records={records} 
              onDelete={deleteHistory} 
            />) : (
              'No Records'
            )}
          </>
        )} />

        <Route path='/about' component={About} />
        <Route path='/ThankYou' component={ThankYou} />
        <Done />
        <Footer />
      </div> 
    </Router>
  );
}

export default App
