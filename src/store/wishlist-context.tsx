import { createContext } from "react";

export const WishListContext = createContext({
	ids: [],
	addWishListItem: (id: number) => {},
	removeWishListItem: (id: number) => {},
});

function WishListContextProvider({children}: any){
	


    return <WishListContextProvider.Provider>{children}</WishListContextProvider.Provider>
}

export default WishListContextProvider;