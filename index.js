const sharp = require('sharp')

let image = sharp('./singer.jpg')

const width = 200;
const height = 200;
image.resize({
    width: width,
    height: height,
    fit: 'contain'
})
.blur(1)
.toFile('./result.jpg',(err,info)=>{
    if (err){
        console.log(err)
    }
    console.log(info)
})