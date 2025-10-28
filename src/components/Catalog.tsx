import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, Product } from '../../public/data/products';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleWhatsApp = (product: Product) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: ${product.name} 🧸`);
    window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
  };

  const handleFlowPurchase = (product: Product) => {
    window.open(product.flowLink, '_blank');
  };

  const categoryVariants = {
    active: {
      scale: 1.05,
      backgroundColor: 'rgb(255 179 186)',
      color: 'rgb(139 90 115)',
    },
    inactive: {
      scale: 1,
      backgroundColor: 'transparent',
      color: 'inherit',
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="tienda" className="py-20 bg-background relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Nuestra Colección
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80 mt-6 max-w-2xl mx-auto"
          >
            Explora nuestra amplia selección de muñecos tejidos con amor y dedicación
          </motion.p>
        </motion.div>

        {/* Filtros de Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              custom={index}
              variants={categoryVariants}
              animate={selectedCategory === category ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-3 rounded-full font-medium border-2 border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Contador de Productos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <ShoppingBag className="h-4 w-4" />
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} disponible{filteredProducts.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* Grid de Productos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                variants={productVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="group cursor-pointer"
              >
                <div className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 h-full">
                  {/* Imagen del Producto */}
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                    />
                    
                    {/* Overlay de Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge de Categoría */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredProduct === product.id ? 1 : 0.7,
                        scale: 1 
                      }}
                      className="absolute top-3 left-3 px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-foreground/80"
                    >
                      {product.category}
                    </motion.div>
                  </div>

                  {/* Información del Producto */}
                  <div className="p-6">
                    <motion.h3
                      layout
                      className="font-display text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300"
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.p
                      layout
                      className="text-2xl font-bold text-accent-foreground mb-4"
                    >
                      {product.price}
                    </motion.p>

                    {/* Botones de Acción */}
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWhatsApp(product)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Consultar por WhatsApp
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleFlowPurchase(product)}
                        className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Comprar ahora
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mensaje si no hay productos */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No hay productos en esta categoría
              </h3>
              <p className="text-muted-foreground">
                Pronto agregaremos más productos increíbles. ¡Mantente atento!
              </p>
            </div>
          </motion.div>
        )}

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4 text-gradient">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-foreground/80 mb-6">
              ¡Contáctanos! Creamos amigurumis personalizados según tus ideas y personajes favoritos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent('¡Hola! Quisiera crear un amigurumi personalizado');
                window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar pedido personalizado
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;