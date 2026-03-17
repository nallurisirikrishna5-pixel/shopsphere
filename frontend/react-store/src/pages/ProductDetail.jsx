import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <div style={{ padding:'2rem' }}>Product not found</div>

  return (
    <div style={{ maxWidth:800, margin:'3rem auto', padding:'0 2rem' }}>
      <button onClick={() => navigate(-1)} style={{
        background:'none', border:'1px solid #e2e8f0', borderRadius:8,
        padding:'.5rem 1rem', cursor:'pointer', marginBottom:'2rem', color:'#64748b'
      }}>← Back</button>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center' }}>
        <div style={{
          background:'#f8fafc', borderRadius:16, height:300,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'8rem'
        }}>{product.emoji}</div>

        <div>
          <div style={{ color:'#6366f1', fontWeight:600, fontSize:'.85rem', textTransform:'uppercase', marginBottom:'.5rem' }}>{product.category}</div>
          <h1 style={{ fontSize:'2rem', fontWeight:700, marginBottom:'1rem' }}>{product.name}</h1>
          <div style={{ color:'#f59e0b', fontSize:'1.1rem', marginBottom:'1rem' }}>{'★'.repeat(Math.floor(product.rating))} {product.rating} rating</div>
          <p style={{ color:'#64748b', lineHeight:1.7, marginBottom:'1.5rem' }}>
            Premium quality {product.name} with outstanding features and durability. 
            Trusted by thousands of customers worldwide.
          </p>
          <div style={{ marginBottom:'1.5rem' }}>
            <span style={{ fontSize:'2rem', fontWeight:700, color:'#6366f1' }}>${product.price}</span>
            <span style={{ color:'#94a3b8', textDecoration:'line-through', marginLeft:'.75rem' }}>${product.oldPrice}</span>
            <span style={{ background:'#dcfce7', color:'#16a34a', padding:'.25rem .75rem', borderRadius:99, fontSize:'.85rem', fontWeight:600, marginLeft:'.75rem' }}>
              {Math.round((1 - product.price/product.oldPrice)*100)}% OFF
            </span>
          </div>
          <button onClick={() => { addToCart(product); navigate('/cart') }} style={{
            background:'#6366f1', color:'white', border:'none', borderRadius:10,
            padding:'1rem 2rem', fontSize:'1rem', fontWeight:600, cursor:'pointer', width:'100%'
          }}>Add to Cart 🛒</button>
        </div>
      </div>
    </div>
  )
}