import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">ROMA HABITACIONES</a>
                <button 
                    class="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <a class="nav-link" href="/registro">
                            Registro
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/loging">
                            Login
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )

}
export default Navbar