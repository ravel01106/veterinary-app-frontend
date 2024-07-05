const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid px-5">
                <a href="#" className="navbar-brand">
                    <img src={`./logo.png`} alt="#"></img>
                </a>
                <div>
                <button className='btn btn-outline-light' type='button'> Iniciar sesión</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar