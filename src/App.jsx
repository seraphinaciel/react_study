import Nav from '../src/inc/header';
import Footer from '../src/inc/footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Nav />

      <main className="min-h-screen py-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
