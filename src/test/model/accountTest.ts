import { Account } from "../../model/account";
import { describe } from 'mocha';
import { expect } from 'chai';

const NAME = "NAME";
const BALANCE = 100;

describe('AccountTest', () => {
    
    describe('create Account owner', () => {
        const account = new Account(BALANCE,NAME);
        expect(account.owner)
        .to
        .equal(NAME)
    });

    describe('create Account balance', () => {
        const account = new Account(BALANCE,NAME);
        expect(account.owner)
        .to
        .equal(BALANCE)
    });
});
