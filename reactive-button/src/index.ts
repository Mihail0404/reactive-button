class Button {
  count: { value: number };
  button: HTMLButtonElement;
  constructor(button: HTMLButtonElement) {
    this.button = button;
    this.count = {
      value: 0,
    };
    this.button.textContent = "Count is: " + this.count.value;
    // this.button.addEventListener("click", () => {
    //   this.count++;
    //   this.button.textContent = "Count is: " + this.count;
    // });

    document.addEventListener("click", () => {
      this.count.value++;
    });
  }
}

const reactive_button = new Button(
  document.querySelector<HTMLButtonElement>("#main-button")
);
