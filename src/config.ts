import dotenv from 'dotenv'

dotenv.config()
const defaultConfig = {
  PORT: 4000,
  DB_URL: 'mongodb://localhost:27017/teststarter',
}
const envConfigs = {
  test: {
    DB_URL: 'mongodb://localhost:27017/teststarter_test',
  },
  development: {},
}

const ENV = process.env.NODE_ENV || 'development'

export default { ...defaultConfig, ...(envConfigs[ENV] || {}), ENV }
