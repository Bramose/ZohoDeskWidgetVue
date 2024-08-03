import AdmZip from 'adm-zip'
import fs from 'fs'

async function createZipArchive() {
  const zip = new AdmZip()

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }

  const outputFile = './dist/app.zip'
  zip.addLocalFolder('./build')
  zip.addLocalFile('./plugin-manifest.json')
  zip.addLocalFile('././resources.json')
  zip.writeZip(outputFile)
  console.log(`Created ${outputFile} successfully`)
}

createZipArchive()
