import React from "react"

// id : id
// dw : largeur encoche
// dh : hauteur encoche
// nw : nb encoches largeur
// nh : nb encoches hauteur
// bt : board thickness
// lt : laser thickness
// dcut : découpe coffre
// flExtX : flag exterieur abscisse
// flExtY : flag exterieur ordonnée
const Inside = ({ id, oX, oY, w, h, bt, lt, ni, style }) => {

    let line = { x1: 0, y1: 0, x2: w, y2: 0 };
    let wou = w + 2 * lt;
    let hou = h + 2 * lt;
    let btin = bt - 2 * lt;

    let dp = (wou - btin) / (ni + 1) - btin;
    let path = 'm ' + 0 + ',' + 0 + ' l ' + 0 + ',' + (2 * hou / 3) + ' ';
    for (let i = 0; i < ni + 1; i++) {
        path += btin + ',' + 0 + ' ' + 0 + ',' + + (hou / 3) + ' ' + dp + ',' + 0 + ' ' + 0 + ',' + (-hou / 3) + ' ';
    }
    path += btin + ',' + 0 + ' ' + 0 + ',' + (-2 * hou / 3);

    return (
        <g id={id} className="inside" style={style}
            transform={'translate(' + oX + ',' + oY + ')'}>
            <line {...line} />
            <path d={path} />
        </g>
    );
};

export default Inside