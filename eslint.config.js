import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'vue/no-export-in-script-setup': 'off',
    'import/first': 'off',
    'import/no-duplicates': 'off',
  },
})
