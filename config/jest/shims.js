/** 
 * add requestAnimationFrame because jest does not provide it and react depends on it. Even in tests.
 * See Also: https://github.com/facebook/jest/issues/4545 && https://github.com/facebook/jest/issues/1644
 **/
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
