# Functions
def greet():
    print("Hi there")
    print("Welcome aboard")


print(greet())  # None will return here
greet()  # Peps will add above two lines 5 and 6 as empty for function


def greeting(first_name, last_name):
    print(f"Hi {first_name} {last_name}")
    print("Welcome aboard")


greeting('Sai Kumar', 'Desu')

# Polymorphism of overloading is not allowed


def get_greeting(name):
    return f"Hi {name}"


print(get_greeting('Sai'))
