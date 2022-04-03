const express = require("express");
const router = express.Router();

const pants = [
  {
    id: 1,
    price:122,
    name: "Levi's Men's 511 Regular fit Jeans ",
    sizes:[28,30,32,36,38,40.42],
    image:"https://m.media-amazon.com/images/I/81q4Lx8JsVL._UX569_.jpg",
    desc:""
  },
  {
    id: 2,
    name: "Levi's Men's Regular Jeans ",
    price:222,
    sizes:[28,30,32,36,38,40.42],
    image:"https://m.media-amazon.com/images/I/81cf1ZNl3qL._UX569_.jpg",
    desc:""
  },
  {
    id: 3,
    name: "Slim Men Black Jeans",
    price:3.93,
    sizes:[28,30,32,36,38,40.42],
    image:"https://rukminim2.flixcart.com/image/800/960/kfcv6vk0-0/jean/4/w/m/30-ud0014-30-united-denim-original-imafvu2chpkpkeuv.jpeg?q=50",
    desc:""
  },
  {
    id: 4,
    name: "Lee Regular Men Blue Jeans",
    price:26.96,
    sizes:[28,30,32,36,38,40.42],
    image:"https://rukminim2.flixcart.com/image/800/960/l0tweq80/jean/0/a/9/32-lmjn001594-lee-original-imagcgzmbdgyastr.jpeg?q=50",
    desc:""
  },
  {
    id: 5,
    name: "PUMA Graphic Men's Pants",
    price:20.25,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/670177/06/mod01/fnd/IND/fmt/png/PUMA-Graphic-Men's-Pants",
    desc:"These PUMA Graphic Men's pants are built for all-purpose training. While the moisture wicking fabric keeps you comfortable, the PUMA branding elevates your street and casual style.",
  },
  {
    id: 6,
    name: "Active Tricot Slim Fit Men's Sweat Pants",
    price:19.72,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586731/01/mod01/fnd/IND/fmt/png/Active-Tricot-Slim-Fit-Men's-Sweat-Pants",
    desc:"High-performance apparel for the ambitious athlete: these stylish bottoms combine the moisture-wicking power of dryCELL and miDori® bioWick to help you reach your peak.",
  },
  {
    id: 7,
    name: "Active Tricot Slim Fit Men's Sweat Pants",
    price:19.72,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586731/01/mod01/fnd/IND/fmt/png/Active-Tricot-Slim-Fit-Men's-Sweat-Pants",
    desc:"High-performance apparel for the ambitious athlete: these stylish bottoms combine the moisture-wicking power of dryCELL and miDori® bioWick to help you reach your peak.",
  },
  {
    id: 8,
    name: "Mercedes F1 Essential Regular Fit Men's Pants",
    price:52.62,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/532348/04/mod01/fnd/IND/fmt/png/Mercedes-F1-Essential-Regular-Fit-Men's-Pants",
    desc:"Bring a touch of Mercedes-AMG Petronas Motorsport to your everyday essential wear. Made from sustainably sourced and recycled fabrics, these co-branded French terry sweats are a must-have for Formula 1 fans who like to keep their look low-key and casual. They're also made using cotton from the Forever Better Initiative, and contain recycled material – so not only will you look great, you'll feel great, too.",
  },
  {
    id: 9,
    name: "Scuderia Ferrari Men's Sweat Pants",
    price:49.33,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/596146/02/mod01/fnd/IND/fmt/png/Scuderia-Ferrari-Men's-Sweat-Pants",
    desc:"Simplicity is key with these sweatpants. With plenty of room to move, they have an elasticated waistband with a drawcord so you can create the exact fit you want. All while celebrating the Scuderia Ferrari racing team, one of motorsport's most famous and iconic teams.",
  },
  {
    id: 10,
    name: "BMW M Motorsport Knitted T7 Men's Slim SweatPants",
    price:42.75,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/599509/01/mod01/fnd/IND/fmt/png/BMW-M-Motorsport-Knitted-T7-Men's-Slim-SweatPants",
    desc:"A must-have for PUMA and BMW M Motorsport fans alike. We've borrowed design features from the original T7 heritage style and added modern motorsport elements to bring you these sleek, slim-fitting double-knit sweatpants, with the iconic T7 stripe in the classic colours of BMW M Motorsport.",
  },
  {
    id: 11,
    name: "PUMA x Virat Kohli Men's SweatPants",
    price:32.88,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/579340/02/mod01/fnd/IND/fmt/png/PUMA-x-Virat-Kohli-Men's-Sweat-Pants",
    desc:"",
  },
  {
    id: 12,
    name: "Rebel Men's Pants",
    price:30.38,
    sizes:[28,30,32,36,38,40.42],
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/585753/03/mod01/fnd/IND/fmt/png/Rebel-Men's-Pants",
    desc:"Everyone needs a reliable and comfortable pair of pants in their wardrobe. And whether you're working out or just hanging out, these will do the job. There's a ribbed waistband with internal drawcords, ribbed cuffs and side seam pockets for your belongings. Taken from our Rebel Collection, these pants are made with cotton from the Forever Better Initiative, which means just by buying them you're supporting more sustainable cotton farming. So, you can feel good about looking good.",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(pants);
});

module.exports = router;
