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
const Separator = ({ id, oX, oY, w, h, bt, lt, wenc, henc, style }) => {
    let paths = [];
    let wou = w + 2 * lt;
    let hou = h + 2 * lt;
    let btin = bt - 2 * lt;
    let wencin = wenc - 2 * lt;
    let hencin = henc - 2 * lt;

    paths.push('m ' + btin + ',' + 0 + ' l ' + (wou - 2 * bt) + ',' + 0);
    paths.push('m ' + btin + ',' + 0 + ' l ' + 0 + ',' + (2 * hou / 3) + ' ' + (-btin) + ',' + 0 + ' ' + 0 + ',' + (hou / 3));
    paths.push('m ' + (wou - btin) + ',' + 0 + ' l ' + 0 + ',' + (2 * hou / 3) + ' ' + btin + ',' + 0 + ' ' + 0 + ',' + (hou / 3));

    let dl = (wou - wencin) / 2;
    paths.push('m ' + 0 + ',' + hou + ' l ' + dl + ',' + 0 + ' q ' + wencin / 8 + ',' + 0 + ' ' + wencin / 4 + ',' + (-hencin / 2) + ' t ' + wencin / 4 + ',' + (-hencin / 2));
    paths.push('m ' + wou + ',' + hou + ' l ' + (-dl) + ',' + 0 + ' q ' + (-wencin / 8) + ',' + 0 + ' ' + (-wencin / 4) + ',' + (-hencin / 2) + ' t ' + (-wencin / 4) + ',' + (-hencin / 2));

    return (
        <g id={id} className="separator" style={style}
            transform={'translate(' + oX + ',' + oY + ')'}>
            {paths.map((path, idx) =>
                <path key={id + '' + idx} d={path} />
            )}
        </g>
    );
};

export default Separator