/**
 * TYPESCRIPT CƠ BẢN - PHẦN 2.5: NULL VÀ UNDEFINED
 * ===============================================
 * 
 * 🎯 KHÁI NIỆM
 * -----------
 * - Null: Đại diện cho "không có gì" hoặc "rỗng".
 * - Undefined: Đại diện cho giá trị chưa được gán.
 * 
 * 💡 LỢI ÍCH
 * ---------
 * Null: Biểu thị một đối tượng không tồn tại.
 * Undefined: Biến chưa được khởi tạo.
 */

/**
 * 1. NULL
 * ------
 * - Đại diện cho giá trị rỗng.
 * - Được dùng để gán giá trị "không có gì".
 */

/**
 * 2. UNDEFINED
 * ------------
 * - Đại diện cho chưa có giá trị.
 * - Xuất hiện khi biến chưa khởi tạo hoặc truy cập thuộc tính không tồn tại.
 */

/**
 * 3. PHÂN BIỆT NULL VÀ UNDEFINED
 * ------------------------------
 * - Null: Cố ý rỗng
 * - Undefined: Thiếu giá trị
 */

/**
 * 4. NON-NULL ASSERTION OPERATOR (!)
 * ---------------------------------
 * - Khẳng định chắc chắn không null/undefined
 * - Cẩn thận khi sử dụng để không lỗi runtime
 */

/**
 * 5. OPTIONAL CHAINING (?.)
 * -------------------------
 * - Truy cập an toàn các thuộc tính không chắc chắn
 */

/**
 * ⚠️ LƯU Ý QUAN TRỌNG
 * ------------------
 * 1. Khác biệt lớn trong == vs ===
 * 2. Bật `strictNullChecks` trong `tsconfig.json`
 * 3. Tránh lạm dụng Non-Null Assertion để không lỗi runtime.
 */

/**
 * 🏋️ BÀI TẬP THỰC HÀNH
 * ===================
 * 
 * BÀI 1: User Profile Management
 * ------------------------------
 * Viết hàm getUserProfile(userId: number): {name: string, email?: string, age?: number} | null
 * - Return mock user profile với các trường: name, email, age
 * - Random email và age có thể null
 */

// TODO: Viết code của bạn ở đây cho Bài 1
function getUserProfile(userId: number): {name: string, email?: string, age?: number} | null {
    return {name: "Tuan Do", email: Math.random() + "@gmail.com", age: Math.random()}
}




/**
 * BÀI 2: Safe Property Access
 * ----------------------------
 * Viết hàm printUserContact(user: {name: string, contact?: {phone?: string, email?: string}})
 * - Sử dụng optional chaining để in ra phone và email nếu có
 */

// TODO: Viết code của bạn ở đây cho Bài 2
function printUserContact(user: {name: string, contact?: {phone?: string, email?: string}}) {
    console.log('Name: ', user.name)
    console.log('Phone: ', user.contact?.phone?? 'No phone provided')
    console.log('Email: ', user.contact?.email?? 'No email provided')
}

printUserContact({name: "Tuan Do", contact: {phone: "1234567890"}})

/**
 * BÀI 3: Null vs Undefined Comparison
 * -----------------------------------
 * Viết hàm compare(a: any, b: any): {loose: boolean, strict: boolean}
 * - Return object chứa `loose` và `strict` 
 * - `loose` dùng `==`, `strict` dùng `===`
 */

// TODO: Viết code của bạn ở đây cho Bài 3
function compare(a: any, b: any): {loose: boolean, strict: boolean} {
    return {
        loose: a == b,
        strict: a=== b
    }
}
compare(null, undefined) // { loose: true, strict: false }