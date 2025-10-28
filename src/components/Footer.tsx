import { motion } from 'framer-motion';
import { Heart, MapPin, MessageCircle, Phone, Clock, ArrowUp } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me interesan tus amigurumis');
    window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
  };

  const handleCustomOrder = () => {
    const message = encodeURIComponent('¡Hola! Quisiera encargar un amigurumi personalizado');
    window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Tienda', id: 'tienda' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const productCategories = [
    { label: 'Cine & TV', id: 'tienda' },
    { label: 'Animatitos', id: 'tienda' },
    { label: 'Anime & Videojuegos', id: 'tienda' },
    { label: 'Pedidos Personalizados', action: handleCustomOrder },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Contenido Principal del Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Columna 1: Branding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 cursor-pointer"
                onClick={scrollToTop}
              >
                <Heart className="h-10 w-10 text-primary animate-pulse" />
                <span className="font-display text-2xl font-bold text-gradient">
                  Gray Amigurumis
                </span>
              </motion.div>

              {/* Descripción */}
              <p className="text-foreground/80 leading-relaxed">
                Creamos muñecos de crochet únicos con amor y dedicación. 
                Cada pieza está tejida especialmente para transmitir ternura 
                y generar momentos especiales.
              </p>

              {/* Horarios */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Lunes a Viernes: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Sábados: 9:00 - 15:00</span>
                </div>
              </div>

              {/* CTA Principal */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg w-full justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Chatear por WhatsApp
              </motion.button>
            </motion.div>

            {/* Columna 2: Enlaces Rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display text-xl font-bold text-foreground">
                Enlaces Rápidos
              </h3>

              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-foreground/80 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-foreground mb-3">
                  Categorías de Productos
                </h4>
                <div className="space-y-3">
                  {productCategories.map((category, index) => (
                    <motion.button
                      key={category.label}
                      whileHover={{ x: 5 }}
                      onClick={category.action || (() => scrollToSection(category.id!))}
                      className="block text-foreground/80 hover:text-primary transition-colors duration-300 text-left"
                    >
                      {category.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Columna 3: Ubicación y Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display text-xl font-bold text-foreground">
                Ubicación y Contacto
              </h3>

              {/* Ubicación */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Punta Arenas
                    </p>
                    <p className="text-foreground/70 text-sm">
                      Región de Magallanes, Chile
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-foreground">
                      +56 9 9283 4268
                    </p>
                    <p className="text-foreground/70 text-sm">
                      Disponible para consultas
                    </p>
                  </div>
                </div>

                {/* Teléfono adicional si necesario */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">
                      Pedidos Personalizados
                    </p>
                    <p className="text-foreground/70 text-sm">
                      A través de WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="glass-effect rounded-xl p-4">
                <h4 className="font-semibold text-primary mb-2">
                  Información Importante
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Tiempo de elaboración: 5-10 días</li>
                  <li>• Envíos a todo Chile</li>
                  <li>• Garantía de calidad</li>
                  <li>• Diseños únicos personalizados</li>
                </ul>
              </div>

              {/* Botón de pedido personalizado destacado */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCustomOrder}
                className="w-full bg-gradient-to-r from-secondary to-accent text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pedidos Personalizados
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-primary/10"></div>

        {/* Copyright y Enlaces Legales */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-foreground/70 text-sm text-center md:text-left"
            >
              © {currentYear} Gray Amigurumis. Hecho con{' '}
              <Heart className="h-3 w-3 text-primary inline mx-1" />
              en Punta Arenas, Chile.
            </motion.p>

            {/* Enlaces legales */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <button className="text-foreground/70 hover:text-primary transition-colors">
                Términos de Servicio
              </button>
              <button className="text-foreground/70 hover:text-primary transition-colors">
                Política de Privacidad
              </button>
            </motion.div>

            {/* Botón Scroll to Top */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-all duration-300"
              title="Volver arriba"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;