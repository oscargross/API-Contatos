import Boom from '@hapi/boom';

export let create = async (info : any, Schema : any) => {
    
    try {
        await Schema.create(
            info
        ).catch( (err: any) => {
            
            throw new Error(err); 
        })
        return info
    } catch (error) {



        console.log("Error: "+error.message)


        throw Boom.badRequest(error.message).output.payload

        // return { message: error.message }
    }
};


export let findByParam = async (params : any, Schema : any) => {
    try {
        
        const result = await Schema.find(params);    
        console.log(result);
            
        return result ? result : null    
        
    } catch (error) {
        console.log("Error: "+error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};


export let update = async (id: any , info: any, Schema : any) => {

    try {
        const driver = await Schema.findByIdAndUpdate(id, {
            $set: info
        }, {new: true})

        return driver

    } catch (error) {
        console.log("Error: "+error.message)
        throw Boom.badRequest(error.message).output.payload
    }


};

export let del = async ( id : any, Schema : any) => {
    try {

        const driverDeleted = await Schema.findByIdAndDelete(id)
        return driverDeleted
    
        
    } catch (error) {
        console.log("Error: "+error.message)
        throw Boom.badRequest(error.message).output.payload
    }
};