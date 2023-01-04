import { createContext, FC, ReactNode } from "react";
import useItems, { UseItems } from "./useItems";

const ItemsContext = createContext<UseItems | null>(null);

export default ItemsContext;

interface ItemsProviderProps {
  children: ReactNode;
}

export const ItemsProvider: FC<ItemsProviderProps> = (props) => {
  const { children } = props;
  return (
    <ItemsContext.Provider value={useItems()}>{children}</ItemsContext.Provider>
  );
};
