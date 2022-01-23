const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('intern info', () => {
    const intern = new Intern('Jared', '777', 'jared.dodson04@gmail.com', 'UT', 'Intern');

    expect(intern.name).toBe('Jared');
    expect(intern.id).toBe('777');
    expect(intern.email).toBe('jared.dodson04@gmail.com');
});

test('intern school', () => {
    const intern = new Intern('Jared', '777', 'jared.dodson04@gmail.com', 'UT', 'Intern');

    expect(intern.getSchool()).toEqual(intern.school);
});

test('intern role', () => {
    const intern = new Intern('Jared', '777', 'jared.dodson04@gmail.com', 'UT', 'Intern');

    expect(intern.getRole()).toEqual('Intern');
});