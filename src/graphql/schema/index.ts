import { loadFile, readFiles } from '../../utils'

export default async function getSchemas() {
  const gqlFiles = await readFiles(`${__dirname}`, file =>
    file.endsWith('.gql'),
  )
  const schemas = await Promise.all(
    gqlFiles.map(name => loadFile(`${__dirname}/${name}`)),
  )
  return schemas.join(' ')
}
