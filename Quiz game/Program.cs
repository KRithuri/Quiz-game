using System;
using System.Collections.Generic;
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
                Console.ReadLine();
            }

        }
    }
}
