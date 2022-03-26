# PasswordGenerator

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptence Critiera
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## My Work
I started with making my arrays for the uppercase, lowercase, numbers, and symbols for the generator to pull from.
I created a function of critieria to get the length of the password and also which arrays of characters to inlcuded in the password.
Next I took the criteria and turned them into objects for the generatePassword function to pull from what was accpeted.
I then added to the generatePassword function to make sure whatever critieria was accepted got randomized, set to the length given and the order to be random. Also, joined the arrays into a string.
The last thing I added was a getRandom function to get whichever array was selected to pull from it randomly.
Here is a screenshot of appilcation working with the deployed link at the end:

<img width="716" alt="PWG_SS" src="https://user-images.githubusercontent.com/99914942/160251817-e6bf8e3c-2fd0-447b-bfa8-d3d7cfb2ff5b.png">

https://rwillford.github.io/PasswordGenerator/

