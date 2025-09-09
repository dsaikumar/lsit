# Functions
def greet():
    print("Hi there")
    print("Welcome aboard")


print(greet())  # None will return here
greet()  # Peps will add above two lines 5 and 6 as empty for function


def greeting(first_name, last_name=''):  # last_name is optional
    print(f"Hi {first_name} {last_name}")
    print("Welcome aboard")


greeting('Sai Kumar', 'Desu')
greeting('Sai Kumar')

# Polymorphism of overloading is not allowed


def get_greeting(name):
    return f"Hi {name}"


print(get_greeting('Sai'))


def multiple(*numbers):  # more than one argument is added to numbers
    print(numbers)  # It is a tuple
    total = 1
    for x in numbers:
        total = x*total
    print(total)
    return total


print(multiple(2, 3, 4, 5))
