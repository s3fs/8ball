const responses = [ 
    'As I see it, yes',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'It is certain',
    'It is decidedly so',
    'Most likely',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Outlook good',
    'Reply hazy, try again',
    'Signs point to yes',
    'Very doubtful',
    'Without a doubt',
    'Yes',
    'Yes – definitely',
    'You may rely on it'
]

let ball = document.querySelector('#ball')
let container = document.querySelector('#container')
let res = document.querySelector('#res')
let intro = document.querySelector('#intro')

ball.onclick = () => {
res.classList.add('invisible')
ball.classList.add('click')

res.innerHTML = `The Magic Ball says: ${responses[Math.floor(Math.random() * (responses.length - 0 + 1) + 0)]}`

setTimeout(() => {
    res.classList.remove('invisible')
    ball.classList.remove('click')
    }, 3000)
}