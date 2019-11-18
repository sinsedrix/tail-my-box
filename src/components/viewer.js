import React, { createRef } from "react"
import Face from "./boxparts/face"
import Separator from "./boxparts/separator"
import Inside from "./boxparts/inside"
import siteConfig from '../../data/siteConfig'

const cutStyle = {
    stroke: '#FF0000',
    strokeWidth: '0.1mm',
    fill: 'none'
};

const engraveStyle = {
    stroke: 'none',
    strokeWidth: '0.1mm',
    fill: '#000000'
};

const Viewer = ({ values }) => {
    let svgRef = createRef();
    let lnkRef = createRef();

    let { w, h, d, bt, lt, dc, ni } = values;
    // dimensions extérieures
    let wext = w + 4 * bt;
    let hext = h + 2 * bt;
    let dext = d + 4 * bt;
    // nombre et taille des queues
    let ncw = Math.floor(wext / 2 / dc), dw = wext / (ncw * 2 + 1);
    let nch = Math.floor(hext / 2 / dc), dh = hext / (nch * 2 + 1);
    let ncd = Math.floor(dext / 2 / dc), dd = dext / (ncd * 2 + 1);

    let x = 2 * bt;

    let faces = [];

    faces.push({
        id: "front",
        oX: x, oY: 2 * bt,
        dw: dw, dh: dh,
        nw: ncw, nh: nch,
        w: wext, h: hext,
        bt: bt, lt: lt,
        dcut: 4 * dh,
        flExtX: false, flExtY: false
    });

    faces.push({
        id: "rear",
        oX: x, oY: (3 * bt + hext),
        dw: dw, dh: dh,
        nw: ncw, nh: nch,
        w: wext, h: hext,
        bt: bt, lt: lt,
        dcut: 4 * dh,
        flExtX: false, flExtY: false
    });

    x += wext + bt;

    faces.push({
        id: "left",
        oX: x, oY: 2 * bt,
        dw: dd, dh: dh,
        nw: ncd, nh: nch,
        w: dext, h: hext,
        bt: bt, lt: lt,
        dcut: 4 * dh,
        flExtX: false, flExtY: true
    });

    faces.push({
        id: "right",
        oX: x, oY: (3 * bt + hext),
        dw: dd, dh: dh,
        nw: ncd, nh: nch,
        w: dext, h: hext,
        bt: bt, lt: lt,
        dcut: 4 * dh,
        flExtX: false, flExtY: true
    });

    x += dext + bt;

    faces.push({
        id: "top",
        oX: x, oY: 2 * bt,
        dw: dd, dh: dw,
        nw: ncd, nh: ncw,
        w: dext, h: wext,
        bt: bt, lt: lt,
        dcut: 0,
        flExtX: true, flExtY: true
    });

    faces.push({
        id: "bottom",
        oX: x, oY: (3 * bt + wext),
        dw: dd, dh: dw,
        nw: ncd, nh: ncw,
        w: dext, h: wext,
        bt: bt, lt: lt,
        dcut: 0,
        flExtX: true, flExtY: true
    });

    x += dext + bt;

    let seps = [];

    for (var i = 0; i < ni / 2 + 1; i++) {
        seps.push({
            id: 'sepA' + i,
            oX: x, oY: 2 * bt,
            w: w + 2 * bt,
            h: h - dh + bt,
            bt: bt,
            lt: lt,
            wenc: w, henc: dh + bt
        });

        seps.push({
            id: 'sepB' + i,
            oX: x, oY: 3 * bt + hext,
            w: w + 2 * bt,
            h: h - dh + bt,
            bt: bt,
            lt: lt,
            wenc: w, henc: dh + bt
        });

        x += w + 3 * bt;
    }
    let insides = [];

    insides.push({
        id: 'insA',
        oX: x, oY: 2 * bt,
        w: d + 2 * bt, h: h - dh + bt,
        bt: bt, lt: lt,
        ni: ni
    });

    insides.push({
        id: 'insB',
        oX: x, oY: 3 * bt + hext,
        w: d + 2 * bt, h: h - dh + bt,
        bt: bt, lt: lt,
        ni: ni
    });

    const getFilename = ({ w, h, d, bt }) => {
        return 'deckbox_' + w + 'x' + h + 'x' + d + '_' + bt + '.svg';
    }

    const downloadSvg = () => {
        var xml = svgRef.current.outerHTML;
        var type = 'image/svg+xml';
        var uri = 'data:' + type + ';utf8,' + encodeURIComponent(xml);
        var name = getFilename(values);

        var link = lnkRef.current;
        link.download = name;
        link.type = type;
        link.href = uri;
        link.click();
    };

    return (
        <div id="svgview">
            <svg ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="600" height="300"
                viewBox="0 0 600 300">
                {faces.map(face =>
                    <Face key={face.id} {...face} style={cutStyle} />
                )}
                {seps.map(sep =>
                    <Separator key={sep.id} {...sep} style={cutStyle} />
                )}
                {insides.map(ins =>
                    <Inside key={ins.id} {...ins} style={cutStyle} />
                )}
                <text x={10} y={280} fontFamily="Verdana" fontSize="10" style={engraveStyle}>{siteConfig.title + ' by ' + siteConfig.author}</text>
                <text x={10} y={290} fontFamily="Verdana" fontSize="10" style={engraveStyle}>{getFilename(values)}</text>
            </svg>

            <div className="overlay">
                <a className="downloadLnk" ref={lnkRef} href="/">Download link</a>
                <button className="downloadBtn" onClick={downloadSvg}>Download</button>
            </div>
        </div>
    );
}

export default Viewer