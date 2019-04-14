'use strict';

/**
 * Returns the bank account number parsed from specified string.
 *
 * You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 * The machine scans the paper documents, and produces a string with a bank account that looks like this:
 *
 *    _  _     _  _  _  _  _
 *  | _| _||_||_ |_   ||_||_|
 *  ||_  _|  | _||_|  ||_| _|
 *
 * Each string contains an account number written using pipes and underscores.
 * Each account number should have 9 digits, all of which should be in the range 0-9.
 *
 * Your task is to write a function that can take bank account string and parse it into actual account numbers.
 *
 * @param {string} bankAccount
 * @return {number}
 *
 * Example of return :
 *
 *   '    _  _     _  _  _  _  _ \n'+
 *   '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
 *   '  ||_  _|  | _||_|  ||_| _|\n'
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
 *   '|_||_  _||_| _||_|  ||_| _|\n',
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
 *   '|_||_  _||_| _||_| _||_| _|\n',
 *
 */
function parseBankAccount(bankAccount) {
    // throw new Error('Not implemented');
    function getNumberFromBankString (str) {
        switch (str) {
            case ' _ ' +
                 '| |' +
                 '|_|':
                return 0;
            case '   ' +
                 '  |' +
                 '  |':
                return 1;
            case ' _ ' +
                 ' _|' +
                 '|_ ':
                return 2;
            case ' _ ' +
                 ' _|' +
                 ' _|':
                return 3;
            case '   ' +
                 '|_|' +
                 '  |':
                return 4;
            case ' _ ' +
                 '|_ ' +
                 ' _|':
                return 5;
            case ' _ ' +
                 '|_ ' +
                 '|_|':
                return 6;
            case ' _ ' +
                 '  |' +
                 '  |':
                return 7;
            case ' _ ' +
                 '|_|' +
                 '|_|':
                return 8;
            case ' _ ' +
                 '|_|' +
                 ' _|':
                return 9;
        }
    }
    let splitted = bankAccount.split('\n'), res = 0, curr;
    for (let i = 0; i < splitted[0].length; i += 3) {
        curr = splitted[0].slice(i, i + 3) + splitted[1].slice(i, i + 3) + splitted[2].slice(i, i + 3);
        res = res * 10 + getNumberFromBankString(curr);
    }
    return res;
}


/**
 * Returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the specified column number.
 * Lines can be broken at word boundaries only.
 *
 * @param {string} text
 * @param {number} columns
 * @return {Iterable.<string>}
 *
 * @example :
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 26 =>  'The String global object',
 *                                                                                                'is a constructor for',
 *                                                                                                'strings, or a sequence of',
 *                                                                                                'characters.'
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 12 =>  'The String',
 *                                                                                                'global',
 *                                                                                                'object is a',
 *                                                                                                'constructor',
 *                                                                                                'for strings,',
 *                                                                                                'or a',
 *                                                                                                'sequence of',
 *                                                                                                'characters.'
 */
function* wrapText(text, columns) {
    // throw new Error('Not implemented');

}


/**
 * Returns the rank of the specified poker hand.
 * See the ranking rules here: https://en.wikipedia.org/wiki/List_of_poker_hands.
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
const PokerRank = {
    StraightFlush: 8,
    FourOfKind: 7,
    FullHouse: 6,
    Flush: 5,
    Straight: 4,
    ThreeOfKind: 3,
    TwoPairs: 2,
    OnePair: 1,
    HighCard: 0
}

function getPokerHandRank(hand) {
    // throw new Error('Not implemented');
    const PokerRank = {
        StraightFlush: 8,
        FourOfKind: 7,
        FullHouse: 6,
        Flush: 5,
        Straight: 4,
        ThreeOfKind: 3,
        TwoPairs: 2,
        OnePair: 1,
        HighCard: 0
    }

    let cards = '234567891JQKA'
    let ranks = hand.map(v => v[0]).sort((a, b) => cards.indexOf(a) - cards.indexOf(b)).join('');
    let suits = hand.map(v => v[v.length - 1]).join('');
    let groupedRanks = ranks.match(/(.)\1{0,99}/g);
    let groupedSuits = suits.match(/(.)\1{0,99}/g);
    if (groupedSuits.length == 1 && (cards.indexOf(ranks) != -1 || ranks == '2345A')) {
        return PokerRank.StraightFlush;
    }
    if (groupedRanks[0].length == 4 || groupedRanks[1].length == 4) {
        return PokerRank.FourOfKind;
    }
    if (groupedRanks[0].length + groupedRanks[1].length == 5) {
        return PokerRank.FullHouse;
    }
    if (groupedSuits.length == 1) {
        return PokerRank.Flush;
    }
    if (cards.indexOf(ranks) != -1 || ranks == '2345A') {
        return PokerRank.Straight;
    }
    if (groupedRanks[0].length == 3 || groupedRanks[1].length == 3 || groupedRanks[2].length == 3) {
        return PokerRank.ThreeOfKind;
    }
    if (groupedRanks[0].length + groupedRanks[1].length + groupedRanks[2].length == 5) {
        return PokerRank.TwoPairs;
    }
    if (groupedRanks[0].length + groupedRanks[1].length + groupedRanks[2].length + groupedRanks[3].length == 5) {
        return PokerRank.OnePair;
    }
    return PokerRank.HighCard;

}


/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +, vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectanles does not matter.
 * 
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 * 
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+              '+------------+\n'+
 *    '|            |\n'+              '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+       =>     '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+              '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'               '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
function* getFigureRectangles(figure) {
//    throw new Error('Not implemented');
    
}


module.exports = {
    parseBankAccount : parseBankAccount,
    wrapText: wrapText,
    PokerRank: PokerRank,
    getPokerHandRank: getPokerHandRank,
    getFigureRectangles: getFigureRectangles
};
