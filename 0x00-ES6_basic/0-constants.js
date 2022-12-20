export function One() {
  const taskOne = 'I prefer const';
  return taskOne;
}

export function Two() {
  const taskTwo = 'when I can.';
  return taskTwo;
}

export function Three() {
  let taskThree = 'But sometimes';
  return taskThree;
}

export function Four() {
  let taskThree = 'let is okay';
  return taskThree;
}

export function combination() {
  const combinedText = One + Two + Three + Four;
  return combinedText;
}
