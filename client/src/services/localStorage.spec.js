import {loadLocalStorage,saveLocalStorage} from './localStorage'

describe('测试localStorage服务',()=>{

    afterEach(()=>{
        localStorage.getItem.mockClear()
        localStorage.setItem.mockClear()
    })

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

    it('保存string类型数据时 应当正确调用localstorage.setItem',async ()=>{
       await saveLocalStorage("memo","test");
        expect(localStorage.setItem).toHaveBeenCalledWith("memo",'test')
    })

    it('保存number类型数据时 应当正确调用localstorage.setItem',async ()=>{
       await saveLocalStorage("memo",123);
        expect(localStorage.setItem).toHaveBeenCalledWith("memo",123)
    })

    it('保存boolean类型数据时 应当正确调用localstorage.setItem',async ()=>{
       await saveLocalStorage("memo",true);
        expect(localStorage.setItem).toHaveBeenCalledWith("memo",true)
    })

    it('保存boolean类型数据时 应当正确调用localstorage.setItem',async ()=>{
       await saveLocalStorage("memo",true);
        expect(localStorage.setItem).toHaveBeenCalledWith("memo",true)
    })

    it('保存异常数据时 应当报错',async ()=>{
        await saveLocalStorage("memo",true)
        expect(saveLocalStorage).toThrow("数据存储类型必须是object,number,string,boolean的一种")
    })

})
