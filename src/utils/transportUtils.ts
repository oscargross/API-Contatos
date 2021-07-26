
export const findTransportParam = ({type, id, numberNF, openingDate}: any) => {

    const params = {_id: id, type, numberNF, openingDate}

    if(!params._id){
        delete params._id
    } 
    if(!params.type){
        delete params.type
    }
    if(!params.numberNF){
        delete params.numberNF
    }
    if(!params.openingDate){
        delete params.openingDate
    }
    return params

}