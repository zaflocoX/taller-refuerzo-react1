import axios from "axios";
import endpoints from "./endpoint";

export const getProducts = async() => {
    try {
        const { data } = await axios.get(endpoints.products);
        return data;


    } catch (error) {
        console.log(error);
        return null;
    }
}