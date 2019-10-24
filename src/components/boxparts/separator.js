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

    paths.push('m ' + bt + ',' + 0 + ' l ' + (w - 2 * bt) + ',' + 0);
    paths.push('m ' + bt + ',' + 0 + ' l ' + 0 + ',' + (2 * h / 3) + ' ' + (-bt) + ',' + 0 + ' ' + 0 + ',' + (h / 3));
    paths.push('m ' + (w - bt) + ',' + 0 + ' l ' + 0 + ',' + (2 * h / 3) + ' ' + bt + ',' + 0 + ' ' + 0 + ',' + (h / 3));

    var dl = (w - wenc) / 2;
    paths.push('m ' + 0 + ',' + h + ' l ' + dl + ',' + 0 + ' q ' + wenc / 8 + ',' + 0 + ' ' + wenc / 4 + ',' + (-henc / 2) + ' t ' + wenc / 4 + ',' + (-henc / 2));
    paths.push('m ' + w + ',' + h + ' l ' + (-dl) + ',' + 0 + ' q ' + (-wenc / 8) + ',' + 0 + ' ' + (-wenc / 4) + ',' + (-henc / 2) + ' t ' + (-wenc / 4) + ',' + (-henc / 2));

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