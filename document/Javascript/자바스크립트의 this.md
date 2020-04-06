## This

자바스크립트의 this는 Java나 다른 객체 지향 언어의 this와는 다른 성격을 가지고 있다.

보통 this는 클래스로부터 생성되는 인스터스 중 현재 객체를 지칭하는데, 자바스크립트에서는 함수 실행, 메소드 실행, 생성자 실행마다 this의 의미가 달라진다.

* Java this 사용 예시

```
public class Person{
    private int age;
    private String name;
    
    public Person(String name, ing age){
        this.name = name;
        this.age = age;
    }
}
```

* Javascript this 사용 예시

```
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
```

자바스크립트의 this의 값은 함수를 호출한 방법(=함수의 현재 실행 문맥)이 결정하며, 함수를 호출한 방법은 다음 두가지가 있다.

**1. 전역 문맥에서의 호출**

**2. 함수 문맥에서의 호출**

<br>

## 전역 문맥 (global execution context)

아무 함수에도 속하지 않은 범위에서 this는 엄격 모드 여부에 관계 없이 전역 객체를 참조함.

```
console.log(this === window); //true 출력
```

* 엄격모드(strict mode)란, ES5에 추가된 키워드임. 엄격 모드는 자바스크립트가 그냥 넘겼던 에러 메시지를 발생시킴. 함수 시작 부분 혹은 스크립트 시작 부분에 'use strict' 라고 선언하면 엄격 모드가 적용됨.

## 함수 문맥

함수 내부의 this 값은 함수를 호출한 방법에 좌우됨.

1) 단순 호출
* 엄격 모드 적용 함
엄격 모드에서 this의 값을 설정해주지 않았다면 this는 undefined이다.
```
function f2(){
  "use strict"; // 엄격 모드 적용
  return this;
}

f2() // undefined
```

* 엄격 모드 적용 안함
엄격 모드를 적용하지 않았고 this의 값을 설정해주지 않았다면 this는 전역(window) 객체이다.
```
function f2(){
  return this;
}

f2() // window
```

* this 값 설정하기
```
var a = 'Global';

function whatsThis() {
  return this.a;
}

whatsThis(); // 'Global'
```

참고) call()이나 apply()를 이용하면 this의 값을 변경해줄 수 있음.
