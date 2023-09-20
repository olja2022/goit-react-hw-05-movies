import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Container';
import { Header } from './Header';
import Footer from './Footer';
import { PreLoader } from './PreLoader';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<PreLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
