const store = {}
const subscribe = (eventName,callBack)=>{
    if(!store[eventName]){
        store[eventName] = new Set();
    }
    store[eventName].add(callBack)
};
const unsubscribe = (eventName,callBack)=>{
    if(store[eventName]){
        store[eventName].delete(callBack)
    }        
};
const publish = (eventName , payload)=>{
    if(store[eventName]){
        store[eventName].forEach(callBack=>{
            try{
                callBack(payload)
            }catch(error){
                console.error(error)
            }
        });
    }
};
export default{
    subscribe,
    unsubscribe,
    publish
}


