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

fs.writeFile('./docs/script.js', 'console.log("hello server")', (err) => {
    if(err){
        console.log(err)
    }
    console.log('js file created')
})

fs.readFile('./docs/script.js', (err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

fs.readFile('./docs/blog2.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

fs.writeFile('./docs/blog3.txt', "let's rearrange what we have or create a new one", (err) => {
    if(err){
        console.log(err)
    }
    console.log('creating and writing in blog3')
})

fs.unlink('./docs/blog3.txt', () => {
    console.log('delete blog3')
})

if(!fs.existsSync('./docs/folder')){
    fs.mkdir('./docs/folder', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })
}
else{
    fs.rmdir('./docs/folder', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder removed')
    })
}
