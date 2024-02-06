function Color(r, g, b, a) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
}

Color.prototype.rgb = function () {
  return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

Color.prototype.hex = function () {
  return `#${
    this.r.toString(16).padStart(2, "0") +
    this.g.toString(16).padStart(2, "0") +
    this.b.toString(16).padStart(2, "0")
  }`;
};

Color.prototype.rgba = function () {
  return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
};

const color = new Color(100, 200, 100, 5);

console.log(color.rgb());
console.log(color.hex());
console.log(color.rgba());

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const value = document.getElementById("colorInput").value.trim();
  const values = value.split(" ");
  if (values.length > 4 || values.length < 3) {
    alert("invalid input");
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] > 255 || values[i] < 0) {
        alert("invalid input");
        return;
      }
    }
    displayColor(new Color(values[0], values[1], values[2], values[3] || 1));
  }
});

function displayColor(color) {
  document.body.style.backgroundColor = color.rgba();
}
