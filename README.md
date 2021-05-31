# games-e2e-ui

Install:
    npm i cypress
    
run tests:
    npm run test:e2e:ui


To run it we give it in npm run test:e2e:ui
The tests are located in the folder cypres -> integration -> examples -> e2e -> specs

Create-Game:
In this case what we do is to create a user and then in the table we check that the element has been added

Create-Game-Negative:
In this case what we do is to create an empty game and then in the table we check that the element does
not exist.

Delete-Game:
In this case the first element of the table is searched and its name is saved, it is deleted and what is
expectedis that the name to be searched does not exist.

Delete-Game-Negative:
In this case the second element of the table is searched and its name is saved, it is eliminated and what isexpected is that the name to be searched exists since the one that was eliminated was another element.

Read-Game:
What we do in this test is to create an element and verify that it reads correctly its attributes, we also verify that it reads correctly the attributes of all elements.

Read-Game-Negative:
What we do in this case is to verify if there is a single value of the table, in this case it should return 0 since there is no repeated data.

Update-Game:
In this test we change the name and author of an element and verify that the change has been made correctly (its name should be the one we have entered).

Update-Game-Negative:
In this test we change the name and author to an element and leave it empty and verify that the change has been done correctly (its name should be non-null and therefore it should have a name associated to it).
