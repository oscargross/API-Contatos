
export const findCompanyParam = ({id, name, cnpj}: any) => {

    const params = {_id: id, name, cnpj}

    if(!params._id){
        delete params._id
    } 
    if(!params.name){
        delete params.name
    }
    if(!params.cnpj){
        delete params.cnpj
    }
    return params

}