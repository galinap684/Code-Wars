/*
Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

[F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(m) being the smallest one such as F(m) * F(m+1) > prod.
*/

const productFib = (prod) => {

let fib = [0, 1]

while (fib[fib.length - 1] * fib[fib.length - 2] < prod) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2])
}

return fib[fib.length - 2] * fib[fib.length - 1] === prod ? [fib[fib.length - 2], fib[fib.length - 1], true] : [fib[fib.length - 2], fib[fib.length - 1], false]

}
