export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  flowLink: string;
  category: string;
}

export const categories = [
  "Todos",
  "Cine & TV",
  "Animatitos",
  "Anime & Videojuegos"
];

export const products: Product[] = [
  // Cine & TV
  {
    id: 1,
    name: "Deadpool",
    image: "/imgs/products/deadpool.png",
    price: "$45.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Deadpool",
    category: "Cine & TV"
  },
  {
    id: 2,
    name: "Grinch",
    image: "/imgs/products/grinch.png",
    price: "$40.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Grinch",
    category: "Cine & TV"
  },
  {
    id: 3,
    name: "Groot",
    image: "/imgs/products/groot.png",
    price: "$50.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Groot",
    category: "Cine & TV"
  },
  {
    id: 4,
    name: "Heisenberg",
    image: "/imgs/products/heisenberg.png",
    price: "$55.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Heisenberg",
    category: "Cine & TV"
  },
  {
    id: 5,
    name: "Iron Man",
    image: "/imgs/products/ironman.png",
    price: "$48.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Iron%20Man",
    category: "Cine & TV"
  },
  {
    id: 6,
    name: "Joker",
    image: "/imgs/products/joker.png",
    price: "$45.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Joker",
    category: "Cine & TV"
  },
  {
    id: 7,
    name: "Kurt",
    image: "/imgs/products/kurt.png",
    price: "$42.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Kurt",
    category: "Cine & TV"
  },
  {
    id: 8,
    name: "Howl",
    image: "/imgs/products/howl.png",
    price: "$47.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Howl",
    category: "Cine & TV"
  },
  {
    id: 9,
    name: "V de Vendetta",
    image: "/imgs/products/vforvendetta.png",
    price: "$43.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20V%20de%20Vendetta",
    category: "Cine & TV"
  },
  {
    id: 10,
    name: "Ansiedad",
    image: "/imgs/products/ansiedad.png",
    price: "$35.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20la%20Ansiedad",
    category: "Cine & TV"
  },
  {
    id: 11,
    name: "Oslo",
    image: "/imgs/products/aslo.png",
    price: "$44.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Oslo",
    category: "Cine & TV"
  },

  // Animatitos
  {
    id: 12,
    name: "Oslo",
    image: "/imgs/products/aslo.png",
    price: "$40.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Oslo",
    category: "Animatitos"
  },
  {
    id: 13,
    name: "Stitch",
    image: "/imgs/products/stitch.png",
    price: "$42.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Stitch",
    category: "Animatitos"
  },
  {
    id: 14,
    name: "Peach",
    image: "/imgs/products/peach.png",
    price: "$38.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20la%20Peach",
    category: "Animatitos"
  },
  {
    id: 15,
    name: "Jazmín",
    image: "/imgs/products/jazmin.png",
    price: "$39.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20la%20Jazmín",
    category: "Animatitos"
  },
  {
    id: 16,
    name: "Ana",
    image: "/imgs/products/ana.png",
    price: "$41.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20la%20Ana",
    category: "Animatitos"
  },

  // Anime & Videojuegos
  {
    id: 17,
    name: "Naruto",
    image: "/imgs/products/naruto.png",
    price: "$46.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Naruto",
    category: "Anime & Videojuegos"
  },
  {
    id: 18,
    name: "Goku",
    image: "/imgs/products/goku.png",
    price: "$52.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Goku",
    category: "Anime & Videojuegos"
  },
  {
    id: 19,
    name: "Vegeta",
    image: "/imgs/products/vegeta.png",
    price: "$50.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Vegeta",
    category: "Anime & Videojuegos"
  },
  {
    id: 20,
    name: "Zenitsu",
    image: "/imgs/products/zenitsu.png",
    price: "$44.000",
    flowLink: "https://wa.me/56992834268?text=Hola!%20Me%20interesa%20el%20Zenitsu",
    category: "Anime & Videojuegos"
  }
];