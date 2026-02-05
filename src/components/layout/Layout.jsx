import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { SearchModal } from '../common/SearchModal';

export function Layout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open search with "/" or Cmd+K
      if (
        (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) ||
        ((e.metaKey || e.ctrlKey) && e.key === 'k')
      ) {
        // Don't trigger if user is typing in an input
        if (
          document.activeElement?.tagName === 'INPUT' ||
          document.activeElement?.tagName === 'TEXTAREA'
        ) {
          return;
        }
        e.preventDefault();
        setIsSearchOpen(true);
      }

      // Close search with Escape
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onSearchClick={() => setIsSearchOpen(true)} />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

export default Layout;
