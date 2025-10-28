import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Sparkles, Send, Loader2, Copy, RefreshCw } from 'lucide-react';

const IdeaGenerator: React.FC = () => {
  const [userIdea, setUserIdea] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!userIdea.trim()) {
      setError('Por favor, describe tu idea antes de generar la descripción');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedDescription('');

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key de Gemini no configurada');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

      const prompt = `Eres un asistente creativo para 'Gray Amigurumis', una tienda de muñecos de crochet hechos a mano. Un cliente quiere un pedido personalizado. Tu tarea es tomar su idea y expandirla en una descripción adorable, detallada y mágica para ayudarle a visualizar el producto final.

Ideas del cliente: ${userIdea}

Crea una descripción que incluya:
- Una descripción emotiva y cálida del producto
- Detalles sobre los materiales y colores sugeridos
- El proceso artesanal que se seguirá
- Por qué sería especial para quien lo reciba
- Mantén un tono tierno y acogedor
- No menciones precios
- Máximo 150 palabras

Responde solo con la descripción, sin preámbulos.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setGeneratedDescription(text);
    } catch (err) {
      console.error('Error generando descripción:', err);
      setError('Hubo un error generando la descripción. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedDescription);
      // Aquí podrías agregar una notificación de éxito
    } catch (err) {
      console.error('Error copiando texto:', err);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola! Me encantaría crear un amigurumi personalizado basado en esta idea: ${userIdea}\n\nDescripción: ${generatedDescription}`
    );
    window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
  };

  const exampleIdeas = [
    "Un unicornio con cuerno dorado y crin rainbow",
    "Personaje de Dragon Ball en versión tierna",
    "Un panda bebé durmiendo con osito",
    "Pokémon favoritos en estilo kawaii"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary mb-6"
          >
            <Sparkles className="h-8 w-8 text-white animate-pulse" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Dale Vida a tu Idea
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-accent via-secondary to-primary mx-auto rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80 mt-6 max-w-2xl mx-auto"
          >
            Describe tu idea y nosotros la convertiremos en una descripción adorable y detallada para tu muñeco perfecto
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Formulario de Entrada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 mb-8"
          >
            {/* Ideas de Ejemplo */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Ideas de ejemplo:</h3>
              <div className="flex flex-wrap gap-2">
                {exampleIdeas.map((idea, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setUserIdea(idea)}
                    className="px-3 py-1 text-sm bg-muted hover:bg-primary/20 rounded-full text-muted-foreground hover:text-primary transition-colors"
                  >
                    {idea}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-4">
              <label htmlFor="userIdea" className="block text-sm font-medium text-foreground">
                Describe tu idea para el amigurumi personalizado:
              </label>
              <textarea
                id="userIdea"
                value={userIdea}
                onChange={(e) => setUserIdea(e.target.value)}
                placeholder="Ejemplo: Un amigurumi de mi personaje favorito de anime, pero en versión tierna y con colores pastel..."
                className="w-full h-32 p-4 border border-primary/20 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
                disabled={isLoading}
              />
              
              {/* Error Message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  {error}
                </motion.p>
              )}

              {/* Botón Generar */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={isLoading || !userIdea.trim()}
                className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Creando descripción mágica...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Generar Descripción
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Resultado */}
          {generatedDescription && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-gradient">
                  Tu descripción mágica
                </h3>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopy}
                    className="p-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
                    title="Copiar descripción"
                  >
                    <Copy className="h-4 w-4 text-secondary-foreground" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setGeneratedDescription('');
                      setUserIdea('');
                    }}
                    className="p-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
                    title="Limpiar"
                  >
                    <RefreshCw className="h-4 w-4 text-primary-foreground" />
                  </motion.button>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 mb-6">
                <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {generatedDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsApp}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Enviar por WhatsApp
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const message = encodeURIComponent(`¡Hola! Me encanta esta idea: ${userIdea}`);
                    window.open(`https://wa.me/56992834268?text=${message}`, '_blank');
                  }}
                  className="flex-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Crear este diseño
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IdeaGenerator;