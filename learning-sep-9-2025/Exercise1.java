public class Exercise1 {
    @FunctionalInterface
    interface Greeting {
        void sayHello(String message);
    }

    public static void main(String[] args) {
        Greeting greet = (name) -> System.out.println("Hello, " + name + " from Lambda!");
        greet.sayHello("Sai"); // Output: Hello, World from Lambda!
    }
}