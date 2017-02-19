import { createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../reducers'

let store = createStore(
    reducers,
    applyMiddleware(
        thunk, // 允许我们 dispatch() 函数
        // createLogger() // 一个很便捷的 middleware，用来打印 action 日志，开发环境使用，编译打包时删除 
    ),
)

export default store