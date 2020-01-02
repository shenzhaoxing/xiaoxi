let list=require('./mock/list.json')
module.exports = {
    devServer:{
        open:true,
        before(app){
            app.get('/getlist',(req,res)=>{
                res.send({
                    list
                })
            })
        }
    }
};
