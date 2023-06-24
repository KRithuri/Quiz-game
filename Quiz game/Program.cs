using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quiz_game
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string play;
            string answer;
            int score = 0;

            Console.WriteLine("Welcome to my computer quiz!");
            Console.Write("Do you want to play a game to test your knowledge? Y-yes or N-no: ");
            play = Console.ReadLine();
            if (play.ToLower() != "y")
            {
                Console.WriteLine("Okay, thank you! Good-bye!");
                Console.ReadKey();
            }
            else
            {
                Console.WriteLine("Okay! Let's test your knowledge!");
                Console.Write("What does CPU stand for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "central processing unit")
                {
                    Console.WriteLine("Correct!");
                  
                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("What does GPU stand for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "graphics processing unit")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("What does RAM stand for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "random access memory")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("What does SSD stand for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "solid state drive")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("What does HDD stand for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "hard disk drive")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }
                Console.WriteLine("Almost done! Let's move to programming questions!");
                Console.Write("Which language defines meaning and structure of web content?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "html")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }
                Console.Write("Which language defines meaning and structure of web content?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "html")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("What does JS stand for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "java script")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("Which language is the .py extension for?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "python")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }

                Console.Write("What is used to style an HTML document?: ");
                answer = Console.ReadLine();

                if (answer.ToLower() == "css")
                {
                    Console.WriteLine("Correct!");

                    score += 1;
                }
                else
                {
                    Console.WriteLine("Incorrect!");
                }
            }
            Console.WriteLine("Total score is: " + score);
            Console.ReadKey();

        }
    }
}
