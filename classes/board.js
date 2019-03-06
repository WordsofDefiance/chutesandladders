/**
 * Instatiates a single square
 *
 */

function Square ( position, portal)
{
    this.position = position;
    this.portal   = portal;
}

function Board ( squares ) 
{
    let board = [];
    for ( let i = 0; i < squares; i++) {
        board.push( new Square(i));
    }
    return board;
}

