export default () => {
  return ({ addComponents }) => {
    addComponents([
      {
        '.question-number': {
          width: '40px',
          height: '40px',
        }
      }
    ])
  }
}