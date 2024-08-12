export default function scrambler(concatenatedString) {
  const csLength = concatenatedString.length;

  let newString = "";
  const ids = [];

  const genRandomNumber = () => {
    let random = Math.round(Math.random() * (csLength - 1));
    if (ids.includes(random)) genRandomNumber();
    else ids.push(random);
  };
  for (let i = 0; i < csLength; i++) {
    genRandomNumber();
  }
  for (let i = 0; i < csLength; i++) {
    newString += concatenatedString[ids[i]];
  }
  return newString;
}
