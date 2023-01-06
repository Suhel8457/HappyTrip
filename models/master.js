class City {
    constructor(cityId, code, name) {
        this.cityId = cityId;
        this.code = code;
        this.name = name;
    }
}

class Route {
    constructor(fromCity, toCity, distance) {
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.distance = distance;
    }
}
