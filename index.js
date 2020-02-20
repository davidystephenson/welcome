const password = process.argv[2]

const message = password === 'password'
  ? 'Come in!'
  : 'Go away!'

console.log(message)