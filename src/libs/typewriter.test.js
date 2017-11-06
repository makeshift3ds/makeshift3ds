import TypeWriter from './typewriter';

let typer;

describe('TypeWriter', () => {
  beforeEach(() => {
    typer = new TypeWriter('.typed-class', '.container-class');
    document.body.innerHTML = `
        <body>
          <div class="container-class">
            <p class="typed-class">this gets <b>typed</b></p>
          </div>
        </body>
      `;
  });
  describe('given no constructor arguments', () => {
    test('defaults the typed and container classes', () => {
      typer = new TypeWriter();
      expect(typer.typedSelector).toBe('.typed');
      expect(typer.containerSelector).toBe('.typed-container');
    });
  });

  describe('given constructor arguments', () => {
    test('sets default classes and finds elements', () => {
      expect(typer.typedSelector).toBe('.typed-class');
      expect(typer.containerSelector).toBe('.container-class');
      expect(typer.getTypedElements().length).toEqual(1);
      expect(typer.getTypedContainer().classList[0]).toEqual('container-class');
    });
  });
});
