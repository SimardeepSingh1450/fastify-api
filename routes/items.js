//Syntax for Routes function in Fastify :
// function itemRoutes(fastify,options,done){
//     //code
//     done();
// }

//Importing data from local file:
const items=require('../items')

//Import (req,res) fns or controllers :
const {getItems,getItem,addItem,deleteItem,updateItem}=require('../controllers/itemcontroller');

//Setting up item Schema for getItemsOpts:
const Item={
     type:'object',
        properties:{
            id:{type:'string'},
            name:{type:'string'}
                    }
}


//Options for get all items:
//NOTE -> We put the options details variable inbetween route and behind the (req,res)
const getItemsOpts={
    schema:{
        response:{
            200:{
                type:'array',
                items:Item
                    //{ type:'object',
                    // properties:{
                    //     id:{type:'string'},//id:{type:'integer'} ->In this way we can also convert data type
                    //     name:{type:'string'} }//NOTE-> If in properties we do not specify any of thr property then that property is not send from backend to frontend but the rest of the properties are send to frontend
                    
                
            }
        }
    },
    handler:getItems
}



//Options for get item:
const getItemOpts={
    schema:{
        response:{
            200:Item// 200:{
            //     type:'object',
            //     properties:{
            //         id:{type:'string'},
            //         name:{type:'string'}
            //     }
            // }
        }
    },
    handler:getItem
}


//POST REQUEST OPTS:
const postItemOpts={
    schema:{
        body:{//We use body property inside schema property to validate the incoming post data
            type:'object',
            required:['name'],//These are the properties for validation
            properties:{type:'string'}
        },
        response:{
            201:Item
        }
    },
    handler:addItem
}

//DELETE Request:
const deleteItemOpts={
    schema:{
        response:{
            200:{
                type:'object',
                properties:{
                    message:{type:'string'}
                }
            }
        }
    },
    handler:deleteItem
}

//Update Request:
const updateItemOpts={
    schema:{
        response:{
            200:Item
        }
    },
    handler:updateItem
}





function itemRoutes(fastify,options,done){
    
//Creating a Basic Route:
//GET all Items
fastify.get('/items',getItemsOpts)//We removed the (req,res) from here and putted it in the handler section alongside schema section in the getItemsOpts

//Params in fastify:
//GET Single Item
fastify.get('/items/:id',getItemOpts)

//Add Item (Post Request):
fastify.post('/items',postItemOpts);


//Delete Item :
fastify.delete('/items/:id',deleteItemOpts)


//Update Item:
fastify.put('/items/:id',updateItemOpts);

    done();
}

module.exports=itemRoutes;