COMMAND = ""
while COMMAND.lower() != "quit":
    COMMAND = input(">")
    print("Echo", COMMAND)
    print('\n')

while True:
    COMMAND = input(">")
    print("Echo", COMMAND)
    if COMMAND.lower() != "quit":
        break
