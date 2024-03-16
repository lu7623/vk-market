type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  description?: string
}

interface CartResponse {
  id: number,
products: Product[]
}
