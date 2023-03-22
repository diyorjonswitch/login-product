import { Link, Outlet } from 'react-router-dom';
import Navbar from './StyledNavbar';
const SharedLayout = () => {
  return (
    <>
    <Navbar/>
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;