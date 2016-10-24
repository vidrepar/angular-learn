





describe('A spec suite', function () {


    var count = 0;
    afterEach(function () {
        count = 0;
    });

    it('should add one to count', function () {

        count += 1;
        expect(count).toEqual(1);

    });

    it('should check for the reset value', function () {

        expect(count).toEqual(0);

    });





    var message;
    beforeEach(function () {

        message = 'hello ';

    });

    it('should say hello world', function () {
        expect(message + 'world').toEqual('hello world');
    });

    it('should say hello ari', function () {
        expect(message + 'ari').toEqual('hello ari');
    });

    // Creating a custom matcher
    /*this.addMatchers({
        toBeLessThanOrEqual: function (expected) {
            return this.actual <= expected;
        }
    });
*/
    it('contains passing specs', function () {

        var value = 10,
            another_value = value,
            valueString = '<h2>Header element: welcome</h2>',
            undefined_value = undefined,
            null_value = null,
            array = [1,2,3,4],
            strArray = ['sdfsdf', 'a', 'b'],
            clValue = 30.02
            ;


        expect(function () {
            return a + 10;
        }).toThrow();
        expect(function () {
            return 2 + 10;
        }).not.toThrow();
        expect(clValue).toBeCloseTo(30, 0);
        expect(clValue).not.toBeCloseTo(20, 2);
        expect(strArray).toContain('a');
        expect(array).toContain(4);
        expect(array).not.toContain(12);
        expect(value).toBeTruthy();
        expect(undefined_value).not.toBeTruthy();
        expect(null_value).toBeNull();
        expect(value).not.toBeNull();
        expect(undefined_value).toBeUndefined();
        expect(value).not.toBeUndefined();
        expect(value).toBeDefined();
        expect(undefined_value).not.toBeDefined();
        expect(valueString).toMatch(/welcome/);
        expect(valueString).toMatch('welcome');
        expect(valueString).not.toMatch('goodbye');
        expect(value).toEqual(10);
        expect(value).toBe(another_value);
        expect(value).not.toBe(null);

    });

});



describe('A spec suite', function () {

    it('contains a passing spec', function () {

        expect(true).toBe(true);

    });

    it('contains another passing spec', function () {

        expect(false).not.toBe(true);

    })

});

describe('Unit test: TddCtrl', function(){

    describe('index method', function () {



    });

});
