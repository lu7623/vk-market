const BASE_URL = "https://dummyjson.com/";

export default async function getCart(): Promise<Product[] | null> {
  try {
    const response = await fetch(BASE_URL + "carts/1");
    if (response.ok) {
      const data = (await response.json()) as CartResponse;
      const products = data.products;
      for (let prod of products) {
        await fetch(`${BASE_URL}product/${prod.id}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json.description);
            prod.description = json.description;
          })
          .catch(() => {
            return null;
          });
      }
      return products;
    }
    return null;
  } catch {
    return null;
  }
}
