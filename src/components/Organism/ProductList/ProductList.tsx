import { View, Text } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import ProductsMock from "../../../mocks/ProductsMock";
import ListTitle from '../ListTitle/ListTitle';


const ProductList = () => {
  return (
		<View>
			<ListTitle hasBtn={true}>
				<Text>Productos de tu site</Text>
			</ListTitle>
			<ProductItem productData={ProductsMock} />
		</View>
  );
}

export default ProductList