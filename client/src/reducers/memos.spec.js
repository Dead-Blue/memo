import memos from './memos'
import * as types from '../constants/ActionTypes'

describe('测试memos reducer', () => {
    it('应当能正确处理初始state', () => {
        expect(
            memos(undefined, {})
        ).toEqual({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 LOADING_MEMOS',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.LOADING_MEMOS,
        })).toEqual({
            loading: true,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 SUCCESS_LOAD_MEMOS',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.SUCCESS_LOAD_MEMOS,
            payload:{
                memos:[{
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
                }]
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
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
                }],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 FAIL_LOAD_MEMOS',() => {
        expect(memos({
            loading: true,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.FAIL_LOAD_MEMOS,
        })).toEqual({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        })

        expect(memos({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.FAIL_LOAD_MEMOS,
        })).toEqual({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 SAVING_MEMOS',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.SAVING_MEMOS,
        })).toEqual({
            loading: false,
            saving: true,
            memos: [],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 SUCCESS_SAVE_MEMOS',() => {
        expect(memos({
            loading: false,
            saving: true,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.SUCCESS_SAVE_MEMOS,
        })).toEqual({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 FAIL_SAVE_MEMOS',() => {
        expect(memos({
            loading: false,
            saving: true,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.FAIL_SAVE_MEMOS,
        })).toEqual({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 ADD_MEMO',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        },{
            type:types.ADD_MEMO,
            payload:{
                text:"test"
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })

         expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.ADD_MEMO,
            payload:{
                text:"test2"
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })

        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.ADD_MEMO,
            payload:{
                text:"test3"
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 EDIT_MEMO',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.EDIT_MEMO,
            payload:{
                text:"changed!",
                id:1
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"changed!",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 EDIT_MEMODETAIL',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.EDIT_MEMODETAIL,
            payload:{
                memoDetail:{
                list:"提醒",
                priority:"middle",
                remark:"test",
                },
                id:2
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"提醒",
                    priority:"middle",
                    remark:"test",
                    show:true
                }],
            filter: types.FILTER_ALL,
        }) 
    })

    it('应当正确处理 TOGGLE_COMPLETE',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.TOGGLE_COMPLETE,
            payload:{
                id:2
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:true,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })

        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:true,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.TOGGLE_COMPLETE,
            payload:{
                id:2
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        }) 
    })

    it('应当正确处理 DELETE_MEMO',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.DELETE_MEMO,
            payload:{
                id:2
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                }],
            filter: types.FILTER_ALL,
        })

        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.DELETE_MEMO,
            payload:{
                id:0
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [],
            filter: types.FILTER_ALL,
        }) 
    })

    it('应当正确处理 SEARCH_MEMO',() => {
        //搜索内容为空时，应当显示所有内容
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.SEARCH_MEMO,
            payload:{
                keyword:"",
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:true
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })

        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.SEARCH_MEMO,
            payload:{
                keyword:"2",
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:false
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:true
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:false
                }],
            filter: types.FILTER_ALL,
        })

        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.SEARCH_MEMO,
            payload:{
                keyword:"xxxxx",
            }
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:false
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:false
                }],
            filter: types.FILTER_ALL,
        })
    })

    it('应当正确处理 FILTER_COMPLETED',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.FILTER_COMPLETED
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:false
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:true
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:false
                }],
            filter: types.FILTER_COMPLETED,
        })
    })

    it('应当正确处理 FILTER_UNCOMPLETED',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        },{
            type:types.FILTER_UNCOMPLETED
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_UNCOMPLETED,
        })
    })

    it('应当正确处理 FILTER_ALL',() => {
        expect(memos({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:false
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_UNCOMPLETED,
        },{
            type:types.FILTER_ALL
        })).toEqual({
            loading: false,
            saving: false,
            memos: [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                },{
                    title:"test2",
                    id:1,
                    completed:true,
                    list:"提醒",
                    priority:"high",
                    remark:"test2",
                    show:true
                },{
                    title:"test3",
                    id:2,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }],
            filter: types.FILTER_ALL,
        })
    })
})