const saveLocalStorage=function (key,value){
    if(typeof value === "object"){
        var valueToSave = JSON.stringify(value);
        // localStorage.setItem(key,valueToSave);
        return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                localStorage.setItem(key,valueToSave);
                resolve();
            },0)
        })
    } else if(typeof value === "string"||typeof value==="number"||typeof value==="boolean") {
        // localStorage.setItem(key,value);
        return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                localStorage.setItem(key,value);
                resolve();
            },0)
        })
    } else {
        throw new Error("数据存储类型必须是object,number,string,boolean的一种")
    }
}

const loadLocalStorage = function(key){
    // var value = localStorage.getItem(key);
    // return JSON.parse(value);
    //模拟异步
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var value = localStorage.getItem(key);
            resolve(JSON.parse(value));
        },0)
    })
}

exports.saveLocalStorage=saveLocalStorage;
exports.loadLocalStorage=loadLocalStorage;