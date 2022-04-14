import React from "react";
const TopNav=()=>{
    return (
        <div>
            <nav class="navbar navbar-expand-lg 
            navbar-light bg-primary">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                    </span>
                </button>
                <div class="collapse navbar-collapse"
                    id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link 
                    active" href="#">Home</a>
                        <a class="nav-item nav-link"
                            href="#">Features</a>
                        <a class="nav-item nav-link"
                            href="#">Price</a>
                        <a class="nav-item nav-link"
                            href="#">About</a>
                    </div>
                </div>
            </nav>
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <div class="col-2" id="green">
                        <h4>Sidebar</h4>
                        <a href="#">Link 1</a><br />
                        <br />
                        <a href="#">Link 2</a><br />
                        <br />
                        <a href="#">Link 3</a><br />
                        <br />
                        <a href="#">Link 4</a><br />
                        <br />
                    </div>
                    <div class="col-10" style="text-align: justify;">
                        Bootstrap is a free and open-source
                        tool collection for creating responsive
                        websites and web applications. It
                        is the most popular HTML, CSS, and
                        JavaScript framework for developing
                        responsive, mobile-first web sites.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNav;