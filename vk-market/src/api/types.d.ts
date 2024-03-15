type Product = {
  id: number;
  title: string;
  price: number;
  quantity: string;
  thumbnail: string;
  description?: string
}

interface CartResponse {
  id: number,
products: Product[]
}
