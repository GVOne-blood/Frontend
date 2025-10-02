/**
 * TYPESCRIPT CƠ BẢN - PHẦN 2.3: ENUMS
 * ===================================
 * 
 * 🎯 KHÁI NIỆM
 * -----------
 * Enum (Enumeration) là cách định nghĩa tập hợp các hằng số có tên
 * Giống như "menu cố định" - chỉ có thể chọn từ các options có sẵn
 * 
 * 💡 LỢI ÍCH
 * ---------
 * 1. Code dễ đọc: Status.ACTIVE rõ ràng hơn số 1
 * 2. Tránh magic numbers/strings
 * 3. Type safety và auto-complete
 * 4. Refactoring dễ dàng
 */

/**
 * 1. NUMERIC ENUMS
 * ----------------
 * - Mặc định bắt đầu từ 0
 * - Tự động tăng: PENDING=0, PROCESSING=1, COMPLETED=2
 * - Có thể custom values
 * - Có reverse mapping
 */

/**
 * 2. STRING ENUMS
 * ---------------
 * - Phải gán value cho mọi member
 * - Readable khi debug
 * - KHÔNG có reverse mapping
 * - Phổ biến cho status, types, actions
 */

/**
 * 3. CONST ENUMS
 * --------------
 * - Compile-time optimization
 * - Values được inline khi compile
 * - Giảm code size
 */

/**
 * ⚠️ LƯU Ý QUAN TRỌNG
 * ------------------
 * 1. String enums không có reverse mapping
 * 2. Numeric enums tự động tăng từ giá trị trước
 * 3. Const enums biến mất sau compile
 * 4. Cẩn thận khi iterate numeric enums
 */

/**
 * 🏋️ BÀI TẬP THỰC HÀNH
 * ===================
 * 
 * BÀI 1: Order Management System
 * ------------------------------
 * Tạo các enums và functions sau:
 * 
 * a) OrderStatus enum với các giá trị:
 *    - PENDING
 *    - CONFIRMED
 *    - SHIPPED
 *    - DELIVERED
 *    - CANCELLED
 * 
 * b) PaymentMethod enum (string enum):
 *    - CASH = "CASH"
 *    - CREDIT_CARD = "CREDIT_CARD"
 *    - BANK_TRANSFER = "BANK_TRANSFER"
 * 
 * c) function canCancelOrder(status: OrderStatus): boolean
 *    - Input: order status
 *    - Output: true nếu có thể cancel (chỉ PENDING và CONFIRMED)
 *    - Ví dụ: canCancelOrder(OrderStatus.PENDING) => true
 * 
 * d) function getPaymentFee(method: PaymentMethod, amount: number): number
 *    - CASH: không phí
 *    - CREDIT_CARD: 2.5% của amount
 *    - BANK_TRANSFER: phí cố định 5000
 *    - Ví dụ: getPaymentFee(PaymentMethod.CREDIT_CARD, 100000) => 2500
 */

// TODO: Viết code của bạn ở đây cho Bài 1
enum OrderStatus {
    PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED
}
enum PaymentMethod {
    CASH = "CASH", CREDIT_CARD = "CREDIT_CARD", BANK_TRANSFER = "BANK_TRANSFER"
}
function canCancelOrder(status: OrderStatus): boolean {
    return status === OrderStatus.PENDING || status === OrderStatus.CONFIRMED
}
function getPaymentFee(method: PaymentMethod, amount: number): number {
    if (method === PaymentMethod.CASH) return amount;
    if (method === PaymentMethod.CREDIT_CARD) return 0.025 * amount
    return 5000
}


/**
 * BÀI 2: Game Direction Control
 * -----------------------------
 * 
 * a) Tạo Direction enum với UP=0, RIGHT=1, DOWN=2, LEFT=3
 * 
 * b) function rotateRight(current: Direction): Direction
 *    - Xoay phải 90 độ
 *    - UP -> RIGHT -> DOWN -> LEFT -> UP
 *    - Ví dụ: rotateRight(Direction.UP) => Direction.RIGHT
 * 
 * c) function getOpposite(direction: Direction): Direction
 *    - Trả về hướng ngược lại
 *    - UP <-> DOWN, LEFT <-> RIGHT
 *    - Ví dụ: getOpposite(Direction.UP) => Direction.DOWN
 * 
 * d) function move(x: number, y: number, direction: Direction, steps: number): [number, number]
 *    - Di chuyển từ vị trí (x,y) theo hướng direction với số bước steps
 *    - UP: y giảm, DOWN: y tăng, LEFT: x giảm, RIGHT: x tăng
 *    - Ví dụ: move(0, 0, Direction.RIGHT, 3) => [3, 0]
 */

// TODO: Viết code của bạn ở đây cho Bài 2
enum Direction {
    UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3
}
function rotateRight(current: Direction): Direction {
    if (current === Direction.UP) return Direction.DOWN
    if (current === Direction.RIGHT) return Direction.LEFT
    if (current === Direction.DOWN) return Direction.UP
    return Direction.RIGHT
}
function getOpposite(direction: Direction): Direction {
    if (direction === Direction.UP) return Direction.DOWN;
    if (direction === Direction.DOWN) return Direction.UP;
    if (direction === Direction.LEFT) return Direction.RIGHT;
    return Direction.LEFT;
}
function move(x: number, y: number, direction: Direction, steps: number): [number, number] {
    if (direction === Direction.UP) return [x, y + 3]

    if (direction === Direction.DOWN) return [x, y - 3]
    if (direction === Direction.LEFT) return [x - 3, y]
    return [x + 3, y]
}


/**
 * BÀI 3: User Permission System
 * -----------------------------
 * Sử dụng bitwise flags cho multiple permissions
 * 
 * a) Tạo Permission enum:
 *    - NONE = 0
 *    - READ = 1
 *    - WRITE = 2
 *    - DELETE = 4
 *    - ADMIN = READ | WRITE | DELETE (tất cả quyền)
 * 
 * b) function hasPermission(userPerms: number, required: Permission): boolean
 *    - Check user có permission cần thiết không
 *    - Dùng bitwise AND (&)
 *    - Ví dụ: hasPermission(3, Permission.READ) => true (3 = READ + WRITE)
 * 
 * c) function grantPermission(current: number, permission: Permission): number
 *    - Thêm permission mới vào current permissions
 *    - Dùng bitwise OR (|)
 *    - Ví dụ: grantPermission(1, Permission.WRITE) => 3
 * 
 * d) function revokePermission(current: number, permission: Permission): number
 *    - Xóa permission khỏi current permissions
 *    - Dùng bitwise AND với NOT (~)
 *    - Ví dụ: revokePermission(3, Permission.WRITE) => 1
 */

// TODO: Viết code của bạn ở đây cho Bài 3

enum Permission {
    NONE = 0, READ = 1, WRITE = 2, DELETE = 3, ADMIN = READ | WRITE | DELETE
}
function hasPermission(UserPerms: number, required: Permission): boolean {
    return (UserPerms & required) === required;
}
function grantPermission(current: number, permission: Permission): number {
    return current | permission;
}
function revokePermission(current: number, permission: Permission): number {
    return current & ~permission;
}