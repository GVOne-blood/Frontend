/**
 * 📚 INTERFACES TRONG TYPESCRIPT - TÓM TẮT
 * ======================================
 * 
 * 1. ĐỊNH NGHĨA:
 * - Interface định nghĩa cấu trúc (shape) của object
 * - Giống như "bản thiết kế" cho object
 * - Syntax: interface Name { property: type; }
 * 
 * 2. OPTIONAL PROPERTIES (?):
 * - propertyName?: type
 * - Property có thể có hoặc không
 * 
 * 3. READONLY PROPERTIES:
 * - readonly propertyName: type
 * - Không thể thay đổi sau khi khởi tạo
 * 
 * 4. FUNCTION TYPES:
 * - methodName(param: type): returnType
 * - Hoặc: propertyName: (param: type) => returnType
 * 
 * 5. EXTENDING INTERFACES:
 * - interface Child extends Parent { }
 * - Kế thừa tất cả properties từ Parent
 * - Có thể extend nhiều interfaces
 * 
 * 6. INDEX SIGNATURES:
 * - [key: string]: type
 * - Cho phép thêm properties động
 * 
 * 7. IMPLEMENTING INTERFACES:
 * - class ClassName implements InterfaceName { }
 * - Class phải có tất cả properties/methods của interface
 * 
 * 8. DECLARATION MERGING:
 * - Nhiều interface cùng tên sẽ được merge
 * - Hữu ích cho extending third-party types
 * 
 * 9. INTERFACE VS TYPE ALIAS:
 * - Interface: extend, implement, declaration merging
 * - Type alias: union, intersection, primitives
 * 
 * 10. BEST PRACTICES:
 * - Dùng interface cho object types
 * - Dùng type alias cho unions, intersections
 * - Đặt tên interface với prefix I (optional)
 */

// ========== BÀI TẬP THỰC HÀNH ==========

/**
 * 📝 BÀI TẬP 1: Basic Interface
 * 
 * Yêu cầu: Tạo interface cho một Product trong e-commerce
 * - Interface name: Product
 * - Properties:
 *   + id: number (readonly)
 *   + name: string
 *   + price: number
 *   + description?: string (optional)
 *   + inStock: boolean
 * 
 * Sau đó tạo function displayProduct(product: Product): string
 * Return string format: "[ID] Name - $Price (In stock: Yes/No)"
 * 
 * Ví dụ:
 * displayProduct({id: 1, name: "Laptop", price: 999, inStock: true})
 * => "1. Laptop - $999 (In stock: Yes)"
 */

// Code của bạn ở đây:
interface Product {
    readonly id: number 
    name : string 
    price : number
    description? : string 
    inStock: boolean

}
function displayProduct(product: Product): string {
    return `[${product.id}] ${product.name} - \$${product.price} (In stock: ${product.inStock == true ? 'Yes' : 'No'})`
}

//console.log(displayProduct({id: 1, name: "Laptop", price: 999, inStock: true}))

/**
 * 📝 BÀI TẬP 2: Extending Interfaces
 * 
 * Yêu cầu: Tạo hệ thống interface cho Employee
 * 
 * 1. Interface Person:
 *    - name: string
 *    - age: number
 * 
 * 2. Interface Employee extends Person:
 *    - employeeId: string (readonly)
 *    - department: string
 *    - salary: number
 * 
 * 3. Interface Manager extends Employee:
 *    - teamSize: number
 *    - projects: string[]
 * 
 * 4. Function createManagerCard(manager: Manager): string
 *    Return format:
 *    "Manager: [name]
 *     Department: [department]
 *     Team: [teamSize] members
 *     Projects: [project1, project2, ...]"
 */

// Code của bạn ở đây:
interface Person {
    name : string
    age : number
}
interface Employee extends Person {
    readonly employeeId: string
    department: string
    salary: string
}
interface Manager extends Employee {
    teamsie: number
    projects: string[]
}
function createManagerCard(manager: Manager): string {
    return "" + 
   `Manager: ${manager.name}
    Department: ${manager.department}
    Team: ${manager.teamsie} members
    Projects: [${manager.projects.join(', ')}]`
}

console.log(createManagerCard({
    name: "Alice",
    age: 35,
    employeeId: "E123",
    department: "Engineering",
    salary: "100000",
    teamsie: 5,
    projects: ["Project A", "Project B"]}))

/**
 * 📝 BÀI TẬP 3: Interface với Methods và Index Signature
 * 
 * Yêu cầu: Tạo interface cho Shopping Cart
 * 
 * Interface ShoppingCart:
 * - items: { [productId: string]: number } (số lượng của mỗi product)
 * - addItem(productId: string, quantity: number): void
 * - removeItem(productId: string): boolean (return true nếu xóa thành công)
 * - getTotal(getPriceById: (id: string) => number): number
 * 
 * Implement class Cart implements ShoppingCart
 * 
 * Ví dụ sử dụng:
 * const cart = new Cart();
 * cart.addItem("p1", 2);
 * cart.addItem("p2", 1);
 * const total = cart.getTotal((id) => id === "p1" ? 10 : 20);
 * // total = 10*2 + 20*1 = 40
 */


// Code của bạn ở đây:
interface ShoppingCart {
    items: {[productId: string]: number}
    addItem(productId: string, quantity: number): void
    removeItem(productId: string): boolean
    getTotal(getPriceById: (id: string) => number): number
}
class Cart implements ShoppingCart {
    items: { [productId: string]: number }
    addItem(productId: string, quantity: number): void {
        throw new Error("Method not implemented.")
    }
    removeItem(productId: string): boolean {
        throw new Error("Method not implemented.")
    }
    getTotal(getPriceById: (id: string) => number): number {
        throw new Error("Method not implemented.")
    }

}