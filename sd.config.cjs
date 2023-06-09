module.exports = {
  source: ['sd-input/src/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return ['Do not edit directly, this file was autogenerated'];
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'figma',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
};
