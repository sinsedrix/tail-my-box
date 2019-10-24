/* http://sinsedrix.com/design/deckbox/index.html
   SVG deckbox design for jQuery SVG
   Written by Cedric Couliou (sinsedrix{at}gmail.com) Mars 2017.
   Available under the CeCILL license (http://sinsedrix.com/license/Licence_CeCILL-en.html). 
   Disponible sous licence CeCILL (http://sinsedrix.com/license/Licence_CeCILL-fr.html). 
   Please attribute the author if you use it. */

(function($) {

	// l : largeur intérieure
	// h : hauteur intérieure
	// p : profondeur intérieure
	// bt : board thickness
	// q : queue
	// lt : laser thickness
	// nbi : nb separateurs
	$.fn.deckbox = function(l, h, p, bt, q, lt, nbi, options) {
		var settings = $.extend({
		}, options );

		var svg = this.svg('get'); // SVG wrapper
	
		// dimensions extérieures
		var lext = l + 4*bt;
		var hext = h + 2*bt;
		var pext = p + 4*bt;
		// nombre et taille des queues
		var ncl = Math.floor(lext/2/q), dl = lext/(ncl*2+1);
		var nch = Math.floor(hext/2/q), dh = hext/(nch*2+1);
		var ncp = Math.floor(pext/2/q), dp = pext/(ncp*2+1);
		
		var g = svg.group();			
		var x = 2*bt;
		
		var f1a = generateFace(svg, 'f1a', x, 2*bt,            dl, dh, ncl, nch, lext, hext, bt, lt, 4*dh, false, false);
		var f1b = generateFace(svg, 'f1b', x, (3*bt + hext),   dl, dh, ncl, nch, lext, hext, bt, lt, 4*dh, false, false);
		var f3a = generateFace(svg, 'f3a', x, (4*bt + 2*hext), dl, dp, ncl, ncp, lext, pext, bt, lt, 0,    true,  true);

		x += lext + bt;
		
		var f2a = generateFace(svg, 'f2a', x, 2*bt,            dp, dh, ncp, nch, pext, hext, bt, lt, 4*dh, false, true);
		var f2b = generateFace(svg, 'f2b', x, (3*bt + hext),   dp, dh, ncp, nch, pext, hext, bt, lt, 4*dh, false, true);
		var f3b = generateFace(svg, 'f3b', x, (4*bt + 2*hext), dl, dp, ncl, ncp, lext, pext, bt, lt, 0,    true,  true);
		
		x += pext + bt;
		
		for(var i=0; i<nbi/2+1; i++) {
			var i1a = generateSeparator(svg, 'i1a_'+ i, x, 2*bt       , l + 2*bt - lt, h - dh + bt, bt, l, dh + bt);
			var i1b = generateSeparator(svg, 'i1b_'+ i, x, 3*bt + hext, l + 2*bt - lt, h - dh + bt, bt, l, dh + bt);

			x += l + 3*bt;
		}

		var i2a = generateInside(svg, 'i2a', x, 2*bt,        p + 2*bt - lt, h - dh + bt, bt, nbi);
		var i2a = generateInside(svg, 'i2b', x, 3*bt + hext, p + 2*bt - lt, h - dh + bt, bt, nbi);
		
		var text = svg.text('Deckbox Designer by @sinsedrix', {class: 'copy', dx:450, dy:285});
		var text = svg.text(l+'x'+h+'x'+p+'_'+bt, {class: 'copy', dx:450, dy:295});

		return this;
	};
	
	//-------------------------------------------------------------------------
	// svg : SVG wrapper
	// id : group id
	// x : abscisse
	// y : ordonnee
	// w : width
	// h : height
	// bt : board thickness
	// henc : hauteur encoche
	function generateSeparator(svg, id, x, y, w, h, bt, wenc, henc) {
		var g = svg.group(id, {class: 'inside', transform:'translate('+x+','+y+')'});
		
		// svg.rect(g, 0, 0, w, h, {class:'debug'});

		var pathb = 'm '+ bt     +','+ 0 +' l '+ (w-2*bt) +','+ 0;
		var pathl = 'm '+ bt     +','+ 0 +' l '+ 0        +','+ (2*h/3) +' '+ (-bt) +','+ 0 +' '+ 0 +','+ (h/3);
		var pathg = 'm '+ (w-bt) +','+ 0 +' l '+ 0        +','+ (2*h/3) +' '+ bt    +','+ 0 +' '+ 0 +','+ (h/3);
		var encb = svg.path(g, pathb);
		var encl = svg.path(g, pathl);
		var encg = svg.path(g, pathg);

		var dl = (w - wenc)/2;
		var path1 = 'm '+ 0 +','+ h +' l '+ dl    +','+ 0 +' q '+ wenc/8    +','+ 0 +' '+ wenc/4    +','+ (-henc/2) +' t '+ wenc/4    +','+ (-henc/2);
		var path2 = 'm '+ w +','+ h +' l '+ (-dl) +','+ 0 +' q '+ (-wenc/8) +','+ 0 +' '+ (-wenc/4) +','+ (-henc/2) +' t '+ (-wenc/4) +','+ (-henc/2);
		var enc1 = svg.path(g, path1);
		var enc2 = svg.path(g, path2);
	}
	
	// svg : SVG wrapper
	// id : group id
	// x : abscisse
	// y : ordonnee
	// w : width
	// h : height
	// bt : board thickness
	// nbi : nb separateurs
	function generateInside(svg, id, x, y, w, h, bt, nbi) {
		var g = svg.group(id, {class: 'inside', transform:'translate('+x+','+y+')'});
		
		// svg.rect(g, 0, 0, w, h, {class:'debug'});	

		svg.line(g, 0, 0, w, 0);

		var dp = (w - bt)/(nbi+1) - bt;
		var path = 'm '+ 0 +','+ 0 +' l '+ 0 +','+ (2*h/3) +' ';
		for(var i = 0; i< nbi+1; i++) {
			path += bt +','+ 0 +' '+ 0 +','+ + (h/3) +' '+ dp +','+ 0 +' '+ 0 +','+ (-h/3) +' ';
		}
		path += bt +','+ 0 +' '+ 0 +','+ (-2*h/3);
		var cren = svg.path(g, path);

		return g;
	}

	// svg : SVG wrapper
	// id : group id
	// x : abscisse
	// y : ordonnee
	// dw : largeur encoche
	// dh : hauteur encoche
	// nw : nb encoches largeur
	// nh : nb encoches hauteur
	// bt : board thickness
	// dcut : 
	// flextx : flag exterieur abscisse
	// flexty : flag exterieur ordonnée
	function generateFace(svg, id, x, y, dw, dh, nw, nh, w, h, bt, lt, dcut, flextx, flexty) {
		var g = svg.group(id, {class: 'face', transform:'translate('+x+','+y+')'});
		
		var dx, dy, i, j;
		var extex = flexty ? 0:bt, extey = flextx ? 0:bt;
		var dew = flexty ? w : w - bt, deh = flextx ? h : h - bt;
		
		//svg.rect(g, 0, 0, w, h, {class:'debug'});
		
		x = y = 0;
		svg.line(g, x + extex, y + extey, x + dw, y + extey); //-
		svg.line(g, x + extex, y + deh  , x + dw, y + deh  ); //-
		svg.line(g, x + dw   , y        , x + dw, y + bt ); //|
		svg.line(g, x + dw   , y + h    , x + dw, y + h - bt ); //|
		x += dw;
		for(i=1; i<2*nw; i++, x+=dw)
		{
			dy = flextx ? bt*(i%2) : bt*((i+1)%2);
			svg.line(g, x       , y + dy    , x + dw  , y + dy    ); //_
			svg.line(g, x + dw  , y         , x + dw  , y + bt    ); //|
			
			svg.line(g, x       , y + h - dy, x + dw  , y + h - dy); //_
			svg.line(g, x + dw  , y + h     , x + dw  , y + h - bt); //|
		}
		svg.line(g, x, y + extey    , x + dw - extex, y + extey    ); // -
		svg.line(g, x, y + h - extey, x + dw - extex, y + h - extey); // -
		
		x = y = 0;
		svg.line(g, x + extex, y + extey, x + extex , y + dh); //|
		svg.line(g, x + dew  , y + extey, x + dew   , y + dh); //|
		svg.line(g, x        , y + dh   , x + bt    , y + dh); //-
		svg.line(g, x + w    , y + dh   , x + w - bt, y + dh); //-
		y += dh;
		for(j=1; j<2*nh; j++, y+=dh)
		{
			dx = flexty ? bt*(j%2) : bt*((j+1)%2);
			svg.line(g, x + dx    , y     , x + dx     , y + dh);
			svg.line(g, x         , y +dh , x + bt     , y + dh);
			
			svg.line(g, x + w - dx, y     , x + w - dx , y + dh);
			svg.line(g, x + w     , y + dh, x + w - bt , y + dh);
			
		}
		svg.line(g, x + extex, y, x + extex, y + dh - extey); // |
		svg.line(g, x + dew  , y, x + dew  , y + dh - extey); // |

		if(dcut) svg.line(g, bt, dcut, w-bt, dcut);
		
		return g;
	}

})(jQuery);
