import {instance} from "./api";
import {CaravansType} from "../types/dataTypes";

export const caravansApi = {
    getCaravans() {
        return instance.get<CaravansType>('data')
    }
}
