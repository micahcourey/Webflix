function Ticket(movieName, timeHours, timeMinutes, age) {
    this.movieName = movieName;
    this.timeHours = timeHours;
    this.timeMinutes = timeMinutes;
    this.age = age;
};

Ticket.prototype.calculatePrice = function() {
    if (this.age < 5) {
        return 0;
    } else if (this.age > 65) {
        return 2;
    } else {
        // Calculate any discounts for adults based on ticket time
        if (this.timeHours < 18) {
            return 4;
        } else {
            return 5;
        }


    }
};
