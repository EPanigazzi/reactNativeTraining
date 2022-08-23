import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Content } from '../../../interfaces/reqData';


const NewListProductItem = ({ productData }: any) => {

    const {title, imageUrl}  = productData 

    return (
		<View>
			<Image
				source={{ uri: imageUrl[0].toString() }}
				style={{ width: 91, height: 72, borderRadius: 6 }}
			/>
			<Text>{title}</Text>
		</View>
	);
};

export default NewListProductItem