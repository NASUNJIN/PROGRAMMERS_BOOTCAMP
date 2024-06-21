// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드

class Employee {
    // 생성자
    constructor(
        // class의 멤버 변수 선언 & 전달인자로 사용
        private _empName : string, 
        private _age : number, 
        private _empJob : string
        ){

    }

    // get/set
    get empName() {
        return this._empName;
    }

    set empName(val : string) {
        this._empName = val;
    }

    // 클래스 안에 있는 멤버 변수들은 클래스 안에 있는 멤버 변수가 참조할 수 있음
    printEmp = () : void => {
        // console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
        console.log(this._empName + '의 나이는 ' + this._age + '이고, 직업은 ' + this._empJob + '입니다.');
    }
}

// 생성자는 객체 생성과 동시에 초기값 생성 및 호출
let employee1 = new Employee('kim', 20, '개발자');

employee1.empName = 'lee';

// 메소드 호출
employee1.printEmp();