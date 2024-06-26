;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function yn(e, t) {
  const n = new Set(e.split(','))
  return (s) => n.has(s)
}
const U = {},
  Je = [],
  le = () => {},
  Or = () => !1,
  Lt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  wn = (e) => e.startsWith('onUpdate:'),
  J = Object.assign,
  vn = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Sr = Object.prototype.hasOwnProperty,
  R = (e, t) => Sr.call(e, t),
  A = Array.isArray,
  ke = (e) => Nt(e) === '[object Map]',
  Ss = (e) => Nt(e) === '[object Set]',
  I = (e) => typeof e == 'function',
  W = (e) => typeof e == 'string',
  ze = (e) => typeof e == 'symbol',
  D = (e) => e !== null && typeof e == 'object',
  As = (e) => (D(e) || I(e)) && I(e.then) && I(e.catch),
  Ts = Object.prototype.toString,
  Nt = (e) => Ts.call(e),
  Ar = (e) => Nt(e).slice(8, -1),
  Is = (e) => Nt(e) === '[object Object]',
  En = (e) => W(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  rt = yn(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  jt = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Tr = /-(\w)/g,
  ve = jt((e) => e.replace(Tr, (t, n) => (n ? n.toUpperCase() : ''))),
  Ir = /\B([A-Z])/g,
  Ze = jt((e) => e.replace(Ir, '-$1').toLowerCase()),
  Ht = jt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  kt = jt((e) => (e ? `on${Ht(e)}` : '')),
  We = (e, t) => !Object.is(e, t),
  Yt = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Ps = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Pr = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Jn
const Rs = () =>
  Jn ||
  (Jn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Cn(e) {
  if (A(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = W(s) ? $r(s) : Cn(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else if (W(e) || D(e)) return e
}
const Rr = /;(?![^(]*\))/g,
  Mr = /:([^]+)/,
  Fr = /\/\*[^]*?\*\//g
function $r(e) {
  const t = {}
  return (
    e
      .replace(Fr, '')
      .split(Rr)
      .forEach((n) => {
        if (n) {
          const s = n.split(Mr)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Ve(e) {
  let t = ''
  if (W(e)) t = e
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ve(e[n])
      s && (t += s + ' ')
    }
  else if (D(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Lr =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Nr = yn(Lr)
function Ms(e) {
  return !!e || e === ''
}
const on = (e) =>
    W(e)
      ? e
      : e == null
        ? ''
        : A(e) || (D(e) && (e.toString === Ts || !I(e.toString)))
          ? JSON.stringify(e, Fs, 2)
          : String(e),
  Fs = (e, t) =>
    t && t.__v_isRef
      ? Fs(e, t.value)
      : ke(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[Xt(s, o) + ' =>'] = r), n),
              {},
            ),
          }
        : Ss(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Xt(n)) }
          : ze(t)
            ? Xt(t)
            : D(t) && !A(t) && !Is(t)
              ? String(t)
              : t,
  Xt = (e, t = '') => {
    var n
    return ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ue
class jr {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ue),
      !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = ue
      try {
        return (ue = this), t()
      } finally {
        ue = n
      }
    }
  }
  on() {
    ue = this
  }
  off() {
    ue = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Hr(e, t = ue) {
  t && t.active && t.effects.push(e)
}
function Br() {
  return ue
}
let De
class On {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Hr(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), Fe()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (Ur(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), $e()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Re,
      n = De
    try {
      return (Re = !0), (De = this), this._runnings++, kn(this), this.fn()
    } finally {
      Yn(this), this._runnings--, (De = n), (Re = t)
    }
  }
  stop() {
    this.active &&
      (kn(this), Yn(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Ur(e) {
  return e.value
}
function kn(e) {
  e._trackId++, (e._depsLength = 0)
}
function Yn(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) $s(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function $s(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Re = !0,
  ln = 0
const Ls = []
function Fe() {
  Ls.push(Re), (Re = !1)
}
function $e() {
  const e = Ls.pop()
  Re = e === void 0 ? !0 : e
}
function Sn() {
  ln++
}
function An() {
  for (ln--; !ln && cn.length; ) cn.shift()()
}
function Ns(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && $s(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const cn = []
function js(e, t, n) {
  Sn()
  for (const s of e.keys()) {
    let r
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && cn.push(s.scheduler)))
  }
  An()
}
const Hs = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  fn = new WeakMap(),
  Ke = Symbol(''),
  un = Symbol('')
function te(e, t, n) {
  if (Re && De) {
    let s = fn.get(e)
    s || fn.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Hs(() => s.delete(n)))), Ns(De, r)
  }
}
function Oe(e, t, n, s, r, o) {
  const i = fn.get(e)
  if (!i) return
  let c = []
  if (t === 'clear') c = [...i.values()]
  else if (n === 'length' && A(e)) {
    const u = Number(s)
    i.forEach((d, h) => {
      ;(h === 'length' || (!ze(h) && h >= u)) && c.push(d)
    })
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case 'add':
        A(e)
          ? En(n) && c.push(i.get('length'))
          : (c.push(i.get(Ke)), ke(e) && c.push(i.get(un)))
        break
      case 'delete':
        A(e) || (c.push(i.get(Ke)), ke(e) && c.push(i.get(un)))
        break
      case 'set':
        ke(e) && c.push(i.get(Ke))
        break
    }
  Sn()
  for (const u of c) u && js(u, 4)
  An()
}
const Vr = yn('__proto__,__v_isRef,__isVue'),
  Bs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(ze),
  ),
  Xn = Dr()
function Dr() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = N(this)
        for (let o = 0, i = this.length; o < i; o++) te(s, 'get', o + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(N)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Fe(), Sn()
        const s = N(this)[t].apply(this, n)
        return An(), $e(), s
      }
    }),
    e
  )
}
function Kr(e) {
  ze(e) || (e = String(e))
  const t = N(this)
  return te(t, 'has', e), t.hasOwnProperty(e)
}
class Us {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (r ? (o ? no : Ws) : o ? Ks : Ds).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = A(t)
    if (!r) {
      if (i && R(Xn, n)) return Reflect.get(Xn, n, s)
      if (n === 'hasOwnProperty') return Kr
    }
    const c = Reflect.get(t, n, s)
    return (ze(n) ? Bs.has(n) : Vr(n)) || (r || te(t, 'get', n), o)
      ? c
      : re(c)
        ? i && En(n)
          ? c
          : c.value
        : D(c)
          ? r
            ? zs(c)
            : Pn(c)
          : c
  }
}
class Vs extends Us {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let o = t[n]
    if (!this._isShallow) {
      const u = Rt(o)
      if (
        (!an(s) && !Rt(s) && ((o = N(o)), (s = N(s))), !A(t) && re(o) && !re(s))
      )
        return u ? !1 : ((o.value = s), !0)
    }
    const i = A(t) && En(n) ? Number(n) < t.length : R(t, n),
      c = Reflect.set(t, n, s, r)
    return (
      t === N(r) && (i ? We(s, o) && Oe(t, 'set', n, s) : Oe(t, 'add', n, s)), c
    )
  }
  deleteProperty(t, n) {
    const s = R(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && Oe(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!ze(n) || !Bs.has(n)) && te(t, 'has', n), s
  }
  ownKeys(t) {
    return te(t, 'iterate', A(t) ? 'length' : Ke), Reflect.ownKeys(t)
  }
}
class Wr extends Us {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const zr = new Vs(),
  qr = new Wr(),
  Gr = new Vs(!0)
const Tn = (e) => e,
  Bt = (e) => Reflect.getPrototypeOf(e)
function xt(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = N(e),
    o = N(t)
  n || (We(t, o) && te(r, 'get', t), te(r, 'get', o))
  const { has: i } = Bt(r),
    c = s ? Tn : n ? Fn : Mn
  if (i.call(r, t)) return c(e.get(t))
  if (i.call(r, o)) return c(e.get(o))
  e !== r && e.get(t)
}
function yt(e, t = !1) {
  const n = this.__v_raw,
    s = N(n),
    r = N(e)
  return (
    t || (We(e, r) && te(s, 'has', e), te(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function wt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && te(N(e), 'iterate', Ke), Reflect.get(e, 'size', e)
  )
}
function Zn(e) {
  e = N(e)
  const t = N(this)
  return Bt(t).has.call(t, e) || (t.add(e), Oe(t, 'add', e, e)), this
}
function Qn(e, t) {
  t = N(t)
  const n = N(this),
    { has: s, get: r } = Bt(n)
  let o = s.call(n, e)
  o || ((e = N(e)), (o = s.call(n, e)))
  const i = r.call(n, e)
  return (
    n.set(e, t), o ? We(t, i) && Oe(n, 'set', e, t) : Oe(n, 'add', e, t), this
  )
}
function es(e) {
  const t = N(this),
    { has: n, get: s } = Bt(t)
  let r = n.call(t, e)
  r || ((e = N(e)), (r = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return r && Oe(t, 'delete', e, void 0), o
}
function ts() {
  const e = N(this),
    t = e.size !== 0,
    n = e.clear()
  return t && Oe(e, 'clear', void 0, void 0), n
}
function vt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      c = N(i),
      u = t ? Tn : e ? Fn : Mn
    return (
      !e && te(c, 'iterate', Ke), i.forEach((d, h) => s.call(r, u(d), u(h), o))
    )
  }
}
function Et(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = N(r),
      i = ke(o),
      c = e === 'entries' || (e === Symbol.iterator && i),
      u = e === 'keys' && i,
      d = r[e](...s),
      h = n ? Tn : t ? Fn : Mn
    return (
      !t && te(o, 'iterate', u ? un : Ke),
      {
        next() {
          const { value: y, done: E } = d.next()
          return E
            ? { value: y, done: E }
            : { value: c ? [h(y[0]), h(y[1])] : h(y), done: E }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ae(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Jr() {
  const e = {
      get(o) {
        return xt(this, o)
      },
      get size() {
        return wt(this)
      },
      has: yt,
      add: Zn,
      set: Qn,
      delete: es,
      clear: ts,
      forEach: vt(!1, !1),
    },
    t = {
      get(o) {
        return xt(this, o, !1, !0)
      },
      get size() {
        return wt(this)
      },
      has: yt,
      add: Zn,
      set: Qn,
      delete: es,
      clear: ts,
      forEach: vt(!1, !0),
    },
    n = {
      get(o) {
        return xt(this, o, !0)
      },
      get size() {
        return wt(this, !0)
      },
      has(o) {
        return yt.call(this, o, !0)
      },
      add: Ae('add'),
      set: Ae('set'),
      delete: Ae('delete'),
      clear: Ae('clear'),
      forEach: vt(!0, !1),
    },
    s = {
      get(o) {
        return xt(this, o, !0, !0)
      },
      get size() {
        return wt(this, !0)
      },
      has(o) {
        return yt.call(this, o, !0)
      },
      add: Ae('add'),
      set: Ae('set'),
      delete: Ae('delete'),
      clear: Ae('clear'),
      forEach: vt(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = Et(o, !1, !1)),
        (n[o] = Et(o, !0, !1)),
        (t[o] = Et(o, !1, !0)),
        (s[o] = Et(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [kr, Yr, Xr, Zr] = Jr()
function In(e, t) {
  const n = t ? (e ? Zr : Xr) : e ? Yr : kr
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(R(n, r) && r in s ? n : s, r, o)
}
const Qr = { get: In(!1, !1) },
  eo = { get: In(!1, !0) },
  to = { get: In(!0, !1) }
const Ds = new WeakMap(),
  Ks = new WeakMap(),
  Ws = new WeakMap(),
  no = new WeakMap()
function so(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function ro(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : so(Ar(e))
}
function Pn(e) {
  return Rt(e) ? e : Rn(e, !1, zr, Qr, Ds)
}
function oo(e) {
  return Rn(e, !1, Gr, eo, Ks)
}
function zs(e) {
  return Rn(e, !0, qr, to, Ws)
}
function Rn(e, t, n, s, r) {
  if (!D(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = ro(e)
  if (i === 0) return e
  const c = new Proxy(e, i === 2 ? s : n)
  return r.set(e, c), c
}
function ot(e) {
  return Rt(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Rt(e) {
  return !!(e && e.__v_isReadonly)
}
function an(e) {
  return !!(e && e.__v_isShallow)
}
function qs(e) {
  return e ? !!e.__v_raw : !1
}
function N(e) {
  const t = e && e.__v_raw
  return t ? N(t) : e
}
function io(e) {
  return Object.isExtensible(e) && Ps(e, '__v_skip', !0), e
}
const Mn = (e) => (D(e) ? Pn(e) : e),
  Fn = (e) => (D(e) ? zs(e) : e)
class Gs {
  constructor(t, n, s, r) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new On(
        () => t(this._value),
        () => Zt(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = N(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        We(t._value, (t._value = t.effect.run())) &&
        Zt(t, 4),
      co(t),
      t.effect._dirtyLevel >= 2 && Zt(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function lo(e, t, n = !1) {
  let s, r
  const o = I(e)
  return (
    o ? ((s = e), (r = le)) : ((s = e.get), (r = e.set)),
    new Gs(s, r, o || !r, n)
  )
}
function co(e) {
  var t
  Re &&
    De &&
    ((e = N(e)),
    Ns(
      De,
      (t = e.dep) != null
        ? t
        : (e.dep = Hs(() => (e.dep = void 0), e instanceof Gs ? e : void 0)),
    ))
}
function Zt(e, t = 4, n) {
  e = N(e)
  const s = e.dep
  s && js(s, t)
}
function re(e) {
  return !!(e && e.__v_isRef === !0)
}
function fo(e) {
  return re(e) ? e.value : e
}
const uo = {
  get: (e, t, n) => fo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return re(r) && !re(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Js(e) {
  return ot(e) ? e : new Proxy(e, uo)
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Me(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Ut(r, t, n)
  }
}
function ge(e, t, n, s) {
  if (I(e)) {
    const r = Me(e, t, n, s)
    return (
      r &&
        As(r) &&
        r.catch((o) => {
          Ut(o, t, n)
        }),
      r
    )
  }
  if (A(e)) {
    const r = []
    for (let o = 0; o < e.length; o++) r.push(ge(e[o], t, n, s))
    return r
  }
}
function Ut(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const d = o.ec
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](e, i, c) === !1) return
      }
      o = o.parent
    }
    const u = t.appContext.config.errorHandler
    if (u) {
      Fe(), Me(u, null, 10, [e, i, c]), $e()
      return
    }
  }
  ao(e, n, r, s)
}
function ao(e, t, n, s = !0) {
  console.error(e)
}
let ft = !1,
  dn = !1
const Y = []
let we = 0
const Ye = []
let Te = null,
  Ue = 0
const ks = Promise.resolve()
let $n = null
function ho(e) {
  const t = $n || ks
  return e ? t.then(this ? e.bind(this) : e) : t
}
function po(e) {
  let t = we + 1,
    n = Y.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Y[s],
      o = ut(r)
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ln(e) {
  ;(!Y.length || !Y.includes(e, ft && e.allowRecurse ? we + 1 : we)) &&
    (e.id == null ? Y.push(e) : Y.splice(po(e.id), 0, e), Ys())
}
function Ys() {
  !ft && !dn && ((dn = !0), ($n = ks.then(Zs)))
}
function go(e) {
  const t = Y.indexOf(e)
  t > we && Y.splice(t, 1)
}
function mo(e) {
  A(e)
    ? Ye.push(...e)
    : (!Te || !Te.includes(e, e.allowRecurse ? Ue + 1 : Ue)) && Ye.push(e),
    Ys()
}
function ns(e, t, n = ft ? we + 1 : 0) {
  for (; n < Y.length; n++) {
    const s = Y[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      Y.splice(n, 1), n--, s()
    }
  }
}
function Xs(e) {
  if (Ye.length) {
    const t = [...new Set(Ye)].sort((n, s) => ut(n) - ut(s))
    if (((Ye.length = 0), Te)) {
      Te.push(...t)
      return
    }
    for (Te = t, Ue = 0; Ue < Te.length; Ue++) Te[Ue]()
    ;(Te = null), (Ue = 0)
  }
}
const ut = (e) => (e.id == null ? 1 / 0 : e.id),
  _o = (e, t) => {
    const n = ut(e) - ut(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Zs(e) {
  ;(dn = !1), (ft = !0), Y.sort(_o)
  try {
    for (we = 0; we < Y.length; we++) {
      const t = Y[we]
      t && t.active !== !1 && Me(t, null, 14)
    }
  } finally {
    ;(we = 0),
      (Y.length = 0),
      Xs(),
      (ft = !1),
      ($n = null),
      (Y.length || Ye.length) && Zs()
  }
}
function bo(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || U
  let r = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in s) {
    const h = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: y, trim: E } = s[h] || U
    E && (r = n.map((T) => (W(T) ? T.trim() : T))), y && (r = n.map(Pr))
  }
  let c,
    u = s[(c = kt(t))] || s[(c = kt(ve(t)))]
  !u && o && (u = s[(c = kt(Ze(t)))]), u && ge(u, e, 6, r)
  const d = s[c + 'Once']
  if (d) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), ge(d, e, 6, r)
  }
}
function Qs(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    c = !1
  if (!I(e)) {
    const u = (d) => {
      const h = Qs(d, t, !0)
      h && ((c = !0), J(i, h))
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  return !o && !c
    ? (D(e) && s.set(e, null), null)
    : (A(o) ? o.forEach((u) => (i[u] = null)) : J(i, o), D(e) && s.set(e, i), i)
}
function Vt(e, t) {
  return !e || !Lt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      R(e, t[0].toLowerCase() + t.slice(1)) || R(e, Ze(t)) || R(e, t))
}
let he = null,
  Dt = null
function Mt(e) {
  const t = he
  return (he = e), (Dt = (e && e.type.__scopeId) || null), t
}
function er(e) {
  Dt = e
}
function tr() {
  Dt = null
}
function xo(e, t = he, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && hs(-1)
    const o = Mt(t)
    let i
    try {
      i = e(...r)
    } finally {
      Mt(o), s._d && hs(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Qt(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: c,
      emit: u,
      render: d,
      renderCache: h,
      props: y,
      data: E,
      setupState: T,
      ctx: K,
      inheritAttrs: F,
    } = e,
    ne = Mt(e)
  let z, k
  try {
    if (n.shapeFlag & 4) {
      const q = r || s,
        oe = q
      ;(z = ye(d.call(oe, q, h, y, T, E, K))), (k = c)
    } else {
      const q = t
      ;(z = ye(
        q.length > 1 ? q(y, { attrs: c, slots: i, emit: u }) : q(y, null),
      )),
        (k = t.props ? c : yo(c))
    }
  } catch (q) {
    ;(ct.length = 0), Ut(q, e, 1), (z = ce(at))
  }
  let j = z
  if (k && F !== !1) {
    const q = Object.keys(k),
      { shapeFlag: oe } = j
    q.length &&
      oe & 7 &&
      (o && q.some(wn) && (k = wo(k, o)), (j = Xe(j, k, !1, !0)))
  }
  return (
    n.dirs &&
      ((j = Xe(j, null, !1, !0)),
      (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (j.transition = n.transition),
    (z = j),
    Mt(ne),
    z
  )
}
const yo = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Lt(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  wo = (e, t) => {
    const n = {}
    for (const s in e) (!wn(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function vo(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: c, patchFlag: u } = t,
    d = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && u >= 0) {
    if (u & 1024) return !0
    if (u & 16) return s ? ss(s, i, d) : !!i
    if (u & 8) {
      const h = t.dynamicProps
      for (let y = 0; y < h.length; y++) {
        const E = h[y]
        if (i[E] !== s[E] && !Vt(d, E)) return !0
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? ss(s, i, d)
            : !0
          : !!i
  return !1
}
function ss(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !Vt(n, o)) return !0
  }
  return !1
}
function Eo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const nr = 'components'
function Ct(e, t) {
  return Oo(nr, e, !0, t) || e
}
const Co = Symbol.for('v-ndc')
function Oo(e, t, n = !0, s = !1) {
  const r = he || X
  if (r) {
    const o = r.type
    if (e === nr) {
      const c = Ei(o, !1)
      if (c && (c === t || c === ve(t) || c === Ht(ve(t)))) return o
    }
    const i = rs(r[e] || o[e], t) || rs(r.appContext[e], t)
    return !i && s ? o : i
  }
}
function rs(e, t) {
  return e && (e[t] || e[ve(t)] || e[Ht(ve(t))])
}
const So = (e) => e.__isSuspense
function Ao(e, t) {
  t && t.pendingBranch
    ? A(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : mo(e)
}
const To = Symbol.for('v-scx'),
  Io = () => At(To),
  Ot = {}
function en(e, t, n) {
  return sr(e, t, n)
}
function sr(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: c } = U,
) {
  if (t && o) {
    const M = t
    t = (...Ee) => {
      M(...Ee), oe()
    }
  }
  const u = X,
    d = (M) => (s === !0 ? M : Ge(M, s === !1 ? 1 : void 0))
  let h,
    y = !1,
    E = !1
  if (
    (re(e)
      ? ((h = () => e.value), (y = an(e)))
      : ot(e)
        ? ((h = () => d(e)), (y = !0))
        : A(e)
          ? ((E = !0),
            (y = e.some((M) => ot(M) || an(M))),
            (h = () =>
              e.map((M) => {
                if (re(M)) return M.value
                if (ot(M)) return d(M)
                if (I(M)) return Me(M, u, 2)
              })))
          : I(e)
            ? t
              ? (h = () => Me(e, u, 2))
              : (h = () => (T && T(), ge(e, u, 3, [K])))
            : (h = le),
    t && s)
  ) {
    const M = h
    h = () => Ge(M())
  }
  let T,
    K = (M) => {
      T = j.onStop = () => {
        Me(M, u, 4), (T = j.onStop = void 0)
      }
    },
    F
  if (zt)
    if (
      ((K = le),
      t ? n && ge(t, u, 3, [h(), E ? [] : void 0, K]) : h(),
      r === 'sync')
    ) {
      const M = Io()
      F = M.__watcherHandles || (M.__watcherHandles = [])
    } else return le
  let ne = E ? new Array(e.length).fill(Ot) : Ot
  const z = () => {
    if (!(!j.active || !j.dirty))
      if (t) {
        const M = j.run()
        ;(s || y || (E ? M.some((Ee, me) => We(Ee, ne[me])) : We(M, ne))) &&
          (T && T(),
          ge(t, u, 3, [M, ne === Ot ? void 0 : E && ne[0] === Ot ? [] : ne, K]),
          (ne = M))
      } else j.run()
  }
  z.allowRecurse = !!t
  let k
  r === 'sync'
    ? (k = z)
    : r === 'post'
      ? (k = () => ee(z, u && u.suspense))
      : ((z.pre = !0), u && (z.id = u.uid), (k = () => Ln(z)))
  const j = new On(h, le, k),
    q = Br(),
    oe = () => {
      j.stop(), q && vn(q.effects, j)
    }
  return (
    t
      ? n
        ? z()
        : (ne = j.run())
      : r === 'post'
        ? ee(j.run.bind(j), u && u.suspense)
        : j.run(),
    F && F.push(oe),
    oe
  )
}
function Po(e, t, n) {
  const s = this.proxy,
    r = W(e) ? (e.includes('.') ? rr(s, e) : () => s[e]) : e.bind(s, s)
  let o
  I(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = ht(this),
    c = sr(r, o.bind(s), n)
  return i(), c
}
function rr(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !D(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, re(e))) Ge(e.value, t, n)
  else if (A(e)) for (let s = 0; s < e.length; s++) Ge(e[s], t, n)
  else if (Ss(e) || ke(e))
    e.forEach((s) => {
      Ge(s, t, n)
    })
  else if (Is(e)) for (const s in e) Ge(e[s], t, n)
  return e
}
function He(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const c = r[i]
    o && (c.oldValue = o[i].value)
    let u = c.dir[s]
    u && (Fe(), ge(u, n, 8, [e.el, c, e, t]), $e())
  }
}
const St = (e) => !!e.type.__asyncLoader,
  or = (e) => e.type.__isKeepAlive
function Ro(e, t) {
  ir(e, 'a', t)
}
function Mo(e, t) {
  ir(e, 'da', t)
}
function ir(e, t, n = X) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Kt(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) or(r.parent.vnode) && Fo(s, t, n, r), (r = r.parent)
  }
}
function Fo(e, t, n, s) {
  const r = Kt(t, e, s, !0)
  lr(() => {
    vn(s[t], r)
  }, n)
}
function Kt(e, t, n = X, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Fe()
          const c = ht(n),
            u = ge(t, n, e, i)
          return c(), $e(), u
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const Se =
    (e) =>
    (t, n = X) =>
      (!zt || e === 'sp') && Kt(e, (...s) => t(...s), n),
  $o = Se('bm'),
  Lo = Se('m'),
  No = Se('bu'),
  jo = Se('u'),
  Ho = Se('bum'),
  lr = Se('um'),
  Bo = Se('sp'),
  Uo = Se('rtg'),
  Vo = Se('rtc')
function Do(e, t = X) {
  Kt('ec', e, t)
}
function hn(e, t, n, s) {
  let r
  const o = n
  if (A(e) || W(e)) {
    r = new Array(e.length)
    for (let i = 0, c = e.length; i < c; i++) r[i] = t(e[i], i, void 0, o)
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o)
  } else if (D(e))
    if (e[Symbol.iterator]) r = Array.from(e, (i, c) => t(i, c, void 0, o))
    else {
      const i = Object.keys(e)
      r = new Array(i.length)
      for (let c = 0, u = i.length; c < u; c++) {
        const d = i[c]
        r[c] = t(e[d], d, c, o)
      }
    }
  else r = []
  return r
}
const pn = (e) => (e ? (wr(e) ? Bn(e) || e.proxy : pn(e.parent)) : null),
  it = J(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pn(e.parent),
    $root: (e) => pn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Nn(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ln(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = ho.bind(e.proxy)),
    $watch: (e) => Po.bind(e),
  }),
  tn = (e, t) => e !== U && !e.__isScriptSetup && R(e, t),
  Ko = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: c,
        appContext: u,
      } = e
      let d
      if (t[0] !== '$') {
        const T = i[t]
        if (T !== void 0)
          switch (T) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (tn(s, t)) return (i[t] = 1), s[t]
          if (r !== U && R(r, t)) return (i[t] = 2), r[t]
          if ((d = e.propsOptions[0]) && R(d, t)) return (i[t] = 3), o[t]
          if (n !== U && R(n, t)) return (i[t] = 4), n[t]
          gn && (i[t] = 0)
        }
      }
      const h = it[t]
      let y, E
      if (h) return t === '$attrs' && te(e.attrs, 'get', ''), h(e)
      if ((y = c.__cssModules) && (y = y[t])) return y
      if (n !== U && R(n, t)) return (i[t] = 4), n[t]
      if (((E = u.config.globalProperties), R(E, t))) return E[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      return tn(r, t)
        ? ((r[t] = n), !0)
        : s !== U && R(s, t)
          ? ((s[t] = n), !0)
          : R(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i,
    ) {
      let c
      return (
        !!n[i] ||
        (e !== U && R(e, i)) ||
        tn(t, i) ||
        ((c = o[0]) && R(c, i)) ||
        R(s, i) ||
        R(it, i) ||
        R(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : R(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function os(e) {
  return A(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let gn = !0
function Wo(e) {
  const t = Nn(e),
    n = e.proxy,
    s = e.ctx
  ;(gn = !1), t.beforeCreate && is(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    created: h,
    beforeMount: y,
    mounted: E,
    beforeUpdate: T,
    updated: K,
    activated: F,
    deactivated: ne,
    beforeDestroy: z,
    beforeUnmount: k,
    destroyed: j,
    unmounted: q,
    render: oe,
    renderTracked: M,
    renderTriggered: Ee,
    errorCaptured: me,
    serverPrefetch: qt,
    expose: Le,
    inheritAttrs: Qe,
    components: gt,
    directives: mt,
    filters: Gt,
  } = t
  if ((d && zo(d, s, null), i))
    for (const V in i) {
      const H = i[V]
      I(H) && (s[V] = H.bind(n))
    }
  if (r) {
    const V = r.call(n, n)
    D(V) && (e.data = Pn(V))
  }
  if (((gn = !0), o))
    for (const V in o) {
      const H = o[V],
        Ne = I(H) ? H.bind(n, n) : I(H.get) ? H.get.bind(n, n) : le,
        _t = !I(H) && I(H.set) ? H.set.bind(n) : le,
        je = Oi({ get: Ne, set: _t })
      Object.defineProperty(s, V, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (_e) => (je.value = _e),
      })
    }
  if (c) for (const V in c) cr(c[V], s, n, V)
  if (u) {
    const V = I(u) ? u.call(n) : u
    Reflect.ownKeys(V).forEach((H) => {
      Xo(H, V[H])
    })
  }
  h && is(h, e, 'c')
  function Z(V, H) {
    A(H) ? H.forEach((Ne) => V(Ne.bind(n))) : H && V(H.bind(n))
  }
  if (
    (Z($o, y),
    Z(Lo, E),
    Z(No, T),
    Z(jo, K),
    Z(Ro, F),
    Z(Mo, ne),
    Z(Do, me),
    Z(Vo, M),
    Z(Uo, Ee),
    Z(Ho, k),
    Z(lr, q),
    Z(Bo, qt),
    A(Le))
  )
    if (Le.length) {
      const V = e.exposed || (e.exposed = {})
      Le.forEach((H) => {
        Object.defineProperty(V, H, {
          get: () => n[H],
          set: (Ne) => (n[H] = Ne),
        })
      })
    } else e.exposed || (e.exposed = {})
  oe && e.render === le && (e.render = oe),
    Qe != null && (e.inheritAttrs = Qe),
    gt && (e.components = gt),
    mt && (e.directives = mt)
}
function zo(e, t, n = le) {
  A(e) && (e = mn(e))
  for (const s in e) {
    const r = e[s]
    let o
    D(r)
      ? 'default' in r
        ? (o = At(r.from || s, r.default, !0))
        : (o = At(r.from || s))
      : (o = At(r)),
      re(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o)
  }
}
function is(e, t, n) {
  ge(A(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function cr(e, t, n, s) {
  const r = s.includes('.') ? rr(n, s) : () => n[s]
  if (W(e)) {
    const o = t[e]
    I(o) && en(r, o)
  } else if (I(e)) en(r, e.bind(n))
  else if (D(e))
    if (A(e)) e.forEach((o) => cr(o, t, n, s))
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler]
      I(o) && en(r, o, e)
    }
}
function Nn(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t)
  let u
  return (
    c
      ? (u = c)
      : !r.length && !n && !s
        ? (u = t)
        : ((u = {}),
          r.length && r.forEach((d) => Ft(u, d, i, !0)),
          Ft(u, t, i)),
    D(t) && o.set(t, u),
    u
  )
}
function Ft(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t
  o && Ft(e, o, n, !0), r && r.forEach((i) => Ft(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const c = qo[i] || (n && n[i])
      e[i] = c ? c(e[i], t[i]) : t[i]
    }
  return e
}
const qo = {
  data: ls,
  props: cs,
  emits: cs,
  methods: st,
  computed: st,
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  components: st,
  directives: st,
  watch: Jo,
  provide: ls,
  inject: Go,
}
function ls(e, t) {
  return t
    ? e
      ? function () {
          return J(I(e) ? e.call(this, this) : e, I(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Go(e, t) {
  return st(mn(e), mn(t))
}
function mn(e) {
  if (A(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function st(e, t) {
  return e ? J(Object.create(null), e, t) : t
}
function cs(e, t) {
  return e
    ? A(e) && A(t)
      ? [...new Set([...e, ...t])]
      : J(Object.create(null), os(e), os(t ?? {}))
    : t
}
function Jo(e, t) {
  if (!e) return t
  if (!t) return e
  const n = J(Object.create(null), e)
  for (const s in t) n[s] = Q(e[s], t[s])
  return n
}
function fr() {
  return {
    app: null,
    config: {
      isNativeTag: Or,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ko = 0
function Yo(e, t) {
  return function (s, r = null) {
    I(s) || (s = J({}, s)), r != null && !D(r) && (r = null)
    const o = fr(),
      i = new WeakSet()
    let c = !1
    const u = (o.app = {
      _uid: ko++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Si,
      get config() {
        return o.config
      },
      set config(d) {},
      use(d, ...h) {
        return (
          i.has(d) ||
            (d && I(d.install)
              ? (i.add(d), d.install(u, ...h))
              : I(d) && (i.add(d), d(u, ...h))),
          u
        )
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u
      },
      component(d, h) {
        return h ? ((o.components[d] = h), u) : o.components[d]
      },
      directive(d, h) {
        return h ? ((o.directives[d] = h), u) : o.directives[d]
      },
      mount(d, h, y) {
        if (!c) {
          const E = ce(s, r)
          return (
            (E.appContext = o),
            y === !0 ? (y = 'svg') : y === !1 && (y = void 0),
            h && t ? t(E, d) : e(E, d, y),
            (c = !0),
            (u._container = d),
            (d.__vue_app__ = u),
            Bn(E.component) || E.component.proxy
          )
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__)
      },
      provide(d, h) {
        return (o.provides[d] = h), u
      },
      runWithContext(d) {
        const h = lt
        lt = u
        try {
          return d()
        } finally {
          lt = h
        }
      },
    })
    return u
  }
}
let lt = null
function Xo(e, t) {
  if (X) {
    let n = X.provides
    const s = X.parent && X.parent.provides
    s === n && (n = X.provides = Object.create(s)), (n[e] = t)
  }
}
function At(e, t, n = !1) {
  const s = X || he
  if (s || lt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : lt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && I(t) ? t.call(s && s.proxy) : t
  }
}
const ur = {},
  ar = () => Object.create(ur),
  dr = (e) => Object.getPrototypeOf(e) === ur
function Zo(e, t, n, s = !1) {
  const r = {},
    o = ar()
  ;(e.propsDefaults = Object.create(null)), hr(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : oo(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o)
}
function Qo(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = N(r),
    [u] = e.propsOptions
  let d = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps
      for (let y = 0; y < h.length; y++) {
        let E = h[y]
        if (Vt(e.emitsOptions, E)) continue
        const T = t[E]
        if (u)
          if (R(o, E)) T !== o[E] && ((o[E] = T), (d = !0))
          else {
            const K = ve(E)
            r[K] = _n(u, c, K, T, e, !1)
          }
        else T !== o[E] && ((o[E] = T), (d = !0))
      }
    }
  } else {
    hr(e, t, r, o) && (d = !0)
    let h
    for (const y in c)
      (!t || (!R(t, y) && ((h = Ze(y)) === y || !R(t, h)))) &&
        (u
          ? n &&
            (n[y] !== void 0 || n[h] !== void 0) &&
            (r[y] = _n(u, c, y, void 0, e, !0))
          : delete r[y])
    if (o !== c) for (const y in o) (!t || !R(t, y)) && (delete o[y], (d = !0))
  }
  d && Oe(e.attrs, 'set', '')
}
function hr(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    c
  if (t)
    for (let u in t) {
      if (rt(u)) continue
      const d = t[u]
      let h
      r && R(r, (h = ve(u)))
        ? !o || !o.includes(h)
          ? (n[h] = d)
          : ((c || (c = {}))[h] = d)
        : Vt(e.emitsOptions, u) ||
          ((!(u in s) || d !== s[u]) && ((s[u] = d), (i = !0)))
    }
  if (o) {
    const u = N(n),
      d = c || U
    for (let h = 0; h < o.length; h++) {
      const y = o[h]
      n[y] = _n(r, u, y, d[y], e, !R(d, y))
    }
  }
  return i
}
function _n(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const c = R(i, 'default')
    if (c && s === void 0) {
      const u = i.default
      if (i.type !== Function && !i.skipFactory && I(u)) {
        const { propsDefaults: d } = r
        if (n in d) s = d[n]
        else {
          const h = ht(r)
          ;(s = d[n] = u.call(null, t)), h()
        }
      } else s = u
    }
    i[0] && (o && !c ? (s = !1) : i[1] && (s === '' || s === Ze(n)) && (s = !0))
  }
  return s
}
function pr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    c = []
  let u = !1
  if (!I(e)) {
    const h = (y) => {
      u = !0
      const [E, T] = pr(y, t, !0)
      J(i, E), T && c.push(...T)
    }
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h)
  }
  if (!o && !u) return D(e) && s.set(e, Je), Je
  if (A(o))
    for (let h = 0; h < o.length; h++) {
      const y = ve(o[h])
      fs(y) && (i[y] = U)
    }
  else if (o)
    for (const h in o) {
      const y = ve(h)
      if (fs(y)) {
        const E = o[h],
          T = (i[y] = A(E) || I(E) ? { type: E } : J({}, E))
        if (T) {
          const K = ds(Boolean, T.type),
            F = ds(String, T.type)
          ;(T[0] = K > -1),
            (T[1] = F < 0 || K < F),
            (K > -1 || R(T, 'default')) && c.push(y)
        }
      }
    }
  const d = [i, c]
  return D(e) && s.set(e, d), d
}
function fs(e) {
  return e[0] !== '$' && !rt(e)
}
function us(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function as(e, t) {
  return us(e) === us(t)
}
function ds(e, t) {
  return A(t) ? t.findIndex((n) => as(n, e)) : I(t) && as(t, e) ? 0 : -1
}
const gr = (e) => e[0] === '_' || e === '$stable',
  jn = (e) => (A(e) ? e.map(ye) : [ye(e)]),
  ei = (e, t, n) => {
    if (t._n) return t
    const s = xo((...r) => jn(t(...r)), n)
    return (s._c = !1), s
  },
  mr = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (gr(r)) continue
      const o = e[r]
      if (I(o)) t[r] = ei(r, o, s)
      else if (o != null) {
        const i = jn(o)
        t[r] = () => i
      }
    }
  },
  _r = (e, t) => {
    const n = jn(t)
    e.slots.default = () => n
  },
  ti = (e, t) => {
    const n = (e.slots = ar())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (J(n, t), Ps(n, '_', s, !0)) : mr(t, n)
    } else t && _r(e, t)
  },
  ni = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = !0,
      i = U
    if (s.shapeFlag & 32) {
      const c = t._
      c
        ? n && c === 1
          ? (o = !1)
          : (J(r, t), !n && c === 1 && delete r._)
        : ((o = !t.$stable), mr(t, r)),
        (i = t)
    } else t && (_r(e, t), (i = { default: 1 }))
    if (o) for (const c in r) !gr(c) && i[c] == null && delete r[c]
  }
function bn(e, t, n, s, r = !1) {
  if (A(e)) {
    e.forEach((E, T) => bn(E, t && (A(t) ? t[T] : t), n, s, r))
    return
  }
  if (St(s) && !r) return
  const o = s.shapeFlag & 4 ? Bn(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: c, r: u } = e,
    d = t && t.r,
    h = c.refs === U ? (c.refs = {}) : c.refs,
    y = c.setupState
  if (
    (d != null &&
      d !== u &&
      (W(d)
        ? ((h[d] = null), R(y, d) && (y[d] = null))
        : re(d) && (d.value = null)),
    I(u))
  )
    Me(u, c, 12, [i, h])
  else {
    const E = W(u),
      T = re(u)
    if (E || T) {
      const K = () => {
        if (e.f) {
          const F = E ? (R(y, u) ? y[u] : h[u]) : u.value
          r
            ? A(F) && vn(F, o)
            : A(F)
              ? F.includes(o) || F.push(o)
              : E
                ? ((h[u] = [o]), R(y, u) && (y[u] = h[u]))
                : ((u.value = [o]), e.k && (h[e.k] = u.value))
        } else
          E
            ? ((h[u] = i), R(y, u) && (y[u] = i))
            : T && ((u.value = i), e.k && (h[e.k] = i))
      }
      i ? ((K.id = -1), ee(K, n)) : K()
    }
  }
}
const ee = Ao
function si(e) {
  return ri(e)
}
function ri(e, t) {
  const n = Rs()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: u,
      setText: d,
      setElementText: h,
      parentNode: y,
      nextSibling: E,
      setScopeId: T = le,
      insertStaticContent: K,
    } = e,
    F = (
      l,
      f,
      a,
      p = null,
      g = null,
      b = null,
      w = void 0,
      _ = null,
      x = !!f.dynamicChildren,
    ) => {
      if (l === f) return
      l && !nt(l, f) && ((p = bt(l)), _e(l, g, b, !0), (l = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null))
      const { type: m, ref: v, shapeFlag: O } = f
      switch (m) {
        case Wt:
          ne(l, f, a, p)
          break
        case at:
          z(l, f, a, p)
          break
        case Tt:
          l == null && k(f, a, p, w)
          break
        case ie:
          gt(l, f, a, p, g, b, w, _, x)
          break
        default:
          O & 1
            ? oe(l, f, a, p, g, b, w, _, x)
            : O & 6
              ? mt(l, f, a, p, g, b, w, _, x)
              : (O & 64 || O & 128) && m.process(l, f, a, p, g, b, w, _, x, et)
      }
      v != null && g && bn(v, l && l.ref, b, f || l, !f)
    },
    ne = (l, f, a, p) => {
      if (l == null) s((f.el = c(f.children)), a, p)
      else {
        const g = (f.el = l.el)
        f.children !== l.children && d(g, f.children)
      }
    },
    z = (l, f, a, p) => {
      l == null ? s((f.el = u(f.children || '')), a, p) : (f.el = l.el)
    },
    k = (l, f, a, p) => {
      ;[l.el, l.anchor] = K(l.children, f, a, p, l.el, l.anchor)
    },
    j = ({ el: l, anchor: f }, a, p) => {
      let g
      for (; l && l !== f; ) (g = E(l)), s(l, a, p), (l = g)
      s(f, a, p)
    },
    q = ({ el: l, anchor: f }) => {
      let a
      for (; l && l !== f; ) (a = E(l)), r(l), (l = a)
      r(f)
    },
    oe = (l, f, a, p, g, b, w, _, x) => {
      f.type === 'svg' ? (w = 'svg') : f.type === 'math' && (w = 'mathml'),
        l == null ? M(f, a, p, g, b, w, _, x) : qt(l, f, g, b, w, _, x)
    },
    M = (l, f, a, p, g, b, w, _) => {
      let x, m
      const { props: v, shapeFlag: O, transition: C, dirs: S } = l
      if (
        ((x = l.el = i(l.type, b, v && v.is, v)),
        O & 8
          ? h(x, l.children)
          : O & 16 && me(l.children, x, null, p, g, nn(l, b), w, _),
        S && He(l, null, p, 'created'),
        Ee(x, l, l.scopeId, w, p),
        v)
      ) {
        for (const $ in v)
          $ !== 'value' &&
            !rt($) &&
            o(x, $, null, v[$], b, l.children, p, g, Ce)
        'value' in v && o(x, 'value', null, v.value, b),
          (m = v.onVnodeBeforeMount) && xe(m, p, l)
      }
      S && He(l, null, p, 'beforeMount')
      const P = oi(g, C)
      P && C.beforeEnter(x),
        s(x, f, a),
        ((m = v && v.onVnodeMounted) || P || S) &&
          ee(() => {
            m && xe(m, p, l), P && C.enter(x), S && He(l, null, p, 'mounted')
          }, g)
    },
    Ee = (l, f, a, p, g) => {
      if ((a && T(l, a), p)) for (let b = 0; b < p.length; b++) T(l, p[b])
      if (g) {
        let b = g.subTree
        if (f === b) {
          const w = g.vnode
          Ee(l, w, w.scopeId, w.slotScopeIds, g.parent)
        }
      }
    },
    me = (l, f, a, p, g, b, w, _, x = 0) => {
      for (let m = x; m < l.length; m++) {
        const v = (l[m] = _ ? Ie(l[m]) : ye(l[m]))
        F(null, v, f, a, p, g, b, w, _)
      }
    },
    qt = (l, f, a, p, g, b, w) => {
      const _ = (f.el = l.el)
      let { patchFlag: x, dynamicChildren: m, dirs: v } = f
      x |= l.patchFlag & 16
      const O = l.props || U,
        C = f.props || U
      let S
      if (
        (a && Be(a, !1),
        (S = C.onVnodeBeforeUpdate) && xe(S, a, f, l),
        v && He(f, l, a, 'beforeUpdate'),
        a && Be(a, !0),
        m
          ? Le(l.dynamicChildren, m, _, a, p, nn(f, g), b)
          : w || H(l, f, _, null, a, p, nn(f, g), b, !1),
        x > 0)
      ) {
        if (x & 16) Qe(_, f, O, C, a, p, g)
        else if (
          (x & 2 && O.class !== C.class && o(_, 'class', null, C.class, g),
          x & 4 && o(_, 'style', O.style, C.style, g),
          x & 8)
        ) {
          const P = f.dynamicProps
          for (let $ = 0; $ < P.length; $++) {
            const B = P[$],
              G = O[B],
              fe = C[B]
            ;(fe !== G || B === 'value') &&
              o(_, B, G, fe, g, l.children, a, p, Ce)
          }
        }
        x & 1 && l.children !== f.children && h(_, f.children)
      } else !w && m == null && Qe(_, f, O, C, a, p, g)
      ;((S = C.onVnodeUpdated) || v) &&
        ee(() => {
          S && xe(S, a, f, l), v && He(f, l, a, 'updated')
        }, p)
    },
    Le = (l, f, a, p, g, b, w) => {
      for (let _ = 0; _ < f.length; _++) {
        const x = l[_],
          m = f[_],
          v =
            x.el && (x.type === ie || !nt(x, m) || x.shapeFlag & 70)
              ? y(x.el)
              : a
        F(x, m, v, null, p, g, b, w, !0)
      }
    },
    Qe = (l, f, a, p, g, b, w) => {
      if (a !== p) {
        if (a !== U)
          for (const _ in a)
            !rt(_) && !(_ in p) && o(l, _, a[_], null, w, f.children, g, b, Ce)
        for (const _ in p) {
          if (rt(_)) continue
          const x = p[_],
            m = a[_]
          x !== m && _ !== 'value' && o(l, _, m, x, w, f.children, g, b, Ce)
        }
        'value' in p && o(l, 'value', a.value, p.value, w)
      }
    },
    gt = (l, f, a, p, g, b, w, _, x) => {
      const m = (f.el = l ? l.el : c('')),
        v = (f.anchor = l ? l.anchor : c(''))
      let { patchFlag: O, dynamicChildren: C, slotScopeIds: S } = f
      S && (_ = _ ? _.concat(S) : S),
        l == null
          ? (s(m, a, p), s(v, a, p), me(f.children || [], a, v, g, b, w, _, x))
          : O > 0 && O & 64 && C && l.dynamicChildren
            ? (Le(l.dynamicChildren, C, a, g, b, w, _),
              (f.key != null || (g && f === g.subTree)) && br(l, f, !0))
            : H(l, f, a, v, g, b, w, _, x)
    },
    mt = (l, f, a, p, g, b, w, _, x) => {
      ;(f.slotScopeIds = _),
        l == null
          ? f.shapeFlag & 512
            ? g.ctx.activate(f, a, p, w, x)
            : Gt(f, a, p, g, b, w, x)
          : Un(l, f, x)
    },
    Gt = (l, f, a, p, g, b, w) => {
      const _ = (l.component = bi(l, p, g))
      if ((or(l) && (_.ctx.renderer = et), xi(_), _.asyncDep)) {
        if ((g && g.registerDep(_, Z), !l.el)) {
          const x = (_.subTree = ce(at))
          z(null, x, f, a)
        }
      } else Z(_, l, f, a, g, b, w)
    },
    Un = (l, f, a) => {
      const p = (f.component = l.component)
      if (vo(l, f, a))
        if (p.asyncDep && !p.asyncResolved) {
          V(p, f, a)
          return
        } else (p.next = f), go(p.update), (p.effect.dirty = !0), p.update()
      else (f.el = l.el), (p.vnode = f)
    },
    Z = (l, f, a, p, g, b, w) => {
      const _ = () => {
          if (l.isMounted) {
            let { next: v, bu: O, u: C, parent: S, vnode: P } = l
            {
              const qe = xr(l)
              if (qe) {
                v && ((v.el = P.el), V(l, v, w)),
                  qe.asyncDep.then(() => {
                    l.isUnmounted || _()
                  })
                return
              }
            }
            let $ = v,
              B
            Be(l, !1),
              v ? ((v.el = P.el), V(l, v, w)) : (v = P),
              O && Yt(O),
              (B = v.props && v.props.onVnodeBeforeUpdate) && xe(B, S, v, P),
              Be(l, !0)
            const G = Qt(l),
              fe = l.subTree
            ;(l.subTree = G),
              F(fe, G, y(fe.el), bt(fe), l, g, b),
              (v.el = G.el),
              $ === null && Eo(l, G.el),
              C && ee(C, g),
              (B = v.props && v.props.onVnodeUpdated) &&
                ee(() => xe(B, S, v, P), g)
          } else {
            let v
            const { el: O, props: C } = f,
              { bm: S, m: P, parent: $ } = l,
              B = St(f)
            if (
              (Be(l, !1),
              S && Yt(S),
              !B && (v = C && C.onVnodeBeforeMount) && xe(v, $, f),
              Be(l, !0),
              O && Wn)
            ) {
              const G = () => {
                ;(l.subTree = Qt(l)), Wn(O, l.subTree, l, g, null)
              }
              B ? f.type.__asyncLoader().then(() => !l.isUnmounted && G()) : G()
            } else {
              const G = (l.subTree = Qt(l))
              F(null, G, a, p, l, g, b), (f.el = G.el)
            }
            if ((P && ee(P, g), !B && (v = C && C.onVnodeMounted))) {
              const G = f
              ee(() => xe(v, $, G), g)
            }
            ;(f.shapeFlag & 256 ||
              ($ && St($.vnode) && $.vnode.shapeFlag & 256)) &&
              l.a &&
              ee(l.a, g),
              (l.isMounted = !0),
              (f = a = p = null)
          }
        },
        x = (l.effect = new On(_, le, () => Ln(m), l.scope)),
        m = (l.update = () => {
          x.dirty && x.run()
        })
      ;(m.id = l.uid), Be(l, !0), m()
    },
    V = (l, f, a) => {
      f.component = l
      const p = l.vnode.props
      ;(l.vnode = f),
        (l.next = null),
        Qo(l, f.props, p, a),
        ni(l, f.children, a),
        Fe(),
        ns(l),
        $e()
    },
    H = (l, f, a, p, g, b, w, _, x = !1) => {
      const m = l && l.children,
        v = l ? l.shapeFlag : 0,
        O = f.children,
        { patchFlag: C, shapeFlag: S } = f
      if (C > 0) {
        if (C & 128) {
          _t(m, O, a, p, g, b, w, _, x)
          return
        } else if (C & 256) {
          Ne(m, O, a, p, g, b, w, _, x)
          return
        }
      }
      S & 8
        ? (v & 16 && Ce(m, g, b), O !== m && h(a, O))
        : v & 16
          ? S & 16
            ? _t(m, O, a, p, g, b, w, _, x)
            : Ce(m, g, b, !0)
          : (v & 8 && h(a, ''), S & 16 && me(O, a, p, g, b, w, _, x))
    },
    Ne = (l, f, a, p, g, b, w, _, x) => {
      ;(l = l || Je), (f = f || Je)
      const m = l.length,
        v = f.length,
        O = Math.min(m, v)
      let C
      for (C = 0; C < O; C++) {
        const S = (f[C] = x ? Ie(f[C]) : ye(f[C]))
        F(l[C], S, a, null, g, b, w, _, x)
      }
      m > v ? Ce(l, g, b, !0, !1, O) : me(f, a, p, g, b, w, _, x, O)
    },
    _t = (l, f, a, p, g, b, w, _, x) => {
      let m = 0
      const v = f.length
      let O = l.length - 1,
        C = v - 1
      for (; m <= O && m <= C; ) {
        const S = l[m],
          P = (f[m] = x ? Ie(f[m]) : ye(f[m]))
        if (nt(S, P)) F(S, P, a, null, g, b, w, _, x)
        else break
        m++
      }
      for (; m <= O && m <= C; ) {
        const S = l[O],
          P = (f[C] = x ? Ie(f[C]) : ye(f[C]))
        if (nt(S, P)) F(S, P, a, null, g, b, w, _, x)
        else break
        O--, C--
      }
      if (m > O) {
        if (m <= C) {
          const S = C + 1,
            P = S < v ? f[S].el : p
          for (; m <= C; )
            F(null, (f[m] = x ? Ie(f[m]) : ye(f[m])), a, P, g, b, w, _, x), m++
        }
      } else if (m > C) for (; m <= O; ) _e(l[m], g, b, !0), m++
      else {
        const S = m,
          P = m,
          $ = new Map()
        for (m = P; m <= C; m++) {
          const se = (f[m] = x ? Ie(f[m]) : ye(f[m]))
          se.key != null && $.set(se.key, m)
        }
        let B,
          G = 0
        const fe = C - P + 1
        let qe = !1,
          zn = 0
        const tt = new Array(fe)
        for (m = 0; m < fe; m++) tt[m] = 0
        for (m = S; m <= O; m++) {
          const se = l[m]
          if (G >= fe) {
            _e(se, g, b, !0)
            continue
          }
          let be
          if (se.key != null) be = $.get(se.key)
          else
            for (B = P; B <= C; B++)
              if (tt[B - P] === 0 && nt(se, f[B])) {
                be = B
                break
              }
          be === void 0
            ? _e(se, g, b, !0)
            : ((tt[be - P] = m + 1),
              be >= zn ? (zn = be) : (qe = !0),
              F(se, f[be], a, null, g, b, w, _, x),
              G++)
        }
        const qn = qe ? ii(tt) : Je
        for (B = qn.length - 1, m = fe - 1; m >= 0; m--) {
          const se = P + m,
            be = f[se],
            Gn = se + 1 < v ? f[se + 1].el : p
          tt[m] === 0
            ? F(null, be, a, Gn, g, b, w, _, x)
            : qe && (B < 0 || m !== qn[B] ? je(be, a, Gn, 2) : B--)
        }
      }
    },
    je = (l, f, a, p, g = null) => {
      const { el: b, type: w, transition: _, children: x, shapeFlag: m } = l
      if (m & 6) {
        je(l.component.subTree, f, a, p)
        return
      }
      if (m & 128) {
        l.suspense.move(f, a, p)
        return
      }
      if (m & 64) {
        w.move(l, f, a, et)
        return
      }
      if (w === ie) {
        s(b, f, a)
        for (let O = 0; O < x.length; O++) je(x[O], f, a, p)
        s(l.anchor, f, a)
        return
      }
      if (w === Tt) {
        j(l, f, a)
        return
      }
      if (p !== 2 && m & 1 && _)
        if (p === 0) _.beforeEnter(b), s(b, f, a), ee(() => _.enter(b), g)
        else {
          const { leave: O, delayLeave: C, afterLeave: S } = _,
            P = () => s(b, f, a),
            $ = () => {
              O(b, () => {
                P(), S && S()
              })
            }
          C ? C(b, P, $) : $()
        }
      else s(b, f, a)
    },
    _e = (l, f, a, p = !1, g = !1) => {
      const {
        type: b,
        props: w,
        ref: _,
        children: x,
        dynamicChildren: m,
        shapeFlag: v,
        patchFlag: O,
        dirs: C,
      } = l
      if ((_ != null && bn(_, null, a, l, !0), v & 256)) {
        f.ctx.deactivate(l)
        return
      }
      const S = v & 1 && C,
        P = !St(l)
      let $
      if ((P && ($ = w && w.onVnodeBeforeUnmount) && xe($, f, l), v & 6))
        Cr(l.component, a, p)
      else {
        if (v & 128) {
          l.suspense.unmount(a, p)
          return
        }
        S && He(l, null, f, 'beforeUnmount'),
          v & 64
            ? l.type.remove(l, f, a, g, et, p)
            : m && (b !== ie || (O > 0 && O & 64))
              ? Ce(m, f, a, !1, !0)
              : ((b === ie && O & 384) || (!g && v & 16)) && Ce(x, f, a),
          p && Vn(l)
      }
      ;((P && ($ = w && w.onVnodeUnmounted)) || S) &&
        ee(() => {
          $ && xe($, f, l), S && He(l, null, f, 'unmounted')
        }, a)
    },
    Vn = (l) => {
      const { type: f, el: a, anchor: p, transition: g } = l
      if (f === ie) {
        Er(a, p)
        return
      }
      if (f === Tt) {
        q(l)
        return
      }
      const b = () => {
        r(a), g && !g.persisted && g.afterLeave && g.afterLeave()
      }
      if (l.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: _ } = g,
          x = () => w(a, b)
        _ ? _(l.el, b, x) : x()
      } else b()
    },
    Er = (l, f) => {
      let a
      for (; l !== f; ) (a = E(l)), r(l), (l = a)
      r(f)
    },
    Cr = (l, f, a) => {
      const { bum: p, scope: g, update: b, subTree: w, um: _ } = l
      p && Yt(p),
        g.stop(),
        b && ((b.active = !1), _e(w, l, f, a)),
        _ && ee(_, f),
        ee(() => {
          l.isUnmounted = !0
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve())
    },
    Ce = (l, f, a, p = !1, g = !1, b = 0) => {
      for (let w = b; w < l.length; w++) _e(l[w], f, a, p, g)
    },
    bt = (l) =>
      l.shapeFlag & 6
        ? bt(l.component.subTree)
        : l.shapeFlag & 128
          ? l.suspense.next()
          : E(l.anchor || l.el)
  let Jt = !1
  const Dn = (l, f, a) => {
      l == null
        ? f._vnode && _e(f._vnode, null, null, !0)
        : F(f._vnode || null, l, f, null, null, null, a),
        Jt || ((Jt = !0), ns(), Xs(), (Jt = !1)),
        (f._vnode = l)
    },
    et = {
      p: F,
      um: _e,
      m: je,
      r: Vn,
      mt: Gt,
      mc: me,
      pc: H,
      pbc: Le,
      n: bt,
      o: e,
    }
  let Kn, Wn
  return { render: Dn, hydrate: Kn, createApp: Yo(Dn, Kn) }
}
function nn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function Be({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function oi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function br(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (A(s) && A(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let c = r[o]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[o] = Ie(r[o])), (c.el = i.el)),
        n || br(i, c)),
        c.type === Wt && (c.el = i.el)
    }
}
function ii(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, c
  const u = e.length
  for (s = 0; s < u; s++) {
    const d = e[s]
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; )
        (c = (o + i) >> 1), e[n[c]] < d ? (o = c + 1) : (i = c)
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function xr(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : xr(t)
}
const li = (e) => e.__isTeleport,
  ie = Symbol.for('v-fgt'),
  Wt = Symbol.for('v-txt'),
  at = Symbol.for('v-cmt'),
  Tt = Symbol.for('v-stc'),
  ct = []
let pe = null
function ae(e = !1) {
  ct.push((pe = e ? null : []))
}
function ci() {
  ct.pop(), (pe = ct[ct.length - 1] || null)
}
let dt = 1
function hs(e) {
  dt += e
}
function fi(e) {
  return (
    (e.dynamicChildren = dt > 0 ? pe || Je : null),
    ci(),
    dt > 0 && pe && pe.push(e),
    e
  )
}
function de(e, t, n, s, r, o) {
  return fi(L(e, t, n, s, r, o, !0))
}
function ui(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function nt(e, t) {
  return e.type === t.type && e.key === t.key
}
const yr = ({ key: e }) => e ?? null,
  It = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? W(e) || re(e) || I(e)
        ? { i: he, r: e, k: t, f: !!n }
        : e
      : null
  )
function L(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === ie ? 0 : 1,
  i = !1,
  c = !1,
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && It(t),
    scopeId: Dt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he,
  }
  return (
    c
      ? (Hn(u, n), o & 128 && e.normalize(u))
      : n && (u.shapeFlag |= W(n) ? 8 : 16),
    dt > 0 &&
      !i &&
      pe &&
      (u.patchFlag > 0 || o & 6) &&
      u.patchFlag !== 32 &&
      pe.push(u),
    u
  )
}
const ce = ai
function ai(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Co) && (e = at), ui(e))) {
    const c = Xe(e, t, !0)
    return (
      n && Hn(c, n),
      dt > 0 &&
        !o &&
        pe &&
        (c.shapeFlag & 6 ? (pe[pe.indexOf(e)] = c) : pe.push(c)),
      (c.patchFlag |= -2),
      c
    )
  }
  if ((Ci(e) && (e = e.__vccOpts), t)) {
    t = di(t)
    let { class: c, style: u } = t
    c && !W(c) && (t.class = Ve(c)),
      D(u) && (qs(u) && !A(u) && (u = J({}, u)), (t.style = Cn(u)))
  }
  const i = W(e) ? 1 : So(e) ? 128 : li(e) ? 64 : D(e) ? 4 : I(e) ? 2 : 0
  return L(e, t, n, s, r, i, o, !0)
}
function di(e) {
  return e ? (qs(e) || dr(e) ? J({}, e) : e) : null
}
function Xe(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: u } = e,
    d = t ? gi(r || {}, t) : r,
    h = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && yr(d),
      ref:
        t && t.ref
          ? n && o
            ? A(o)
              ? o.concat(It(t))
              : [o, It(t)]
            : It(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ie ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: u,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Xe(e.ssContent),
      ssFallback: e.ssFallback && Xe(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return u && s && (h.transition = u.clone(h)), h
}
function hi(e = ' ', t = 0) {
  return ce(Wt, null, e, t)
}
function pi(e, t) {
  const n = ce(Tt, null, e)
  return (n.staticCount = t), n
}
function ye(e) {
  return e == null || typeof e == 'boolean'
    ? ce(at)
    : A(e)
      ? ce(ie, null, e.slice())
      : typeof e == 'object'
        ? Ie(e)
        : ce(Wt, null, String(e))
}
function Ie(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Xe(e)
}
function Hn(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (A(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Hn(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !dr(t)
        ? (t._ctx = he)
        : r === 3 &&
          he &&
          (he.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    I(t)
      ? ((t = { default: t, _ctx: he }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [hi(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function gi(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Ve([t.class, s.class]))
      else if (r === 'style') t.style = Cn([t.style, s.style])
      else if (Lt(r)) {
        const o = t[r],
          i = s[r]
        i &&
          o !== i &&
          !(A(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function xe(e, t, n, s = null) {
  ge(e, t, 7, [n, s])
}
const mi = fr()
let _i = 0
function bi(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || mi,
    o = {
      uid: _i++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new jr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: pr(s, r),
      emitsOptions: Qs(s, r),
      emit: null,
      emitted: null,
      propsDefaults: U,
      inheritAttrs: s.inheritAttrs,
      ctx: U,
      data: U,
      props: U,
      attrs: U,
      slots: U,
      refs: U,
      setupState: U,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = bo.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let X = null,
  $t,
  xn
{
  const e = Rs(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o)
        }
      )
    }
  ;($t = t('__VUE_INSTANCE_SETTERS__', (n) => (X = n))),
    (xn = t('__VUE_SSR_SETTERS__', (n) => (zt = n)))
}
const ht = (e) => {
    const t = X
    return (
      $t(e),
      e.scope.on(),
      () => {
        e.scope.off(), $t(t)
      }
    )
  },
  ps = () => {
    X && X.scope.off(), $t(null)
  }
function wr(e) {
  return e.vnode.shapeFlag & 4
}
let zt = !1
function xi(e, t = !1) {
  t && xn(t)
  const { props: n, children: s } = e.vnode,
    r = wr(e)
  Zo(e, n, r, t), ti(e, s)
  const o = r ? yi(e, t) : void 0
  return t && xn(!1), o
}
function yi(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ko))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? vi(e) : null),
      o = ht(e)
    Fe()
    const i = Me(s, e, 0, [e.props, r])
    if (($e(), o(), As(i))) {
      if ((i.then(ps, ps), t))
        return i
          .then((c) => {
            gs(e, c, t)
          })
          .catch((c) => {
            Ut(c, e, 0)
          })
      e.asyncDep = i
    } else gs(e, i, t)
  } else vr(e, t)
}
function gs(e, t, n) {
  I(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : D(t) && (e.setupState = Js(t)),
    vr(e, n)
}
let ms
function vr(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && ms && !s.render) {
      const r = s.template || Nn(e).template
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: u } = s,
          d = J(J({ isCustomElement: o, delimiters: c }, i), u)
        s.render = ms(r, d)
      }
    }
    e.render = s.render || le
  }
  {
    const r = ht(e)
    Fe()
    try {
      Wo(e)
    } finally {
      $e(), r()
    }
  }
}
const wi = {
  get(e, t) {
    return te(e, 'get', ''), e[t]
  },
}
function vi(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, wi),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Bn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Js(io(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in it) return it[n](e)
        },
        has(t, n) {
          return n in t || n in it
        },
      }))
    )
}
function Ei(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Ci(e) {
  return I(e) && '__vccOpts' in e
}
const Oi = (e, t) => lo(e, t, zt),
  Si = '3.4.27'
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ai = 'http://www.w3.org/2000/svg',
  Ti = 'http://www.w3.org/1998/Math/MathML',
  Pe = typeof document < 'u' ? document : null,
  _s = Pe && Pe.createElement('template'),
  Ii = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Pe.createElementNS(Ai, e)
          : t === 'mathml'
            ? Pe.createElementNS(Ti, e)
            : Pe.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Pe.createTextNode(e),
    createComment: (e) => Pe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        _s.innerHTML =
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e
        const c = _s.content
        if (s === 'svg' || s === 'mathml') {
          const u = c.firstChild
          for (; u.firstChild; ) c.appendChild(u.firstChild)
          c.removeChild(u)
        }
        t.insertBefore(c, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Pi = Symbol('_vtc')
function Ri(e, t, n) {
  const s = e[Pi]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const bs = Symbol('_vod'),
  Mi = Symbol('_vsh'),
  Fi = Symbol(''),
  $i = /(^|;)\s*display\s*:/
function Li(e, t, n) {
  const s = e.style,
    r = W(n)
  let o = !1
  if (n && !r) {
    if (t)
      if (W(t))
        for (const i of t.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          n[c] == null && Pt(s, c, '')
        }
      else for (const i in t) n[i] == null && Pt(s, i, '')
    for (const i in n) i === 'display' && (o = !0), Pt(s, i, n[i])
  } else if (r) {
    if (t !== n) {
      const i = s[Fi]
      i && (n += ';' + i), (s.cssText = n), (o = $i.test(n))
    }
  } else t && e.removeAttribute('style')
  bs in e && ((e[bs] = o ? s.display : ''), e[Mi] && (s.display = 'none'))
}
const xs = /\s*!important$/
function Pt(e, t, n) {
  if (A(n)) n.forEach((s) => Pt(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Ni(e, t)
    xs.test(n)
      ? e.setProperty(Ze(s), n.replace(xs, ''), 'important')
      : (e[s] = n)
  }
}
const ys = ['Webkit', 'Moz', 'ms'],
  sn = {}
function Ni(e, t) {
  const n = sn[t]
  if (n) return n
  let s = ve(t)
  if (s !== 'filter' && s in e) return (sn[t] = s)
  s = Ht(s)
  for (let r = 0; r < ys.length; r++) {
    const o = ys[r] + s
    if (o in e) return (sn[t] = o)
  }
  return t
}
const ws = 'http://www.w3.org/1999/xlink'
function ji(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(ws, t.slice(6, t.length))
      : e.setAttributeNS(ws, t, n)
  else {
    const o = Nr(t)
    n == null || (o && !Ms(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function Hi(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o), (e[t] = n ?? '')
    return
  }
  const c = e.tagName
  if (t === 'value' && c !== 'PROGRESS' && !c.includes('-')) {
    const d = c === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      h = n ?? ''
    ;(d !== h || !('_value' in e)) && (e.value = h),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let u = !1
  if (n === '' || n == null) {
    const d = typeof e[t]
    d === 'boolean'
      ? (n = Ms(n))
      : n == null && d === 'string'
        ? ((n = ''), (u = !0))
        : d === 'number' && ((n = 0), (u = !0))
  }
  try {
    e[t] = n
  } catch {}
  u && e.removeAttribute(t)
}
function Bi(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Ui(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const vs = Symbol('_vei')
function Vi(e, t, n, s, r = null) {
  const o = e[vs] || (e[vs] = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [c, u] = Di(t)
    if (s) {
      const d = (o[t] = zi(s, r))
      Bi(e, c, d, u)
    } else i && (Ui(e, c, i, u), (o[t] = void 0))
  }
}
const Es = /(?:Once|Passive|Capture)$/
function Di(e) {
  let t
  if (Es.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Es)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Ze(e.slice(2)), t]
}
let rn = 0
const Ki = Promise.resolve(),
  Wi = () => rn || (Ki.then(() => (rn = 0)), (rn = Date.now()))
function zi(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    ge(qi(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Wi()), n
}
function qi(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Cs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Gi = (e, t, n, s, r, o, i, c, u) => {
    const d = r === 'svg'
    t === 'class'
      ? Ri(e, s, d)
      : t === 'style'
        ? Li(e, n, s)
        : Lt(t)
          ? wn(t) || Vi(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Ji(e, t, s, d)
              )
            ? Hi(e, t, s, o, i, c, u)
            : (t === 'true-value'
                ? (e._trueValue = s)
                : t === 'false-value' && (e._falseValue = s),
              ji(e, t, s, d))
  }
function Ji(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Cs(t) && I(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return Cs(t) && W(n) ? !1 : t in e
}
const ki = J({ patchProp: Gi }, Ii)
let Os
function Yi() {
  return Os || (Os = si(ki))
}
const Xi = (...e) => {
  const t = Yi().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Qi(s)
      if (!r) return
      const o = t._component
      !I(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = '')
      const i = n(r, !1, Zi(r))
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        i
      )
    }),
    t
  )
}
function Zi(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Qi(e) {
  return W(e) ? document.querySelector(e) : e
}
const pt = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  el = {
    name: 'AppHeader',
    data() {
      return {
        menuOpen: !1,
        hamburgerButton: '/assets/icon-hamburger.svg',
        closeButton: '/assets/icon-close.svg',
        isScrolled: !1,
        navLinks: [
          { name: 'Sobre', href: '#sobre' },
          { name: 'Carreira', href: '#carreira' },
          { name: 'Eventos', href: '#eventos' },
          { name: 'Contato', href: '#contato' },
        ],
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      toogleMenu() {
        this.menuOpen = !this.menuOpen
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 0
      },
    },
  },
  tl = (e) => (er('data-v-9ca80fa3'), (e = e()), tr(), e),
  nl = { class: 'mx-auto max-w-[1280px] flex items-center' },
  sl = tl(() =>
    L(
      'a',
      { href: '#home', class: 'w-2/4 shrink-0' },
      [
        L(
          'h1',
          {
            class:
              'title font-josefin-sans text-2xl font-bold text-sky-900 italic',
          },
          ' Oré ',
        ),
      ],
      -1,
    ),
  ),
  rl = { class: 'flex w-2/4 shrink-0 justify-end md:hidden' },
  ol = ['aria-expanded'],
  il = ['src'],
  ll = { class: 'flex flex-col gap-8 md:flex-row md:justify-end' },
  cl = ['href']
function fl(e, t, n, s, r, o) {
  return (
    ae(),
    de(
      'header',
      {
        class: Ve([
          'fixed z-20 w-full transition-colors duration-300',
          r.isScrolled ? 'bg-white/50' : 'bg-transparent',
        ]),
      },
      [
        L('div', nl, [
          L(
            'nav',
            {
              class: Ve([
                'flex w-full flex-wrap items-start p-4 transition-all',
                {
                  'h-screen bg-brand-black md:h-max md:bg-transparent':
                    r.menuOpen,
                },
              ]),
            },
            [
              sl,
              L('div', rl, [
                L(
                  'button',
                  {
                    type: 'button',
                    onClick:
                      t[0] ||
                      (t[0] = (...i) => o.toogleMenu && o.toogleMenu(...i)),
                    'data-toggle': '',
                    'aria-controls': 'NavigationCollapse',
                    'aria-expanded': r.menuOpen,
                    'aria-label': 'Toggle navigation',
                    class: Ve([
                      'rotate-0 cursor-pointer border-none outline-none transition-all duration-700 ease-out',
                      { 'rotate-180': r.menuOpen },
                    ]),
                  },
                  [
                    L(
                      'img',
                      {
                        src: r.menuOpen ? r.closeButton : r.hamburgerButton,
                        alt: 'Menu',
                      },
                      null,
                      8,
                      il,
                    ),
                  ],
                  10,
                  ol,
                ),
              ]),
              L(
                'div',
                {
                  id: 'NavigationCollapse',
                  class: Ve([
                    'w-full md:block md:w-2/4',
                    { hidden: !r.menuOpen },
                  ]),
                },
                [
                  L('ul', ll, [
                    (ae(!0),
                    de(
                      ie,
                      null,
                      hn(
                        r.navLinks,
                        (i) => (
                          ae(),
                          de('li', { key: i.name }, [
                            L(
                              'a',
                              {
                                href: i.href,
                                class:
                                  'nav__links font-josefin-sans text-2xl font-bold uppercase text-sky-900 transition-all ease-out md:font-alata md:text-[15px] md:capitalize',
                              },
                              on(i.name),
                              9,
                              cl,
                            ),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ],
                2,
              ),
            ],
            2,
          ),
        ]),
      ],
      2,
    )
  )
}
const ul = pt(el, [
    ['render', fl],
    ['__scopeId', 'data-v-9ca80fa3'],
  ]),
  al = { name: 'AppHero' },
  dl = { class: 'h-screen flex flex-col items-center justify-center' },
  hl = L(
    'div',
    { class: 'mb-7 flex flex-col items-center justify-center' },
    [
      L(
        'h2',
        { class: 'font-josefin-sans text-8xl font-bold mb-2 text-sky-800' },
        ' Juntos aprendemos ',
      ),
      L(
        'p',
        { class: 'text-2xl max-w-[700px] text-center text-sky-900' },
        ' Simplifique a avaliação da diversidade na sua empresa com pesquisa automatizada e insights práticos ',
      ),
    ],
    -1,
  ),
  pl = L(
    'button',
    {
      type: 'button',
      class:
        'rounded-xl px-7 py-3 bg-sky-950 text-sky-200 hover:bg-sky-800 transition-colors duration-200',
    },
    ' Saiba mais ',
    -1,
  ),
  gl = [hl, pl]
function ml(e, t, n, s, r, o) {
  return ae(), de('section', dl, gl)
}
const _l = pt(al, [['render', ml]]),
  bl = {
    name: 'AppApp',
    data() {
      return {
        navLinks: [
          { name: 'Sobre', href: '#sobre' },
          { name: 'Carreira', href: '#carreira' },
          { name: 'Eventos', href: '#eventos' },
          { name: 'Contato', href: '#contato' },
        ],
        socialLinks: [
          {
            name: 'Facebook',
            src: 'icon-facebook',
            url: 'https://www.facebook.com/',
          },
          { name: 'Twitter', src: 'icon-twitter', url: 'https://www.x.com' },
          {
            name: 'Instagram',
            src: 'icon-instagram',
            url: 'https://www.instagram.com',
          },
        ],
      }
    },
  },
  xl = (e) => (er('data-v-f9b7cbb7'), (e = e()), tr(), e),
  yl = { class: 'w-full bg-brand-black py-10 grow' },
  wl = {
    class:
      'mx-auto flex max-w-[1280px] flex-col items-center gap-y-12 px-6 md:flex-row md:justify-between',
  },
  vl = {
    class: 'flex flex-col items-center gap-y-12 md:items-start md:gap-y-8',
  },
  El = xl(() =>
    L(
      'a',
      { href: '#home', class: 'text-white' },
      [
        L(
          'h2',
          { class: 'font-josefin-sans text-2xl font-bold text-white italic' },
          ' Oré ',
        ),
      ],
      -1,
    ),
  ),
  Cl = { class: 'flex flex-col items-center justify-center gap-6 md:flex-row' },
  Ol = ['href'],
  Sl = {
    class:
      'flex flex-col items-center gap-y-6 text-center md:items-end md:gap-y-4',
  },
  Al = { class: 'flex gap-x-5' },
  Tl = ['href'],
  Il = ['src', 'alt'],
  Pl = {
    class:
      'font-atala text-[18px] tracking-wide text-brand-dark-gray md:text-sm',
  }
function Rl(e, t, n, s, r, o) {
  return (
    ae(),
    de('footer', yl, [
      L('div', wl, [
        L('div', vl, [
          El,
          L('ul', Cl, [
            (ae(!0),
            de(
              ie,
              null,
              hn(
                r.navLinks,
                (i) => (
                  ae(),
                  de('li', { key: i.name }, [
                    L(
                      'a',
                      {
                        href: i.href,
                        class:
                          'nav__links font-alata text-[18px] text-white transition-all ease-out md:text-[15px]',
                      },
                      on(i.name),
                      9,
                      Ol,
                    ),
                  ])
                ),
              ),
              128,
            )),
          ]),
        ]),
        L('div', Sl, [
          L('ul', Al, [
            (ae(!0),
            de(
              ie,
              null,
              hn(
                r.socialLinks,
                (i) => (
                  ae(),
                  de('li', { key: i.name }, [
                    L(
                      'a',
                      {
                        href: i.url,
                        target: '_blank',
                        rel: 'noopener',
                        class: 'nav__links transition-all ease-out',
                      },
                      [
                        L(
                          'img',
                          {
                            src: `/assets/${i.src}.svg`,
                            alt: i.name,
                            class: 'h-6 w-6',
                          },
                          null,
                          8,
                          Il,
                        ),
                      ],
                      8,
                      Tl,
                    ),
                  ])
                ),
              ),
              128,
            )),
          ]),
          L(
            'p',
            Pl,
            ' © ' +
              on(new Date().getFullYear()) +
              ' Oré. Todos os direitos reservados. ',
            1,
          ),
        ]),
      ]),
    ])
  )
}
const Ml = pt(bl, [
    ['render', Rl],
    ['__scopeId', 'data-v-f9b7cbb7'],
  ]),
  Fl = { name: 'AppAbout' },
  $l = { class: 'py-24 w-full bg-brand-white' },
  Ll = pi(
    '<div class="mx-auto max-w-[1280px]"><div class="space-y-8 w-2/4"><div class="rounded-xl bg-gray-100 text-gray-900 text-sm px-3 p-2 max-w-max shadow-md uppercase tracking-wider"> Descubra </div><div><h2 class="mb-2 text-2xl">Lorem Ipsum</h2><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem amet corrupti vitae, repellendus animi. </p></div><ul class="space-y-4"><li class="flex items-center gap-4"><div class="px-4 py-2 rounded-full bg-pink-200 w-max h-max">C</div><p>Beneficio 1</p></li><li class="flex items-center gap-4"><div class="px-4 py-2 rounded-full bg-pink-200 w-max h-max">C</div><p>Beneficio 2</p></li><li class="flex items-center gap-4"><div class="px-4 py-2 rounded-full bg-pink-200 w-max h-max">C</div><p>Beneficio 3</p></li></ul></div></div>',
    1,
  ),
  Nl = [Ll]
function jl(e, t, n, s, r, o) {
  return ae(), de('section', $l, Nl)
}
const Hl = pt(Fl, [['render', jl]]),
  Bl = {
    name: 'App',
    components: { Header: ul, Hero: _l, About: Hl, Footer: Ml },
  },
  Ul = {
    class:
      'background flex flex-col bg-brand-white min-h-screen justify-between',
  }
function Vl(e, t, n, s, r, o) {
  const i = Ct('Header'),
    c = Ct('Hero'),
    u = Ct('About'),
    d = Ct('Footer')
  return ae(), de('div', Ul, [ce(i), L('main', null, [ce(c), ce(u), ce(d)])])
}
const Dl = pt(Bl, [['render', Vl]])
Xi(Dl).mount('#app')
