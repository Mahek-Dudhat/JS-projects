import '../style.css';

import products from './api/products.json';

import { showDataToHtml } from './homeProductsCards';

showDataToHtml(products);

console.log(products);
