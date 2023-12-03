export default class Canvas {
  constructor({ canvas_element }) {
    this.canvas = canvas_element;
    this.context = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
