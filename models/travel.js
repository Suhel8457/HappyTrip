class Flight {
    cosntructor(
        flightName,
        flightId,
        flightNumber,
        flightCapacity = [],
        airline
    ) {
        this.flightName = flightName;
        this.flightId = flightId;
        this.flightNumber = flightNumber;
        this.flightCapacity = flightCapacity;
        this.airline = airline;
    }
}
class FlightCapacity {
    constructor(name, numberOfSeats) {
        this.name = name;
        this.numberOfSeats = numberOfSeats;
    }
}

class Airline {
    constructor(id, name, logo, code, flights = []) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.code = code;
        this.flights = flights;
    }
}

class FlightSchedule {
    constructor(
        flight,
        date,
        duration,
        fromCity,
        toCity,
        seatAvailability,
        airline,
        routes,
        cost
    ) {
        this.flight = flight;
        this.date = date;
        this.cost = cost;
        this.duration = duration;
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.seatAvailability = seatAvailability;
        this.airline = airline;
        this.routes = routes;
    }
}

class Passenger {
    constructor(name, dateOfBirth, mobileNo, gender) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.mobileNo = mobileNo;
        this.gender = gender;
    }
}

class Booking {
    constructor(
        id,
        schedule,
        bookingDateTime,
        termsAndConditions,
        price,
        paymentInfo,
        passengers = []
    ) {
        this.id = id;
        this.price = price;
        this.schedule = schedule;
        this.passengers = passengers;
        this.paymentInfo = paymentInfo;
        this.bookingDateTime = bookingDateTime;
        this.termsAndConditions = termsAndConditions;
    }
}

class PaymentInfo {
    constructor(
        paymentId,
        paymentMode,
        amount,
        transactionNumber,
        paymentStatus,
        paymentDateTime
    ) {
        this.paymentId = paymentId;
        this.paymentMode = paymentMode;
        this.amount = amount;
        this.transactionNumber = transactionNumber;
        this.paymentStatus = paymentStatus;
        this.paymentDateTime = paymentDateTime;
    }
}
