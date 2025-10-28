import { motion } from 'framer-motion';
import { ArrowDown, Heart } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const handleScrollToCatalog = () => {
    scrollToSection('tienda');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de Fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 179, 186, 0.3), rgba(179, 217, 255, 0.3)), url('/imgs/hero-bg.png')`,
        }}
      />
      
      {/* Gradiente Superpuesto */}
      <div className="absolute inset-0 gradient-pastel opacity-30" />
      
      {/* Partículas Flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Panel Glassmorphism */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-md"
          >
            {/* Logo/Icono Animado */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-6"
            >
              <Heart className="h-16 w-16 text-primary animate-pulse" />
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient"
            >
              Tejidos con
              <br />
              <span className="relative">
                Ternura
                <motion.div
                  className="absolute -inset-1 bg-accent/20 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Descubre nuestros hermosos muñecos de crochet hechos a mano con amor y dedicación. 
              Cada pieza es única, tejida con cuidado para darte momentos de dulzura y compañía.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(255, 179, 186, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToCatalog}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                Ver creaciones
                <ArrowDown className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent('¡Hola! Quisiera encargar un amigurumi personalizado');
                  window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
                }}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Pedidos personalizados
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Indicador de Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;