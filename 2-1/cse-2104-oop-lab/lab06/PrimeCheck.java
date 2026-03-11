/*
Write a Java program to check if a number entered by the user is a prime
number or not using a for loop and conditional statements. Hint: Use a user-defined function.
*/

package primecheck;

public class PrimeCheck {
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false; // 0 and 1 are not prime numbers
        }
        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
            return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int number = 112299;
        if (isPrime(number)) {
            System.out.println(number + " is a prime number.");
        } else {
            System.out.println(number + " is not a prime number.");
        }
    }
}