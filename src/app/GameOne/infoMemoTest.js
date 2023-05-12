import js from '../../images/js.png'
const images = ['https://th.bing.com/th/id/OIP.yOyt3SUoOhDU2365MEpL8wHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7',
     'https://th.bing.com/th/id/OIP.i8H78kDpwb8dKEGfNrHTeQHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7',
     'https://th.bing.com/th/id/OIP.TF36fskNYgiiouM629fGMwHaGC?w=204&h=180&c=7&r=0&o=5&pid=1.7',
     'https://th.bing.com/th/id/OIP.0svpkBNR3r695Jtm5nWycgAAAA?w=184&h=180&c=7&r=0&o=5&pid=1.7',
     'https://th.bing.com/th/id/OIP.dJVygy2aFMNVmyPaGDGXZQHaFj?w=229&h=183&c=7&r=0&o=5&pid=1.7',
     'https://th.bing.com/th?q=Logo+De+TypeScript&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-AR&cc=AR&setlang=es&adlt=moderate&t=1&mw=247',
     'https://th.bing.com/th/id/R.ec07fb7c8abfa8166540a4e88082c396?rik=tILz6nXOci3nZg&pid=ImgRaw&r=0',
     'https://th.bing.com/th/id/OIP.Vlt1utb_hZSGcHl01yG1NQHaHh?pid=ImgDet&rs=1',
     'https://th.bing.com/th/id/OIP.WYY8YYDKpnp9DADhNyeoKAHaHa?pid=ImgDet&rs=1',
     'https://th.bing.com/th/id/OIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ?pid=ImgDet&rs=1',
 ].flatMap(image => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)


 export default {
     images
 }