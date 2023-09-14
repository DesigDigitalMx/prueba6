function generateUniqueIds(...productArrays) {
  let id = 1;

  productArrays.forEach((productArray) => {
    productArray.forEach((product) => {
      product.id = id;
      id++;
    });
  });
}

export let platillosData = [
  {
    category: "platillos",
    img: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600",
    nameProduct: "Carne Asada",
    description: "Una selección de cortes de carne asados a la parrilla",
    price: 16,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://assets.unileversolutions.com/recipes-v2/239857.jpg",
    nameProduct: "Empanadas",
    description: "Empanadas rellenas con jugosa carne sazonada y condimentada",
    price: 10,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://recetinas.com/wp-content/uploads/2017/09/milanesas-de-ternera.jpg",
    nameProduct: "Milanesa",
    description:
      "Carne empanizada y frita, similar a una schnitzel, servida con ensalada",
    price: 18,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://imag.bonviveur.com/sorrentinos-rellenos-de-jamon-y-queso-con-salsa-marinara.jpg",
    nameProduct: "Sorrentinos",
    description:
      "Delicada pasta rellena similar a los raviolis, con un toque argentino. Estos suculentos discos de pasta están rellenos de una exquisita combinación de carnes, queso y especias, creando una explosión de sabores en cada mordisco",
    price: 10,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/17/6414e0e39512e.jpeg",
    nameProduct: "Canelones",
    description: "Deliciosos canelones rellenos con suave carne de pavo",
    price: 5,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/02/receta-sencilla-de-pollo-con-chipotle-rico.jpg",
    nameProduct: "Pollo al Chipotle",
    description:
      "Pollo asado en una deliciosa salsa de chipotle, acompañado de arroz y frijoles.",
    price: 12.99,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://cdn0.recetasgratis.net/es/posts/3/5/2/enchiladas_verdes_mexicanas_42253_orig.jpg",
    nameProduct: "Enchiladas Verdes",
    description:
      "Tortillas rellenas de pollo, bañadas en salsa verde y gratinadas con queso. Acompañadas de arroz y frijoles.",
    price: 11.99,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://assets.unileversolutions.com/recipes-v2/236509.jpg",
    nameProduct: "Tacos al Pastor",
    description:
      "Tortillas de maíz suaves y calientes rellenas de carne de cerdo marinada con especias y piña. Acompañados de cebolla, cilantro y salsa.",
    price: 14.99,
    quantity: 1,
  },
  {
    category: "platillos",
    img: "https://www.goya.com/media/4255/stuffed-chileschiles-rellenos.jpg?quality=80",
    nameProduct: "Chiles Rellenos",
    description:
      "Chiles poblanos asados y rellenos de queso, bañados en salsa de jitomate y gratinados con queso. Acompañados de arroz y frijoles.",
    price: 9.99,
    quantity: 1,
  },
];

export let pizzasData = [
  {
    category: "pizzas",
    img: "https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684.jpg",
    nameProduct: "Pizza Margarita",
    description:
      "Deliciosa pizza con salsa de tomate, queso mozzarella y albahaca",
    price: 120,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg",
    nameProduct: "Pizza Hawaiana",
    description:
      "Sabrosa pizza con salsa de tomate, queso mozzarella, jamón y piña",
    price: 130,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://www.cubaneandoconmario.com/wp-content/uploads/2021/07/Pizza-de-Pepperoni2-e1625916278296.jpg",
    nameProduct: "Pizza Pepperoni",
    description:
      "Deliciosa pizza con salsa de tomate, queso mozzarella y pepperoni",
    price: 140,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://www.gastrolabweb.com/u/fotografias/m/2021/2/9/f1280x720-8328_140003_5050.jpg",
    nameProduct: "Pizza Mexicana",
    description:
      "Pizza picante con salsa de tomate, queso mozzarella, carne de res, jalapeños y guacamole",
    price: 150,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://cecotec.es/recetas/wp-content/uploads/2022/06/Cecofry_Pizza_Barbacoa_RRSS.jpg",
    nameProduct: "Pizza Barbacoa",
    description:
      "Deliciosa pizza con salsa barbacoa, queso mozzarella, carne de res desmenuzada y cebolla caramelizada",
    price: 160,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://www.solopizzas.info/wp-content/uploads/2021/01/White-and-Yellow-Simple-Fireworks-Photo-New-Year-Card-17.jpg",
    nameProduct: "Pizza Vegetariana",
    description:
      "Pizza saludable con salsa de tomate, queso mozzarella y una variedad de verduras frescas",
    price: 130,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://www.comedera.com/wp-content/uploads/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg",
    nameProduct: "Pizza Cuatro Quesos",
    description:
      "Exquisita pizza con salsa de tomate, queso mozzarella, queso cheddar, queso azul y queso parmesano",
    price: 150,
    quantity: 1,
  },
  {
    category: "pizzas",
    img: "https://clarin.com/img//2022/02/02/xqwJySBdj_1200x630__1.jpg",
    nameProduct: "Pizza Napolitana",
    description:
      "Deliciosa pizza con salsa de tomate, queso mozzarella, anchoas, aceitunas y orégano",
    price: 140,
    quantity: 1,
  },
];

export let hamburguesasData = [
  {
    category: "hamburguesas",
    img: "https://jetextramar.com/wp-content/uploads/2021/07/congelados-receta-hamburguesa-de-pollo.jpg",
    nameProduct: "Hamburguesa Clásica",
    description: "Hamburguesa jugosa con carne de res, queso, lechuga y tomate",
    price: 100,
    quantity: 1,
  },
  {
    category: "hamburguesas",
    img: "https://ik.imagekit.io/smithfield/farmerjohn/3b1720e5-a9aa-0088-f165-1043ab81f774/4a8e8be6-5c83-4042-b1bd-50bb8ad3567a/Bacon-BBQ-Burger_B_Web_400x250.jpg",
    nameProduct: "Hamburguesa BBQ",
    description:
      "Hamburguesa con salsa BBQ, carne de res, queso cheddar, tocino y cebolla caramelizada",
    price: 120,
    quantity: 1,
  },
  {
    category: "hamburguesas",
    img: "https://www.gastrolabweb.com/u/fotografias/m/2020/9/25/f1280x720-3750_135425_5050.jpg",
    nameProduct: "Hamburguesa Hawaiana",
    description:
      "Hamburguesa con carne de res, queso mozzarella, jamón y rodajas de piña",
    price: 110,
    quantity: 1,
  },
  {
    category: "hamburguesas",
    img: "https://www.vvsupremo.com/wp-content/uploads/2018/05/Mexican-Burger-with-Chorizo.jpg",
    nameProduct: "Hamburguesa Mexicana",
    description:
      "Hamburguesa con carne de res, guacamole, jalapeños y salsa picante",
    price: 130,
    quantity: 1,
  },
  {
    category: "hamburguesas",
    img: "https://espanol.kingsford.com/wp-content/uploads/2017/02/KFD_SpicyBBQBaconRanchBurger35382_WEB.jpg",
    nameProduct: "Hamburguesa Barbecue Ranch",
    description:
      "Hamburguesa con salsa ranch, salsa BBQ, aros de cebolla crujientes y queso suizo",
    price: 140,
    quantity: 1,
  },
  {
    category: "hamburguesas",
    img: "https://domingogutierrez.com/wp-content/uploads/2018/07/tendencias-en-hamburguesas-gourmet.jpg",
    nameProduct: "Hamburguesa Gourmet",
    description:
      "Hamburguesa gourmet con carne de res de primera calidad, queso brie, cebolla caramelizada y rúcula",
    price: 160,
    quantity: 1,
  },
  {
    category: "hamburguesas",
    img: "https://thancguide.org/wp-content/uploads/2022/08/iStock-1310168994-scaled.jpg",
    nameProduct: "Hamburguesa Vegetariana",
    description:
      "Hamburguesa vegetariana con una deliciosa mezcla de vegetales, queso feta y aderezo de yogur",
    price: 110,
    quantity: 1,
  },
];

export let bebidasData = [
  {
    category: "bebidas",
    img: "https://www.gastrolabweb.com/u/fotografias/m/2020/7/3/f608x342-1459_31182_15.jpg",
    nameProduct: "Refresco de Cola",
    description: "Refresco de cola frío y refrescante",
    price: 30,
    quantity: 1,
  },
  {
    category: "bebidas",
    img: "https://media.ambito.com/p/054bc94b030c6fe79917a38d0ad2d383/adjuntos/239/imagenes/038/390/0038390261/1200x675/smart/limonada-naturaljpg.jpg",
    nameProduct: "Limonada",
    description: "Limonada casera con limones frescos y un toque de menta",
    price: 25,
    quantity: 1,
  },
  {
    category: "bebidas",
    img: "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/low-sugar-long-island-iced-tea.jpg",
    nameProduct: "Té Helado",
    description:
      "Té helado con sabor a durazno, perfecto para refrescarte en días calurosos",
    price: 35,
    quantity: 1,
  },
  {
    category: "bebidas",
    img: "https://www.cocinavital.mx/wp-content/uploads/2022/04/beneficios-del-agua-mineral-1-634x420.jpg",
    nameProduct: "Agua Mineral",
    description: "Agua mineral natural sin gas",
    price: 20,
    quantity: 1,
  },
  {
    category: "bebidas",
    img: "https://mejorconsalud.as.com/wp-content/uploads/2014/01/Zumo-de-naranja.jpg",
    nameProduct: "Jugo de Naranja",
    description: "Jugo de naranja recién exprimido, lleno de vitamina C",
    price: 30,
    quantity: 1,
  },
];

export let postresData = [
  {
    category: "postres",
    img: "https://www.gourmet.cl/wp-content/uploads/2016/09/Helado_Vainilla-web-553x458.jpg",
    nameProduct: "Helado de Vainilla",
    description: "Delicioso helado de vainilla con cobertura de chocolate",
    price: 40,
    quantity: 1,
  },
  {
    category: "postres",
    img: "https://t2.uc.ltmcdn.com/es/posts/3/9/6/como_hacer_cheesecake_de_fresa_sin_horno_50693_600_square.jpg",
    nameProduct: "Cheesecake de Fresa",
    description:
      "Cheesecake cremoso con una irresistible capa de fresas frescas",
    price: 50,
    quantity: 1,
  },
  {
    category: "postres",
    img: "https://www.ilolay.com.ar/uploads/recetas/1658880862-Tiramisu.jpg",
    nameProduct: "Tiramisú",
    description:
      "Clásico postre italiano con capas de bizcocho empapado en café y crema de mascarpone",
    price: 45,
    quantity: 1,
  },
  {
    category: "postres",
    img: "https://cocina-casera.com/mx/wp-content/uploads/2018/10/flan-caramelo.jpg",
    nameProduct: "Flan de Caramelo",
    description: "Delicioso flan casero con un toque dulce de caramelo",
    price: 35,
    quantity: 1,
  },
  {
    category: "postres",
    img: "https://www.elinasaiach.com/wp-content/uploads/2022/04/Mousse-Chocolate-3.jpg",
    nameProduct: "Mousse de Chocolate",
    description:
      "Mousse suave y cremoso de chocolate con trozos de chocolate negro",
    price: 40,
    quantity: 1,
  },
  {
    category: "postres",
    img: "https://cdn0.recetasgratis.net/es/posts/7/3/3/torta_invertida_de_manzanas_56337_orig.jpg",
    nameProduct: "Pastel de Manzana",
    description:
      "Delicioso pastel de manzana casero con una capa crujiente de canela",
    price: 45,
    quantity: 1,
  },
  {
    category: "postres",
    img: "https://unareceta.com/wp-content/uploads/2017/05/crepes-de-nutella.jpg",
    nameProduct: "Crepes de Nutella",
    description:
      "Crepes suaves y esponjosos rellenos de crema de avellanas Nutella",
    price: 50,
    quantity: 1,
  },
];

generateUniqueIds(
  platillosData,
  pizzasData,
  hamburguesasData,
  bebidasData,
  postresData
);
