TEMPERATURE = 60
if TEMPERATURE < 60:
    print('Winter is on')
    print('Wear warm clothes')
print('Done\n\n')


TEMPERATURE = 75
if TEMPERATURE > 78:
    print('Summer is on')
    print('Wear Cotton clothes')
elif TEMPERATURE <= 70:
    print('Winter is On')
    print('Wear Warm Clothes')
else:
    print('It\'s Nice')
print('Done\n\n')


age = 10
message = 'Young' if age < 25 else 'Getting old'
print(message, '\n')

age = 55
if age <= 15:
    print('Child')
elif age >= 15 and age <= 20:
    print('Adolence')
elif age >= 21 and age < 50:
    print('Adult')
elif age > 50 or 50 < age < 60:
    print('senior citizen')
else:
    print('Old')
print('Done\n\n\n')

# Not operator in condition is "not" operator, it just inverse the boolean value

VALUE = False
if not VALUE:
    print('Done, you got the not operator')
else:
    print('not a not operator ')
HIGH_INCOME = False
GOOD_CREDIT = True
STUDENT = False
if HIGH_INCOME and GOOD_CREDIT and not STUDENT:
    print('Eligible')

if HIGH_INCOME or GOOD_CREDIT and not STUDENT:
    print('Eligible')

# "and" "or" operator is called as circuit operator
