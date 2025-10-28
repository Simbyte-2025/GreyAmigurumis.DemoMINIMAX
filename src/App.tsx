import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import IdeaGenerator from './components/IdeaGenerator';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Función para hacer scroll suave a una sección específica
  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      const headerOffset = 80; // Altura del header fijo
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observer para detectar las secciones que están en vista
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aquí podrías agregar lógica para actualizar la navegación activa
          console.log('Vista activa:', entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Configurar las referencias de las secciones
  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionsRef.current[sectionId] = el;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Contenido Principal */}
      <ErrorBoundary>
        <main>
          {/* Hero Section */}
          <div ref={setSectionRef('inicio')}>
            <Hero scrollToSection={scrollToSection} />
          </div>

          {/* About Section */}
          <div ref={setSectionRef('nosotros')}>
            <About />
          </div>

          {/* Catalog Section */}
          <div ref={setSectionRef('tienda')}>
            <Catalog />
          </div>

          {/* Idea Generator Section */}
          <section id="generador">
            <IdeaGenerator />
          </section>

          {/* Testimonials Section */}
          <section id="testimonios">
            <Testimonials />
          </section>
        </main>

        {/* Footer */}
        <div ref={setSectionRef('contacto')}>
          <Footer scrollToSection={scrollToSection} />
        </div>
      </ErrorBoundary>
    </div>
  );
}

// Componente Error Boundary simple
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error capturado por Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="glass-effect rounded-2xl p-8 max-w-md mx-4 text-center">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              ¡Ups! Algo salió mal
            </h2>
            <p className="text-foreground/80 mb-6">
              Ha ocurrido un error inesperado. Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default App;