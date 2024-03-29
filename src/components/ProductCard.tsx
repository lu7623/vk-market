import {
  ButtonGroup,
  Card,
  Group,
  Header,
  IconButton,
  Image,
  Text,
} from "@vkontakte/vkui";
import {
  Icon24AddOutline,
  Icon24DeleteOutline,
  Icon24MinusOutline,
} from "@vkontakte/icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  plusProductQty,
  minusProductQty,
  deleteProduct,
} from "../store/reducers/cartSlice";

export default function ProductCard({
  product,
  callback,
}: {
  product: Product;
  callback: (name: string) => void;
}) {
  const { cart } = useAppSelector((state) => state.cart);
  const currProd = cart.find((p) => p.productName === product.title);
  const dispatch = useAppDispatch();
  const handlePlus = () => {
    dispatch(plusProductQty(product.title));
  };
  const handleMinus = () => {
    dispatch(minusProductQty(product.title));
  };
  const handleDelete = () => {
    dispatch(deleteProduct(product.title));
    callback(product.title);
  };
  return (
    <>
      <Card
        mode="outline"
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Group mode="plain">
          <Image src={product.thumbnail} width={200} height={200} />
        </Group>
        <Group mode="plain" style={{ width: "100%" }}>
          <Header multiline mode="secondary">
            {product.title}
          </Header>
          <Text>{product.description}</Text>
        </Group>
        <Group mode="plain">
          <Header>{`Price: ${product.price}`}</Header>
          <ButtonGroup gap="s">
            <IconButton label="plus" onClick={handlePlus}>
              <Icon24AddOutline />
            </IconButton>
            <Header>{currProd?.qty}</Header>
            <IconButton label="minus" onClick={handleMinus}>
              <Icon24MinusOutline />
            </IconButton>
            <IconButton label="delete" onClick={handleDelete}>
              <Icon24DeleteOutline />
            </IconButton>
          </ButtonGroup>
        </Group>
      </Card>
    </>
  );
}
