
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */


const printPyramid = function(height) {
    let asterisks = "##";
    let spaces = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i; j++) {  //fill spaces per line
            spaces += " ";
        }
        console.log(spaces + asterisks);        //print current line
        asterisks += "#";                       //add an asterisk
        spaces = "";                            //reset spaces
    }
}

printPyramid(5);
