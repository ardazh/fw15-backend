// const fs = require("fs")

// const fileRemover = (file) => {
//     if(file){
//         const filename = `uploads/${file.filename}`
//         fs.unlink(filename, (err) => {
//             if(err){
//                 throw Error(err.message)
//             }
//         })
//     }
// }

// module.exports = fileRemover

const fs = require("fs")
const fileRemover = (file) => {
    try {
        if(file){
            const fileName = `uploads/${file.filename}`
            if(fileName){
                fs.unlink(fileName, (err)=>{
                    if(err){
                        return console.log(err)
                    }
                })
            }
        }
    } catch (err) {
        throw Error("error")
    }
}

module.exports = fileRemover
