//Your code here
function justInvoke(functionToInvoke) {
  return functionToInvoke();
}

function setThisWithCall(functionToInvoke, thisValue, myArgument) {
  return functionToInvoke.call(thisValue, myArgument);
}

function setThisWithApply(functionToInvoke, thisValue, myArguments) {
  return functionToInvoke.apply(thisValue, myArguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
