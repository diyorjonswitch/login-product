import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='div'>

            <NavLink
                to='/'
                style={({ isActive }) => {
                    return { color: isActive ? 'blue' : 'grey' };
                }}
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
               <h3>Home</h3> 
            </NavLink>

            <NavLink
                to='/about'
                style={({ isActive }) => {
                    return { color: isActive ? 'blue' : 'grey' };
                }}
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                <h3>About</h3>
            </NavLink>
            <NavLink
                to='/products'
                style={({ isActive }) => {
                    return { color: isActive ? 'blue' : 'grey' };
                }}
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                <h3>Products</h3>
            </NavLink>
            <NavLink
                to='*'
                style={({ isActive }) => {
                    return { color: isActive ? 'blue' : 'grey' };
                }}
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                <h3>Error</h3>
            </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;