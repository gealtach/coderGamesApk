
import { View, Text } from "react-native";
import { s } from "react-native-wind";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import CustomButton from "./CustomButtom";

export default () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const totalPrice = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
      }, 0);

    return(
        <View style={s`border-2 border-black m-2 p-2 rounded-xl flex-auto items-center`}>
            <Text>{`You are buying ${cart.length} games.`}</Text>
            <Text style={s`text-2xl`}>{`Total: ${totalPrice} USD`}</Text>
            <CustomButton 
            text="Buy"
            touchStyle="bg-pink-500 rounded-xl p-2"
            />
        </View>
    )
}