import { type Product, type Products } from '../types/api_store';

export const getProducts = async () => {
  const res:Products = await fetch('https://fakestoreapi.com/products',
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  ).then(data => data.json());

  return res;
};

export const getProductBy = async ({ id }: { id: number }) => {
  const res: Product = await fetch(`https://fakestoreapi.com/products/${id}`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  ).then(data => data.json());
  console.log(res);
  return res;
}