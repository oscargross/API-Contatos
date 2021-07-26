import Boom from '@hapi/boom';
import { Request, Response } from 'express'
import  * as transportService from '../services/AccessDBService'
import transportSchema from '../schema/transportSchema';
import { findTransportParam } from '../utils/transportUtils'


export let createTransport = async(req: Request, res: Response) => {
    const { body: driver } = req
    return transportService.create(driver, transportSchema)
        .then(result => res.status(201).json(result))
        .catch(error => 
            error.statusCode ? res.status(error.statusCode).json(error) : 
            res.status(500).json(Boom.internal('Internal Server Error').output.payload))
};

export let findTransportByParam = async (req: Request, res: Response) =>  {
    const {type, id, numberNF, openingDate} = req.query

    const params = findTransportParam({type, id, numberNF, openingDate})
    return transportService.findByParam(params, transportSchema)
    .then(result => result ? res.status(200).json(result) : res.sendStatus(204))
    .catch(error => 
        error.statusCode ? res.status(error.statusCode).json(error) : 
        res.status(500).json(Boom.internal('Internal Server Error').output.payload))
};

export let updateTransport = async (req: Request, res: Response)=>  {
    const { id } = req.query;
    const  info  = req.body;
    return transportService.update(id, info, transportSchema)
        .then(result => res.status(200).json(result))
        .catch(error => 
            error.statusCode ? res.status(error.statusCode).json(error) : 
            res.status(500).json(Boom.internal('Internal Server Error').output.payload))
   
};

export let deleteTransport = async (req: Request, res: Response)=>  {
    const { id } = req.query
    return transportService.del(id, transportSchema)
    .then(result => res.status(200).json(result))
    .catch(error => 
        error.statusCode ? res.status(error.statusCode).json(error) : 
        res.status(500).json(Boom.internal('Internal Server Error').output.payload))
   
};
