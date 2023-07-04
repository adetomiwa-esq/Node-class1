const fs = require('fs')


// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })


// writing files
fs.writeFile('./docs/blog1.txt', 'rewrite the content of blog1.txt', () => {
    console.log('file was written')
})

// directories
if(!fs.existsSync('./asset')){
    fs.mkdir('./asset', (err)=> {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./asset', () => {
        console.log('folder removed')
    })
}
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', () => {
        console.log('file deleted')
    })
}

fs.writeFile('./docs/script.js', 'console.log("hello world")', (err) => {
    if(err){
        console.log(err)
    }
    console.log('js file created')
})