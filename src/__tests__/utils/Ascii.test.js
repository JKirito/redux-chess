import Ascii from 'common/Ascii.js';
import Pgn from 'common/Pgn.js';

describe('toFen()', () => {
  it('is a starting position', () => {
    const board = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    expect(Ascii.toFen(board)).toBe('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  });
  it('is pseudo-castling short', () => {
    const board = [
      [ ' r ', ' . ', ' b ', ' q ', ' k ', ' . ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' b ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' n ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' B ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' . ', ' . ', ' K ', ' R ' ]
    ];
    expect(Ascii.toFen(board)).toBe('r1bqk1nr/ppppbppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQ2KR');
  });
  it('is castling short', () => {
    const board = [
      [ ' r ', ' . ', ' b ', ' q ', ' k ', ' . ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' b ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' n ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' B ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' . ', ' R ', ' K ', ' . ' ]
    ];
    expect(Ascii.toFen(board)).toBe('r1bqk1nr/ppppbppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQ1RK1');
  });
  it('is r1bqkbnR/pppp1p2/2n5/4p1p1/2B1P3/5N2/PPPP1PP1/RNBQK3', () => {
    const board = [
      [ ' r ', ' . ', ' b ', ' q ', ' k ', ' b ', ' n ', ' R ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' n ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' p ', ' . ' ],
      [ ' . ', ' . ', ' B ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' N ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' . ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' . ', ' . ', ' . ' ]
    ];
    expect(Ascii.toFen(board)).toBe('r1bqkbnR/pppp1p2/2n5/4p1p1/2B1P3/5N2/PPPP1PP1/RNBQK3');
  });
});

describe('flip()', () => {
  it('is a starting position for White', () => {
    const board = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    const expected = board;
    expect(Ascii.flip(Pgn.symbol.WHITE, board)).toEqual(expected);
  });
  it('is a starting position for Black', () => {
    const board = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    const expected = [
      [ ' R ', ' N ', ' B ', ' K ', ' Q ', ' B ', ' N ', ' R ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' r ', ' n ', ' b ', ' k ', ' q ', ' b ', ' n ', ' r ' ]
    ];
    expect(Ascii.flip(Pgn.symbol.BLACK, board)).toEqual(expected);
  });
  it('is the Sicilian Defense for White', () => {
    const board = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' p ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    const expected = board;
    expect(Ascii.flip(Pgn.symbol.WHITE, board)).toEqual(expected);
  });
  it('is the Sicilian Defense for Black', () => {
    const board = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' p ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    const expected = [
      [ ' R ', ' N ', ' B ', ' K ', ' Q ', ' B ', ' N ', ' R ' ],
      [ ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P ', ' P ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ' ],
      [ ' r ', ' n ', ' b ', ' k ', ' q ', ' b ', ' n ', ' r ' ]
    ];
    expect(Ascii.flip(Pgn.symbol.BLACK, board)).toEqual(expected);
  });
});

describe('toAscii()', () => {
  it('is a starting position', () => {
    const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
    const expected = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    expect(Ascii.toAscii(fen)).toEqual(expected);
  });
  it('is 1.e4 e5', () => {
    const fen = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR';
    const expected = [
      [ ' r ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' p ', ' p ', ' . ', ' p ', ' p ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' p ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' P ', ' . ', ' P ', ' P ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    expect(Ascii.toAscii(fen)).toEqual(expected);
  });
  it('is the Benko Gambit', () => {
    const fen = 'rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N3P1/PP3P1P/R1BQ1KNR';
    const expected = [
      [ ' r ', ' n ', ' . ', ' q ', ' k ', ' b ', ' . ', ' r ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' p ', ' p ', ' . ', ' p ' ],
      [ ' . ', ' . ', ' . ', ' p ', ' . ', ' n ', ' p ', ' . ' ],
      [ ' . ', ' . ', ' p ', ' P ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' N ', ' . ', ' . ', ' . ', ' P ', ' . ' ],
      [ ' P ', ' P ', ' . ', ' . ', ' . ', ' P ', ' . ', ' P ' ],
      [ ' R ', ' . ', ' B ', ' Q ', ' . ', ' K ', ' N ', ' R ' ]
    ];
    expect(Ascii.toAscii(fen)).toEqual(expected);
  });
  it('is the Closed Sicilian', () => {
    const fen = 'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR';
    const expected = [
      [ ' r ', ' . ', ' b ', ' q ', ' k ', ' . ', ' n ', ' r ' ],
      [ ' p ', ' p ', ' . ', ' . ', ' p ', ' p ', ' b ', ' p ' ],
      [ ' . ', ' . ', ' n ', ' p ', ' . ', ' . ', ' p ', ' . ' ],
      [ ' . ', ' . ', ' p ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' P ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' N ', ' P ', ' . ', ' . ', ' P ', ' . ' ],
      [ ' P ', ' P ', ' P ', ' . ', ' . ', ' P ', ' B ', ' P ' ],
      [ ' R ', ' . ', ' B ', ' Q ', ' K ', ' . ', ' N ', ' R ' ]
    ];
    expect(Ascii.toAscii(fen)).toEqual(expected);
  });
});

describe('fromIndexToAlgebraic()', () => {
  it('is a8', () => {
    expect(Ascii.fromIndexToAlgebraic(0, 0)).toEqual('a8');
  });
  it('is a7', () => {
    expect(Ascii.fromIndexToAlgebraic(1, 0)).toEqual('a7');
  });
  it('is h2', () => {
    expect(Ascii.fromIndexToAlgebraic(6, 7)).toEqual('h2');
  });
  it('is h1', () => {
    expect(Ascii.fromIndexToAlgebraic(7, 7)).toEqual('h1');
  });
});

describe('fromAlgebraicToIndex()', () => {
  it('is 0, 0', () => {
    expect(Ascii.fromAlgebraicToIndex('a8')).toEqual([0, 0]);
  });
  it('is 1, 0', () => {
    expect(Ascii.fromAlgebraicToIndex('a7')).toEqual([1, 0]);
  });
  it('is 6, 7', () => {
    expect(Ascii.fromAlgebraicToIndex('h2')).toEqual([6, 7]);
  });
  it('is 7, 7', () => {
    expect(Ascii.fromAlgebraicToIndex('h1')).toEqual([7, 7]);
  });
});

describe('promote()', () => {
  it('a8', () => {
    const board = [
      [ ' P ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' P ', ' P ', ' P ', ' P ', ' P ', ' p ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    const expected = [
      [ ' Q ', ' n ', ' b ', ' q ', ' k ', ' b ', ' n ', ' r ' ],
      [ ' p ', ' . ', ' p ', ' p ', ' p ', ' p ', ' p ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ' ],
      [ ' . ', ' P ', ' P ', ' P ', ' P ', ' P ', ' p ', ' P ' ],
      [ ' R ', ' N ', ' B ', ' Q ', ' K ', ' B ', ' N ', ' R ' ]
    ];
    expect(Ascii.promote(board)).toEqual(expected);
  });
});
