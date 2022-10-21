import { Link } from 'react-router-dom'

export const PageNotFound: React.FC = () => {
    return(
        <>
            <h1>404 Error</h1>
            <div>Page not found on our server.</div>
            <Link to='/'>Homepage</Link>
        </>
    )
}