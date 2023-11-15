#function declaration
def play_game():
    #if answer is yes, continue with the game
    print("Okay! Let's test your knowledge...")
    score = 0

    answer = input("What does CPU stand for? ")
    if answer.lower() == "central processing unit":
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
    if answer.lower() == "javascript":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")

    answer = input("Which language is the .py extension for? ")
    if answer.lower() == "python":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")

    answer = input("What is used to style an HTML document? ")
    if answer.lower() == "css":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")

    answer = input("What is the standard language for storing, manipulating and retrieving data in databases? ")
    if answer.lower() == "sql":
        print("Correct!")
        score += 1
    else:
        print("Incorrrect!")

    # print final score
    print("You got ", str(score), " questions correct!")

    # print final score as a percentage
    print("You got ", str((score/10)*100), "%")


#main function 
def main():
     # ask user input
    print("Welcome to my computer quiz!")
    play = input("Do you want to play a game to test your knowledge? Y-yes N-no: ")

    # check answer from user on the question asked
    # if answer is no, exit the program
    if play.upper() != 'Y':
        quit()
    else:
        play_game()

#call main function
main()
