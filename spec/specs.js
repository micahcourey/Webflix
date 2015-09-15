describe('Ticket', function() {
    it("creates a ticket with given spectifications", function() {
        var testTicket = new Ticket("Batman", "6:00pm", 14);
        expect(testTicket.movieName).to.equal("Batman");
        expect(testTicket.time).to.equal("6:00pm");
        expect(testTicket.age).to.equal(14);
    });
});

describe('calculatePrice', function() {
    it("is free for children under 5", function() {
        var testTicket = new Ticket("Batman Begins", "5:00pm", 3);
        expect(testTicket.calculatePrice()).to.equal(0);
    });

    it("is $2 for senior citizens over 65", function() {
        var testTicket = new Ticket("50 Shades of Grey", "6:30pm", 95);
        expect(testTicket.calculatePrice()).to.equal(2);
    });

    it("is $5 if you are any age in between", function() {
        var testTicket = new Ticket("Schindler's List", "8:00pm", 19);
        expect(testTicket.calculatePrice()).to.equal(5);
    })
});
