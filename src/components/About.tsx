import { motion } from 'framer-motion';
import { Heart, Star, Gift } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Hecho con Amor",
      description: "Cada puntada está tejida con dedicación y cariño, convirtiendo cada muñeco en una pieza única llena de ternura.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Creaciones Únicas",
      description: "Diseños originales inspirados en personajes favoritos, combinando creatividad con técnicas artesanales de alta calidad.",
      color: "text-secondary"
    },
    {
      icon: Gift,
      title: "Listo para Regalar",
      description: "El regalo perfecto para cualquier ocasión. Nuestros amigurumis son ideales para expresar amor y crear momentos especiales.",
      color: "text-accent"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"
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
            Nuestra Historia
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Descripción Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
              En <span className="font-semibold text-primary">Gray Amigurumis</span>, cada proyecto nace del deseo de crear 
              algo especial y único. Somos apasionados por el arte del crochet y nos dedicamos a tejer 
              muñecos que no solo sean hermosos, sino que también transmitan la calidez y el amor 
              puestos en cada punto.
            </p>
            <br />
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
              Desde personajes icónicos de películas y series hasta creaciones originales, cada 
              amigurumi es una oportunidad de hacer realidad tus sueños más tiernos. Trabajamos 
              con materiales de la mejor calidad para asegurar que cada pieza sea duradera y 
              mantenga su belleza por mucho tiempo.
            </p>
          </div>
        </motion.div>

        {/* Cards de Características */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full text-center hover:shadow-xl transition-all duration-300 border border-white/20">
                {/* Icono */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white to-muted shadow-lg mb-6 ${feature.color}`}
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>

                {/* Título */}
                <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p className="text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decoración */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <p className="text-lg font-medium text-foreground/90 mb-4">
              ¿Tienes una idea especial en mente?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent('¡Hola! Me encantaría crear un amigurumi personalizado');
                window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contáctanos para un pedido personalizado
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;