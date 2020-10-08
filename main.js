const brain = require('brain.js')
const net = new brain.recurrent.LSTM();

net.train([
    {input: 'yes', output: 'no'},
    {input: 'no', output: 'yes'}
])

const output = net.run('yes')

console.log(output)