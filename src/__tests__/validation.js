import { validateEmail, validatePassword } from '../utils/validation';

test('passes on valid email', () => {
    const email = 'hej@gmail.com';
    expect(validateEmail(email)).toBe(true);
});

test('fails on invalid email', () => {
    const email = 'hej.då';
    expect(validateEmail(email)).toBe(false);
});

test('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    const password = 'ThisIsMyPass101';
    expect(validatePassword(password)).toBe(true);
});

test('invalid password: missing digit', () => {
    const password = 'NoNumber';
    expect(validatePassword(password)).toBe(false);
});

test('invalid password: missing 1 uppercase', () => {
    const password = 'nouppercasepass101';
    expect(validatePassword(password)).toBe(false);
});
