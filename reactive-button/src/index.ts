class RefElements {
  elements: NodeList;
  varList: Map<string, Node[]>;
  constructor(variables: {}) {
    this.varList = new Map();
    this.elements = document.querySelectorAll(`[data-ref]`);

    for (const element of this.elements) {
      if (this.varList.has(element["dataset"]["ref"])) {
        this.varList.get(element["dataset"]["ref"]).push(element);
      } else {
        this.varList.set(element["dataset"]["ref"], [element]);
      }
    }
    console.log(this.varList);

    for (const variableName of this.varList.keys()) {
      const elementsList = this.varList.get(variableName);
      if (!elementsList) break;
      for (const element of elementsList) {
        let temp = {
          _value: variables[variableName],
          get value(): string {
            return this._value;
          },

          set value(newValue: string) {
            this._value = newValue;
            element.textContent = this.value;
          },
        };
        element.textContent = temp.value;
      }
    }
  }
}

let value = "text";
let value2 = "test";

new RefElements({
  value: value,
  value2: value2,
});
