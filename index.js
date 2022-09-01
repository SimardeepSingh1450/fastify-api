const fastify=require('fastify')({logger:true})//The -> ({logger:true}) is extra part here it is not compulsory but in the terminal it gives us some extra info
const PORT=5000

//For importing Fastify Routes function we need to register them :
fastify.register(require('./routes/items'));

//Like for our Express Js , let us setup our Fastify listen port in a start function :
const start=async()=>{
    try{
        await fastify.listen(PORT,()=>{console.log('Server is listening on 5000...')});
    }catch(err){
        fastify.log.console.error(error);
        process.exit(1)
    }
}

start();