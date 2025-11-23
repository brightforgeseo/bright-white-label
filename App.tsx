import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AiTool from './components/AiTool';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import HomeProcess from './components/HomeProcess';
import HomeFAQ from './components/HomeFAQ';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      if (pathname === '/' || pathname === '') {
          setCurrentPath('/');
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      } else {
        setCurrentPath(pathname);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const isServicePage = currentPath.startsWith('/service/');
  const isBlogPost = currentPath.startsWith('/blog/');
  const isBlogList = currentPath === '/blog';
  
  const serviceId = isServicePage ? currentPath.split('/service/')[1] : '';
  const blogSlug = isBlogPost ? currentPath.split('/blog/')[1] : '';

  return (
    <div className="min-h-screen relative">
      <Header onNavigate={handleNavigate} />
      <main>
        {isServicePage ? (
           <ServiceDetail serviceId={serviceId} onNavigate={handleNavigate} />
        ) : isBlogPost ? (
           <BlogPost slug={blogSlug} onNavigate={handleNavigate} />
        ) : isBlogList ? (
           <BlogList onNavigate={handleNavigate} />
        ) : (
          <>
            <Hero />
            <Services onNavigate={handleNavigate} />
            <HomeProcess />
            <AiTool />
            <Testimonials />
            <HomeFAQ />
          </>
        )}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;