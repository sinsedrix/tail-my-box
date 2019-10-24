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

    var dp = (w - bt) / (ni + 1) - bt;
    var path = 'm ' + 0 + ',' + 0 + ' l ' + 0 + ',' + (2 * h / 3) + ' ';
    for (var i = 0; i < ni + 1; i++) {
        path += bt + ',' + 0 + ' ' + 0 + ',' + + (h / 3) + ' ' + dp + ',' + 0 + ' ' + 0 + ',' + (-h / 3) + ' ';
    }
    path += bt + ',' + 0 + ' ' + 0 + ',' + (-2 * h / 3);

    return (
        <g id={id} className="inside" style={style}
            transform={'translate(' + oX + ',' + oY + ')'}>
            <line {...line} />
            <path d={path} />
        </g>
    );
};

export default Inside