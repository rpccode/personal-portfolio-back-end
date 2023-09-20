import Axios from "../../../axiosConfig";
import { getConfigActive } from "./ConfigSlice";

export const StartLoadinConfig = () => {
    return async (dispatch, getState) => {
        try {
            const response = await Axios.get('/config/641e5bbbacf0fcf772de2e81', {
                responseType: 'json',
            });

            const docs = await response.data

            // console.log(docs)
            dispatch(getConfigActive(docs))

        } catch (error) {
            console.log(error)
        }
    }
}