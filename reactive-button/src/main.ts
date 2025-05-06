// class trackChange {}

class Element {
  value: {
    _count: number;
    count: number;
  };
  element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;

    this.value = {
      _count: 0,
      get count(): number {
        return this._count;
      },

      set count(value: number) {
        this._count = value;
        element.textContent = "Count is: " + this.count;
      },
    };

    this.element.textContent = "Count is: " + this.value.count;

    document.addEventListener("click", () => {
      this.value.count++;
    });

    this.value.count = 9;
  }
}

new Element(document.querySelector("#main"));
new Element(document.querySelector("#main4"));
