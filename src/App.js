import { BrowserRouter } from "react-router-dom"
import { IndexRouter } from "./Router/IndexRouter"

function App() {
  return (
    <BrowserRouter>
      <IndexRouter />
    </BrowserRouter>
  )
}

export default App