import './nav.css';

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">1. Counter</a></li>
                    <li><a href="/toggle-visibility">2. Toggle Visibility</a></li>
                    <li><a href="/input-field">3. Input Field</a></li>
                </ul>
            </nav>
        </>
    );
}