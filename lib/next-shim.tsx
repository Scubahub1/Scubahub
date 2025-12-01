
import React, { useState, useEffect, createContext, useContext } from 'react';

// --- Router Context ---
const RouterContext = createContext<{ path: string; push: (url: string) => void }>({
  path: '/',
  push: () => {},
});

export const RouterProvider = ({ children }: { children?: React.ReactNode }) => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    const handlePopState = () => {
      // Only try to sync if possible, otherwise rely on internal state
      try {
        const p = window.location.pathname;
        if (!p.endsWith('index.html') && !window.location.href.startsWith('blob:')) {
           setPath(p);
        }
      } catch (e) {
        // ignore
      }
    };

    // Initialize path safely
    try {
       const p = window.location.pathname;
       // In blob/sandbox or file preview, default to '/'
       if (window.location.protocol === 'file:' || window.location.href.startsWith('blob:') || p.endsWith('index.html')) {
          setPath('/');
       } else {
          setPath(p);
       }
    } catch (e) {
       setPath('/');
    }
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (url: string) => {
    try {
      // Try to update browser history
      // This throws SecurityError in blob/sandboxed environments
      window.history.pushState({}, '', url);
    } catch (e) {
      console.warn('Navigation history blocked (running in sandbox/blob), falling back to memory routing.');
    }
    // Always update internal state to render the correct view
    setPath(url);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const { push } = useContext(RouterContext);
  return { push, replace: push, back: () => { try { window.history.back(); } catch(e){} } };
};

export const usePathname = () => {
  const { path } = useContext(RouterContext);
  return path;
};

export const notFound = () => {
  return <div className="min-h-screen pt-32 text-center text-white">404 - Page Not Found</div>;
};

// --- Components ---

export const Link = ({ href, children, className, onClick, ...props }: any) => {
  const { push } = useContext(RouterContext);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick(e);
    push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export const Image = ({ src, alt, className, fill, width, height, priority, ...props }: any) => {
  // Simple Mock for Next.js Image
  const style: React.CSSProperties = fill 
    ? { position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'cover' } 
    : {};

  return (
    <img 
      src={src} 
      alt={alt || ''} 
      className={className} 
      style={style}
      width={width}
      height={height}
      {...props}
    />
  );
};

// --- Font Mocks ---
export const Inter = ({ subsets, variable }: any) => ({ variable: 'font-sans', className: 'font-sans' });
export const Montserrat = ({ subsets, variable }: any) => ({ variable: 'font-display', className: 'font-display' });

export default { Link, Image, useRouter, usePathname, notFound, Inter, Montserrat };
