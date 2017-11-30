export default () => {
  return new Promise(resolve => {
    resolve({
      json() {
        return {};
      },
    });
  });
};
