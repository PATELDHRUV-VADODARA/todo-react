const zod = require('zod');

const createTodo = zod.object({
    title : zod.string() ,
    description: zod.string()


})

const updateTime = zod.object({
    id: zod.string(),
})
module.exports={
    createTodo :createTodo,
    updateTime : updateTime

}