export function One() {
  const taskOne = 'I prefer const when I can.';
  return taskOne;
}

export function Two() {
  let taskTwo = 'But sometimes';
  return taskTwo;
}

export function Three() {
  let taskThree = 'let is okay';
  return taskThree;
}

export function combination() {
  const combinedText =  Two + Three;
  return combinedText;
}
