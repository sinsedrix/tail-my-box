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
const Face = ({ id, oX, oY, w, h, dw, dh, nw, nh, bt, lt, dcut, flExtX, flExtY, style }) => {
    let dwin = dw - 2 * lt, dwou = dw + 2 * lt;
    let dhin = dh - 2 * lt, dhou = dh + 2 * lt;
    let btin = bt - 2 * lt, btex = bt + lt;
    let linesB = [], linesT = [], linesL = [], linesR = [];
    let fdw = (flExt, idx) => { return flExt === (idx % 2 ? true : false) ? dwin : dwou; };
    let fdh = (flExt, idx) => { return flExt === (idx % 2 ? true : false) ? dhin : dhou; };
    let fbt = (flExt, idx) => { return btex * (flExt === (idx % 2 ? true : false)); };

    for (let i = 0, x = 0; i <= 2 * nw; i++) {
        let dwi = fdw(flExtX, i);
        let bti = fbt(flExtX, i);

        linesB.push({ x1: x, y1: bti, x2: x + dwi, y2: bti }); //-
        if (i < 2 * nw) linesB.push({ x1: x + dwi, y1: 0, x2: x + dwi, y2: btex }); //|

        linesT.push({ x1: x, y1: h - bti, x2: x + dwi, y2: h - bti }); //-
        if (i < 2 * nw) linesT.push({ x1: x + dwi, y1: h, x2: x + dwi, y2: h - btex }); //|
        x += dwi;
    }

    for (let j = 0, y = 0; j <= 2 * nh; j++) {
        let dhj = fdh(flExtY, j);
        let btj = fbt(flExtY, j);

        linesL.push({ x1: btj, y1: y, x2: btj, y2: y + dhj }); //-
        if (j < 2 * nh) linesL.push({ x1: 0, y1: y + dhj, x2: btex, y2: y + dhj }); //|

        linesR.push({ x1: w - btj, y1: y, x2: w - btj, y2: y + dhj }); //-
        if (j < 2 * nh) linesR.push({ x1: w, y1: y + dhj, x2: w - btex, y2: y + dhj }); //|
        y += dhj;
    }

    let lines = linesL.concat(linesR).concat(linesB).concat(linesT);
    if (dcut) lines.push({ x1: btin, y1: dcut, x2: w - btin, y2: dcut });

    return (
        <g id={id} className="face" style={style}
            transform={'translate(' + oX + ',' + oY + ')'}>
            {lines.map((line, idx) =>
                <line key={id + '' + idx} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
            )}

        </g>
    );
};

export default Face