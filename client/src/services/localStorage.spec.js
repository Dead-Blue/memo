import {loadLocalStorage,saveLocalStorage} from './localStorage'

describe('测试localStorage服务',()=>{

    it('loadLocalStorage 应当正确调用localstorage.getItem',async ()=>{
        await loadLocalStorage("memo");
        expect(localStorage.getItem).toHaveBeenCalledWith("memo")
    })

    it('saveLocalStorage 应当正确调用localstorage.setItem',async ()=>{
       await saveLocalStorage("memo",[{
                    title:"TEST",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"TEST2",
                    id:1,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }]);
        expect(localStorage.setItem).toHaveBeenCalledWith("memo",'[{"title":"TEST","id":0,"completed":false,"list":"默认","priority":"none","remark":"","show":true},{"title":"TEST2","id":1,"completed":false,"list":"默认","priority":"none","remark":"","show":true}]')

    })

})
