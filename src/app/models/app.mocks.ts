import { faker } from '@faker-js/faker';
import { Product } from './app.models';

export const generateOneProduct = (): Product => {
  return {
    id: faker.number.int().toString(),
    title: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    description: faker.commerce.productDescription(),
    category: {
    id: faker.datatype.number(),
    name: faker.commerce.department()
    },
    images: [faker.image.url(), faker.image.url()]
  };
}

export const generateManyProducts = (size = 10): Product[] => new Array(size).fill(null).map(() => ({...generateOneProduct()}))
  // const products: Product[] = [];
  // for (let index = 0; index < size ; index++) {
  //   products.push(generateOneProduct());
  // }
  // return [...products];

