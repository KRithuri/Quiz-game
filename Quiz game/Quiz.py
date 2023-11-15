#function declaration
def play_game():
    #if answer is yes, continue with the game
    print("Okay! Let's test your knowledge...")
    score = 0

    answer = input("What does CPU stand for? ")
    if answer.lower() == "central  processing unit":
        print("Correct!")
        score += 1
    
    answer = input("What does GPU stand for? ")
