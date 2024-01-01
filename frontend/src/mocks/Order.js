import axios from "axios";

class OrderAPI{
    createOrder=async(order)=>{
        try{
            const token =JSON.parse(localStorage.getItem("userInfo")).token;
            const config={
                headers:{
                    "content-type":"application/json",
                    Authorization:`Bearer ${token}`,
                },
            };
            const {data} = await axios.post('/api/orders/add/',order,config);
            return data;
        }catch (error){
            throw error.response && error.response.data.detail
            ? error.response && error.response.data.detail
            :error.message;
        }
    };
    payOrder=async(id,paymentResult)=>{
        try{
            const token =JSON.parse(localStorage.getItem("userInfo")).token;
            const config={
                headers:{
                    "content-type":"application/json",
                    Authorization:`Bearer ${token}`,
                },
            };
            const {data} = await axios.put(`/api/orders/${id}/pay/`,paymentResult,config);
            return data;
        }catch (error){
            throw error.response && error.response.data.detail
            ? error.response && error.response.data.detail
            :error.message;
        }
    }
    listMyOrders=async()=>{
        try{
            const token =JSON.parse(localStorage.getItem("userInfo")).token;
            const config={
                headers:{
                    "content-type":"application/json",
                    Authorization:`Bearer ${token}`,
                },
            };
            const {data} = await axios.get(`/api/orders/myorders/`,config);
            return data;
        }catch (error){
            throw error.response && error.response.data.detail
            ? error.response && error.response.data.detail
            :error.message;
        }
    }
    deliveryOrder=async(order)=>{
        try{
            const token =JSON.parse(localStorage.getItem("userInfo")).token;
            const config={
                headers:{
                    "content-type":"application/json",
                    Authorization:`Bearer ${token}`,
                },
            };
            const {data} = await axios.put(`/api/orders/${order._id}/deliver/`,{},config);
            return data;
        }catch (error){
            throw error.response && error.response.data.detail
            ? error.response && error.response.data.detail
            :error.message;
        }
    }
}
const OrderAPI=new OrderAPI();
export default OrderAPI