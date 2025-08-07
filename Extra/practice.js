let userinfo = {
  userage: "17",
};
let newinfo = userinfo.userage;
let number = Number(newinfo);
console.log(newinfo);
console.log(typeof newinfo);
console.log(number);
console.log(typeof number);

if (number === 18) {
  console.log("He is eligble for vote");
} else {
  console.log("he is not elgible for vote");
}
