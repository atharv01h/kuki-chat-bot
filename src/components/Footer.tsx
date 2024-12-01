// Coded by Atharv Hatwar
import { Instagram } from 'lucide-react';

// Coded by Atharv Hatwar
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p className="text-sm">❤️</p>
        <a
          href="https://www.instagram.com/atharv_hatwar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Instagram size={20} />
          <span className="text-sm">Follow on Instagram</span>
        </a>
      </div>
    </footer>
  );
}
