Project Descripton: 
    - This is a simple webpage that displays 3 pokemon cards and a few facst about that pokemon;
     -The user can click a button (the pokeball button) to change which pokemon are displayed;
     - Thats it! super simple but i had a lot of fun and learned a TON!

Quick Notes:
    -The current setup only allows for base set 1-151 pokemon to be displayed;
        -> A few ideas i had were to add the ability to change which set/sets were displayed but in order to save time and focus on the project i stuck with the base 151

    -Also, with the current setup the pool of pokemon that is chosen to make the refresh random is only 30 pokemon. 
        -> i mainly did this to save time because even know the API i used allows for 250 at a time, it took forever to run that and i was running it ALOT. 

Things i learned:
    -I learned alot about using an API. I spend a huge amount of time not understanding enough about APIs and i finally feel like im starting to grasp the concept
    -That being said there were so many ideas i had that i had a hard time trying to implement just because the "how" was not exactly obvious.
        
        -> in this case a good example of this is my process for getting and adding info to the HTML doc. heres my process in summary:
                1. decide which datapoint i want to retrieve;
                2. create an empty arr variable and an empty variable for that data point;
                3. push the results of the AJAX request.datapoint to the arr
                4. set the var to an index in that array.

        -> an issue i ran into here was trying to keep the choice random. My issue was that if the datapoint contained another array i couldnt use that data. 
        -> This is something ill think more about in the near future, but i think it will make more sense as we move foward (just like alot of things in the course have)

-> All in all i REALLY enjoyed this project> Although im not completely satisfied with my project, i am MUCH more happy with it than i thought i would be. 

