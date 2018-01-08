export default function({store}){
    console.log('这是一个中间件', store.state.counter)
}