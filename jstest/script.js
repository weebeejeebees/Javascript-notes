Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@weebeejeebees 
weebeejeebees
/
Javascript-notes
Private
Cannot fork because you own this repository and are not a member of any organizations.
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Settings
Beta Try the new code view
Javascript-notes/Js basics/index.js /
@weebeejeebees
weebeejeebees Add files via upload
…
Latest commit 040e92d 1 hour ago
 History
 1 contributor
100 lines (79 sloc)  2.37 KB
 

    //IMPORTANT
    //Javascript is a dynamic language so that  variables can be replaced at runtime
    //default value of in javascript are undefined

    
    //comment
    console.log("Hello world!");
    
    //naming  using let
    //cannot be a reserved word
    //make sure it is  meaningful
    //cannot start with a number
    //cannot contain a space or hyphen
    //use camelCase instead of underscore
    //is Case  sensitive
    let dog, cat;
    let car = 'toyota', bike = 1;
    let name = 'Ethan';
    console.log(name);

    //constant
    const interestRate = 0.3;
    console.log(interestRate);

    //boolean
    let isApproved = true;
    let example1 = undefined;
    let example2 = null; //used in situations where we want  to clear a variable. For example, when a user selects nothing, its null, but when he presses a button it is red.

    //object
    let object ={
        name:'Ethans name' ,
        age: 20
    };

    console.log(object.name);

    //arrays
    let selectedColors = ['red', 'blue', 'green', 'yellow', 'yellow', , 1];
    selectedColors[5] = 'purple';
    console.log(selectedColors[3]);
    console.log(selectedColors);
    console.log(selectedColors.length);

    //function
    function greet(name, age){
        console.log("function " + name, + age);
    }
        greet('louise', 20);

    function  square(number){
        return number * number;
    }
    console.log(square(2));
    //we can also put declare a variable to a function you want call like

    let squared = square(4);
    console.log(squared);


    //OOP section
    
    //object circle
    const circle = {
        //properties
        radius:1,
        location:{
            x:1,
            y:2
        },
        //method
        draw: function(){
            console.log("drawing circle");
        }

    };
    circle.draw();
    
    //JSON
    const me = `{
        "name": "Ethan",
        "age": 20.8,
        "graduated": false,
        "favoriteColors": ["White", "None"]
      }`;
    //JSON.parse converts a json string to an object
    const meJson = JSON.parse(me);

    console.log(meJson);

    const me2 = {
        car: "Honda",
        model: "civic",
        
      };
    //JSON.stringify coverts object to string
    const me2Json = JSON.stringify(me2);

    console.log(me2Json);
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Javascript-notes/index.js at main · weebeejeebees/Javascript-notes