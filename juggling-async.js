let http = require('http')

const list = []
list.push(process.argv[2])
list.push(process.argv[3])
list.push(process.argv[4])
const data = []


function fetch(url, callback) {
    http.get(url, res => {
        let buff = []
        res.on("data", data => {
            buff += data
        })
        res.on("end", () => {
            data.push(buff.toString())
            callback()
        })
    })
}

fetch(list[0], () => {
    fetch(list[1], () => {
        fetch(list[2], () => {
            data.forEach(item => {
                console.log(item)
            })
        })
    })
})

