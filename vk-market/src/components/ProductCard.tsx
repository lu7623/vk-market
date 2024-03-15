import { ButtonGroup, Card, Group, Header, IconButton, Image } from "@vkontakte/vkui";
import { Icon24AddOutline, Icon24DeleteOutline,Icon24MinusOutline  } from '@vkontakte/icons';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <Card mode="outline" style={{ display: "flex", padding: "1rem", justifyContent:'space-between' }}>
        <Image src={product.thumbnail} width={200} height={200} />
        <Group mode="plain">
          <Header multiline mode="secondary">
            {product.title}
          </Header>
        </Group>
        <Group mode="plain">
        <Header>{`Price: ${product.price}`}</Header>
          
          <ButtonGroup >
            <IconButton onClick={() => { }}><Icon24AddOutline /></IconButton>
            <Header>{product.quantity}</Header>
          <IconButton onClick={() => { }}><Icon24MinusOutline/></IconButton>
          <IconButton  onClick={()=> {}}>
              <Icon24DeleteOutline />
              
            </IconButton>
            </ButtonGroup>
        </Group>
      </Card>
    </>
  );
}
