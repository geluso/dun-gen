class Rect {
  constructor(xx, yy, width, height) {
    this.width = width * Math.random() + 30
    this.height = height * Math.random() + 20

    this.xx = xx * Math.random()
    this.yy = yy * Math.random()

    this.width = Math.round(this.width)
    this.height = Math.round(this.height)
    this.xx = Math.round(this.xx)
    this.yy = Math.round(this.yy)

    this.width = Math.max(this.width, 40)
    this.height = Math.max(this.height, 40)

    this.nw = new Point(this.xx, this.yy)
    this.ne = new Point(this.xx + this.width, this.yy)
    this.sw = new Point(this.xx, this.yy + this.height)
    this.se = new Point(this.xx + this.width, this.yy + this.height)
  }

  includesPoint(pp) {
    return this.xx < pp.xx && pp.xx < this.xx + this.width &&
      this.yy < pp.yy && pp.yy < this.yy + this.height
  }

  // rectangle intersection algorithm thanks to e.James on StackOverflow
  // https://stackoverflow.com/a/306379/735468
  valueInRange(value, min, max) {
    return (value >= min) && (value <= max)
  }

  intersectsRect(other) {
    let xOverlap = this.valueInRange(this.xx, other.xx, other.xx + other.width) ||
                   this.valueInRange(other.xx, this.xx, this.xx + this.width);

    let yOverlap = this.valueInRange(this.yy, other.yy, other.yy + other.height) ||
                   this.valueInRange(other.yy, this.yy, this.yy + this.height);
    return xOverlap && yOverlap;
  }
}
