import { Car } from "../interfaces/Car.interface";
import ItemModel from "../models/Item"

export class Item {



    static async insertItem(item: Car) {
        let responseInsert = await ItemModel.create(item)
        return responseInsert
    }


}