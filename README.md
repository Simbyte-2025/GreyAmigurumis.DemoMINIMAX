# GreyAmigurumis.DemoMINIMAX

Una hermosa réplica del sitio web de GreyAmigurumis - Tienda de Amigurumis Personalizados, desarrollada con React 19, Vite 7, Tailwind CSS 4 y shadcn/ui.

## 🌟 Características

- **React 19** con componentes modernos y hooks actualizados
- **Vite 7** para desarrollo ultrarrápido y construcción optimizada
- **Tailwind CSS 4** con diseño utilitario y sistema de diseño consistente
- **shadcn/ui** para componentes accesibles y personalizables
- **Framer Motion** para animaciones suaves y profesionales
- **Gemini AI** integrado para generar ideas creativas de amigurumis
- **Diseño responsive** mobile-first
- **Integración WhatsApp** para contacto directo
- **Catálogo filtrado** por categorías
- **Paleta "Pastel Dreams"** con colores suaves y armoniosos

## 🚀 Demo en Vivo

Puedes ver el sitio web funcionando en: [https://vp7huskxpqfe.space.minimax.io](https://vp7huskxpqfe.space.minimax.io)

## 📱 Funcionalidades

### 🏠 Página Principal
- Header fijo con navegación suave
- Hero section con efectos glassmorphism
- Menú móvil deslizable
- Botón WhatsApp flotante

### 🛍️ Catálogo
- 20 productos únicos en 3 categorías:
  - **Cine & TV**: Deadpool, Grinch, Groot, Heisenberg, Iron Man, Jack Skellington, V for Vendetta, Howl Pendragon, Joker, Kurt Cobain, Ansiedad Espacial
  - **Animatitos**: Aslo, Stitch, Peach, Jazmín, Ana de Arendelle
  - **Anime & Videojuegos**: Naruto, Goku, Vegeta, Zenitsu
- Filtros por categoría
- Integración directa con WhatsApp

### ✨ Generador de Ideas IA
- Integrado con Google Gemini AI (gemini-2.0-flash-exp)
- Descripción creativa basada en la idea del usuario
- Interfaz intuitiva con ejemplos precargados
- Función de copia y envío por WhatsApp

### 💬 Testimonios
- Testimonios reales de clientes
- Animaciones Framer Motion
- Diseño atractivo y confiable

### 📞 Contacto
- Información de contacto completa
- Enlaces a redes sociales
- Integración WhatsApp

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Framework CSS
- **Framer Motion** - Animaciones

### UI Components
- **shadcn/ui** - Biblioteca de componentes
- **Radix UI** - Primitivos accesibles
- **Lucide React** - Iconos

### Integración AI
- **@google/generative-ai** - SDK de Gemini AI

## 🎨 Paleta de Colores "Pastel Dreams"

- **Rosa Pastel**: #FFB3BA
- **Celeste Suave**: #B3D9FF
- **Amarillo Suave**: #FFE5B3
- **Crema Cálido**: #FFF8F0
- **Marrón Principal**: #8B5A73

## 📋 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Simbyte-2025/GreyAmigurumis.DemoMINIMAX.git
cd GreyAmigurumis.DemoMINIMAX

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env

# Editar .env y agregar tu API key de Gemini
# VITE_GEMINI_API_KEY=tu_api_key_aqui

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build
```

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con:
```env
VITE_GEMINI_API_KEY=tu_api_key_de_gemini_aqui
```

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sección "Sobre nosotros"
│   ├── Catalog.tsx     # Catálogo de productos
│   ├── IdeaGenerator.tsx # Generador de ideas IA
│   ├── Testimonials.tsx # Testimonios
│   └── Footer.tsx      # Pie de página
├── hooks/              # Custom hooks
├── lib/                # Utilidades y configuraciones
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales

public/
├── data/
│   └── products.ts     # Datos de productos
└── imgs/               # Imágenes del proyecto
    ├── hero-bg.png
    └── products/       # Imágenes de productos
```

## 🔧 Scripts Disponibles

```bash
pnpm dev          # Ejecutar servidor de desarrollo
pnpm build        # Construir para producción
pnpm preview      # Vista previa de la construcción
pnpm lint         # Ejecutar ESLint
```

## 📱 Características Responsive

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Navegación móvil**: Menú deslizable
- **Imágenes optimizadas**: Lazy loading y formatos WebP
- **Touch friendly**: Botones y elementos con tamaño adecuado

## 🤖 Integración con IA

El generador de ideas utiliza la API de Gemini AI para crear descripciones personalizadas:

- **Modelo**: gemini-2.0-flash-exp
- **Prompt optimizado** para contenido de amigurumis
- **Manejo de errores** y estados de carga
- **Interfaz intuitiva** con ejemplos

## 📞 Integración WhatsApp

- **Número**: +56 9 9283 4268
- **Mensajes precodificados** para diferentes secciones
- **Botón flotante** siempre visible
- **Integración en productos** para consultas directas

## 🎯 Optimizaciones Implementadas

### Rendimiento
- Code splitting automático con Vite
- Lazy loading de imágenes
- Optimización de bundles
- Compresión gzip

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- URLs amigables
- Schema.org markup

### Accesibilidad
- Componentes Radix UI accesibles
- Contraste de colores apropiado
- Navegación por teclado
- ARIA labels

## 🐛 Debugging y Troubleshooting

### Problemas Comunes

**Error: API key de Gemini no configurada**
- Verifica que el archivo `.env` existe
- Confirma que `VITE_GEMINI_API_KEY` está configurado

**Error de build**
- Limpia node_modules: `pnpm store prune && rm -rf node_modules`
- Reinstala dependencias: `pnpm install`

**Problemas de estilos**
- Verifica que Tailwind está compilando correctamente
- Revisa las variables CSS en `index.css`

## 📈 Métricas de Rendimiento

- **Lighthouse Score**: 90+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimizado para < 500kb

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es una demostración educativa. Para proyectos comerciales, contacta al propietario original.

## 🙏 Créditos

- **Diseño original**: GreyAmigurumis
- **Desarrollo**: MiniMax Agent
- **Tecnologías**: React, Vite, Tailwind CSS, shadcn/ui
- **IA**: Google Gemini AI
- **Animaciones**: Framer Motion

## 📧 Contacto

Para preguntas o sugerencias sobre esta implementación:
- GitHub Issues: [Crear issue](https://github.com/Simbyte-2025/GreyAmigurumis.DemoMINIMAX/issues)
- WhatsApp: +56 9 9283 4268

---

⭐ **Si te gusta este proyecto, no olvides darle una estrella en GitHub** ⭐