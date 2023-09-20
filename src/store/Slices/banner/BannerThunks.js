import Axios from "../../../axiosConfig";
import { getBannerActive } from "./BannerSlice";


export const StartLoadinBanner = () => {
    return async (dispatch, getState) => {
        try {
            const response = await Axios.get('/personal/64244e5fbd588f384d13abd8', {
                responseType: 'json',
            });

            const docs = await response.data

            // console.log(docs)
            dispatch(getBannerActive(docs))

        } catch (error) {
            console.log(error)
        }
    }
}