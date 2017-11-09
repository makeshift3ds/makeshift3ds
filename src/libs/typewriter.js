/** Class for emulating typing of dom content */

export default class TypeWriter {
  /**
   * Create an instance and setup defaults
   * @param {string} typedSelector 
   */
  constructor(typedSelector) {
    // set element selectors
    this.typedSelector = typedSelector || '.typed';

    // grab the elements to be typed
    this.typedElements = this.getTypedElements();

    // warn if there no typedElements where found
    if (!this.typedElements.length) {
      return console.warn('no elements found');
    }

    // set the initial element
    this.currentElementIndex = 0;
    this.setCurrentElement();

    // set defaults
    this.currentElement;
    this.currentCharIndex = 0;
  }

  /**
   * return an array of the elements to be typed
   * 
   * @return {Array}
   */
  getTypedElements() {
    return Array.from(document.querySelectorAll(this.typedSelector));
  }

  /**
   * iteration method to add a character to the currentElement.
   * 
   * @example <caption>Used with a timer/interval</caption>
   * setInterval(() => TypeWriter.typer(), 100);
   */
  typer() {
    // if there is no next character
    if (this.currentCharIndex > this.innerHTML.length) {
      // reset the index
      this.currentCharIndex = 0;

      // if there is no next element
      this.currentElementIndex++;
      if (this.currentElementIndex > this.typedElements.length - 1) {
        // clear the interval and stop the execution
        return clearInterval(this.timer);
      }

      // otherwise move on to the next element
      this.setCurrentElement();
    }

    // slice the current content and put in the innerHtml
    this.currentElement.innerHTML = this.innerHTML.slice(
      0,
      this.currentCharIndex++
    );
  }

  /**
   * get the next element from typedElements
   */
  setCurrentElement() {
    if (this.currentElement) {
      this.currentElement.classList.remove('active');
    }
    this.currentElement = this.typedElements[this.currentElementIndex];
    this.innerHTML = this.currentElement.innerHTML;
    this.currentElement.classList.add('active', 'visible');
  }

  startTyping() {
    this.timer = setInterval(() => {
      this.typer();
    }, 60);
  }
}
