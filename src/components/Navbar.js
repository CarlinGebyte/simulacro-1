import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <Link to="/">Sudaderas</Link>
                <Link to="/add">Agregar Sudadera</Link>
            </nav>
        </header>
    </div>
  )
}

export default Navbar