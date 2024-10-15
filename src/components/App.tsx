import { CargoDistributionProvider } from '../contexts'

import { Tools } from './Tools'
import { Canvas } from './Canvas'

import './App.css'

function App() {
  return (
    <main className="app">
      <CargoDistributionProvider>
        <Tools />
        <Canvas />
      </CargoDistributionProvider>
    </main>
  )
}

export default App
