'use strict';
/*globals describe, it*/

const chai = require('chai'),
    sinon = require('sinon');
chai.should();
const expect = chai.expect;

const emoji = require('../Emoji');
describe('Emoji', () => {
    it('should export prepare()', () => {
        expect(emoji.prepare).to.be.a('function');
    });
    it('should export start()', () => {
        expect(emoji.start).to.be.a('function');
    });
    it('should export stop()', () => {
        expect(emoji.stop).to.be.a('function');
    });
    it('should export handler()', () => {
        expect(emoji.handler).to.be.a('function');
    });
    it('should have start() as a stub function', () => {
        expect(emoji.start).to.not.throw();
    });
    it('should have stop() as a stub function', () => {
        expect(emoji.stop).to.not.throw();
    });
});
