/*jshint esversion: 6 */
/*jshint node: true */

class Time {

  constructor () {
    this.millis = {};
    this.millis.lastFrame = millis();
  }

  update () {
    this.millis.lastFrame = millis();
  }

  deltaTime () {
    return (millis() - this.millis.lastFrame) / 1000;
  }

}
