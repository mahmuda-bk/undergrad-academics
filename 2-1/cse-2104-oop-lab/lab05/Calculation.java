/*
Write a Java code where class name is Calculation. This class will
contain methods named addNumbers, subNubmbers, mulNumbers, and divNumbers. These
methods will sum, subtract, multiply, and divide two numbers. Use the concept of OOP to write
this code.
*/

package calculation;

public class Calculation {
    int a, b;
    Calculation(int a, int b) {
        this.a = a;
        this.b = b;
    }
    int addNumbers() {
        return a + b;
    }
    int subNumbers() {
        return a - b;
    }
    int mulNumbers() {
        return a * b;
    }
    int divNumbers() {
        if (b == 0) {
            System.out.println("Cannot divide by zero");
            return 0;
        } else {
            return a / b;
        }
    }

    public static void main(String[] args) {
        Calculation calc = new Calculation(20, 4);
        System.out.println("Addition: " + calc.addNumbers());
        System.out.println("Subtraction: " + calc.subNumbers());
        System.out.println("Multiplication: " +
        calc.mulNumbers());
        System.out.println("Division: " + calc.divNumbers());
    }
}