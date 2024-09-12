
//palindrome function from my lab8 
function palindromeChecker(text) {
    // if(typeof text !== "string") {
    //     console.log("text must be in form of stirng"); 
    // }
    //makeing the text all lowercase and getting rid of the special characters
    text = text.toLowerCase(); 
    text = text.replace(/[^\w]/g,'');

    let front = 0; 
    let end = text.length - 1; 
    
    //first checking the first and last characters in the string 
    //and then converging to the middle 
    //if the characters match in position, return true else false 
    while(front < end) {
        if(text[front] != text[end]){
            return false; 
        } else {
            front++; 
            end--; 

        }
    }
    return true; 
}


//get the form 
const Form = document.getElementById("Form"); 
if(Form) {
    const phrase = document.getElementById("phrase"); 
    //when the user presses submit button to the following 
    Form.addEventListener("submit", event => {
        event.preventDefault(); 
        if(phrase.value) {
            $("#error").hide(); 
            let is_palindrome = palindromeChecker(phrase.value); 
            let output = document.createElement("ol"); 
            output.appendChild(document.createTextNode(phrase.value)); 
            output.setAttribute("class", is_palindrome ? "is-palindrome" : "not-palindrome"); 
            let attempts = document.getElementById("attempts"); 
            //add each attempt to the list of prev attempts 
            attempts.appendChild(output); 
            $("#Form").trigger('reset'); 
            //focus back on the textarea after user submits a string 
            $("#phrase").focus(); 
        } else {
            //if the user sumbits but textarea is empty display error message 
            //focus back to the textarea 
            $("#error").show(); 
            $("#error").html("String is empty. Please try again."); 
            $("#phrase").focus(); 
        }
    }); 
}
