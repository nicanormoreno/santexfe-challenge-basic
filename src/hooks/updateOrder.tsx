import { useMutation } from "@apollo/client";
import { ADD_ITEM_TO_ORDER } from "../graphql/mutations";
import { iOrder } from "../interfaces/order.interface";
import useStateWithStorage from "./useStateWithStorage";
interface iOrderMutation {
    addItemToOrder: iOrder
}
export function useAddItemToOrder() {
  const [addItemToOrderMutation] = useMutation<iOrderMutation>(ADD_ITEM_TO_ORDER);

  const addItemToOrder = async (productVariantId:number, quantity: number):Promise<iOrder | undefined> => {
    try {
      const {data} = await addItemToOrderMutation({
        variables: { productVariantId, quantity },
      })
      if(data?.addItemToOrder)
      return data?.addItemToOrder

    } catch (error) {
      console.error("Error adding item to order:", error);
      throw error;
    }
  };

  return addItemToOrder;
}