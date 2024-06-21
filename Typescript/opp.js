// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드
var Employee = /** @class */ (function () {
    // 생성자
    function Employee(
    // class의 멤버 변수 선언 & 전달인자로 사용
    _empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        // 클래스 안에 있는 멤버 변수들은 클래스 안에 있는 멤버 변수가 참조할 수 있음
        this.printEmp = function () {
            // console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
            console.log(_this._empName + '의 나이는 ' + _this._age + '이고, 직업은 ' + _this._empJob + '입니다.');
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get/set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// 생성자는 객체 생성과 동시에 초기값 생성 및 호출
var employee1 = new Employee('kim', 20, '개발자');
employee1.empName = 'lee';
// 메소드 호출
employee1.printEmp();
