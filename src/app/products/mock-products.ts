import { Product } from './product';

export const PRODUCTS: Product[] = [
    {id: 1, name: "Coca-cola", price: 16, ingredients: ["sugar", "secret-sauce"], calories: 200,
        quantity: 1, url: "https://i2.wp.com/shop.stridon.hr/wp-content/uploads/2020/05/Coca-Cola-025L.jpg?fit=1200%2C1200&ssl=1"},
    {id: 2, name: "Fanta", price: 15, ingredients: ["sugar", "secret-sauce", "orange"], calories: 150,
        quantity: 1, url: "https://d2i4dsjnpaubom.cloudfront.net/cafe_products/images/000/000/102/large/fanta_025.png?1516182826"},
    {id: 3, name: "Sprite", price: 17, ingredients: ["sugar", "secret-sauce", "green juice"], calories: 50,
        quantity: 1, url: "https://www.fastfood-sesula.hr/wp-content/uploads/2019/10/sprite.jpeg"},
    {id: 4, name: "Schweppes-Tangerina", price: 15, ingredients: ["sugar", "tangerine juice"], calories: 200,
        quantity: 1, url: "https://shop.studenac.hr/media/catalog/product/cache/de7a167639975b37ce148c87d1f24600/0/0/004102-schweppes-tangerine-0_5-l.png"},
    {id: 5, name: "Schweppes-Tonic", price: 15, ingredients: ["sugar", "secret-sauce","bitterness"], 
        calories: 200, quantity: 1, url: "https://mk0galerieanaln1fb7y.kinstacdn.com/wp-content/uploads/2020/05/tonic.jpg"}
];