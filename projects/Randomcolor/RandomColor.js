 const button = document.querySelector('button');
const h1 = document.querySelector('h1')

button.addEventListener('click',function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
})
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return newColor = `rgb(${r}, ${g}, ${b})`;
}
/*
class Pet {
  constructor(name,age) {
    console.log("IN CAT CONSTRUCTOR!");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super{name, age};
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'MEOWW!!';
  }
}
class Dog extends Pet {
  bark() {
    return 'WOOF!!'
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}
*/