import {objToCamel} from "./objectKeyCaseConversion";

describe("object key case conversion utils", () => {
    describe("objToCamel", () => {
        it("should successfully convert a snake-case object to camel case", () => { 
            expect(objToCamel({
                long_name: "John Doe",
                friends: [{
                    long_name: "Martha Doe"
                }, {
                    long_name: "Jake Doe"
                }],
                address: {
                    "long_name": "Test Street 1"
                }
            })).toEqual({
                longName: "John Doe",
                friends: [{
                    longName: "Martha Doe"
                }, {
                    longName: "Jake Doe"
                }],
                address: {
                    "longName": "Test Street 1"
                }
            });
        });
    });
});
