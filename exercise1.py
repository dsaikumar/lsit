import math


print("*" * 50)

x = 1
UNIT_PRICE = 3
VALE = True
vale = False
vale = 199
flat = -10
flot = 0.109
print("vale", vale)
print("VALE", VALE)
print("flot", flot)
print("flat", flat)

MESSAGE_FOR_ME = """
Hi Sai , welcome to python learnings
"""
print(MESSAGE_FOR_ME)
x = len(MESSAGE_FOR_ME)
print("Size of MESSAGE_FOR_ME", x)


STRING_VALUE = "Welcome to \n\"Python"

y = len(STRING_VALUE) - 3
TEMP = STRING_VALUE[:]
print(STRING_VALUE)
STRING_VALUE = "Welcome"
print(STRING_VALUE[0])
print(STRING_VALUE[-1])
print(STRING_VALUE[0:3])
print(STRING_VALUE[:-3])
print(STRING_VALUE[2:])
print(STRING_VALUE[1:-2])

print(TEMP)  # Copy of STRING_VALUE
FIRST_NAME = "SAI"
MIDDLE_NAME = "KUMAR"
LAST_NAME = "desu"
print(FIRST_NAME + " " + MIDDLE_NAME + " " + LAST_NAME)
print(f"{FIRST_NAME} {LAST_NAME} 0 {x}")
print(FIRST_NAME.casefold())
print(FIRST_NAME.find('AI'))
print("Sa" in FIRST_NAME)
print("SA" in FIRST_NAME)
print("SA" not in FIRST_NAME)
print(10 / 3)  # Floating with decimal value
print(10 // 3)  # FLoating without decimal value
print(10 % 3)  # Remainder value
print(10 ** 3)  # 10 power of 3
2+3
x = 10
x = x+4
x += 4
print(round(2.9))
print(abs(-2.9))
print(math.ceil(2.9))
print(math.floor(2.9))
F_VALUE = input("Enter a number < 100\n")
print(type(F_VALUE))
F_VALUE = math.factorial(int(F_VALUE))
print(F_VALUE)

# int(a)  To convert string to number
# float(a) To convert string to float
# bool(a)  To verify the truth value of expression
# str(a) TO get string of it


# Falsy values are
# ""
# 0
# None

print(bool("wel"))
print(bool(0))
print(bool(False))
print(bool(None))
# <, >=, <, <=, ==, != Relational operator they compare by type and value of operands
print(10 > 3, '>')
