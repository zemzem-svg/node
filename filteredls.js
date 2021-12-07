let fs = require("fs")

fs.readdir(process.argv[2], (err, list) => {
    if (err) return console.error(err)
    list.forEach((item) => {
        if (item.endsWith("." + process.argv[3]))
            console.log(item)
    })

});
