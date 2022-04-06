var input = process.argv.slice(2);

if (input)
  console.log(reverseList(input));

function reverseList(original) {
  return original.reverse();
}
