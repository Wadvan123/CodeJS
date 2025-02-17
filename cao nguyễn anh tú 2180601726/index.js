// Thông tin: Họ tên + MSSV
// Họ tên: Nguyễn Văn A
// MSSV: 12345678

// Khai báo kiểu dữ liệu student
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    // Phương thức tính điểm trung bình
    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    // Phương thức xếp loại
    getGrade() {
        const average = this.getAverage();
        if (average >= 8) return 'Giỏi';
        if (average >= 6.5) return 'Khá';
        if (average >= 5) return 'Trung bình';
        return 'Yếu';
    }
}

// Tạo mảng 4 sinh viên
const students = [
    new Student('Nguyễn Văn A', 19, 8, 9),
    new Student('Trần Thị B', 17, 6, 7),
    new Student('Lê Văn C', 20, 5, 6),
    new Student('Phạm Thị D', 18, 3, 4),
];

// 1. Sử dụng map để in ra xếp loại của từng sinh viên
console.log('Xếp loại của từng sinh viên:');
students.map((student) => {
    console.log(`${student.name}: ${student.getGrade()}`);
});

// 2. Sử dụng reduce để tính TBC điểm của SV trong lớp
const averageClassScore = students.reduce((sum, student) => sum + student.getAverage(), 0) / students.length;
console.log(`Điểm trung bình của cả lớp: ${averageClassScore.toFixed(2)}`);

// 3. Sử dụng some để kiểm tra xem có sinh viên nào dưới 18 tuổi hay không
const hasUnder18 = students.some((student) => student.age < 18);
console.log(`Có sinh viên nào dưới 18 tuổi không? ${hasUnder18 ? 'Có' : 'Không'}`);

// 4. Sử dụng every để kiểm tra cả lớp có đầy đủ tên hay không
const allHaveNames = students.every((student) => student.name && student.name.trim() !== '');
console.log(`Cả lớp có đầy đủ tên hay không? ${allHaveNames ? 'Có' : 'Không'}`);
