import { Car } from "../interfaces/Car.interface";
import ItemModel from "../models/Item"

export class Item {


    static async getOrders() {
        let responseInsert = await ItemModel.find({})
        return responseInsert
    }


}