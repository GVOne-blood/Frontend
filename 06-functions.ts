/**
 * 📚 FUNCTIONS TRONG TYPESCRIPT - TÓM TẮT
 * =====================================
 * 
 * 1. CÚ PHÁP CƠ BẢN:
 * - function name(param: type): returnType { }
 * - const name = (param: type): returnType => { }
 * - Arrow function: const name = (param: type): returnType => expression
 * 
 * 2. OPTIONAL PARAMETERS (?):
 * - Syntax: paramName?: type
 * - Phải đặt SAU required parameters
 * - Giá trị là undefined nếu không truyền
 * 
 * 3. DEFAULT PARAMETERS:
 * - Syntax: paramName: type = defaultValue
 * - Không cần ? vì đã có default
 * - Có thể đặt ở bất kỳ vị trí nào
 * 
 * 4. REST PARAMETERS (...):
 * - Syntax: ...paramName: type[]
 * - PHẢI là parameter cuối cùng
 * - Nhận số lượng arguments không giới hạn
 * 
 * 5. FUNCTION TYPES:
 * - type FuncType = (param: type) => returnType
 * - interface FuncInterface { (param: type): returnType }
 * 
 * 6. RETURN TYPES ĐẶC BIỆT:
 * - void: không return giá trị
 * - never: không bao giờ kết thúc (throw error, infinite loop)
 * 
 * 7. FUNCTION OVERLOADING:
 * - Định nghĩa nhiều signatures cho 1 function
 * - Implementation phải handle tất cả cases
 */

// ========== BÀI TẬP THỰC HÀNH ==========

/**
 * 📝 BÀI TẬP 1: Function với Optional Parameter
 * 
 * Yêu cầu: Viết function tạo email address
 * - Tên function: createEmail
 * - Parameter 1: username (string) - bắt buộc
 * - Parameter 2: domain (string) - tùy chọn, mặc định là "gmail.com"
 * - Return: email hoàn chỉnh dạng "username@domain"
 * 
 * Ví dụ:
 * createEmail("john") => "john@gmail.com"
 * createEmail("alice", "yahoo.com") => "alice@yahoo.com"
 */

// Code của bạn ở đây:



/**
 * 📝 BÀI TẬP 2: Function với Rest Parameters
 * 
 * Yêu cầu: Viết function tính điểm trung bình
 * - Tên function: calculateAverage
 * - Nhận vào tên học sinh (string) và các điểm số (numbers)
 * - Return string: "[Tên]: [điểm TB]"
 * - Làm tròn điểm TB đến 2 chữ số thập phân
 * 
 * Ví dụ:
 * calculateAverage("Alice", 8, 9, 7) => "Alice: 8.00"
 * calculateAverage("Bob", 6, 7, 8, 9, 10) => "Bob: 8.00"
 */

// Code của bạn ở đây:



/**
 * 📝 BÀI TẬP 3: Arrow Function với Function Type
 * 
 * Yêu cầu:
 * - Bước 1: Định nghĩa type alias "Operation" cho function nhận 2 số và return 1 số
 * - Bước 2: Tạo object calculator có 4 methods (dùng arrow function):
 *   + add: cộng 2 số
 *   + subtract: trừ 2 số
 *   + multiply: nhân 2 số
 *   + divide: chia 2 số (return 0 nếu chia cho 0)
 * - Tất cả methods phải conform với type Operation
 */

// Code của bạn ở đây:
