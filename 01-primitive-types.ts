/**
 * TYPESCRIPT CƠ BẢN - PHẦN 2: PRIMITIVE TYPES
 * ==========================================
 * 
 * 🎯 KHÁI NIỆM
 * -----------
 * Primitive types (kiểu nguyên thủy) là những kiểu dữ liệu cơ bản nhất trong TypeScript:
 * - string: Đại diện cho dữ liệu văn bản
 * - number: Đại diện cho số (cả số nguyên và số thực)
 * - boolean: Đại diện cho giá trị đúng/sai (true/false)
 * 
 * 💡 LỢI ÍCH
 * ---------
 * 1. Type Safety: TypeScript kiểm tra kiểu dữ liệu tại compile time
 * 2. IntelliSense: IDE có thể gợi ý methods và properties phù hợp
 * 3. Code Documentation: Code tự document thông qua type annotations
 * 4. Refactoring dễ dàng: Thay đổi code an toàn hơn
 */

/**
 * 1. STRING TYPE
 * -------------
 * - Khai báo explicit: let name: string = "John"
 * - Type inference: let message = "Hello" (tự hiểu là string)
 * - Template literals: `Hello ${name}`
 * - String methods: toUpperCase(), toLowerCase(), length, etc.
 * - Ví dụ thực tế: Email validation, text processing
 */

/**
 * 2. NUMBER TYPE
 * -------------
 * - Khai báo: let age: number = 25
 * - Hỗ trợ: decimal (100), binary (0b1010), octal (0o744), hex (0xf00d)
 * - Type inference: let count = 100 (tự hiểu là number)
 * - Number methods: toFixed(), toPrecision(), Math functions
 * - Lưu ý: toFixed() trả về string, không phải number
 * - Ví dụ thực tế: Price calculation, statistics
 */

/**
 * 3. BOOLEAN TYPE
 * --------------
 * - Khai báo: let isActive: boolean = true/false
 * - Type inference: let isReady = true (tự hiểu là boolean)
 * - Sử dụng trong conditions và logic
 * - Ví dụ thực tế: User permissions, feature flags
 */

/**
 * 4. KẾT HỢP PRIMITIVE TYPES
 * ------------------------
 * - Interfaces và objects với multiple primitive types
 * - Functions với parameters và return types
 * - Ví dụ: Shopping cart, user profile, form validation
 */

/**
 * ⚠️ LƯU Ý QUAN TRỌNG
 * ------------------
 * 
 * 1. Lowercase vs Uppercase:
 *    - Dùng string, number, boolean (lowercase) - đây là primitive types
 *    - KHÔNG dùng String, Number, Boolean (uppercase) - đây là object types
 * 
 * 2. Type Inference: TypeScript thường tự suy luận type
 * 
 * 3. Immutability với const: Dùng const khi giá trị không thay đổi
 */

// ✅ Đúng
let name1: string = "John";

// ❌ Sai - không nên dùng
// let name2: String = "John";

// Const với primitive types
const PI: number = 3.14159;
const APP_NAME: string = "My TypeScript App";
const IS_PRODUCTION: boolean = true;

/**
 * 🏋️ BÀI TẬP THỰC HÀNH
 * ===================
 * 
 * BÀI 1: User Profile Validator
 * ------------------------------
 * Tạo một function để validate thông tin user profile với các yêu cầu:
 * - Username: string, độ dài 3-20 ký tự
 * - Age: number, từ 18-100
 * - Email: string, format email hợp lệ
 * - IsActive: boolean
 */

// TODO: Viết code của bạn ở đây cho Bài 1

function validateUser(Username:string, Age: number, Email: string, IsActive:boolean){
    if (Username.length < 3 && Username.length > 20) {
        console.log("Username must be between 3 and 20 characters.");
        return false;
    }
    if (Age < 18 && Age > 100){
        console.log("Age must be between 18 and 100.");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
        console.log("Email format is invalid.");
        return false;
    }
    if (IsActive !== true) {
        console.log("IsActive must be true or false.");
        return false;
    }
}


/**
 * BÀI 2: Price Calculator
 * -----------------------
 * Viết một class PriceCalculator có các methods:
 * - addItem(name: string, price: number, quantity: number): void
 * - removeItem(name: string): boolean
 * - getTotal(): number
 * - applyDiscount(percentage: number): number
 */

// TODO: Viết code của bạn ở đây cho Bài 2

class PriceCalculator{
    name: string
    price: number
    quantity: number;

    constructor(name: string, price: number, quantity: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    addItem(name: string, price: number, quantity: number): void {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    removeItem(name: string): boolean {
        if (this.name === name) {
            this.name = '';
            this.price = 0;
            this.quantity = 0;
            return true;
        }
        return false;
    }
    getTotal(): number {
        return this.price * this.quantity;
    }
}



/**
 * BÀI 3: String Utilities
 * -----------------------
 * Tạo các utility functions:
 * - capitalize(str: string): string - Viết hoa chữ cái đầu
 * - countWords(str: string): number - Đếm số từ
 * - truncate(str: string, maxLength: number): string - Cắt chuỗi và thêm "..."
 */

// TODO: Viết code của bạn ở đây cho Bài 3

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function countWords(str: string): number {
    return str.trim().split(' ').length;
}
function truncate(str: string, maxLenght: number): string {
    if (str.length > maxLenght) {
        return str.slice(0, maxLenght) + '...';
    }
    return str;
}