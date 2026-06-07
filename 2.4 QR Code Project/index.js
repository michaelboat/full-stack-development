/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import { image } from "qr-image";
import { writeFile } from "fs";

var key = "What website would you like to generate a QR code for?"
inquirer
.prompt([{
    message: key,
    name: 'url',
}])
.then((answers, error) => {
    if (error.isTtyError){throw error}
    else {
        qr.image(answers.url);
        fs.writeFile(answers.url, "users_input.txt")
    }
})