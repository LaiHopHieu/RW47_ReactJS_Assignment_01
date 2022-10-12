function getGreeting(firstName, lastName) {
    function greeting() {
        return console.log(firstName + " " + lastName);
    }
    return greeting();
}
getGreeting("Bruce", "Wanyne");
