import Boom from '@hapi/boom';
import { Request, Response } from 'express'
import  * as companyService from '../services/AccessDBService'
import companySchema from '../schema/companySchema';
import { findCompanyParam } from '../utils/companyUtils'



export let createCompany = async(req: Request, res: Response) => {
    const { body: driver } = req
    return companyService.create(driver, companySchema)
        .then(result => res.status(201).json(result))
        .catch(error => 
            error.statusCode ? res.status(error.statusCode).json(error) : 
            res.status(500).json(Boom.internal('Internal Server Error').output.payload))
};

export let findCompanyByParam = async (req: Request, res: Response) =>  {
    const {name, id, cnpj} = req.query

    const params = findCompanyParam({name, id, cnpj})

    return companyService.findByParam(params, companySchema)
    .then(result => result ? res.status(200).json(result) : res.sendStatus(204))
    .catch(error => 
        error.statusCode ? res.status(error.statusCode).json(error) : 
        res.status(500).json(Boom.internal('Internal Server Error').output.payload))
};

export let updateCompany = async (req: Request, res: Response)=>  {
    const { id } = req.query;
    const  info  = req.body;
    return companyService.update(id, info, companySchema)
        .then(result => res.status(200).json(result))
        .catch(error => 
            error.statusCode ? res.status(error.statusCode).json(error) : 
            res.status(500).json(Boom.internal('Internal Server Error').output.payload))
   
};

export let deleteCompany = async (req: Request, res: Response)=>  {
    const { id } = req.query
    return companyService.del(id, companySchema)
    .then(result => res.status(200).json(result))
    .catch(error => 
        error.statusCode ? res.status(error.statusCode).json(error) : 
        res.status(500).json(Boom.internal('Internal Server Error').output.payload))
   
};
