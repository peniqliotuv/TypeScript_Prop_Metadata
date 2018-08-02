const fs = require('fs');
const path = require('path');
const { getMetadata, IMetadataAttribute } = require('./src/Metadata/Metadata');
const componentDirectories = ['TestComponent'];

const FOLDER_NAME: string = 'metadata';

const cache = {};

function scrapeMetadata(): void {
  componentDirectories.forEach(dir => {
    fs.readdirSync(`src/${dir}`)
      .filter(file => file.includes('Props'))
      .forEach(file => {
        const propClass = require(`./src/${dir}/${file}`).default;
        if (typeof propClass !== 'function') {
          throw new Error('Must export an instance of a class');
        }

        cache[file] = {};
        const props: any = new propClass();
        const fields: Array<string> = Object.keys(props);
        fields.forEach(field => {
          cache[file][field] = getMetadata(props, field);
        });
      });
  });
}

function generateMetadata(): void {
  if (!fs.existsSync(FOLDER_NAME)) {
    fs.mkdirSync(FOLDER_NAME);
  } else {
    const dir = fs.readdirSync(FOLDER_NAME);
    for (const file of dir) {
      fs.unlinkSync(path.join(FOLDER_NAME, file));
    }
  }

  for (const cachedFile in cache) {
    if (cache.hasOwnProperty(cachedFile)) {
      const metadataValues = cache[cachedFile];
      writeDataToFile(`${FOLDER_NAME}/${cachedFile}.json`, metadataValues);
    }
  }
}

function writeDataToFile(filePath: string, metadataValues: any): boolean {
  if (fs.existsSync(filePath)) {
    console.error(`${filePath} exists, cannot create file.`);
    return false;
  }
  const moduleDefinition = {
    fields: {
      properties: metadataValues,
      type: typeof metadataValues
    }
  };

  fs.writeFileSync(filePath, JSON.stringify(moduleDefinition));
  return true;
}

scrapeMetadata();
generateMetadata();
