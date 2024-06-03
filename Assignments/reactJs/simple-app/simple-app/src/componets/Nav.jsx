export default function Nav() {
    return (
        <>
            <header className="row align-center">
                <div className="col">
                    <nav className="navbar gap-2">
                        <h2>Logo</h2>
                        <ul className="navbar-menu remove-tablet">
                            <li><a href="/spring">Spring</a></li>
                            <li><a href="/summer">Summer</a></li>
                            <li><a href="/">Fall</a></li>
                            <li><a href="/winter">Winter</a></li>
                            <li><button className="btn">All Seasons</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}