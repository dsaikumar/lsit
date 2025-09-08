SUCCESSFUL = False
for number in range(3):
    print("Attempt")
    if SUCCESSFUL:
        print("Successful")
        break
else:
    print('Attempted 3 times and failed')


SUCCESSFUL = True
for number in range(3):
    print("Attempt")
    if SUCCESSFUL:
        print("Successful")
        break
else:
    print('Attempted 3 times and failed')
