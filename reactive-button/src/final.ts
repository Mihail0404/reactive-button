class RefElements {
  data: {
    _value: string;
    value: string;
  };

  constructor(initialData: string, varName: string) {
    function changeValue(variableName: string, value: string) {
      const elementList = document.querySelectorAll(
        `[data-ref="${variableName}"]`
      );
      for (let element of elementList) {
        element.textContent = value;
      }
    }

    changeValue(varName, initialData);

    this.data = {
      _value: initialData,
      get value(): string {
        return this._value;
      },

      set value(newValue: string) {
        if (this._value != newValue) {
          this._value = newValue;
        }
        console.log(`${varName} change to ${newValue}!`);
        changeValue(varName, newValue);
      },
    };
  }
}

let test = new RefElements("text", "test");
let test2 = new RefElements("another", "test2");

// test.data.value = "espresso";
// test2.data.value = "readonly";

document.addEventListener("click", () => {
  test.data.value = String(Math.round(Math.random() * 100));
  test2.data.value = "another";
});
