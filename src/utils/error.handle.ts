import { Response } from 'express';

export class Errors {


    static handleHttp(res: Response, error: string) {
        res.status(500).send({ error })
    }


}