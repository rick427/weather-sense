module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/common': './src/common',
          '@/screens': './src/screens',
          '@/routes': './src/routes',
          '@/services': './src/services',
        }
      }
    ],
    'react-native-worklets/plugin',
  ]
};
