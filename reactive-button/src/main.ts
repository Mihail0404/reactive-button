class trackChange {}

class Element {
  value: {
    volume: number;
    count: number;
  };
  button: HTMLButtonElement;
  constructor(button: HTMLButtonElement) {
    this.value = {
      get count(): number {
        return this.volume;
      },

      set count(value: number) {
        this.volume = value;
        document.querySelector("#main").textContent = "Count is: " + this.count;
      },
    };

    this.value.volume = 0;

    this.button = button;
    this.button.textContent = "Count is: " + this.value.count;

    document.addEventListener("click", () => {
      this.value.count++;
    });

    this.value.count = 9;
  }
}

const button = new Element(document.querySelector("#main"));
