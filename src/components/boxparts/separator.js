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
// prettier-ignore
const Separator = ({ id, oX, oY, w, h, bt, lt, wenc, henc, style }) => {
    let paths = [];
    let wou = w - 2 * lt;
    let hou = h - 2 * lt;

    paths.push('m ' + bt + ',' + 0 + ' l ' + (wou - 2 * bt) + ',' + 0);
    paths.push('m ' + bt + ',' + 0 + ' l ' + 0 + ',' + (2 * hou / 3) + ' ' + (-bt) + ',' + 0 + ' ' + 0 + ',' + (hou / 3));
    paths.push('m ' + (wou - bt) + ',' + 0 + ' l ' + 0 + ',' + (2 * hou / 3) + ' ' + bt + ',' + 0 + ' ' + 0 + ',' + (hou / 3));

    let dl = (wou - wenc) / 2;
    paths.push('m ' + 0 + ',' + hou + ' l ' + dl + ',' + 0 + ' q ' + wenc / 8 + ',' + 0 + ' ' + wenc / 4 + ',' + (-henc / 2) + ' t ' + wenc / 4 + ',' + (-henc / 2));
    paths.push('m ' + wou + ',' + hou + ' l ' + (-dl) + ',' + 0 + ' q ' + (-wenc / 8) + ',' + 0 + ' ' + (-wenc / 4) + ',' + (-henc / 2) + ' t ' + (-wenc / 4) + ',' + (-henc / 2));

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
