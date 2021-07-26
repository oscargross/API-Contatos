import Boom from '@hapi/boom';
import { Request, Response } from 'express'
import  * as DriverService from '../services/AccessDBService'
import driverSchema from '../schema/driverSchema';
import { findDriverParam } from '../utils/driverUtils'


export let createDriver = async(req: Request, res: Response) => {
    const { body: driver } = req
    return DriverService.create(driver, driverSchema)
        .then(result => res.status(201).json(result))
        .catch(error => 
            error.statusCode ? res.status(error.statusCode).json(error) : 
            res.status(500).json(Boom.internal('Internal Server Error').output.payload))
};

export let findDriverByParam = async (req: Request, res: Response) =>  {
    const {name, id, cpf} = req.query

    const params = findDriverParam({name, id, cpf})

    return DriverService.findByParam(params, driverSchema)
    .then(result => result ? res.status(200).json(result) : res.sendStatus(204))
    .catch(error => 
        error.statusCode ? res.status(error.statusCode).json(error) : 
        res.status(500).json(Boom.internal('Internal Server Error').output.payload))
};

export let updateDriver = async (req: Request, res: Response)=>  {
    const { id } = req.query;
    const  info  = req.body;
    return DriverService.update(id, info, driverSchema)
        .then(result => res.status(200).json(result))
        .catch(error => 
            error.statusCode ? res.status(error.statusCode).json(error) : 
            res.status(500).json(Boom.internal('Internal Server Error').output.payload))
   
};

export let deleteDriver = async (req: Request, res: Response)=>  {
    const { id } = req.query
    return DriverService.del(id, driverSchema)
    .then(result => res.status(200).json(result))
    .catch(error => 
        error.statusCode ? res.status(error.statusCode).json(error) : 
        res.status(500).json(Boom.internal('Internal Server Error').output.payload))
   
};
