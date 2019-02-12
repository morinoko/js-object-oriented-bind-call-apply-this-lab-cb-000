//Your code here
function justInvoke(functionToInvoke) {
  return functionToInvoke();
}

function setThisWithCall(functionToInvoke, thisValue, arg) {
  return functionToInvoke.call(thisValue, arg);
}

function setThisWithApply(functionToInvoke, thisValue, args) {
  return functionToInvoke.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
