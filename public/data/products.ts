export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  flowLink: string;
  category: string;
}

export const products: Product[] = [
  // Cine & TV
  { id: 1, name: "Deadpool", image: "/imgs/products/deadpool.png", price: "$22.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 2, name: "El Grinch", image: "/imgs/products/grinch.png", price: "$20.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 3, name: "Groot", image: "/imgs/products/groot.png", price: "$18.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 4, name: "Heisenberg", image: "/imgs/products/heisenberg.png", price: "$25.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 5, name: "Iron Man", image: "/imgs/products/ironman.png", price: "$22.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 6, name: "Jack Skellington", image: "/imgs/products/jack.png", price: "$21.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 7, name: "V for Vendetta", image: "/imgs/products/vforvendetta.png", price: "$24.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 8, name: "Howl Pendragon", image: "/imgs/products/howl.png", price: "$23.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 9, name: "The Joker", image: "/imgs/products/joker.png", price: "$21.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 10, name: "Kurt Cobain", image: "/imgs/products/kurt.png", price: "$25.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  { id: 11, name: "Ansiedad Espacial", image: "/imgs/products/ansiedad.png", price: "$21.000", flowLink: "https://www.flow.cl/checkout", category: "Cine & TV" },
  
  // Animatitos
  { id: 12, name: "Aslo el Dinosaurio", image: "/imgs/products/aslo.png", price: "$18.000", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 13, name: "Stitch", image: "/imgs/products/stitch.png", price: "$18.000", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 14, name: "Peach", image: "/imgs/products/peach.png", price: "$22.000", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 15, name: "Jazmín", image: "/imgs/products/jazmin.png", price: "$22.000", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  { id: 16, name: "Ana de Arendelle", image: "/imgs/products/ana.png", price: "$20.000", flowLink: "https://www.flow.cl/checkout", category: "Animatitos" },
  
  // Anime & Videojuegos
  { id: 17, name: "Naruto Uzumaki", image: "/imgs/products/naruto.png", price: "$23.000", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 18, name: "Goku", image: "/imgs/products/goku.png", price: "$24.000", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 19, name: "Vegeta", image: "/imgs/products/vegeta.png", price: "$24.000", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
  { id: 20, name: "Zenitsu Agatsuma", image: "/imgs/products/zenitsu.png", price: "$22.000", flowLink: "https://www.flow.cl/checkout", category: "Anime & Videojuegos" },
];

export const categories = ["Todos", "Cine & TV", "Animatitos", "Anime & Videojuegos"];