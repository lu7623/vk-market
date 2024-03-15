const BASE_URL = 'https://dummyjson.com/carts/1'

export default async function getCart (): Promise<Product[] | null>  {
  try {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      
      const data = await response.json() as CartResponse;
      return data.products;
    }
    return null;
  } catch {
    return null;
  }
};


