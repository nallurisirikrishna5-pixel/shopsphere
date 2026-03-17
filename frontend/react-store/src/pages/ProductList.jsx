import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function ProductList() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Books']

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = !category || category === 'All' ? true : p.category === category
    return matchSearch && matchCat
  })

  return (
    <div style={{ maxWidth:1200, margin:'0 auto', padding:'2rem' }}>
      {/* Hero */}
      <div style={{
        background:'linear-gradient(135deg, #6366f1, #8b5cf6)',
        borderRadius:16, padding:'3rem', color:'white', marginBottom:'2rem', textAlign:'center'
      }}>
        <h1 style={{ fontSize:'2.5rem', fontWeight:700, marginBottom:'.5rem' }}>Welcome to ShopSphere</h1>
        <p style={{ opacity:.9, fontSize:'1.1rem', marginBottom:'1.5rem' }}>Discover amazing products at unbeatable prices</p>
        <input
          type="text" placeholder="Search products..."
          value={search} onChange={e => setSearch(e.target.value)}
          style={{
            padding:'.75rem 1.5rem', borderRadius:99, border:'none',
            fontSize:'1rem', width:'100%', maxWidth:400, outline:'none'
          }}
        />
      </div>

      {/* Categories */}
      <div style={{ display:'flex', gap:'1rem', marginBottom:'2rem', flexWrap:'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{
            padding:'.5rem 1.25rem', borderRadius:99,
            border: category === cat ? 'none' : '1px solid #e2e8f0',
            background: category === cat ? '#6366f1' : 'white',
            color: category === cat ? 'white' : '#64748b',
            fontWeight:600, cursor:'pointer', transition:'all .2s'
          }}>{cat}</button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))', gap:'1.5rem'
      }}>
        {filtered.map(p => (
          <div key={p.id} style={{
            border:'1px solid #e2e8f0', borderRadius:12, overflow:'hidden',
            background:'white', transition:'transform .2s, box-shadow .2s',
            cursor:'pointer'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}
          >
            <div
              onClick={() => navigate(`/product/${p.id}`)}
              style={{ height:180, background:'#f8fafc', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5rem' }}
            >{p.emoji}</div>
            <div style={{ padding:'1rem' }}>
              <div style={{ fontSize:'.75rem', color:'#6366f1', fontWeight:600, textTransform:'uppercase' }}>{p.category}</div>
              <div style={{ fontWeight:600, fontSize:'1rem', margin:'.25rem 0' }}>{p.name}</div>
              <div style={{ color:'#f59e0b', marginBottom:'.5rem' }}>{'★'.repeat(Math.floor(p.rating))} {p.rating}</div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div>
                  <span style={{ fontWeight:700, fontSize:'1.2rem', color:'#6366f1' }}>${p.price}</span>
                  <span style={{ color:'#94a3b8', textDecoration:'line-through', marginLeft:'.5rem', fontSize:'.85rem' }}>${p.oldPrice}</span>
                </div>
                <button onClick={() => addToCart(p)} style={{
                  background:'#6366f1', color:'white', border:'none',
                  borderRadius:8, padding:'.5rem 1rem', fontWeight:600, cursor:'pointer'
                }}>Add +</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}