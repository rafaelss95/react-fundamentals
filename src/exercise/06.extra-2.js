// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  function handleChange($event) {
    const {value} = $event.target
    const isLowercased = value === value.toLowerCase()
    setError(isLowercased ? null : 'Username must be lower case')
  }

  function handleSubmit($event) {
    $event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={usernameInputRef}
          onChange={handleChange}
        />
      </div>
      {error && (
        <div style={{color: 'red'}} role="alert">
          {error}
        </div>
      )}
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
