function getBotResponse(input) {
    //responses to service choice
    if (input == 1) {
        return "○ Details about service 1 <br>○ Details about service 1 <br>○ Details about service 1";
    } else if (input == 2) {
        return "○ Details about service 2 <br>○ Details about service 2 <br>○ Details about service 2";
    } 

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}