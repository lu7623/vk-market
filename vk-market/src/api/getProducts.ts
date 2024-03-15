const BASE_URL = 'https://fakestoreapi.com/products'

export default async function getProducts (): Promise<Product[] | null>  {
  try {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      
      const data = await response.json() as Product[];
      console.log(data)
      return data
    }
    return null;
  } catch {
    return null;
  }
};

