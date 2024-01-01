import axios from "axios";
class cartAPI{
    async fetchProduct(productId){
        try{
            const {data}=await axios.get(`/api/products/${productId}`);
            return data;
            
        }catch (error){
            throw error;
        }
    }
}
const cartAPI=new cartAPI();
export default cartAPI;