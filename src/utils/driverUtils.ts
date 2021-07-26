
export const findDriverParam = ({id, name, cpf}: any) => {

    const params = {_id: id, name, cpf}

    if(!params._id){
        delete params._id
    } 
    if(!params.name){
        delete params.name
    }
    if(!params.cpf){
        delete params.cpf
    }
    return params

}