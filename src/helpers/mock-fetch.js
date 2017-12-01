export default () => {
  return new Promise(resolve => {
    resolve({
      json() {
        return [{id:1, title:"foo"}];
      },
    });
  });
};
