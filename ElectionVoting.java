import java.util.Scanner;

public class SimpleATM {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int balance = 22123;  // Default balance
        int choice;

        do {
            // Display Menu
            System.out.println("\n=== ATM Menu ===");
            System.out.println("1. Withdraw Money");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            choice = input.nextInt();

            if (choice == 1) {
                System.out.print("Enter withdrawal amount: ");
                int amount = input.nextInt();

                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    System.out.println("Enjoy your cash! Updated balance = ₦" + balance);
                } else if (amount > balance) {
                    System.out.println("Insufficient Balance");
                } else {
                    System.out.println("Invalid amount entered");
                }
            } else if (choice == 0) {
                System.out.println("Thank you for using our ATM");
            } else {
                System.out.println("Invalid choice, please try again");
            }

        } while (choice != 0);

        input.close();
    }
}
