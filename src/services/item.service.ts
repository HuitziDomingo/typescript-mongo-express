import { Car } from "../interfaces/Car.interface";
import ItemModel from "../models/Item"

export class Item {


    static async insertCar(item: Car) {
        let responseInsert = await ItemModel.create(item)
        return responseInsert
    }


    static async getCars(){
        let responseInsert = await ItemModel.find({})
        return responseInsert
    }


    static async getCarById(item: string){
        let responseInsert = await ItemModel.findOne({_id: item})
        return responseInsert
    }


}