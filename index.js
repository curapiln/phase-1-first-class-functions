

function receivesAFunction(callBackFunction) {
    return callBackFunction()

}

function naomisFunction () {
    return "work"
}

function returnsANamedFunction() {
    return naomisFunction
}


function returnsAnAnonymousFunction() {
  return function() {
        return "work"
    } 
}