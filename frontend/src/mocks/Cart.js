import axios from "axios";

class CartAPI {
    async fetchProduct(productId) {
        try {
            const { data } = await axios.get(`/api/products/${productId}`);
            return data;
        } catch (error) {
            console.error("Error fetching product:", error);
            // Instead of just throwing the error, you might want to return a structured response
            return { error: "Failed to fetch product details." };
        }
    }
}

const cartAPI = new CartAPI();
export default cartAPI;
