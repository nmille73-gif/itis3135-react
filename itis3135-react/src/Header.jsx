import { Link } from 'react-router-dom'
export default function Header() {
    return (<header>
        <h1>Nora Miller's Neurotic Manatee || ITIS3135</h1>
        <nav>
            <p>
            <Link to="/">Home</Link> || 
            <Link to="/introduction"> Introduction</Link> || 
            <Link to="/contract"> Contract</Link>
            </p>
           </nav>
    </header>);
}