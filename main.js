import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

//pattern1     
/**
 * ******
 * ******
 * ******
 * ******
 * ******
 */

//pattern2
/**
 * *
 * **
 * ***
 * ****
 * *****
 */

//pattern3
/**
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

//pattern4
/**
 * 1
 * 22
 * 333
 * 4444
 * 55555
 */

//pattern5
/**
 * *****
 * ****
 * ***
 * **
 * *
 */
//pattern6
/**
 * 12345
 * 1234
 * 123
 * 12
 * 1
 */

//pattern7
/**
 *    *
 *   ***
 *  *****
   ******* 
  *********
 */
//pattern8
/**
 *  *********
 *   *******
 *    *****
 *     ***
 *      *
 */
//pattern9
/**
 *    *
 *   ***
 *  *****
   ******* 
  *********
  *********
 * *******
 *  *****
 *   ***
 *    *
 */

//pattern10
/**
 * *
 * **
 * ***
 * ****
 * *****
 * ****
 * ***
 * **
 * *
 */

//pattern11
/**
 * 1
 * 0 1
 * 1 0 1
 * 0 1 0 1
 * 1 0 1 0 1
 */
//pattern12
/**
 * 1      1
 * 12    21   
 * 123  321
 * 12344321
 * 
 */
function pattern1(n) {
  let str = ""
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str = str + "*"
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern2(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str = str + "*"
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern3(n) {
  let str = "";
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      str = str + j
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern4(n) {
  let str = "";
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      str = str + i
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern5(n) {
  let str = ""
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      str = str + "*"
    }
    str = str + "\n"
    n--
  }
  console.log(str)
}
function pattern6(n) {
  let str = ""
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= n; j++) {
      str = str + j
    }
    str = str + "\n"
    n--
  }
  console.log(str)
}
function pattern7(n) {
  let str = ""
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++) {
      str = str + " "
    }
    for (let j = 0; j < (2 * i + 1); j++) {
      str = str + "*"
    }
    for (let j = 0; j < (n - i - 1); j++) {
      str = str + " "
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern8(n) {
  let str = ""
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str = str + " "
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str = str + "*"
    }
    for (let j = 0; j < i; j++) {
      str = str + " "
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern9(n) {
  let str = ""
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++) {
      str = str + " "
    }
    for (let j = 0; j < (2 * i + 1); j++) {
      str = str + "*"
    }
    for (let j = 0; j < (n - i - 1); j++) {
      str = str + " "
    }
    str = str + "\n"
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str = str + " "
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str = str + "*"
    }
    for (let j = 0; j < i; j++) {
      str = str + " "
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern10(n) {
  let str = ""
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i
    for (let j = 1; j <= stars; j++) {
      str = str + "*"
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern11(n) {
  let str = ""
  let start = 1
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) { start = 1 }
    else {
      start = 0
    }
    for (let j = 0; j <= i; j++) {
      str = str + start
      start  = 1-start
    }
    str = str + "\n"
  }
  console.log(str)
}
function pattern12(n) {
  let str = ""
  let space = 2*(n-1)
  for (let i = 1; i <= n; i++) {
    for(let j=1;j<=i;j++){
      str = str + j
    }
    for(let j=1;j<=space;j++){
      str = str + " "
    }
    for(let j=i;j>=1;j--){
      str = str + j
    }
    str = str + "\n"
    space = space-2
  }
  console.log(str)
}
pattern1(5)
pattern2(5)
pattern3(6)
pattern4(6)
pattern5(6)
pattern6(5)
pattern7(5)
pattern8(5)
pattern9(5)
pattern10(5)
pattern11(5)
pattern12(5)
