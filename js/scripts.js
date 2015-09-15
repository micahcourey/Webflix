function Ticket(movieName, time, age) {
    this.movieName = movieName;
    this.time = time;
    this.age = age;
};

Ticket.prototype.calculatePrice = function() {
    if (this.age < 5) {
        return 0;
    } else if (this.age > 65) {
        return 2;
    } else {
        return 5;
    }
};
