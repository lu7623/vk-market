import { Button, Card, Group, Header, Image } from '@vkontakte/vkui';


export default function ProductCard({ product }: { product: Product }) {
 
  return (
    <>
      <Card mode="outline" style={{display:'flex', padding: '1rem'}} >
        <Image src={product.thumbnail}
          width={200}
          height={200} />
        <Group mode='plain'>
        <Header multiline mode="secondary">{product.title}</Header>
          
        </Group>
        <Group mode='plain'>
          <Header multiline mode="secondary">{product.price}</Header>
          <Header multiline mode="secondary">{product.quantity}</Header>
          <Button>+</Button>

        </Group>
      </Card>
    </>
  );
}