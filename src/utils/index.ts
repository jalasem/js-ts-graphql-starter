import fs from 'fs'

export const readFiles = (
  dir: string,
  filter = (name: string) => true,
): Promise<string[]> =>
  new Promise((resolve, reject) =>
    fs.readdir(dir, (err, files) => {
      if (err) return reject(err)
      resolve(files.filter(filter))
    }),
  )

export const loadFile = dir =>
  new Promise((resolve, reject) => {
    fs.readFile(dir, { encoding: 'utf-8' }, (err, file) => {
      if (err) return reject(err)
      resolve(file)
    })
  })
