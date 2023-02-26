let computeFunc

export const Reactor = function(value){
    let _val = value
    let _subscribers=new WeakSet()



    this.subscribe=(func)=>{

        _subscribers.add(func); 
        func(_val)
        // remove the subscriber
        return ()=>_subscribers.delete(func)
    }


    Object.defineProperty(this, 'value', {
        get:()=>{
            if(computeFunc){
                _subscribers.add(computeFunc)
            }
            return _val
        },
        set:(newValue)=>{
            _val=newValue;
            for(const subscribeFunc of _subscribers){
                subscribeFunc(newValue)
            }
        }
    })
}

export function computed(func){
    const reactor = new Reactor(null);
    const fn = ()=>{
        if (fn === computeFunc) {
            throw Error("Circular computation detected ♻️ ");
        }
        const previousValue = computeFunc;
        computeFunc= fn;
        reactor.value = func();
        computeFunc = previousValue
    }
    
    // run it immediatly to get a new value
    fn()
   
    return reactor
}