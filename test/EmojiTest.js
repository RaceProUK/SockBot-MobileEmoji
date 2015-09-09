'use strict';
/*globals describe, it, before, afterEach*/

const chai = require('chai'),
    sinon = require('sinon');
chai.should();
const expect = chai.expect;

const emoji = require('../Emoji'),
    mapping = require('../Emoji.json');

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
    it('should have start() as a stub function', () => {
        expect(emoji.start).to.not.throw();
    });
    it('should have stop() as a stub function', () => {
        expect(emoji.stop).to.not.throw();
    });
    it('should export handler()', () => {
        expect(emoji.privateFns.handler).to.be.a('function');
    });
    it('should export replaceEmoji()', () => {
        expect(emoji.privateFns.replaceEmoji).to.be.a('function');
    });
    describe('prepare()', () => {
        it('should register listener for `/latest`', () => {
            const spy =  sinon.spy();
            emoji.prepare(null, null, {onChannel: spy}, null);
            spy.calledWith('/latest', emoji.privateFns.handler).should.be.true;
        });
    });
    describe('handler()', () => {
        it('should call browser.getLastPosts()', () => {
            const spy = sinon.spy((_, __, callback) => callback());
            emoji.internals.browser = {getLastPosts: spy};
            emoji.privateFns.handler({'topic_id': 1});
            spy.calledOnce.should.be.true;
            expect(spy.args[0][0]).to.equal(1);
            expect(spy.args[0][1]).to.equal(emoji.privateFns.replaceEmoji);
            expect(spy.args[0][2]).to.be.a('function');
        });
    });
    describe('replaceEmoji()', () => {
        const spy = sinon.spy((_, __, ___, callback) => callback());
        const dummy = () => 0;
        before(() => {
            emoji.internals.browser = {editPost: spy};
        });
        afterEach(() =>{
            spy.reset();
        });
        Object.keys(mapping).forEach(raw => {
            it('should replace ' + raw + ' with ' + mapping[raw], () => {
                emoji.privateFns.replaceEmoji({id: 1, raw: raw, yours: true}, dummy);
                spy.calledOnce.should.be.true;
                expect(spy.args[0][0]).to.equal(1);
                expect(spy.args[0][1]).to.equal(mapping[raw]);
                expect(spy.args[0][3]).to.be.a('function');
            });
        });
        it('should not call browser.editPost() when nothing changed', () => {
            emoji.privateFns.replaceEmoji({id: 1, raw: 'text', yours: true}, dummy);
            spy.called.should.be.false;
        });
        it('should not call browser.editPost() when not your post', () => {
            emoji.privateFns.replaceEmoji({id: 1, raw: 'text', yours: false}, dummy);
            spy.called.should.be.false;
        });
    });
});
