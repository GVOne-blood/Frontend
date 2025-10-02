/**
 * TYPESCRIPT CƠ BẢN - PHẦN 2.4: ANY, UNKNOWN, NEVER, VOID
 * ======================================================
 * 
 * 🎯 KHÁI NIỆM
 * -----------
 * - Any: Cho phép mọi kiểu dữ liệu, không kiểm tra type.
 * - Unknown: Giống any nhưng an toàn, cần kiểm tra kiểu.
 * - Never: Không bao giờ xảy ra, dùng cho hàm không kết thúc.
 * - Void: Không có giá trị trả về, dùng cho hàm không trả về gì.
 * 
 * 💡 LỢI ÍCH
 * ---------
 * - Any: Linh hoạt, dễ tích hợp.
 * - Unknown: An toàn hơn any.
 * - Never: Hỗ trợ exhaustive checks.
 * - Void: Rõ ràng khi không cần trả về giá trị.
 */

/**
 * 1. ANY
 * ------
 * - Không kiểm tra type
 * - Tích hợp dễ dàng với JavaScript cũ
 * - Sử dụng cẩn thận tránh mất an toàn
 */

/**
 * 2. UNKNOWN
 * -----------
 * - An toàn hơn any
 * - Cần kiểm tra type trước khi sử dụng
 * - Hạn chế lỗi runtime
 */

/**
 * 3. NEVER
 * --------
 * - Dùng cho hàm không bao giờ kết thúc
 * - Ví dụ: infinite loops, exceptions
 */

/**
 * 4. VOID
 * -------
 * - Không có giá trị trả về
 * - Dùng cho hàm không cần trả về gì
 */

/**
 * ⚠️ LƯU Ý QUAN TRỌNG
 * ------------------
 * 1. Tránh lạm dụng any - mất type safety
 * 2. Unknown cần kiểm tra type
 * 3. Never thường do compiler suy luận
 * 4. Void không thể gán giá trị hữu ích
 */

/**
 * 🏋️ BÀI TẬP THỰC HÀNH
 * ===================
 * 
 * BÀI 1: Flexible Data Processor
 * -------------------------------
 * Viết hàm processData(input: any): void
 * - In ra console data đã xử lý
 * - Gọi toString() khi là object
 * - Gọi toFixed(2) khi là number
 * - Gọi toUpperCase() khi là string
 */

// TODO: Viết code của bạn ở đây cho Bài 1
function processData(input: any): void {
    if (typeof input === 'object') console.log(input.toString())
    else if (typeof input === 'number') console.log(input.toFixed(2))
        else if (typeof input === 'string') console.log(input.toUpperCase())
}

/**
 * BÀI 2: Type-Safe Data Validator
 * -------------------------------
 * Viết hàm validateData(input: unknown): boolean
 * - Return true nếu input là string có ít nhất 3 ký tự hoặc số dương
 * - Ngược lại return false
 */

// TODO: Viết code của bạn ở đây cho Bài 2

function validateData(input: unknown): boolean {
    if (typeof input === 'string') return input.length >=3
    if (typeof input === 'number') return input > 0
    return false;
}


/**
 * BÀI 3: Never-Ending Story
 * -------------------------
 * Viết hàm runForever(): never
 * - Mô phỏng một công việc không bao giờ kết thúc
 */

// TODO: Viết code của bạn ở đây cho Bài 3
function runForever(): never {
    while(true) console.log("This will never end");
}
typeof runForever();