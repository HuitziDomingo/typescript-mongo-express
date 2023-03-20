import { Request, Response } from "express"
import { Item } from "../services/item.service"
import { Errors } from "../utils/error.handle"

export class Items {


    static async createItem({ body }: Request, res: Response) {
        try {
            let responsseItem = await Item.insertCar(body)
            res.send(responsseItem)
        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM', error)
        }
    }


    static async getItems(req: Request, res: Response) {
        try {
            let responsseItem = await Item.getCars()
            res.send(responsseItem)
        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async getItemById({ params }: Request, res: Response) {
        try {
            let { id } = params
            console.log(id)
            let responsseItem = await Item.getCarById(id)
            let data = responsseItem ? responsseItem : "ITEM_CAR_NOT_FOUND"
            res.send(data)
        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async editItem({ params, body }: Request, res: Response) {
        try {
            let { id } = params
            console.log(id)
            let responsseItem = await Item.updateCar(id, body)
            res.send(responsseItem)
        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async deleteItem({ params }: Request, res: Response) {
        try {
            let { id } = params
            let responsseItem = await Item.deleteCar(id)
            res.send(responsseItem)

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


}