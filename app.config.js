console.log(process.env)

const config = {
  production: {
  
  },
  
  development: {
  
  }

}

module.exports = config[process.env]