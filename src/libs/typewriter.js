export default class TypeWriter {
  /**
  * Creates an instance of TypeWriter.
  * @param {String} typedSelector 
  * @param {String} containerSelector 
  * @memberof TypeWriter
  */
  constructor(typedSelector, containerSelector) {
    this.typedSelector = typedSelector || '.typed';
    this.containerSelector = containerSelector || '.typed-container';

    this.typedElements = this.getTypedElements();
    this.innerHTML;
    this.currentElement;
    this.currentElementIndex = 0;
  }

  /**
  * 
  * 
  * @returns {Array}
  * @memberof TypeWriter
  */
  getTypedElements() {
    return Array.from(document.querySelectorAll(this.typedSelector));
  }

  /**
   * 
   * @memberof TypeWriter
   */
  typer() {
    if (this.currentCharIndex > this.innerHTML.length - 1) {
      this.currentElementIndex++;
      this.currentCharIndex = 0;

      if (this.currentElementIndex > this.typedElements.length - 1) {
        clearInterval(this.timer);
        return;
      } else {
        this.setCurrentElement();
      }
    }

    if (!this.currentCharIndex) {
      this.currentCharIndex = 0;
    }
    this.currentElement.innerHTML = this.innerHTML.slice(
      0,
      this.currentCharIndex++
    );
  }

  setCurrentElement() {
    if (this.currentElement) {
      this.currentElement.classList.remove('active');
    }
    this.currentElement = this.typedElements[this.currentElementIndex];
    this.innerHTML = this.currentElement.innerHTML;
    this.currentElement.innerHTML = '';
    this.currentElement.classList.add('active', 'visible');
  }

  startTyping() {
    this.setCurrentElement();
    this.timer = setInterval(() => {
      this.typer();
    }, 60);
  }
}

// const nodeList = document.querySelectorAll('.typed');

// const typedList = Array.from(nodeList).map(i => i.innerText);

// const codeWindow = document.getElementById('code-window');

// let currentElement,
//   nodeListIndex = 0,
//   charIndex = 0;

// const createTextElement = () => {
//   let el = document.createElement('p');
//   el.classList.add('typed', 'active');
//   let textNode = document.createTextNode('test');
//   el.appendChild(textNode);
//   return el;
// };

// const typeWriter = () => {
//   // if there are no typedlistElements
//   // this should be done in the class constructor
//   if (!typedList.length) {
//     clearInterval(typeWriterInterval);
//     return;
//   }

//   // get the current typedList element
//   let typedListElement = typedList[nodeListIndex];

//   // if the element has no text continue to the next element
//   if (!typedListElement.length) {
//     nodeListIndex++;
//     return;
//   }

//   //   if(nodeListIndex > nodeList.length-1) {
//   //     // kill interval and break from this function
//   //     clearInterval(typeWriterInterval);
//   //     return;
//   //   }

//   //   let typedListElement = typedList[nodeListIndex];

//   //   if(charIndex == 0/*charIndex > nodeListElement.length-1*/) {
//   //     currentElement = createTextElement();
//   //     codeWindow.appendChild(currentElement);
//   //     nodeListIndex++;
//   //     // console.log('yoyo', currentElement);
//   //     // return;
//   //   }

//   // clearInterval(typeWriterInterval);

//   // do the checks here
//   // if there is not another text character in nodeListElement
//   // see if there is a next nodeListElement
//   // if there is, increment nodeListIndex and let the iteration continue.

//   // if there is a next nodelistindex item
//   // create an element and append it to the codeWindow
//   // if not kill the interval
//   let typedListElement = typedList[nodeListIndex];

//   if (charIndex + 1 > typedListElement.length) {
//     if (nodeListIndex + 1 > typedList) {
//       clearInterval();
//       return;
//     }

//     charIndex = 0;
//   }

//   currentElement.innerText = typedListElement.slice(0, charIndex++);
// };

// const typeWriterInterval = setInterval('typeWriter()', 1000);
