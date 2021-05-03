function cube (input){
    if(typeof input ==='number'){
        result=input**3
        return result
    }else{
        return 'not valid'
    }
}

module.exports=cube