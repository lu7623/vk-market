import { Header } from "@vkontakte/vkui";
import { useAppSelector } from "../store/store";

export default function Busket() { 
  const { totalSum} =useAppSelector((state) => state.cart)
  return ( <>
    <Header>Total Sum:</Header>
    <Header>{`${totalSum} USD`}</Header>
</>)
}