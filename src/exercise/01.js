// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// 🐨 use React.lazy to create a Globe component which uses a dynamic import
const loadGlobe = () => import('../globe')
// to get the Globe component from the '../globe' module.
const Globe = React.lazy(loadGlobe)

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  // 🐨 wrap the code below in a <React.Suspense /> component
  // with a fallback.
  // 💰 try putting it in a few different places and observe how that
  // impacts the user experience.
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <React.Suspense fallback={<h1>Loading</h1>}>
        <label
          style={{marginBottom: '1rem'}}
          onMouseOver={loadGlobe}
          onFocus={loadGlobe}
        >
          <input
            type="checkbox"
            checked={showGlobe}
            onChange={e => setShowGlobe(e.target.checked)}
          />
          {' show globe'}
        </label>

        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </React.Suspense>
    </div>
  )
}

// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
