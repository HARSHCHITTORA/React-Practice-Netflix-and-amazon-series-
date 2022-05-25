

function add(a,b) {
  return (
    a+b
  )
}
function sub(a,b) {
    return (
      a-b
    )
  }
  function multiply(a,b) {
    return (
      a*b
    )
  }
  function div(a,b) {
      let div=a/b;
      div=div.toFixed(2)
    return (
        div
    )
  }

export {add,sub,multiply,div}