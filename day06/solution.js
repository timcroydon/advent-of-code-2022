var raw = [/* input */]
    
var sequence = []

for (let i = 0; i < raw.length; ++i) {
    if (!sequence.includes(raw[i])) {
        sequence.push(raw[i])
    } else {
        sequence = [raw[i]]
    }

    if (sequence.length == 4) {
        console.log('Start byte = ' + i)
        break
    }
}
