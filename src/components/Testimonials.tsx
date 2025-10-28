import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "¡Mi Deadpool tejido es simplemente perfecto! La calidad es de otro nivel, lleno de detalles que solo un verdadero fan notaría.",
      author: "Carlos M.",
      rating: 5,
      category: "Cine & TV"
    },
    {
      id: 2,
      text: "Le regalé un personaje de anime a mi polola y le encantó. Se nota el cariño en cada puntada. ¡Excelente trabajo!",
      author: "Valentina G.",
      rating: 5,
      category: "Anime & Videojuegos"
    },
    {
      id: 3,
      text: "Tengo varios de sus amigurumis y son todos preciosos. La atención es súper personalizada y amable. ¡Totalmente recomendado!",
      author: "Francisco A.",
      rating: 5,
      category: "Animatitos"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-accent fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6"
          >
            <Quote className="h-8 w-8 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Lo que dicen los fans
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80 mt-6 max-w-2xl mx-auto"
          >
            Descubre por qué nuestros clientes aman nuestros amigurumis y siguen confiando en nosotros
          </motion.p>
        </motion.div>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full"
            >
              <div className="glass-effect rounded-2xl p-8 h-full text-center hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden">
                {/* Icono de Cita Decorativo */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <Quote className="h-6 w-6 text-primary/30" />
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + (0.1 * index), duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center gap-1 mb-4"
                >
                  {renderStars(testimonial.rating)}
                </motion.div>

                {/* Categoría Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 + (0.1 * index), duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-3 py-1 bg-secondary/20 rounded-full text-xs font-medium text-secondary-foreground mb-4"
                >
                  {testimonial.category}
                </motion.div>

                {/* Testimonio */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-foreground/90 leading-relaxed mb-6 italic relative"
                >
                  <span className="text-4xl text-primary/30 absolute -top-2 -left-2">"</span>
                  <span className="relative z-10">{testimonial.text}</span>
                  <span className="text-4xl text-primary/30 absolute -bottom-4 -right-2">"</span>
                </motion.blockquote>

                {/* Autor */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (0.1 * index), duration: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-4 border-t border-primary/10"
                >
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cliente verificado
                  </p>
                </motion.div>

                {/* Efecto Hover */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "100+", label: "Amigurumis creados" },
            { number: "50+", label: "Clientes felices" },
            { number: "5", label: "Estrellas promedio" },
            { number: "24h", label: "Tiempo de respuesta" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1 + (0.1 * index), duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 + (0.1 * index), duration: 0.6 }}
                viewport={{ once: true }}
                className="font-display text-2xl md:text-3xl font-bold text-gradient mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-foreground/80 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4 text-gradient">
              ¿Quieres ser el próximo en评价?
            </h3>
            <p className="text-foreground/80 mb-6">
              Únete a nuestros clientes satisfechos y crea tu propio amigurumi perfecto
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent('¡Hola! Me encantaría crear un amigurumi único');
                window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comenzar mi pedido ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;