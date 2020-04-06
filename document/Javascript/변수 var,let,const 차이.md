# 변수

자바스크립트에서는 변수를 **var, let, const** 로 선언할 수 있고, 어떤 것을 사용하느냐에 따라서 변수의 **유효범위(Scope)** 가 달라진다.
변수의 스코프는 크게 전역 스코프와 지역 스코프가 있다. **전역 스코프**는 변수가 함수 밖 혹은 { } 블록 밖에서 사용 가능한 경우를 말하며, **지역 스코프**는 코드의 특정 부분에서만 사용 가능한 경우를 말한다.

지역 스코프를 또다시 함수 스코프와 블록 스코프로 나눌 수 있다. **함수 스코프**는 어떤 변수를 function 내에서 사용하였다면, function 영역 내에서만 사용할 수 있는 경우를 말한다. 
그리고 **블록 스코프**는 { } 블록 내에서 어떤 변수를 선언하였다면 그 변수는 해당 { } 블록 내에서만 사용할 수 있는 경우를 말한다.

스코프를 고려해서 var 과 const, let을 비교해보자.


## var
변수를 선언한다. 변수 재할당과 재선언이 가능하다. 유효범위는 function 단위이다.

<pre>
<code>
var x = "hello";
var x = "world"; // 재선언 가능
x = "!" //재할당 가능
</code>
</pre>

<pre>
<code>
var foo = "hello";
if(typeof foo === 'string'){
	var result = true;
} else {
  var result = false;
}
console.log(result); //ture 출력, 함수 스코프
</code>
</pre>

## const
상수를 선언한다. 한 번 선언된 상수는 다시 재선언 및 재할당 할 수 없다. 유효 범위는 { } 블록 단위이다.

<pre>
<code>
const x = "hello";
const x = "world"; // Syntax Error : 변수 x가 이미 선언 되었음. 
x = "!" //Type Error : const로 선언된 값은 변경 불가.
</code>
</pre>

## let
변수를 선언한다. 값을 재선언은 할 수 없지만, 재할당은 가능하다. 유효 범위는 { } 블록 단위이다.

<pre>
<code>
let x = "hello";
let x = "world"; // Syntax Error : 변수 x가 이미 선언 되었음. 
x = "!" //재할당 가능
</code>
</pre>

<pre>
<code>
var foo = "hello";
if(typeof foo === 'string'){
	const result = true;
} else {
  const result = false;
}

console.log(result);    // result : result is not defined, let과 const는 블록 스코프이므로 {} 내에서만 유효함. 
</code>
</pre>


## 호이스팅(Hoisting)

var, let, const는 변수 호이스팅에서도 차이점이 있다.

자바스크립트는 함수가 실행되기 전에 자바스크립트 Parser(파서)가 코드를 한 번 훑어서 변수나 함수 선언에 대한 정보를 기억한다. 그리고 필요한 변수와 함수를 모두 끌어올려서 유효범위(스코프)의 최상단에 선언한다.

### var 
#### 원본 코드
```
function foo(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
}
```

#### 호이스팅 결과

```
function foo(){
    var i; // var의 스코프는 function 단위이므로, function 범위의 최상단에 위치함
    for(var i=0;i<5;i++){
        console.log(i);
    }
}
```
<br>

### let/const
let과 const는 **TDZ(Temporal Dead Zone)** 의 영향을 받는다. 따라서, 변수가 초기화되기 전에 접근을 하려고 하면 Reference Error가 발생한다. 그 이유를 알아보기 전에 변수가 생성되는 과정을 살펴보자. 

> 첫 번째로 선언단계 : 변수를 실행컨텍스트의 변수 객체에 등록한다.
>
> 두 번째로 초기화 단계 : 실행 컨텍스트에 등록 된 변수객체에 대한 메모리를 할당한다. 이 단계에서 변수는 undefined로 초기화 된다.
>
> 세 번째로 할당단계 : undefined로 초기화 된 변수에 값을 할당한다.


var로 선언한 변수는 선언단계와 초기화 단계가 동시에 진행된다. 따라서, 아래의 코드를 보면 결과값이 undefined가 나온다.

#### 원본 코드

```
console.log(x); //undefined 출력
var x = "hello";
```

#### 호이스팅 실행시

```
var x; //undefined 상태
console.log(x); //undefined 출력
x = "hello";
```

let으로 선언한 변수는 선언단계와 초기화 단계가 분리되어 실행된다. 따라서, 아래의 코드를 보면 결과값이 Reference Error다.

#### 원본 코드

```
console.log(x); // ReferenceError: name is not defined 출력
let x = "hello";
```

#### 호이스팅 실행시

```
let x; //변수 객체에 등록, 아직 초기화 단계 X
console.log(x); //ReferenceError: name is not defined
x = "hello";
```

let 변수 x는 호이스팅 되어 x가 선언되지만, 초기화 단계는 실제 let이 사용된 코드에 도착했을 때 이루어진다.

const로 선언한 변수 또한 let과 같은 이유로 Reference Error가 일어나지만, 상수이기 때문에 선언과 동시에 초기화를 해줘야 SyntaxError가 발생하지 않는다.


[참고 링크] https://medium.com/sjk5766/var-let-const-%ED%8A%B9%EC%A7%95-%EB%B0%8F-scope-335a078cec04
