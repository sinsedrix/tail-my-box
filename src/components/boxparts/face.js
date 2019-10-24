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
    let x, y, dx, dy, i, j;
    let extex = flExtY ? 0 : bt, extey = flExtX ? 0 : bt;
    let dew = flExtY ? w : w - bt, deh = flExtX ? h : h - bt;
    let lines = [];

    x = y = 0;
    console.log("id, oX, oY, w, h, dw, dh, nw, nh, bt, lt, dcut, flExtX, flExtY, extex, extey :", id, oX, oY, w, h, dw, dh, nw, nh, bt, lt, dcut, flExtX, flExtY, extex, extey);
    lines.push({ x1: x + extex, y1: y + extey, x2: x + dw, y2: y + extey }); //-

    lines.push({ x1: x + extex, y1: y + deh, x2: x + dw, y2: y + deh }); //-
    lines.push({ x1: x + dw, y1: y, x2: x + dw, y2: y + bt }); //|
    lines.push({ x1: x + dw, y1: y + h, x2: x + dw, y2: y + h - bt }); //|
    x += dw;
    for (i = 1; i < 2 * nw; i++ , x += dw) {
        dy = flExtX ? bt * (i % 2) : bt * ((i + 1) % 2);
        lines.push({ x1: x, y1: y + dy, x2: x + dw, y2: y + dy }); //_
        lines.push({ x1: x + dw, y1: y, x2: x + dw, y2: y + bt }); //|

        lines.push({ x1: x, y1: y + h - dy, x2: x + dw, y2: y + h - dy }); //_
        lines.push({ x1: x + dw, y1: y + h, x2: x + dw, y2: y + h - bt }); //|
    }
    lines.push({ x1: x, y1: y + extey, x2: x + dw - extex, y2: y + extey }); // -
    lines.push({ x1: x, y1: y + h - extey, x2: x + dw - extex, y2: y + h - extey }); // -

    x = y = 0;
    lines.push({ x1: x + extex, y1: y + extey, x2: x + extex, y2: y + dh }); //|
    lines.push({ x1: x + dew, y1: y + extey, x2: x + dew, y2: y + dh }); //|
    lines.push({ x1: x, y1: y + dh, x2: x + bt, y2: y + dh }); //-
    lines.push({ x1: x + w, y1: y + dh, x2: x + w - bt, y2: y + dh }); //-
    y += dh;
    for (j = 1; j < 2 * nh; j++ , y += dh) {
        dx = flExtY ? bt * (j % 2) : bt * ((j + 1) % 2);
        lines.push({ x1: x + dx, y1: y, x2: x + dx, y2: y + dh });
        lines.push({ x1: x, y1: y + dh, x2: x + bt, y2: y + dh });

        lines.push({ x1: x + w - dx, y1: y, x2: x + w - dx, y2: y + dh });
        lines.push({ x1: x + w, y1: y + dh, x2: x + w - bt, y2: y + dh });

    }
    lines.push({ x1: x + extex, y1: y, x2: x + extex, y2: y + dh - extey }); // |
    lines.push({ x1: x + dew, y1: y, x2: x + dew, y2: y + dh - extey }); // |

    if (dcut) lines.push({ x1: bt, y1: dcut, x2: w - bt, y2: dcut });

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