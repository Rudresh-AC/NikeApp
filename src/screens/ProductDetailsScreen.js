import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Sizes */}

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
