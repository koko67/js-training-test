var Human = require ('./human.js');
describe('human', function(){
	var human = null;
	
	beforeEach(function(){
		human = new Human();
	});

	afterEach(function(){
		console.log('afterEach');
		human = null;
	});

	it('should throw an exception when the name of human is undefined', function(){
		expect(function(){
			var name = undefined;
			human.getBio(name, 6)
		}).toThrow('Need name and age to provide a biography.');
	});

	it('should throw an exception when the age of human is undefined', function(){
		expect(function(){
			var age = undefined;
			human.getBio('Lennon', age)
		}).toThrow('Need name and age to provide a biography.');
	});

	it('should throw an exception when the age is less than 0', function(){
		expect(function(){
			var age = undefined;
			human.getBio('Lennon', -5)
		}).toThrow('Invalid age.');
	});

	it('should throw an exception when the age is less than 0', function(){
		expect(function(){
			var age = undefined;
			human.getBio('Lennon', 'hello')
		}).toThrow('Invalid age.');
	});

	it('should return the message according the name and age when both are correct values', function(){
		var name = 'Jon Snow';
		var age = 24;
		var actualMessage = human.getBio(name, age);
		var expectedMessage = 'Hi my name is ' + name + ', I am ' + age + ' years old and I am a nice guy';
		expect(expectedMessage).toEqual(actualMessage);
	});
});