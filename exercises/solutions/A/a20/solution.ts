/**
 * @return number
 * @param series
 */

export function solution(series: string): number {
    
    let stack: string[] = []
    for (let i of series) {
        
        if (i == '(' || i == '{' || i == '[') {
            stack.push(i)
        } else if (i == ')' || i == ']' || i == '}') {
            if (stack.length == 0) {
                return 0
            }
            let top: string = stack[stack.length - 1]
            
            if ((top == '(' && i == ')') || (top == '[' && i == ']') || (top == '{' && i == '}')) {
                stack.pop()
            } else {
                return 0
            }
        }
    }
    return stack.length == 0 ? 1 : 0
}
