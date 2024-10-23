import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Product } from '../../assets/types/product';
import { Link } from 'expo-router';

export const ProductListItem = ({ product }: {product: Product}) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
        <Pressable style={styles.item}> {/* Outer container for the entire product item */}
        <View style={styles.itemImageContainer}> {/* Container for the product image */}
            <Image
            source={product.heroImage}
            style={styles.itemImage}
            />
        </View>
        <View style={styles.itemTextContainer}> {/* Container for the text elements */}
            <Text style={styles.itemTitle}>{product.title}</Text>
            <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
        </View>
        </Pressable>
    </Link>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
    item: {
        width: '45%',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    itemImageContainer: {
        borderRadius: 10,
        height: 200,
        width: '100%',
    },
    itemImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    itemTextContainer: {
        padding: 10,
        gap: 5,
        alignItems: 'flex-start',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})