print(type(5))  # Primitive type
print(type(range(5)))  # Complex type, which is iterable


for x in range(5):
    print(x)
    if False:
        break
else:
    print("\n")

for x in "Python":
    print(x)

print("\n")

for x in [1, 2, 3, 4]:  # It is list
    print(x)

print("\n")
print("\n")
SHOPPING_CART = [1, 2, 3]
for x in SHOPPING_CART:
    print(x)

print("\n")
number = 100
while number > 0:
    print(number)
    number = number//2
