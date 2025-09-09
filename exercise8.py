# Problem 1
counter = 0
for x in range(10):
    if x > 0 and x % 2 == 0:
        print(x)
        counter += 1

print(f"We have {counter} even numbers")

for x in range(1, 10):
    if x % 2 == 0:
        print(x)
        counter += 1

print(f"We have {counter} even numbers")
