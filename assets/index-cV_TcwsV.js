var yt = Object.defineProperty;
var wt = (t, s, l) =>
	s in t
		? yt(t, s, { enumerable: !0, configurable: !0, writable: !0, value: l })
		: (t[s] = l);
var De = (t, s, l) => (wt(t, typeof s != "symbol" ? s + "" : s, l), l);
(function () {
	const s = document.createElement("link").relList;
	if (s && s.supports && s.supports("modulepreload")) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) e(r);
	new MutationObserver((r) => {
		for (const o of r)
			if (o.type === "childList")
				for (const d of o.addedNodes)
					d.tagName === "LINK" && d.rel === "modulepreload" && e(d);
	}).observe(document, { childList: !0, subtree: !0 });
	function l(r) {
		const o = {};
		return (
			r.integrity && (o.integrity = r.integrity),
			r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: r.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function e(r) {
		if (r.ep) return;
		r.ep = !0;
		const o = l(r);
		fetch(r.href, o);
	}
})();
function I() {}
const xt = (t) => t;
function _t(t) {
	return t();
}
function ct() {
	return Object.create(null);
}
function F(t) {
	t.forEach(_t);
}
function Ne(t) {
	return typeof t == "function";
}
function J(t, s) {
	return t != t
		? s == s
		: t !== s || (t && typeof t == "object") || typeof t == "function";
}
let _e;
function C(t, s) {
	return t === s
		? !0
		: (_e || (_e = document.createElement("a")), (_e.href = s), t === _e.href);
}
function jt(t) {
	return Object.keys(t).length === 0;
}
function zt(t, ...s) {
	if (t == null) {
		for (const e of s) e(void 0);
		return I;
	}
	const l = t.subscribe(...s);
	return l.unsubscribe ? () => l.unsubscribe() : l;
}
function E(t, s, l) {
	t.$$.on_destroy.push(zt(s, l));
}
function h(t, s, l) {
	return t.set(l), s;
}
function it(t) {
	const s = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return s ? [parseFloat(s[1]), s[2] || "px"] : [t, "px"];
}
const ht = typeof window < "u";
let $t = ht ? () => window.performance.now() : () => Date.now(),
	Ge = ht ? (t) => requestAnimationFrame(t) : I;
const ae = new Set();
function pt(t) {
	ae.forEach((s) => {
		s.c(t) || (ae.delete(s), s.f());
	}),
		ae.size !== 0 && Ge(pt);
}
function Mt(t) {
	let s;
	return (
		ae.size === 0 && Ge(pt),
		{
			promise: new Promise((l) => {
				ae.add((s = { c: t, f: l }));
			}),
			abort() {
				ae.delete(s);
			},
		}
	);
}
function u(t, s) {
	t.appendChild(s);
}
function bt(t) {
	if (!t) return document;
	const s = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return s && s.host ? s : t.ownerDocument;
}
function Lt(t) {
	const s = f("style");
	return (s.textContent = "/* empty */"), Ht(bt(t), s), s.sheet;
}
function Ht(t, s) {
	return u(t.head || t, s), s.sheet;
}
function T(t, s, l) {
	t.insertBefore(s, l || null);
}
function L(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function f(t) {
	return document.createElement(t);
}
function kt(t) {
	return document.createTextNode(t);
}
function x() {
	return kt(" ");
}
function Tt() {
	return kt("");
}
function g(t, s, l, e) {
	return t.addEventListener(s, l, e), () => t.removeEventListener(s, l, e);
}
function a(t, s, l) {
	l == null
		? t.removeAttribute(s)
		: t.getAttribute(s) !== l && t.setAttribute(s, l);
}
function St(t) {
	return Array.from(t.childNodes);
}
function R(t, s, l, e) {
	l == null ? t.style.removeProperty(s) : t.style.setProperty(s, l, "");
}
function Ct(t, s, { bubbles: l = !1, cancelable: e = !1 } = {}) {
	return new CustomEvent(t, { detail: s, bubbles: l, cancelable: e });
}
const pe = new Map();
let be = 0;
function It(t) {
	let s = 5381,
		l = t.length;
	for (; l--; ) s = ((s << 5) - s) ^ t.charCodeAt(l);
	return s >>> 0;
}
function Bt(t, s) {
	const l = { stylesheet: Lt(s), rules: {} };
	return pe.set(t, l), l;
}
function At(t, s, l, e, r, o, d, c = 0) {
	const i = 16.666 / e;
	let n = `{
`;
	for (let k = 0; k <= 1; k += i) {
		const z = s + (l - s) * o(k);
		n +=
			k * 100 +
			`%{${d(z, 1 - z)}}
`;
	}
	const m =
			n +
			`100% {${d(l, 1 - l)}}
}`,
		y = `__svelte_${It(m)}_${c}`,
		p = bt(t),
		{ stylesheet: j, rules: _ } = pe.get(p) || Bt(p, t);
	_[y] ||
		((_[y] = !0), j.insertRule(`@keyframes ${y} ${m}`, j.cssRules.length));
	const b = t.style.animation || "";
	return (
		(t.style.animation = `${
			b ? `${b}, ` : ""
		}${y} ${e}ms linear ${r}ms 1 both`),
		(be += 1),
		y
	);
}
function ut(t, s) {
	const l = (t.style.animation || "").split(", "),
		e = l.filter(
			s ? (o) => o.indexOf(s) < 0 : (o) => o.indexOf("__svelte") === -1
		),
		r = l.length - e.length;
	r && ((t.style.animation = e.join(", ")), (be -= r), be || Et());
}
function Et() {
	Ge(() => {
		be ||
			(pe.forEach((t) => {
				const { ownerNode: s } = t.stylesheet;
				s && L(s);
			}),
			pe.clear());
	});
}
let Fe;
function ge(t) {
	Fe = t;
}
const ne = [],
	ft = [];
let oe = [];
const dt = [],
	Ot = Promise.resolve();
let We = !1;
function Dt() {
	We || ((We = !0), Ot.then(vt));
}
function Q(t) {
	oe.push(t);
}
const Pe = new Set();
let le = 0;
function vt() {
	if (le !== 0) return;
	const t = Fe;
	do {
		try {
			for (; le < ne.length; ) {
				const s = ne[le];
				le++, ge(s), Pt(s.$$);
			}
		} catch (s) {
			throw ((ne.length = 0), (le = 0), s);
		}
		for (ge(null), ne.length = 0, le = 0; ft.length; ) ft.pop()();
		for (let s = 0; s < oe.length; s += 1) {
			const l = oe[s];
			Pe.has(l) || (Pe.add(l), l());
		}
		oe.length = 0;
	} while (ne.length);
	for (; dt.length; ) dt.pop()();
	(We = !1), Pe.clear(), ge(t);
}
function Pt(t) {
	if (t.fragment !== null) {
		t.update(), F(t.before_update);
		const s = t.dirty;
		(t.dirty = [-1]),
			t.fragment && t.fragment.p(t.ctx, s),
			t.after_update.forEach(Q);
	}
}
function Wt(t) {
	const s = [],
		l = [];
	oe.forEach((e) => (t.indexOf(e) === -1 ? s.push(e) : l.push(e))),
		l.forEach((e) => e()),
		(oe = s);
}
let me;
function Nt() {
	return (
		me ||
			((me = Promise.resolve()),
			me.then(() => {
				me = null;
			})),
		me
	);
}
function mt(t, s, l) {
	t.dispatchEvent(Ct(`intro${l}`));
}
const he = new Set();
let se;
function Gt() {
	se = { r: 0, c: [], p: se };
}
function Ft() {
	se.r || F(se.c), (se = se.p);
}
function N(t, s) {
	t && t.i && (he.delete(t), t.i(s));
}
function q(t, s, l, e) {
	if (t && t.o) {
		if (he.has(t)) return;
		he.add(t),
			se.c.push(() => {
				he.delete(t), e && (l && t.d(1), e());
			}),
			t.o(s);
	} else e && e();
}
const Rt = { duration: 0 };
function K(t, s, l) {
	const e = { direction: "in" };
	let r = s(t, l, e),
		o = !1,
		d,
		c,
		i = 0;
	function n() {
		d && ut(t, d);
	}
	function m() {
		const {
			delay: p = 0,
			duration: j = 300,
			easing: _ = xt,
			tick: b = I,
			css: k,
		} = r || Rt;
		k && (d = At(t, 0, 1, j, p, _, k, i++)), b(0, 1);
		const z = $t() + p,
			w = z + j;
		c && c.abort(),
			(o = !0),
			Q(() => mt(t, !0, "start")),
			(c = Mt((H) => {
				if (o) {
					if (H >= w) return b(1, 0), mt(t, !0, "end"), n(), (o = !1);
					if (H >= z) {
						const $ = _((H - z) / j);
						b($, 1 - $);
					}
				}
				return o;
			}));
	}
	let y = !1;
	return {
		start() {
			y || ((y = !0), ut(t), Ne(r) ? ((r = r(e)), Nt().then(m)) : m());
		},
		invalidate() {
			y = !1;
		},
		end() {
			o && (n(), (o = !1));
		},
	};
}
function Z(t) {
	t && t.c();
}
function U(t, s, l) {
	const { fragment: e, after_update: r } = t.$$;
	e && e.m(s, l),
		Q(() => {
			const o = t.$$.on_mount.map(_t).filter(Ne);
			t.$$.on_destroy ? t.$$.on_destroy.push(...o) : F(o), (t.$$.on_mount = []);
		}),
		r.forEach(Q);
}
function V(t, s) {
	const l = t.$$;
	l.fragment !== null &&
		(Wt(l.after_update),
		F(l.on_destroy),
		l.fragment && l.fragment.d(s),
		(l.on_destroy = l.fragment = null),
		(l.ctx = []));
}
function qt(t, s) {
	t.$$.dirty[0] === -1 && (ne.push(t), Dt(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(s / 31) | 0] |= 1 << s % 31);
}
function X(t, s, l, e, r, o, d = null, c = [-1]) {
	const i = Fe;
	ge(t);
	const n = (t.$$ = {
		fragment: null,
		ctx: [],
		props: o,
		update: I,
		not_equal: r,
		bound: ct(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(s.context || (i ? i.$$.context : [])),
		callbacks: ct(),
		dirty: c,
		skip_bound: !1,
		root: s.target || i.$$.root,
	});
	d && d(n.root);
	let m = !1;
	if (
		((n.ctx = l
			? l(t, s.props || {}, (y, p, ...j) => {
					const _ = j.length ? j[0] : p;
					return (
						n.ctx &&
							r(n.ctx[y], (n.ctx[y] = _)) &&
							(!n.skip_bound && n.bound[y] && n.bound[y](_), m && qt(t, y)),
						p
					);
			  })
			: []),
		n.update(),
		(m = !0),
		F(n.before_update),
		(n.fragment = e ? e(n.ctx) : !1),
		s.target)
	) {
		if (s.hydrate) {
			const y = St(s.target);
			n.fragment && n.fragment.l(y), y.forEach(L);
		} else n.fragment && n.fragment.c();
		s.intro && N(t.$$.fragment), U(t, s.target, s.anchor), vt();
	}
	ge(i);
}
class Y {
	constructor() {
		De(this, "$$");
		De(this, "$$set");
	}
	$destroy() {
		V(this, 1), (this.$destroy = I);
	}
	$on(s, l) {
		if (!Ne(l)) return I;
		const e = this.$$.callbacks[s] || (this.$$.callbacks[s] = []);
		return (
			e.push(l),
			() => {
				const r = e.indexOf(l);
				r !== -1 && e.splice(r, 1);
			}
		);
	}
	$set(s) {
		this.$$set &&
			!jt(s) &&
			((this.$$.skip_bound = !0), this.$$set(s), (this.$$.skip_bound = !1));
	}
}
const Jt = "4";
typeof window < "u" &&
	(window.__svelte || (window.__svelte = { v: new Set() })).v.add(Jt);
const ee = "./assets/main-C13OvUN5.jpg",
	ke = "./assets/alphs-BqKrQZVW.jpg",
	ve = "./assets/alphs1-9TEBHJf5.jpg",
	ye = "./assets/alphs2--PpsGnzU.jpg",
	we = "./assets/alphs3-DS5Jag-h.jpg",
	xe = "./assets/alphs4-CGuWXWu4.jpg",
	je = "./assets/alphs5-ChLBy7OB.jpg",
	ze = "./assets/fuji-C_2f6SXI.jpg",
	$e = "./assets/fuji1-C_WO5GoB.jpg",
	Me = "./assets/fuji2-Dnuk_0EG.jpg",
	Le = "./assets/fuji3-uoTW00Dv.jpg",
	He = "./assets/fuji4-BfXYyLQo.jpg",
	Te = "./assets/fuji5-DKtybn4v.jpg",
	Se = "./assets/intra-Eikk7pAz.jpg",
	Ce = "./assets/intra1-DAXwt5QA.jpg",
	Ie = "./assets/intra2-DBhtHePD.jpg",
	Be = "./assets/intra3-32s4DIB8.jpg",
	Ae = "./assets/intra4-DsNW84YN.jpg",
	Ee = "./assets/intra5-CLjwA5aO.jpg",
	re = [];
function Oe(t, s = I) {
	let l;
	const e = new Set();
	function r(c) {
		if (J(t, c) && ((t = c), l)) {
			const i = !re.length;
			for (const n of e) n[1](), re.push(n, t);
			if (i) {
				for (let n = 0; n < re.length; n += 2) re[n][0](re[n + 1]);
				re.length = 0;
			}
		}
	}
	function o(c) {
		r(c(t));
	}
	function d(c, i = I) {
		const n = [c, i];
		return (
			e.add(n),
			e.size === 1 && (l = s(r, o) || I),
			c(t),
			() => {
				e.delete(n), e.size === 0 && l && (l(), (l = null));
			}
		);
	}
	return { set: r, update: o, subscribe: d };
}
const M = Oe(0),
	O = Oe([0, 0]),
	D = Oe([0, 0]),
	P = Oe([0, 0]);
function gt(t) {
	let s, l, e;
	return {
		c() {
			(s = f("button")),
				(s.innerHTML = '<h1 class="text-5xl">Watch Slideshow &gt;</h1>'),
				a(
					s,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl fixed bottom-0 right-0 m-16 hover:transform hover:scale-110 transition ease-in-out"
				);
		},
		m(r, o) {
			T(r, s, o), l || ((e = g(s, "click", t[8])), (l = !0));
		},
		p: I,
		d(r) {
			r && L(s), (l = !1), e();
		},
	};
}
function Qt(t) {
	let s,
		l,
		e,
		r,
		o,
		d,
		c,
		i,
		n,
		m,
		y,
		p,
		j,
		_,
		b,
		k,
		z,
		w,
		H,
		$,
		v,
		S,
		A,
		B = t[3] == 1 && gt(t);
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl"><h1 class="text-5xl">Hi Charlene</h1> <h2 class="text-3xl">Where do you want to go?</h2></div>'),
				(l = x()),
				(e = f("button")),
				(r = f("img")),
				(d = x()),
				(c = f("h1")),
				(c.textContent = "Switzerland"),
				(i = x()),
				(n = f("button")),
				(m = f("img")),
				(p = x()),
				(j = f("h1")),
				(j.textContent = "Japan"),
				(_ = x()),
				(b = f("button")),
				(k = f("img")),
				(w = x()),
				(H = f("h1")),
				(H.textContent = "Philippines"),
				($ = x()),
				B && B.c(),
				(v = Tt()),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + ee + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg"),
				a(c, "class", "text-lg"),
				a(
					e,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 fixed top-0 m-24 transition ease-in-out grid place-items-center"
				),
				C(m.src, (y = t[1])) || a(m, "src", y),
				a(m, "alt", ""),
				a(m, "loading", "lazy"),
				a(m, "class", "rounded-lg"),
				a(j, "class", "text-lg"),
				a(
					n,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-2/12 fixed top-0 right-0 my-52 mx-24 m transition ease-in-out grid place-items-center"
				),
				C(k.src, (z = t[2])) || a(k, "src", z),
				a(k, "alt", ""),
				a(k, "loading", "lazy"),
				a(k, "class", "rounded-lg"),
				a(H, "class", "text-lg"),
				a(
					b,
					"class",
					"transform scale-110 rotate-12 hover:rotate-0 w-2/12 fixed bottom-0 my-24 mx-40 transition ease-in-out grid place-items-center"
				);
		},
		m(W, G) {
			T(W, s, G),
				T(W, l, G),
				T(W, e, G),
				u(e, r),
				u(e, d),
				u(e, c),
				T(W, i, G),
				T(W, n, G),
				u(n, m),
				u(n, p),
				u(n, j),
				T(W, _, G),
				T(W, b, G),
				u(b, k),
				u(b, w),
				u(b, H),
				T(W, $, G),
				B && B.m(W, G),
				T(W, v, G),
				S ||
					((A = [
						g(e, "click", t[5]),
						g(n, "click", t[6]),
						g(b, "click", t[7]),
					]),
					(S = !0));
		},
		p(W, [G]) {
			G & 1 && !C(r.src, (o = W[0])) && a(r, "src", o),
				G & 2 && !C(m.src, (y = W[1])) && a(m, "src", y),
				G & 4 && !C(k.src, (z = W[2])) && a(k, "src", z),
				W[3] == 1
					? B
						? B.p(W, G)
						: ((B = gt(W)), B.c(), B.m(v.parentNode, v))
					: B && (B.d(1), (B = null));
		},
		i: I,
		o: I,
		d(W) {
			W && (L(s), L(l), L(e), L(i), L(n), L(_), L(b), L($), L(v)),
				B && B.d(W),
				(S = !1),
				F(A);
		},
	};
}
function Ut(t, s, l) {
	let e, r, o, d;
	E(t, P, (b) => l(9, (e = b))),
		E(t, D, (b) => l(10, (r = b))),
		E(t, O, (b) => l(11, (o = b))),
		E(t, M, (b) => l(4, (d = b)));
	let c;
	switch (o[0]) {
		case 1:
			c = ve;
			break;
		case 2:
			c = ye;
			break;
		case 3:
			c = we;
			break;
		case 4:
			c = xe;
			break;
		case 5:
			c = je;
			break;
		default:
			c = ke;
			break;
	}
	let i;
	switch (r[0]) {
		case 1:
			i = $e;
			break;
		case 2:
			i = Me;
			break;
		case 3:
			i = Le;
			break;
		case 4:
			i = He;
			break;
		case 5:
			i = Te;
			break;
		default:
			i = ze;
			break;
	}
	let n;
	switch (e[0]) {
		case 1:
			n = Ce;
			break;
		case 2:
			n = Ie;
			break;
		case 3:
			n = Be;
			break;
		case 4:
			n = Ae;
			break;
		case 5:
			n = Ee;
			break;
		default:
			n = Se;
			break;
	}
	let m = 0;
	return (
		o[0] != 0 &&
			O[1] != 0 &&
			r[0] != 0 &&
			r[1] != 0 &&
			e[0] != 0 &&
			e[1] != 0 &&
			(m = 1),
		[
			c,
			i,
			n,
			m,
			d,
			() => h(M, (d = 1), d),
			() => h(M, (d = 2), d),
			() => h(M, (d = 3), d),
			() => h(M, (d = 4), d),
		]
	);
}
class Vt extends Y {
	constructor(s) {
		super(), X(this, s, Ut, Qt, J, {});
	}
}
const Re = "./assets/tulips-BIFb6gUx.jpg",
	qe = "./assets/tulips1-CjY19_RQ.jpg",
	Je = "./assets/tulips2-DqIDvPa6.jpg",
	Qe = "./assets/tulips3-Bd3wJag1.jpg",
	Ue = "./assets/tulips4-CYc9Z_x0.jpg",
	Ve = "./assets/tulips5-BI-RnXf2.jpg";
function Xt(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $, v, S;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = x()),
				(r = f("div")),
				(o = f("div")),
				(o.innerHTML =
					'<h1 class="text-5xl">Grüezi, Welcome to Switzerland!</h1> <h2 class="text-3xl">Please select a destination.</h2>'),
				(d = x()),
				(c = f("div")),
				(i = f("button")),
				(n = f("img")),
				(y = x()),
				(p = f("h1")),
				(p.textContent = "Alphs"),
				(j = x()),
				(_ = f("button")),
				(b = f("img")),
				(z = x()),
				(w = f("h1")),
				(w.textContent = "Tulips"),
				(H = x()),
				($ = f("button")),
				($.innerHTML = `<img src="${ee}" alt="" loading="lazy" class="rounded-lg"/> <h1 class="text-lg">Go Back</h1>`),
				a(
					l,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"
				),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + t[2] + ")"),
				a(
					o,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				C(n.src, (m = t[0])) || a(n, "src", m),
				a(n, "alt", ""),
				a(n, "loading", "lazy"),
				a(n, "class", "rounded-lg"),
				a(p, "class", "text-lg"),
				a(
					i,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				C(b.src, (k = t[1])) || a(b, "src", k),
				a(b, "alt", ""),
				a(b, "loading", "lazy"),
				a(b, "class", "rounded-lg"),
				a(w, "class", "text-lg"),
				a(
					_,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				a(
					$,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				a(c, "class", "w-full flex justify-evenly items-center"),
				a(
					r,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(A, B) {
			T(A, s, B),
				u(s, l),
				T(A, e, B),
				T(A, r, B),
				u(r, o),
				u(r, d),
				u(r, c),
				u(c, i),
				u(i, n),
				u(i, y),
				u(i, p),
				u(c, j),
				u(c, _),
				u(_, b),
				u(_, z),
				u(_, w),
				u(c, H),
				u(c, $),
				v ||
					((S = [
						g(i, "click", t[4]),
						g(i, "focus", t[5]),
						g(i, "mouseover", t[6]),
						g(_, "click", t[7]),
						g(_, "focus", t[8]),
						g(_, "mouseover", t[9]),
						g($, "click", t[10]),
						g($, "focus", t[11]),
						g($, "mouseover", t[12]),
					]),
					(v = !0));
		},
		p(A, [B]) {
			B & 4 && R(s, "background-image", "url(" + A[2] + ")"),
				B & 1 && !C(n.src, (m = A[0])) && a(n, "src", m),
				B & 2 && !C(b.src, (k = A[1])) && a(b, "src", k);
		},
		i: I,
		o: I,
		d(A) {
			A && (L(s), L(e), L(r)), (v = !1), F(S);
		},
	};
}
function Yt(t, s, l) {
	let e, r;
	E(t, O, (z) => l(13, (e = z))), E(t, M, (z) => l(3, (r = z)));
	let o;
	switch (e[0]) {
		case 1:
			o = ve;
			break;
		case 2:
			o = ye;
			break;
		case 3:
			o = we;
			break;
		case 4:
			o = xe;
			break;
		case 5:
			o = je;
			break;
		default:
			o = ke;
			break;
	}
	let d;
	switch (e[1]) {
		case 1:
			d = qe;
			break;
		case 2:
			d = Je;
			break;
		case 3:
			d = Qe;
			break;
		case 4:
			d = Ue;
			break;
		case 5:
			d = Ve;
			break;
		default:
			d = Re;
			break;
	}
	let c = o;
	return [
		o,
		d,
		c,
		r,
		() => h(M, (r = 11), r),
		() => l(2, (c = o)),
		() => l(2, (c = o)),
		() => h(M, (r = 12), r),
		() => l(2, (c = o)),
		() => l(2, (c = d)),
		() => h(M, (r = 0), r),
		() => l(2, (c = o)),
		() => l(2, (c = ee)),
	];
}
class Zt extends Y {
	constructor(s) {
		super(), X(this, s, Yt, Xt, J, {});
	}
}
const Xe = "./assets/akiba-QOwd2n7j.jpg",
	Ye = "./assets/akiba1-BiEJUT1v.jpg",
	Ze = "./assets/akiba2-DC7S6qrH.jpg",
	Ke = "./assets/akiba3-Dg-NsQg2.jpg",
	et = "./assets/akiba4-D04-xA99.jpg",
	tt = "./assets/akiba5-DZwll75_.jpg";
function Kt(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $, v, S;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = x()),
				(r = f("div")),
				(o = f("div")),
				(o.innerHTML =
					'<h1 class="text-5xl">Konnichiwa, Welcome to Japan!</h1> <h2 class="text-3xl">Please select a destination.</h2>'),
				(d = x()),
				(c = f("div")),
				(i = f("button")),
				(n = f("img")),
				(y = x()),
				(p = f("h1")),
				(p.textContent = "Fuji"),
				(j = x()),
				(_ = f("button")),
				(b = f("img")),
				(z = x()),
				(w = f("h1")),
				(w.textContent = "Akihabara"),
				(H = x()),
				($ = f("button")),
				($.innerHTML = `<img src="${ee}" alt="" loading="lazy" class="rounded-lg"/> <h1 class="text-lg">Go Back</h1>`),
				a(
					l,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"
				),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + t[2] + ")"),
				a(
					o,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				C(n.src, (m = t[0])) || a(n, "src", m),
				a(n, "alt", ""),
				a(n, "loading", "lazy"),
				a(n, "class", "rounded-lg"),
				a(p, "class", "text-lg"),
				a(
					i,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				C(b.src, (k = t[1])) || a(b, "src", k),
				a(b, "alt", ""),
				a(b, "loading", "lazy"),
				a(b, "class", "rounded-lg"),
				a(w, "class", "text-lg"),
				a(
					_,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				a(
					$,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				a(c, "class", "w-full flex justify-evenly items-center"),
				a(
					r,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(A, B) {
			T(A, s, B),
				u(s, l),
				T(A, e, B),
				T(A, r, B),
				u(r, o),
				u(r, d),
				u(r, c),
				u(c, i),
				u(i, n),
				u(i, y),
				u(i, p),
				u(c, j),
				u(c, _),
				u(_, b),
				u(_, z),
				u(_, w),
				u(c, H),
				u(c, $),
				v ||
					((S = [
						g(i, "click", t[4]),
						g(i, "focus", t[5]),
						g(i, "mouseover", t[6]),
						g(_, "click", t[7]),
						g(_, "focus", t[8]),
						g(_, "mouseover", t[9]),
						g($, "click", t[10]),
						g($, "focus", t[11]),
						g($, "mouseover", t[12]),
					]),
					(v = !0));
		},
		p(A, [B]) {
			B & 4 && R(s, "background-image", "url(" + A[2] + ")"),
				B & 1 && !C(n.src, (m = A[0])) && a(n, "src", m),
				B & 2 && !C(b.src, (k = A[1])) && a(b, "src", k);
		},
		i: I,
		o: I,
		d(A) {
			A && (L(s), L(e), L(r)), (v = !1), F(S);
		},
	};
}
function es(t, s, l) {
	let e, r;
	E(t, D, (z) => l(13, (e = z))), E(t, M, (z) => l(3, (r = z)));
	let o;
	switch (e[0]) {
		case 1:
			o = $e;
			break;
		case 2:
			o = Me;
			break;
		case 3:
			o = Le;
			break;
		case 4:
			o = He;
			break;
		case 5:
			o = Te;
			break;
		default:
			o = ze;
			break;
	}
	let d;
	switch (e[1]) {
		case 1:
			d = Ye;
			break;
		case 2:
			d = Ze;
			break;
		case 3:
			d = Ke;
			break;
		case 4:
			d = et;
			break;
		case 5:
			d = tt;
			break;
		default:
			d = Xe;
			break;
	}
	let c = o;
	return [
		o,
		d,
		c,
		r,
		() => h(M, (r = 21), r),
		() => l(2, (c = o)),
		() => l(2, (c = o)),
		() => h(M, (r = 22), r),
		() => l(2, (c = o)),
		() => l(2, (c = d)),
		() => h(M, (r = 0), r),
		() => l(2, (c = o)),
		() => l(2, (c = ee)),
	];
}
class ts extends Y {
	constructor(s) {
		super(), X(this, s, es, Kt, J, {});
	}
}
const st = "./assets/baguio-DGJ243Wz.jpg",
	lt = "./assets/baguio1-ddz9TUf6.jpg",
	rt = "./assets/baguio2-CRQrO5XA.jpg",
	nt = "./assets/baguio3-_Zh_9M1I.jpg",
	at = "./assets/baguio4-CRopLwyT.jpg",
	ot = "./assets/baguio5-B1pzC_yy.jpg";
function ss(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $, v, S;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = x()),
				(r = f("div")),
				(o = f("div")),
				(o.innerHTML =
					'<h1 class="text-5xl">Mabuhay, Welcome to Philippines!</h1> <h2 class="text-3xl">Please select a destination.</h2>'),
				(d = x()),
				(c = f("div")),
				(i = f("button")),
				(n = f("img")),
				(y = x()),
				(p = f("h1")),
				(p.textContent = "Intramuros"),
				(j = x()),
				(_ = f("button")),
				(b = f("img")),
				(z = x()),
				(w = f("h1")),
				(w.textContent = "Baguio"),
				(H = x()),
				($ = f("button")),
				($.innerHTML = `<img src="${ee}" alt="" loading="lazy" class="rounded-lg"/> <h1 class="text-lg">Go Back</h1>`),
				a(
					l,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"
				),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + t[2] + ")"),
				a(
					o,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				C(n.src, (m = t[0])) || a(n, "src", m),
				a(n, "alt", ""),
				a(n, "loading", "lazy"),
				a(n, "class", "rounded-lg"),
				a(p, "class", "text-lg"),
				a(
					i,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				C(b.src, (k = t[1])) || a(b, "src", k),
				a(b, "alt", ""),
				a(b, "loading", "lazy"),
				a(b, "class", "rounded-lg"),
				a(w, "class", "text-lg"),
				a(
					_,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				a(
					$,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center"
				),
				a(c, "class", "w-full flex justify-evenly items-center"),
				a(
					r,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(A, B) {
			T(A, s, B),
				u(s, l),
				T(A, e, B),
				T(A, r, B),
				u(r, o),
				u(r, d),
				u(r, c),
				u(c, i),
				u(i, n),
				u(i, y),
				u(i, p),
				u(c, j),
				u(c, _),
				u(_, b),
				u(_, z),
				u(_, w),
				u(c, H),
				u(c, $),
				v ||
					((S = [
						g(i, "click", t[4]),
						g(i, "focus", t[5]),
						g(i, "mouseover", t[6]),
						g(_, "click", t[7]),
						g(_, "focus", t[8]),
						g(_, "mouseover", t[9]),
						g($, "click", t[10]),
						g($, "focus", t[11]),
						g($, "mouseover", t[12]),
					]),
					(v = !0));
		},
		p(A, [B]) {
			B & 4 && R(s, "background-image", "url(" + A[2] + ")"),
				B & 1 && !C(n.src, (m = A[0])) && a(n, "src", m),
				B & 2 && !C(b.src, (k = A[1])) && a(b, "src", k);
		},
		i: I,
		o: I,
		d(A) {
			A && (L(s), L(e), L(r)), (v = !1), F(S);
		},
	};
}
function ls(t, s, l) {
	let e, r;
	E(t, P, (z) => l(13, (e = z))), E(t, M, (z) => l(3, (r = z)));
	let o;
	switch (e[0]) {
		case 1:
			o = Ce;
			break;
		case 2:
			o = Ie;
			break;
		case 3:
			o = Be;
			break;
		case 4:
			o = Ae;
			break;
		case 5:
			o = Ee;
			break;
		default:
			o = Se;
			break;
	}
	let d;
	switch (e[1]) {
		case 1:
			d = lt;
			break;
		case 2:
			d = rt;
			break;
		case 3:
			d = nt;
			break;
		case 4:
			d = at;
			break;
		case 5:
			d = ot;
			break;
		default:
			d = st;
			break;
	}
	let c = o;
	return [
		o,
		d,
		c,
		r,
		() => h(M, (r = 31), r),
		() => l(2, (c = o)),
		() => l(2, (c = o)),
		() => h(M, (r = 32), r),
		() => l(2, (c = o)),
		() => l(2, (c = d)),
		() => h(M, (r = 0), r),
		() => l(2, (c = o)),
		() => l(2, (c = ee)),
	];
}
class rs extends Y {
	constructor(s) {
		super(), X(this, s, ls, ss, J, {});
	}
}
const ce = "./assets/pose1-zsR7exFs.png",
	ie = "./assets/pose2-BrGvVz_A.png",
	ue = "./assets/pose3-CShxFmFZ.png",
	fe = "./assets/pose4-Bjb8W9bw.png",
	de = "./assets/pose5-Dvj5wCjV.png";
function ns(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(l = x()),
				(e = f("div")),
				(r = f("img")),
				(d = x()),
				(c = f("div")),
				(c.innerHTML =
					'<h1 class="text-3xl">What an amazing view!</h1> <h2 class="text-xl">Help me take a picture, Mun.</h2>'),
				(i = x()),
				(n = f("div")),
				(m = f("button")),
				(m.innerHTML = `<img src="${ce}" alt="" loading="lazy" class="rounded-lg"/>`),
				(y = x()),
				(p = f("button")),
				(p.innerHTML = `<img src="${ie}" alt="" loading="lazy" class="rounded-lg"/>`),
				(j = x()),
				(_ = f("button")),
				(_.innerHTML = `<img src="${ue}" alt="" loading="lazy" class="rounded-lg"/>`),
				(b = x()),
				(k = f("button")),
				(k.innerHTML = `<img src="${fe}" alt="" loading="lazy" class="rounded-lg"/>`),
				(z = x()),
				(w = f("button")),
				(w.innerHTML = `<img src="${de}" alt="" loading="lazy" class="rounded-lg"/>`),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + ke + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg h-2/6"),
				a(
					c,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				a(
					m,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					p,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					_,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					k,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					w,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(n, "class", "w-full flex justify-evenly items-center"),
				a(
					e,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(v, S) {
			T(v, s, S),
				T(v, l, S),
				T(v, e, S),
				u(e, r),
				u(e, d),
				u(e, c),
				u(e, i),
				u(e, n),
				u(n, m),
				u(n, y),
				u(n, p),
				u(n, j),
				u(n, _),
				u(n, b),
				u(n, k),
				u(n, z),
				u(n, w),
				H ||
					(($ = [
						g(m, "focus", t[3]),
						g(m, "mouseover", t[4]),
						g(m, "click", t[5]),
						g(p, "focus", t[6]),
						g(p, "mouseover", t[7]),
						g(p, "click", t[8]),
						g(_, "focus", t[9]),
						g(_, "mouseover", t[10]),
						g(_, "click", t[11]),
						g(k, "focus", t[12]),
						g(k, "mouseover", t[13]),
						g(k, "click", t[14]),
						g(w, "focus", t[15]),
						g(w, "mouseover", t[16]),
						g(w, "click", t[17]),
					]),
					(H = !0));
		},
		p(v, [S]) {
			S & 1 && !C(r.src, (o = v[0])) && a(r, "src", o);
		},
		i: I,
		o: I,
		d(v) {
			v && (L(s), L(l), L(e)), (H = !1), F($);
		},
	};
}
function as(t, s, l) {
	let e, r;
	E(t, O, (v) => l(1, (e = v))), E(t, M, (v) => l(2, (r = v)));
	let o;
	const d = () => h(O, (e[0] = 1), e),
		c = () => h(O, (e[0] = 1), e),
		i = () => h(M, (r = 1), r),
		n = () => h(O, (e[0] = 2), e),
		m = () => h(O, (e[0] = 2), e),
		y = () => h(M, (r = 1), r),
		p = () => h(O, (e[0] = 3), e),
		j = () => h(O, (e[0] = 3), e),
		_ = () => h(M, (r = 1), r),
		b = () => h(O, (e[0] = 4), e),
		k = () => h(O, (e[0] = 4), e),
		z = () => h(M, (r = 1), r),
		w = () => h(O, (e[0] = 5), e),
		H = () => h(O, (e[0] = 5), e),
		$ = () => h(M, (r = 1), r);
	return (
		(t.$$.update = () => {
			if (t.$$.dirty & 3)
				switch (e[0]) {
					case 1:
						l(0, (o = ve));
						break;
					case 2:
						l(0, (o = ye));
						break;
					case 3:
						l(0, (o = we));
						break;
					case 4:
						l(0, (o = xe));
						break;
					case 5:
						l(0, (o = je));
						break;
					default:
						l(0, (o = ke));
						break;
				}
		}),
		[o, e, r, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $]
	);
}
class os extends Y {
	constructor(s) {
		super(), X(this, s, as, ns, J, {});
	}
}
function cs(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(l = x()),
				(e = f("div")),
				(r = f("img")),
				(d = x()),
				(c = f("div")),
				(c.innerHTML =
					'<h1 class="text-3xl">What an amazing view!</h1> <h2 class="text-xl">Help me take a picture, Mun.</h2>'),
				(i = x()),
				(n = f("div")),
				(m = f("button")),
				(m.innerHTML = `<img src="${ce}" alt="" loading="lazy" class="rounded-lg"/>`),
				(y = x()),
				(p = f("button")),
				(p.innerHTML = `<img src="${ie}" alt="" loading="lazy" class="rounded-lg"/>`),
				(j = x()),
				(_ = f("button")),
				(_.innerHTML = `<img src="${ue}" alt="" loading="lazy" class="rounded-lg"/>`),
				(b = x()),
				(k = f("button")),
				(k.innerHTML = `<img src="${fe}" alt="" loading="lazy" class="rounded-lg"/>`),
				(z = x()),
				(w = f("button")),
				(w.innerHTML = `<img src="${de}" alt="" loading="lazy" class="rounded-lg"/>`),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + Re + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg h-2/6"),
				a(
					c,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				a(
					m,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					p,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					_,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					k,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					w,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(n, "class", "w-full flex justify-evenly items-center"),
				a(
					e,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(v, S) {
			T(v, s, S),
				T(v, l, S),
				T(v, e, S),
				u(e, r),
				u(e, d),
				u(e, c),
				u(e, i),
				u(e, n),
				u(n, m),
				u(n, y),
				u(n, p),
				u(n, j),
				u(n, _),
				u(n, b),
				u(n, k),
				u(n, z),
				u(n, w),
				H ||
					(($ = [
						g(m, "focus", t[3]),
						g(m, "mouseover", t[4]),
						g(m, "click", t[5]),
						g(p, "focus", t[6]),
						g(p, "mouseover", t[7]),
						g(p, "click", t[8]),
						g(_, "focus", t[9]),
						g(_, "mouseover", t[10]),
						g(_, "click", t[11]),
						g(k, "focus", t[12]),
						g(k, "mouseover", t[13]),
						g(k, "click", t[14]),
						g(w, "focus", t[15]),
						g(w, "mouseover", t[16]),
						g(w, "click", t[17]),
					]),
					(H = !0));
		},
		p(v, [S]) {
			S & 1 && !C(r.src, (o = v[0])) && a(r, "src", o);
		},
		i: I,
		o: I,
		d(v) {
			v && (L(s), L(l), L(e)), (H = !1), F($);
		},
	};
}
function is(t, s, l) {
	let e, r;
	E(t, O, (v) => l(1, (e = v))), E(t, M, (v) => l(2, (r = v)));
	let o;
	const d = () => h(O, (e[1] = 1), e),
		c = () => h(O, (e[1] = 1), e),
		i = () => h(M, (r = 1), r),
		n = () => h(O, (e[1] = 2), e),
		m = () => h(O, (e[1] = 2), e),
		y = () => h(M, (r = 1), r),
		p = () => h(O, (e[1] = 3), e),
		j = () => h(O, (e[1] = 3), e),
		_ = () => h(M, (r = 1), r),
		b = () => h(O, (e[1] = 4), e),
		k = () => h(O, (e[1] = 4), e),
		z = () => h(M, (r = 1), r),
		w = () => h(O, (e[1] = 5), e),
		H = () => h(O, (e[1] = 5), e),
		$ = () => h(M, (r = 1), r);
	return (
		(t.$$.update = () => {
			if (t.$$.dirty & 3)
				switch (e[1]) {
					case 1:
						l(0, (o = qe));
						break;
					case 2:
						l(0, (o = Je));
						break;
					case 3:
						l(0, (o = Qe));
						break;
					case 4:
						l(0, (o = Ue));
						break;
					case 5:
						l(0, (o = Ve));
						break;
					default:
						l(0, (o = Re));
						break;
				}
		}),
		[o, e, r, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $]
	);
}
class us extends Y {
	constructor(s) {
		super(), X(this, s, is, cs, J, {});
	}
}
function fs(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(l = x()),
				(e = f("div")),
				(r = f("img")),
				(d = x()),
				(c = f("div")),
				(c.innerHTML =
					'<h1 class="text-3xl">What an amazing view!</h1> <h2 class="text-xl">Help me take a picture, Mun.</h2>'),
				(i = x()),
				(n = f("div")),
				(m = f("button")),
				(m.innerHTML = `<img src="${ce}" alt="" loading="lazy" class="rounded-lg"/>`),
				(y = x()),
				(p = f("button")),
				(p.innerHTML = `<img src="${ie}" alt="" loading="lazy" class="rounded-lg"/>`),
				(j = x()),
				(_ = f("button")),
				(_.innerHTML = `<img src="${ue}" alt="" loading="lazy" class="rounded-lg"/>`),
				(b = x()),
				(k = f("button")),
				(k.innerHTML = `<img src="${fe}" alt="" loading="lazy" class="rounded-lg"/>`),
				(z = x()),
				(w = f("button")),
				(w.innerHTML = `<img src="${de}" alt="" loading="lazy" class="rounded-lg"/>`),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + ze + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg h-2/6"),
				a(
					c,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				a(
					m,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					p,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					_,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					k,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					w,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(n, "class", "w-full flex justify-evenly items-center"),
				a(
					e,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(v, S) {
			T(v, s, S),
				T(v, l, S),
				T(v, e, S),
				u(e, r),
				u(e, d),
				u(e, c),
				u(e, i),
				u(e, n),
				u(n, m),
				u(n, y),
				u(n, p),
				u(n, j),
				u(n, _),
				u(n, b),
				u(n, k),
				u(n, z),
				u(n, w),
				H ||
					(($ = [
						g(m, "focus", t[3]),
						g(m, "mouseover", t[4]),
						g(m, "click", t[5]),
						g(p, "focus", t[6]),
						g(p, "mouseover", t[7]),
						g(p, "click", t[8]),
						g(_, "focus", t[9]),
						g(_, "mouseover", t[10]),
						g(_, "click", t[11]),
						g(k, "focus", t[12]),
						g(k, "mouseover", t[13]),
						g(k, "click", t[14]),
						g(w, "focus", t[15]),
						g(w, "mouseover", t[16]),
						g(w, "click", t[17]),
					]),
					(H = !0));
		},
		p(v, [S]) {
			S & 1 && !C(r.src, (o = v[0])) && a(r, "src", o);
		},
		i: I,
		o: I,
		d(v) {
			v && (L(s), L(l), L(e)), (H = !1), F($);
		},
	};
}
function ds(t, s, l) {
	let e, r;
	E(t, D, (v) => l(1, (e = v))), E(t, M, (v) => l(2, (r = v)));
	let o;
	const d = () => h(D, (e[0] = 1), e),
		c = () => h(D, (e[0] = 1), e),
		i = () => h(M, (r = 2), r),
		n = () => h(D, (e[0] = 2), e),
		m = () => h(D, (e[0] = 2), e),
		y = () => h(M, (r = 2), r),
		p = () => h(D, (e[0] = 3), e),
		j = () => h(D, (e[0] = 3), e),
		_ = () => h(M, (r = 2), r),
		b = () => h(D, (e[0] = 4), e),
		k = () => h(D, (e[0] = 4), e),
		z = () => h(M, (r = 2), r),
		w = () => h(D, (e[0] = 5), e),
		H = () => h(D, (e[0] = 5), e),
		$ = () => h(M, (r = 2), r);
	return (
		(t.$$.update = () => {
			if (t.$$.dirty & 3)
				switch (e[0]) {
					case 1:
						l(0, (o = $e));
						break;
					case 2:
						l(0, (o = Me));
						break;
					case 3:
						l(0, (o = Le));
						break;
					case 4:
						l(0, (o = He));
						break;
					case 5:
						l(0, (o = Te));
						break;
					default:
						l(0, (o = ze));
						break;
				}
		}),
		[o, e, r, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $]
	);
}
class ms extends Y {
	constructor(s) {
		super(), X(this, s, ds, fs, J, {});
	}
}
function gs(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(l = x()),
				(e = f("div")),
				(r = f("img")),
				(d = x()),
				(c = f("div")),
				(c.innerHTML =
					'<h1 class="text-3xl">What an amazing view!</h1> <h2 class="text-xl">Help me take a picture, Mun.</h2>'),
				(i = x()),
				(n = f("div")),
				(m = f("button")),
				(m.innerHTML = `<img src="${ce}" alt="" loading="lazy" class="rounded-lg"/>`),
				(y = x()),
				(p = f("button")),
				(p.innerHTML = `<img src="${ie}" alt="" loading="lazy" class="rounded-lg"/>`),
				(j = x()),
				(_ = f("button")),
				(_.innerHTML = `<img src="${ue}" alt="" loading="lazy" class="rounded-lg"/>`),
				(b = x()),
				(k = f("button")),
				(k.innerHTML = `<img src="${fe}" alt="" loading="lazy" class="rounded-lg"/>`),
				(z = x()),
				(w = f("button")),
				(w.innerHTML = `<img src="${de}" alt="" loading="lazy" class="rounded-lg"/>`),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + Xe + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg h-2/6"),
				a(
					c,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				a(
					m,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					p,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					_,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					k,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					w,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(n, "class", "w-full flex justify-evenly items-center"),
				a(
					e,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(v, S) {
			T(v, s, S),
				T(v, l, S),
				T(v, e, S),
				u(e, r),
				u(e, d),
				u(e, c),
				u(e, i),
				u(e, n),
				u(n, m),
				u(n, y),
				u(n, p),
				u(n, j),
				u(n, _),
				u(n, b),
				u(n, k),
				u(n, z),
				u(n, w),
				H ||
					(($ = [
						g(m, "focus", t[3]),
						g(m, "mouseover", t[4]),
						g(m, "click", t[5]),
						g(p, "focus", t[6]),
						g(p, "mouseover", t[7]),
						g(p, "click", t[8]),
						g(_, "focus", t[9]),
						g(_, "mouseover", t[10]),
						g(_, "click", t[11]),
						g(k, "focus", t[12]),
						g(k, "mouseover", t[13]),
						g(k, "click", t[14]),
						g(w, "focus", t[15]),
						g(w, "mouseover", t[16]),
						g(w, "click", t[17]),
					]),
					(H = !0));
		},
		p(v, [S]) {
			S & 1 && !C(r.src, (o = v[0])) && a(r, "src", o);
		},
		i: I,
		o: I,
		d(v) {
			v && (L(s), L(l), L(e)), (H = !1), F($);
		},
	};
}
function _s(t, s, l) {
	let e, r;
	E(t, D, (v) => l(1, (e = v))), E(t, M, (v) => l(2, (r = v)));
	let o;
	const d = () => h(D, (e[1] = 1), e),
		c = () => h(D, (e[1] = 1), e),
		i = () => h(M, (r = 2), r),
		n = () => h(D, (e[1] = 2), e),
		m = () => h(D, (e[1] = 2), e),
		y = () => h(M, (r = 2), r),
		p = () => h(D, (e[1] = 3), e),
		j = () => h(D, (e[1] = 3), e),
		_ = () => h(M, (r = 2), r),
		b = () => h(D, (e[1] = 4), e),
		k = () => h(D, (e[1] = 4), e),
		z = () => h(M, (r = 2), r),
		w = () => h(D, (e[1] = 5), e),
		H = () => h(D, (e[1] = 5), e),
		$ = () => h(M, (r = 2), r);
	return (
		(t.$$.update = () => {
			if (t.$$.dirty & 3)
				switch (e[1]) {
					case 1:
						l(0, (o = Ye));
						break;
					case 2:
						l(0, (o = Ze));
						break;
					case 3:
						l(0, (o = Ke));
						break;
					case 4:
						l(0, (o = et));
						break;
					case 5:
						l(0, (o = tt));
						break;
					default:
						l(0, (o = Xe));
						break;
				}
		}),
		[o, e, r, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $]
	);
}
class hs extends Y {
	constructor(s) {
		super(), X(this, s, _s, gs, J, {});
	}
}
function ps(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(l = x()),
				(e = f("div")),
				(r = f("img")),
				(d = x()),
				(c = f("div")),
				(c.innerHTML =
					'<h1 class="text-3xl">What an amazing view!</h1> <h2 class="text-xl">Help me take a picture, Mun.</h2>'),
				(i = x()),
				(n = f("div")),
				(m = f("button")),
				(m.innerHTML = `<img src="${ce}" alt="" loading="lazy" class="rounded-lg"/>`),
				(y = x()),
				(p = f("button")),
				(p.innerHTML = `<img src="${ie}" alt="" loading="lazy" class="rounded-lg"/>`),
				(j = x()),
				(_ = f("button")),
				(_.innerHTML = `<img src="${ue}" alt="" loading="lazy" class="rounded-lg"/>`),
				(b = x()),
				(k = f("button")),
				(k.innerHTML = `<img src="${fe}" alt="" loading="lazy" class="rounded-lg"/>`),
				(z = x()),
				(w = f("button")),
				(w.innerHTML = `<img src="${de}" alt="" loading="lazy" class="rounded-lg"/>`),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + Se + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg h-2/6"),
				a(
					c,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				a(
					m,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					p,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					_,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					k,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					w,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(n, "class", "w-full flex justify-evenly items-center"),
				a(
					e,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(v, S) {
			T(v, s, S),
				T(v, l, S),
				T(v, e, S),
				u(e, r),
				u(e, d),
				u(e, c),
				u(e, i),
				u(e, n),
				u(n, m),
				u(n, y),
				u(n, p),
				u(n, j),
				u(n, _),
				u(n, b),
				u(n, k),
				u(n, z),
				u(n, w),
				H ||
					(($ = [
						g(m, "focus", t[3]),
						g(m, "mouseover", t[4]),
						g(m, "click", t[5]),
						g(p, "focus", t[6]),
						g(p, "mouseover", t[7]),
						g(p, "click", t[8]),
						g(_, "focus", t[9]),
						g(_, "mouseover", t[10]),
						g(_, "click", t[11]),
						g(k, "focus", t[12]),
						g(k, "mouseover", t[13]),
						g(k, "click", t[14]),
						g(w, "focus", t[15]),
						g(w, "mouseover", t[16]),
						g(w, "click", t[17]),
					]),
					(H = !0));
		},
		p(v, [S]) {
			S & 1 && !C(r.src, (o = v[0])) && a(r, "src", o);
		},
		i: I,
		o: I,
		d(v) {
			v && (L(s), L(l), L(e)), (H = !1), F($);
		},
	};
}
function bs(t, s, l) {
	let e, r;
	E(t, P, (v) => l(1, (e = v))), E(t, M, (v) => l(2, (r = v)));
	let o;
	const d = () => h(P, (e[0] = 1), e),
		c = () => h(P, (e[0] = 1), e),
		i = () => h(M, (r = 3), r),
		n = () => h(P, (e[0] = 2), e),
		m = () => h(P, (e[0] = 2), e),
		y = () => h(M, (r = 3), r),
		p = () => h(P, (e[0] = 3), e),
		j = () => h(P, (e[0] = 3), e),
		_ = () => h(M, (r = 3), r),
		b = () => h(P, (e[0] = 4), e),
		k = () => h(P, (e[0] = 4), e),
		z = () => h(M, (r = 3), r),
		w = () => h(P, (e[0] = 5), e),
		H = () => h(P, (e[0] = 5), e),
		$ = () => h(M, (r = 3), r);
	return (
		(t.$$.update = () => {
			if (t.$$.dirty & 3)
				switch (e[0]) {
					case 1:
						l(0, (o = Ce));
						break;
					case 2:
						l(0, (o = Ie));
						break;
					case 3:
						l(0, (o = Be));
						break;
					case 4:
						l(0, (o = Ae));
						break;
					case 5:
						l(0, (o = Ee));
						break;
					default:
						l(0, (o = Se));
						break;
				}
		}),
		[o, e, r, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $]
	);
}
class ks extends Y {
	constructor(s) {
		super(), X(this, s, bs, ps, J, {});
	}
}
function vs(t) {
	let s, l, e, r, o, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(l = x()),
				(e = f("div")),
				(r = f("img")),
				(d = x()),
				(c = f("div")),
				(c.innerHTML =
					'<h1 class="text-3xl">What an amazing view!</h1> <h2 class="text-xl">Help me take a picture, Mun.</h2>'),
				(i = x()),
				(n = f("div")),
				(m = f("button")),
				(m.innerHTML = `<img src="${ce}" alt="" loading="lazy" class="rounded-lg"/>`),
				(y = x()),
				(p = f("button")),
				(p.innerHTML = `<img src="${ie}" alt="" loading="lazy" class="rounded-lg"/>`),
				(j = x()),
				(_ = f("button")),
				(_.innerHTML = `<img src="${ue}" alt="" loading="lazy" class="rounded-lg"/>`),
				(b = x()),
				(k = f("button")),
				(k.innerHTML = `<img src="${fe}" alt="" loading="lazy" class="rounded-lg"/>`),
				(z = x()),
				(w = f("button")),
				(w.innerHTML = `<img src="${de}" alt="" loading="lazy" class="rounded-lg"/>`),
				a(
					s,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(s, "background-image", "url(" + st + ")"),
				C(r.src, (o = t[0])) || a(r, "src", o),
				a(r, "alt", ""),
				a(r, "loading", "lazy"),
				a(r, "class", "rounded-lg h-2/6"),
				a(
					c,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				),
				a(
					m,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					p,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					_,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					k,
					"class",
					"transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(
					w,
					"class",
					"transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center"
				),
				a(n, "class", "w-full flex justify-evenly items-center"),
				a(
					e,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(v, S) {
			T(v, s, S),
				T(v, l, S),
				T(v, e, S),
				u(e, r),
				u(e, d),
				u(e, c),
				u(e, i),
				u(e, n),
				u(n, m),
				u(n, y),
				u(n, p),
				u(n, j),
				u(n, _),
				u(n, b),
				u(n, k),
				u(n, z),
				u(n, w),
				H ||
					(($ = [
						g(m, "focus", t[3]),
						g(m, "mouseover", t[4]),
						g(m, "click", t[5]),
						g(p, "focus", t[6]),
						g(p, "mouseover", t[7]),
						g(p, "click", t[8]),
						g(_, "focus", t[9]),
						g(_, "mouseover", t[10]),
						g(_, "click", t[11]),
						g(k, "focus", t[12]),
						g(k, "mouseover", t[13]),
						g(k, "click", t[14]),
						g(w, "focus", t[15]),
						g(w, "mouseover", t[16]),
						g(w, "click", t[17]),
					]),
					(H = !0));
		},
		p(v, [S]) {
			S & 1 && !C(r.src, (o = v[0])) && a(r, "src", o);
		},
		i: I,
		o: I,
		d(v) {
			v && (L(s), L(l), L(e)), (H = !1), F($);
		},
	};
}
function ys(t, s, l) {
	let e, r;
	E(t, P, (v) => l(1, (e = v))), E(t, M, (v) => l(2, (r = v)));
	let o;
	const d = () => h(P, (e[1] = 1), e),
		c = () => h(P, (e[1] = 1), e),
		i = () => h(M, (r = 3), r),
		n = () => h(P, (e[1] = 2), e),
		m = () => h(P, (e[1] = 2), e),
		y = () => h(M, (r = 3), r),
		p = () => h(P, (e[1] = 3), e),
		j = () => h(P, (e[1] = 3), e),
		_ = () => h(M, (r = 3), r),
		b = () => h(P, (e[1] = 4), e),
		k = () => h(P, (e[1] = 4), e),
		z = () => h(M, (r = 3), r),
		w = () => h(P, (e[1] = 5), e),
		H = () => h(P, (e[1] = 5), e),
		$ = () => h(M, (r = 3), r);
	return (
		(t.$$.update = () => {
			if (t.$$.dirty & 3)
				switch (e[1]) {
					case 1:
						l(0, (o = lt));
						break;
					case 2:
						l(0, (o = rt));
						break;
					case 3:
						l(0, (o = nt));
						break;
					case 4:
						l(0, (o = at));
						break;
					case 5:
						l(0, (o = ot));
						break;
					default:
						l(0, (o = st));
						break;
				}
		}),
		[o, e, r, d, c, i, n, m, y, p, j, _, b, k, z, w, H, $]
	);
}
class ws extends Y {
	constructor(s) {
		super(), X(this, s, ys, vs, J, {});
	}
}
const xs = "./assets/bgm-Becu4BGQ.mp3";
function js(t) {
	const s = t - 1;
	return s * s * s + 1;
}
function te(
	t,
	{
		delay: s = 0,
		duration: l = 400,
		easing: e = js,
		x: r = 0,
		y: o = 0,
		opacity: d = 0,
	} = {}
) {
	const c = getComputedStyle(t),
		i = +c.opacity,
		n = c.transform === "none" ? "" : c.transform,
		m = i * (1 - d),
		[y, p] = it(r),
		[j, _] = it(o);
	return {
		delay: s,
		duration: l,
		easing: e,
		css: (b, k) => `
			transform: ${n} translate(${(1 - b) * y}${p}, ${(1 - b) * j}${_});
			opacity: ${i - m * k}`,
	};
}
function zs(t) {
	let s, l;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML =
					'<h1 class="text-2xl text-center">Sorry po kung nararamdaman mo po na inaaway kita palagi 🥺 I promise you po that I will continue to become the best man for you. It will take time, but I am willing to change for you po. I love you po sobra mahal ko. I hope you have a nice day. Oh, and if may problema ka please tell me immediately ah. I love you sobra 🥹💖💕</h1>'),
				a(
					s,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				);
		},
		m(e, r) {
			T(e, s, r);
		},
		p: I,
		i(e) {
			e &&
				(l ||
					Q(() => {
						(l = K(s, te, { delay: 300, y: -25, duration: 150 })), l.start();
					}));
		},
		o: I,
		d(e) {
			e && L(s);
		},
	};
}
function $s(t) {
	let s, l, e, r, o, d, c;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = f("img")),
				(o = x()),
				(d = f("h1")),
				(d.textContent = "Baguio"),
				C(e.src, (r = t[6])) || a(e, "src", r),
				a(e, "alt", ""),
				a(e, "loading", "lazy"),
				a(e, "class", "rounded-lg"),
				a(d, "class", "text-3xl"),
				a(l, "class", "w-7/12 transition ease-in-out grid place-items-center"),
				a(s, "class", "w-full flex justify-evenly items-center");
		},
		m(i, n) {
			T(i, s, n), u(s, l), u(l, e), u(l, o), u(l, d);
		},
		p(i, n) {
			n & 64 && !C(e.src, (r = i[6])) && a(e, "src", r);
		},
		i(i) {
			i &&
				(c ||
					Q(() => {
						(c = K(s, te, { delay: 300, y: -25, duration: 150 })), c.start();
					}));
		},
		o: I,
		d(i) {
			i && L(s);
		},
	};
}
function Ms(t) {
	let s, l, e, r, o, d, c;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = f("img")),
				(o = x()),
				(d = f("h1")),
				(d.textContent = "Intramuros"),
				C(e.src, (r = t[5])) || a(e, "src", r),
				a(e, "alt", ""),
				a(e, "loading", "lazy"),
				a(e, "class", "rounded-lg"),
				a(d, "class", "text-3xl"),
				a(l, "class", "w-7/12 transition ease-in-out grid place-items-center"),
				a(s, "class", "w-full flex justify-evenly items-center");
		},
		m(i, n) {
			T(i, s, n), u(s, l), u(l, e), u(l, o), u(l, d);
		},
		p(i, n) {
			n & 32 && !C(e.src, (r = i[5])) && a(e, "src", r);
		},
		i(i) {
			i &&
				(c ||
					Q(() => {
						(c = K(s, te, { delay: 300, y: -25, duration: 150 })), c.start();
					}));
		},
		o: I,
		d(i) {
			i && L(s);
		},
	};
}
function Ls(t) {
	let s, l, e, r, o, d, c;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = f("img")),
				(o = x()),
				(d = f("h1")),
				(d.textContent = "Akihabara"),
				C(e.src, (r = t[4])) || a(e, "src", r),
				a(e, "alt", ""),
				a(e, "loading", "lazy"),
				a(e, "class", "rounded-lg"),
				a(d, "class", "text-3xl"),
				a(l, "class", "w-7/12 transition ease-in-out grid place-items-center"),
				a(s, "class", "w-full flex justify-evenly items-center");
		},
		m(i, n) {
			T(i, s, n), u(s, l), u(l, e), u(l, o), u(l, d);
		},
		p(i, n) {
			n & 16 && !C(e.src, (r = i[4])) && a(e, "src", r);
		},
		i(i) {
			i &&
				(c ||
					Q(() => {
						(c = K(s, te, { delay: 300, y: -25, duration: 150 })), c.start();
					}));
		},
		o: I,
		d(i) {
			i && L(s);
		},
	};
}
function Hs(t) {
	let s, l, e, r, o, d, c;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = f("img")),
				(o = x()),
				(d = f("h1")),
				(d.textContent = "Fuji"),
				C(e.src, (r = t[3])) || a(e, "src", r),
				a(e, "alt", ""),
				a(e, "loading", "lazy"),
				a(e, "class", "rounded-lg"),
				a(d, "class", "text-3xl"),
				a(l, "class", "w-7/12 transition ease-in-out grid place-items-center"),
				a(s, "class", "w-full flex justify-evenly items-center");
		},
		m(i, n) {
			T(i, s, n), u(s, l), u(l, e), u(l, o), u(l, d);
		},
		p(i, n) {
			n & 8 && !C(e.src, (r = i[3])) && a(e, "src", r);
		},
		i(i) {
			i &&
				(c ||
					Q(() => {
						(c = K(s, te, { delay: 300, y: -25, duration: 150 })), c.start();
					}));
		},
		o: I,
		d(i) {
			i && L(s);
		},
	};
}
function Ts(t) {
	let s, l, e, r, o, d, c;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = f("img")),
				(o = x()),
				(d = f("h1")),
				(d.textContent = "Tulips"),
				C(e.src, (r = t[2])) || a(e, "src", r),
				a(e, "alt", ""),
				a(e, "loading", "lazy"),
				a(e, "class", "rounded-lg"),
				a(d, "class", "text-3xl"),
				a(l, "class", "w-7/12 transition ease-in-out grid place-items-center"),
				a(s, "class", "w-full flex justify-evenly items-center");
		},
		m(i, n) {
			T(i, s, n), u(s, l), u(l, e), u(l, o), u(l, d);
		},
		p(i, n) {
			n & 4 && !C(e.src, (r = i[2])) && a(e, "src", r);
		},
		i(i) {
			i &&
				(c ||
					Q(() => {
						(c = K(s, te, { delay: 300, y: -25, duration: 150 })), c.start();
					}));
		},
		o: I,
		d(i) {
			i && L(s);
		},
	};
}
function Ss(t) {
	let s, l, e, r, o, d, c;
	return {
		c() {
			(s = f("div")),
				(l = f("div")),
				(e = f("img")),
				(o = x()),
				(d = f("h1")),
				(d.textContent = "Alphs"),
				C(e.src, (r = t[1])) || a(e, "src", r),
				a(e, "alt", ""),
				a(e, "loading", "lazy"),
				a(e, "class", "rounded-lg"),
				a(d, "class", "text-3xl"),
				a(l, "class", "w-7/12 transition ease-in-out grid place-items-center"),
				a(s, "class", "w-full flex justify-evenly items-center");
		},
		m(i, n) {
			T(i, s, n), u(s, l), u(l, e), u(l, o), u(l, d);
		},
		p(i, n) {
			n & 2 && !C(e.src, (r = i[1])) && a(e, "src", r);
		},
		i(i) {
			i &&
				(c ||
					Q(() => {
						(c = K(s, te, { delay: 300, y: -25, duration: 150 })), c.start();
					}));
		},
		o: I,
		d(i) {
			i && L(s);
		},
	};
}
function Cs(t) {
	let s, l;
	return {
		c() {
			(s = f("div")),
				(s.innerHTML = `&gt;
      <h1 class="text-5xl">Happy 4th Monthsary Munmun ko!</h1> <h2 class="text-3xl">Sana naman kahit paano natuwa ka dito haha.</h2>`),
				a(
					s,
					"class",
					"bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16"
				);
		},
		m(e, r) {
			T(e, s, r);
		},
		p: I,
		i(e) {
			e &&
				(l ||
					Q(() => {
						(l = K(s, te, { delay: 300, y: -25, duration: 150 })), l.start();
					}));
		},
		o: I,
		d(e) {
			e && L(s);
		},
	};
}
function Is(t) {
	let s, l, e, r, o;
	function d(n, m) {
		if (n[0] == 0) return Cs;
		if (n[0] == 1) return Ss;
		if (n[0] == 2) return Ts;
		if (n[0] == 3) return Hs;
		if (n[0] == 4) return Ls;
		if (n[0] == 5) return Ms;
		if (n[0] == 6) return $s;
		if (n[0] >= 7) return zs;
	}
	let c = d(t),
		i = c && c(t);
	return {
		c() {
			(s = f("audio")),
				(s.innerHTML = `<source src="${xs}" type="audio/mpeg"/>
  Your browser does not support the audio tag.`),
				(l = x()),
				(e = f("div")),
				(e.innerHTML =
					'<div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full"></div>'),
				(r = x()),
				(o = f("div")),
				i && i.c(),
				(s.autoplay = !0),
				a(s, "preload", "auto"),
				a(
					e,
					"class",
					"flex justify-center items-center bg-cover bg-center h-full w-full"
				),
				R(e, "background-image", "url(" + ee + ")"),
				a(
					o,
					"class",
					"w-full h-full flex flex-col items-center justify-center fixed top-0"
				);
		},
		m(n, m) {
			T(n, s, m),
				T(n, l, m),
				T(n, e, m),
				T(n, r, m),
				T(n, o, m),
				i && i.m(o, null);
		},
		p(n, [m]) {
			c === (c = d(n)) && i
				? i.p(n, m)
				: (i && i.d(1), (i = c && c(n)), i && (i.c(), N(i, 1), i.m(o, null)));
		},
		i(n) {
			N(i);
		},
		o: I,
		d(n) {
			n && (L(s), L(l), L(e), L(r), L(o)), i && i.d();
		},
	};
}
function Bs(t, s, l) {
	let e, r, o, d;
	E(t, M, (b) => l(7, (e = b))),
		E(t, P, (b) => l(8, (r = b))),
		E(t, D, (b) => l(9, (o = b))),
		E(t, O, (b) => l(10, (d = b)));
	let c;
	switch (d[0]) {
		case 1:
			c = ve;
			break;
		case 2:
			c = ye;
			break;
		case 3:
			c = we;
			break;
		case 4:
			c = xe;
			break;
		case 5:
			c = je;
			break;
	}
	let i;
	switch (d[1]) {
		case 1:
			i = qe;
			break;
		case 2:
			i = Je;
			break;
		case 3:
			i = Qe;
			break;
		case 4:
			i = Ue;
			break;
		case 5:
			i = Ve;
			break;
	}
	let n;
	switch (o[0]) {
		case 1:
			n = $e;
			break;
		case 2:
			n = Me;
			break;
		case 3:
			n = Le;
			break;
		case 4:
			n = He;
			break;
		case 5:
			n = Te;
			break;
	}
	let m;
	switch (o[1]) {
		case 1:
			m = Ye;
			break;
		case 2:
			m = Ze;
			break;
		case 3:
			m = Ke;
			break;
		case 4:
			m = et;
			break;
		case 5:
			m = tt;
			break;
	}
	let y;
	switch (r[0]) {
		case 1:
			y = Ce;
			break;
		case 2:
			y = Ie;
			break;
		case 3:
			y = Be;
			break;
		case 4:
			y = Ae;
			break;
		case 5:
			y = Ee;
			break;
	}
	let p;
	switch (r[1]) {
		case 1:
			p = lt;
			break;
		case 2:
			p = rt;
			break;
		case 3:
			p = nt;
			break;
		case 4:
			p = at;
			break;
		case 5:
			p = ot;
			break;
	}
	let j = 0,
		_ = setInterval(() => {
			l(0, j++, j), console.log("Testing" + j);
		}, 2500);
	return (
		(t.$$.update = () => {
			t.$$.dirty & 1 && j >= 15 && (clearInterval(_), h(M, (e = 0), e));
		}),
		[j, c, i, n, m, y, p]
	);
}
class As extends Y {
	constructor(s) {
		super(), X(this, s, Bs, Is, J, {});
	}
}
function Es(t) {
	let s, l;
	return (
		(s = new As({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Os(t) {
	let s, l;
	return (
		(s = new rs({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Ds(t) {
	let s, l;
	return (
		(s = new ts({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Ps(t) {
	let s, l;
	return (
		(s = new ws({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Ws(t) {
	let s, l;
	return (
		(s = new ks({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Ns(t) {
	let s, l;
	return (
		(s = new hs({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Gs(t) {
	let s, l;
	return (
		(s = new ms({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Fs(t) {
	let s, l;
	return (
		(s = new us({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Rs(t) {
	let s, l;
	return (
		(s = new os({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function qs(t) {
	let s, l;
	return (
		(s = new Zt({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Js(t) {
	let s, l;
	return (
		(s = new Vt({})),
		{
			c() {
				Z(s.$$.fragment);
			},
			m(e, r) {
				U(s, e, r), (l = !0);
			},
			i(e) {
				l || (N(s.$$.fragment, e), (l = !0));
			},
			o(e) {
				q(s.$$.fragment, e), (l = !1);
			},
			d(e) {
				V(s, e);
			},
		}
	);
}
function Qs(t) {
	let s, l, e, r, o;
	const d = [Js, qs, Rs, Fs, Gs, Ns, Ws, Ps, Ds, Os, Es],
		c = [];
	function i(n, m) {
		return n[0] == 0
			? 0
			: n[0] == 1
			? 1
			: n[0] == 11
			? 2
			: n[0] == 12
			? 3
			: n[0] == 21
			? 4
			: n[0] == 22
			? 5
			: n[0] == 31
			? 6
			: n[0] == 32
			? 7
			: n[0] == 2
			? 8
			: n[0] == 3
			? 9
			: n[0] == 4
			? 10
			: -1;
	}
	return (
		~(e = i(t)) && (r = c[e] = d[e](t)),
		{
			c() {
				(s = x()),
					(l = f("main")),
					r && r.c(),
					(document.title = "Charlene Monthsary"),
					a(l, "class", "w-screen h-screen");
			},
			m(n, m) {
				T(n, s, m), T(n, l, m), ~e && c[e].m(l, null), (o = !0);
			},
			p(n, [m]) {
				let y = e;
				(e = i(n)),
					e !== y &&
						(r &&
							(Gt(),
							q(c[y], 1, 1, () => {
								c[y] = null;
							}),
							Ft()),
						~e
							? ((r = c[e]),
							  r || ((r = c[e] = d[e](n)), r.c()),
							  N(r, 1),
							  r.m(l, null))
							: (r = null));
			},
			i(n) {
				o || (N(r), (o = !0));
			},
			o(n) {
				q(r), (o = !1);
			},
			d(n) {
				n && (L(s), L(l)), ~e && c[e].d();
			},
		}
	);
}
function Us(t, s, l) {
	let e;
	return E(t, M, (r) => l(0, (e = r))), [e];
}
class Vs extends Y {
	constructor(s) {
		super(), X(this, s, Us, Qs, J, {});
	}
}
new Vs({ target: document.getElementById("app") });
