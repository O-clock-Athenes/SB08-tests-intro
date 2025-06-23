
export function add(a, b){
  const isNumberA = !isNaN(a) && !isNaN(parseFloat(a));
  const isNumberB = !isNaN(b) && !isNaN(parseFloat(b));
  if (!isNumberA ){
    throw new Error(`Invalid input: ${a} must be a number or numeric string.`);
  }
  if (!isNumberB ){
    throw new Error(`Invalid input: ${a} must be a number or numeric string.`);
  }
  return parseFloat(a, 10) + parseFloat(b, 10);
}

export function subtract(a, b){
  return a - b;
}