/*“자바스크립트의 모든 것이 다 객체다”라는 말이 있습니다. 
자바스크립트라는 언어가 구현된 방식 덕분에 객체가 아닌 다른 자료형도 객체처럼 사용할 수 있다. 
다른 자료형에도 여러 유용한 프로퍼티나 메소드를 사용할 수 있다는 겁니다.*/

arr.length
arr.slice()
arr.push()
arr.pop()
arr.splice()

/*이런 것 모두 배열의 프로퍼티/메소드라고 할 수 있다. 
우리는 배열 [...]을 선언하는 것 같지만, 
자바스크립트는 뒤에서 이걸 객체처럼 구현하기 때문에 배열에도 다양한 프로퍼티와 메소드가 있는 겁니다.
아무튼 중요한 점은 숫자형, 문자열에도 우리가 사용할 수 있는 다양한 메소드가 있는 것이다*/




/*숫자형 메소드
.toFixed()소수를 다룰 때 사용
파라미터로 숫자를 전달해 주면, 그 값만큼 소수점 아래 자릿수를 고정
*/
/* 숫자에 바로 사용 */
console.log(0.3.toFixed(2)); // 0.30

/* 숫자형 변수에 사용 */
let myNumber = 0.3591;
console.log(myNumber.toFixed(3)); // 0.359

/*소수를 포매팅할 때 유용*/




/*문자열 메소드
.length는 메소드는 아니고 프로퍼티. 배열의 .length처럼 문자열의 길이를 가져올 수 있습니다.*/
let myString = 'codeit';
console.log(myString.length); // 6



/*문자열 메소드
.charAt()
[]
어떻게 보면 문자열은 ‘문자'의 배열이라고 생각할 수 있기 때문에 배열과 비슷한 면이 많다. 
.charAt()이나 대괄호 표기법으로 특정 위치(인덱스)에 있는 문자를 가져올 수 있다.*/
let myString2 = 'codeit';
console.log(myString2.charAt(3)); // e
console.log(myString2[0]); // c

/*이걸 활용해서, 예를 들어 문자열이 팰린드롬(palindrome)인지 확인할 수 있다. 
토마토나 기러기처럼 거꾸로 읽어도 똑같은 단어를 팰린드롬이라고 한다.*/
function isPalindrome(word) {
  // 단어 1/2지점까지 반복
  for (let i = 0; i < word.length / 2; i++) {
    // i번째 문자와 끝에서 i번째 문자와 비교
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));



/*문자열 메소드
.slice() 배열의 .slice() 메소드와 똑같은데요. 
두 인덱스 사이의 문자열을 잘라내 줍니다.*/
let myString3 = 'codeit';
console.log(myString3.slice(0, 4)); // code (0과 4 사이)
console.log(myString3.slice(4)); // it (4부터 끝까지)
console.log(myString3.slice()); // codeit (문자열 전체)



/*문자열 메소드
.toUpperCase() 알파벳 문자를 모두 대문자로 만들어 줍니다.
.toLowerCase() 알파벳 문자를 모두 소문자로 만들어 줍니다.*/
let myString4 = 'CoDeIt';
console.log(myString4.toUpperCase()); // CODEIT

let myString5 = 'CoDeIt';
console.log(myString5.toLowerCase()); // codeit



/*문자열 메소드
.repeat() 이 함수도 사실 메소드라고 부를 수 있다. 
문자열을 여러 번 반복*/
let myStr = '123';
consol.log(myStr.repeat(5)); // 123123123123123



/*문자열 메소드
.trim()
문자열 시작과 끝부분에 있는 모든 공백 문자를 제거(trim)해준다. 
(\n은 줄바꿈 문자를 뜻하고 \t는 탭 문자를 뜻합니다.)*/
let myString6 = '   Hello Codeit!   ';
console.log(myString6.trim()); //Hello Codeit!

let yourString = '\n\nHello Codeit!\t\t';
console.log(yourString.trim()); //Hello Codeit!





