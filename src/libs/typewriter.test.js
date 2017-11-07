import TypeWriter from './typewriter';

let typer, spy;
jest.useFakeTimers();

describe('TypeWriter', () => {
  describe('constructor', () => {
    /**
     * mock console.warn to avoid polluting test output
     */
    beforeEach(() => {
      spy = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    });

    test('given no typedSelector it defaults to typed class', () => {
      typer = new TypeWriter();
      expect(typer.typedSelector).toBe('.typed');
    });

    test('given typedSelector it finds the right number of elements', () => {
      document.body.innerHTML = `<p class="typed-class">typed</p><p class="typed-class">typed</p>`;
      typer = new TypeWriter('.typed-class');
      expect(typer.typedElements.length).toEqual(2);
    });

    test('given no typed elements are found it sends a warning to the console', () => {
      typer = new TypeWriter();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('given constructor arguments', () => {
    beforeEach(() => {
      document.body.innerHTML = `<p class="typed-class">typed</p>`;
    });

    test('it finds the right elements', () => {
      typer = new TypeWriter('.typed-class');
      expect(typer.typedSelector).toBe('.typed-class');
      expect(typer.getTypedElements().length).toEqual(1);
      expect(typer.currentElement).toBeDefined();
    });

    test('it types when invoked', () => {
      typer = new TypeWriter('.typed-class');
      jest.runTimersToTime(2000);
      typer.startTyping();
      expect(document.querySelector('.typed-class:first-child').innerHTML).toBe(
        'typed'
      );
    });
  });
});
