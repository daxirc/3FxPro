import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import LoadingFallback from './components/LoadingFallback'

// Safely get root element
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
