var empty_object  = {};

var stooge = {
    "first-name" : "Jerome",
    "last-name" : "Howard"
};

document.writeln(stooge);
document.writeln(stooge["first-name"]);


var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
    },
    arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
    }
};

document.writeln(flight.departure.city);

// The || operator can be used to fill in default values.
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";


flight.equipment //undefined
//flight.equipment.model //throw a 'TypeError'
flight.equipment && flight.equipment.model //undefined TO AVOID THROW AN EXCEPTION.


//To change the prototype of a obgect.
if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
    };
}
    var another_stooge = Object.beget(stooge);





//REFLECTION
flight.number=3;
flight.hasOwnProperty('number'); //True
flight.hasOwnProperty('constructor'); //False





//FOR LOOP
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') { //We need to filter properties.
        document.writeln(name + ': ' + another_stooge[name]);   //Properties will appear in a randomly order.
    }
}

//If we want that properties appear in a determinate order, we should use the next form:
//In addition, we avoid properties that could have been dredged up from the protoype chain.
var i;
var properties = [
'first-name',
'middle-name',
'last-name',
'profession'
];



for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ': ' +
    another_stooge[properties[i]]);
    }

    another_stooge.nickname
    // 'Moe'
    // Remove nickname from another_stooge, revealing
    // the nickname of the prototype.
    delete another_stooge.nickname;
    another_stooge.nickname
    // 'Curly'
