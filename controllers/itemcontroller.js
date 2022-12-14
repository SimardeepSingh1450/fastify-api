const {v4:uuidv4}=require('uuid')

let items=require('../items');

const getItems=(req,res)=>{
res.send(items);
}

const getItem=(req,res)=>{
    const {id}=req.params;
    const item=items.find((item)=>item.id===id)
    res.send(item);
}

const addItem=(req,res)=>{
    const {name}=req.body;
    const item={
        id:uuidv4(),
        name:name
    }

    //Adding New item to Array using Vanilla Js:
    items=[...items,item];

    res.code(201).send(item);
}

const deleteItem=(req,res)=>{
const {id}=req.params;
//Removing item using filter
items=items.filter(item=>item.id!==id);

reply.send({message:`Item ${id} has been removed`})
}

const updateItem=(req,res)=>{
const {id}=req.params;
const {name}=req.body;
//Adding the item via .map
items=items.map(item=>(item.id===id?{id,name}:item))


item=items.find((item)=>item.id===id)

reply.send(item);
}


module.exports={getItem,getItems,addItem,deleteItem,updateItem};