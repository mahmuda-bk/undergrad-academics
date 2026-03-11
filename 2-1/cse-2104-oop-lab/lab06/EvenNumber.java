/*
Write a Java code that will iterate the value from 1 to n. Use a loop to
print even values. Hints: Use the While loop and Continue.
*/

package evennumber;

public class EvenNumber {
    public static void main(String[] args) {
        int n = 10;
        int i = 1;
        while (i <= n) {
            if (i % 2 != 0) {
                i++;
                continue;
            }
            System.out.println(i);
            i++;
        }
    }
}