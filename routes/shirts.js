const express=require('express')
const router=express.Router()



const shirts=[
    {
        id:1,
        name:"Lee Cooper Orignals Solid Mens Casual Shirt",
        sizes:['XXL','XL','L','M','S'],
        price:18.41,
        easyInfo:[
            "Made of 100% Cotton",
            "Regular fit",
            "Full Sleeves",
            "Classic Collar with Button Closure Patch Pocket Casual Shirts"
        ],
        image:"https://cflare.shop.bigbazaar.com/cdn-cgi/image/width=450/media/product/59/9601/1-fashion_catalog.jpg"
    },
    {
        id:2,
        name:"Buffalo Solid Men Cotton Causal Shirt",
        sizes:['XXL-RF','XL-RF'],
        price:18.41,
        easyInfo:[
            "Made of 100% Cotton",
            "Collared Neck",
            "Full Sleeves",
            "Available in slim and regular fit",
            "1 Casual Shirts"
        ],
        image:"https://cflare.shop.bigbazaar.com/cdn-cgi/image/width=450/media/product/97/538/1-fashion_catalog.jpg"
    },
    {
        id:3,
        name:"Knighthood Solid Mens Formal Shirts",
        sizes:['42-RF'],
        price:11.83,
        easyInfo:[
            "Made of Poly Cotton",
            "Slim Fit",
            "Full Sleeves",
            "1 Formal Shirts"
        ],
        image:"https://cflare.shop.bigbazaar.com/cdn-cgi/image/width=450/media/product/91/6301/1-fashion_catalog.jpg"
    },
    {
        id:4,
        name:"DJ & C Men Casual Shirt",
        sizes:['42-RF'],
        price:18.31,
        easyInfo:[
            "Made of 67% Linen, 33% Cotton",
            "Collared Neck",
            "Available in slim & regular fit both",
            "Full sleeves 1 front pocket 1 casual shirts"
        ],
        image:"https://cflare.shop.bigbazaar.com/cdn-cgi/image/width=450/media/product/32/638/1-fashion_catalog.jpg"
    },
    {
        id:5,
        name:"Men Slim Fit Stripped",
        sizes:['M','L','XL'],
        price:5.38,
        easyInfo:[
            "Made of Pure Cotton",
            "Full Sleeve"
        ],
        image:"https://rukminim2.flixcart.com/image/800/960/kk76wsw0/shirt/x/s/l/xl-st408nb-majestic-man-original-imafzhwgn4uggtzy.jpeg?q=50"
    },
    {
        id:6,
        name:"Men Regular Fit Checkered Casual Shirt",
        sizes:['S','M','L','XL'],
        price:35.83,
        easyInfo:[
            "Made of Pure Cotton",
            "Full Sleeve"
        ],
        image:"https://rukminim2.flixcart.com/image/800/960/kcnp8y80/shirt/7/2/a/38-11326694-roadster-original-imaftqf573vvrzag.jpeg?q=50"
    },
    {
        id:7,
        name:"TOMMY HILFIGER Men Regular Fit Houndstooth Casual Shirt",
        sizes:['S','M','L','XL'],
        price:65.12,
        easyInfo:[
            "Full Sleeve",
            "Stripped Texture"
        ],
        image:"https://rukminim2.flixcart.com/image/800/960/kuzuoi80/shirt/c/t/j/m-a1atw218-tommy-hilfiger-original-imag7ztvf3kgy6tm.jpeg?q=50"
    },
    {
        id:8,
        name:"Dennis Lingo Men's Checkered Slim fit Casual Shirt ",
        sizes:['S','M','L','XL','2XL'],
        price:9.20,
        easyInfo:[
            "100% Premium Cotton, Pre-Washed for extremely soft finish and Rich look ",
            "Classic collar",
            "Casual wear",
            "Stylish checkered full sleeve cotton casual shirt"
        ],
        image:"https://m.media-amazon.com/images/I/61j0cpBJjJS._UX679_.jpg"
    },
    {
        id:9,
        name:"CAVALLO by Linen Club Blue Printed Regular Fit Casual Shirts ",
        sizes:['S','M','L','XL','2XL'],
        price:16.76,
        easyInfo:[
            "100% Premium Cotton, Pre-Washed for extremely soft finish and Rich look ",
            "Classic collar",
            "Casual wear",
            "Stylish checkered full sleeve cotton casual shirt"
        ],
        image:"https://m.media-amazon.com/images/I/61jcgJZu+xL._UX679_.jpg"
    },
    {
        id:10,
        name:"Diverse Men's Slim Casual Shirt",
        sizes:['S','M','L','XL','2XL'],
        price:11.04,
        easyInfo:[
            "Beautifully crafted in 100% Cotton, it comes in a convenient slim fit and is suitable for all body types",
            "Features spread collar, full sleeves with buttoned cuffs and double flap pockets at chest. Pattern- Solid Casual Shirt ",
            "Conceptualized and created completely in India ",
        ],
        image:"https://m.media-amazon.com/images/I/512pBZ7L-JL._UX679_.jpg"
    },
    {
        id:11,
        name:"Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt ",
        sizes:['S','M','L','XL','2XL'],
        price:7.88,
        easyInfo:[
            "Fabric - 100% Cotton ",
            "Long sleeve Shirt  ",
            "Indigo dyed western yoke shirt with double pockets & damaging detail ",
            "Machine wash warm, wash dark colors separately, do not bleach, tumble dry low, warm Iron ",
        ],
        image:"https://m.media-amazon.com/images/I/81EldXaltNL._UX569_.jpg"
    },
    {
        id:12,
        name:"GANT Men Blue Color Block Shirts ",
        sizes:['S','M','L','XL','2XL'],
        price:124.99,
        easyInfo:[
            "Fabric - 100% Cotton ",
            "Long sleeve Shirt  ",
        ],
        image:"https://m.media-amazon.com/images/I/61vhNV3eYtL._UX679_.jpg"
    },
]


router.get('/',(req,res)=>{
    try{
        res.status(200).json(shirts)

    }
    catch(e){
        console.log(e)
    }
})



module.exports=router;