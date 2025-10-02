/**
 * TYPESCRIPT CƠ BẢN - PHẦN 2.2: ARRAYS VÀ TUPLES
 * ==============================================
 * 
 * 🎯 KHÁI NIỆM
 * -----------
 * - Arrays: Tập hợp các phần tử cùng kiểu, độ dài thay đổi
 * - Tuples: Mảng cố định với kiểu khác nhau ở mỗi vị trí
 * 
 * 💡 LỢI ÍCH
 * ---------
 * Arrays: Quản lý collection, type safety, nhiều methods hữu ích
 * Tuples: Cấu trúc dữ liệu cố định, type safety cho từng vị trí
 */

/**
 * 1. ARRAYS
 * ---------
 * - Khai báo: Type[] hoặc Array<Type>
 * - Type inference: let arr = [1, 2, 3] // number[]
 * - Methods: push(), pop(), map(), filter(), reduce(), etc.
 * - Readonly arrays: readonly Type[]
 * - Ví dụ: Danh sách sinh viên, điểm số, sản phẩm
 */

/**
 * 2. TUPLES
 * ---------
 * - Khai báo: [Type1, Type2, ...]
 * - Fixed length và types
 * - Destructuring: let [a, b] = tuple
 * - Optional elements: [string, number?]
 * - Ví dụ: Coordinates [x, y], user info [id, name, age]
 */

/**
 * 3. ARRAYS CỦA TUPLES
 * --------------------
 * - Kết hợp: [Type1, Type2][]
 * - Ví dụ: Danh sách tọa độ, inventory items
 */

/**
 * ⚠️ LƯU Ý QUAN TRỌNG
 * ------------------
 * 1. const array vẫn có thể thay đổi nội dung
 * 2. readonly array không cho phép mutations
 * 3. Tuples vẫn có thể push/pop (cẩn thận!)
 * 4. Type inference có giới hạn với mixed arrays
 */

/**
 * 🏋️ BÀI TẬP THỰC HÀNH
 * ===================
 * 
 * BÀI 1: Array Operations
 * -----------------------
 * Viết các functions sau:
 * 
 * a) findEvenNumbers(numbers: number[]): number[]
 *    - Input: Mảng số nguyên
 *    - Output: Mảng chỉ chứa số chẵn
 *    - Ví dụ: [1,2,3,4,5] => [2,4]
 * 
 * b) calculateAverage(scores: number[]): number
 *    - Input: Mảng điểm số
 *    - Output: Điểm trung bình
 *    - Ví dụ: [80,90,70] => 80
 *    - Lưu ý: Trả về 0 nếu mảng rỗng
 * 
 * c) getUniqueValues(items: string[]): string[]
 *    - Input: Mảng string có thể trùng lặp
 *    - Output: Mảng chỉ chứa giá trị unique
 *    - Ví dụ: ["a","b","a","c"] => ["a","b","c"]
 */

// TODO: Viết code của bạn ở đây cho Bài 1

function findEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0)
}
function calculateAverage(scores: number[]): number {
    return scores.length > 0 ? scores.reduce((a, b) => a + b, 0) : 0
}


/**
 * BÀI 2: Tuple Coordinates
 * ------------------------
 * Viết function tính khoảng cách giữa 2 điểm:
 * 
 * distanceBetween(point1: [number, number], point2: [number, number]): number
 * - Input: 2 điểm với tọa độ [x, y]
 * - Output: Khoảng cách (dùng công thức Pythagorean)
 * - Công thức: sqrt((x2-x1)² + (y2-y1)²)
 * - Ví dụ: [0,0] và [3,4] => 5
 */

// TODO: Viết code của bạn ở đây cho Bài 2

function distanceBetween(point1: [number, number], point2: [number, number]): number {
    return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
}



/**
 * BÀI 3: Student Grades Management
 * --------------------------------
 * Cho tuple format: [studentName: string, grade: number]
 * 
 * Viết các functions:
 * 
 * a) getPassingStudents(students: [string, number][]): string[]
 *    - Input: Mảng tuples [tên, điểm]
 *    - Output: Mảng tên học sinh có điểm >= 50
 *    - Ví dụ: [["An",70],["Bình",40]] => ["An"]
 * 
 * b) getClassStats(students: [string, number][]): [number, number, number]
 *    - Input: Mảng tuples [tên, điểm]
 *    - Output: Tuple [điểm cao nhất, điểm thấp nhất, điểm trung bình]
 *    - Ví dụ: [["An",80],["Bình",60]] => [80, 60, 70]
 *    - Lưu ý: Trả về [0,0,0] nếu không có học sinh
 */

// TODO: Viết code của bạn ở đây cho Bài 3

function getPassingStudents(students: [string, number][]): string [] {
    return students.filter(([name, grade]) => grade >= 50).map(([name]) => name)
}
function getClassStats(students: [string, number][]): [number, number, number] {
    if (students.length === 0) return [0, 0, 0];
    
    const grades = students.map(([_, grade]) => grade);
    const maxGrade = Math.max(...grades);
    const minGrade = Math.min(...grades);
    const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    return [maxGrade, minGrade, averageGrade];
}