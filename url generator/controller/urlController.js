const {nanoid} = require('nanoid')
const {urlModel}=require('../modals/urlModel');

async function generateShortUrl(req,res){
    const { actUrl } = req.body;
    if(!actUrl)return res.status(400).json({error:"url is required"});
    const shortId=nanoid(7);
    await urlModel.create({shortId,actUrl});
    res.json(shortId);
}
module.exports={generateShortUrl};

