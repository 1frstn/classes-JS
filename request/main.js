fetch('http://blabla',{method:'POST',headers:{'header':'header'},body:JSON.stringify({id:1})})
  .then(res=>{
    if(res.ok){
        return res.json();
    }
    throw new Error('Rquest Faild')

  }, networkError => console.log(networkError.message))
  .then(jsonRes=>{
    console.log(jsonRes);
})

async function getData(){
    try {
        const res = await fetch('http://blabla')
        if(res.ok){
            const jsonRes = await res.json();
            console.log(jsonRes);
        }
        throw new Error('Request failed!')
    } catch (error) {
        return error
    }
}