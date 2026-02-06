import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show on contact page
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/contact')}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white z-40 hover:shadow-orange-500/50 transition-shadow"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
