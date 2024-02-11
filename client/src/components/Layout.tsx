import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ToastContainerWrapper from '@/UI/ToastContainerWrapper';



interface LayoutProps {
    children: ReactNode;
  }

  const Layout = ({ children }:LayoutProps) => {
 

    return (
      <div className="min-h-screen">
        <Head>
          <title>Share Me</title>
        </Head>
        <header className='gradient-bg-hero'>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainerWrapper/>
      </div>
    )
  }
  
  export default Layout