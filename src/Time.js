export default class Time {
  constructor(game_object) {
    this.game = game_object;
    this.last_time = 0;
    this.current_time = 0;
    this.delta_time = 0;
  }

  start(game_object) {
    this.game_object = game_object;
    this.update(0);
  }

  update(time_stamp) {
    this.last_time = this.current_time;
    this.current_time = time_stamp;
    this.delta_time = (this.current_time - this.last_time) / 1000;
    this.game_object.update();

    requestAnimationFrame(this.update.bind(this));
  }

  getDeltaTime() {
    return this.delta_time;
  }
}
