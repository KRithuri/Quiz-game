#function declaration
def play_game():
    #if answer is yes, continue with the game
    print("Okay! Let's test your knowledge...")
    score = 0

    answer = input("What does CPU stand for? ")
    if answer.lower() == "central  processing unit":
        print("Correct!")
        score += 1 #increment if answer is correct
    else:
        print("Incorrrect!") #output if answer is incorrect
    
    answer = input("What does GPU stand for? ")
    if answer.lower() == "graphics processing unit":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")
    answer = input("What does RAM stand for? ")
    if answer.lower() == "random access memory":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")

    answer = input("What does SSD stand for? ")
    if answer.lower() == "solid state drive":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")
    answer = input("What does HDD stand for? ")
    if answer.lower() == "hard disk drive":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")

    print("Almost done! Let's move to programming questions!") #indicate to user the switch of question sections

    answer = input("Which language defines meaning and structure of web content? ")
    if answer.lower() == "html":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")
    answer = input("What does JS stand for? ")
    if answer.lower() == "java script":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")