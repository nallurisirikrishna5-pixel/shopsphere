import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, totalItems, totalPrice } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) return (
    <div style={{ textAlign:'center', padding:'5rem 2rem' }}>
      <div style={{ fontSize:'5rem', marginBottom:'1rem' }}>🛒</div>
      <h2 style={{ fontSize:'1.5rem', marginBottom:'.5rem' }}>Your cart is empty</h2>
      <p style={{ color:'#64748b', marginBottom:'2rem' }}>Add some products to get started</p>
      <button onClick={() => navigate('/')} style={{
        background:'#6366f1', color:'white', border:'none',
        borderRadius:10, padding:'1rem 2rem', fontWeight:600, cursor:'pointer', fontSize:'1rem'
      }}>Continue Shopping →</button>
    </div>
  )

  return (
    <div style={{ maxWidth:800, margin:'3rem auto', padding:'0 2rem' }}>
      <h1 style={{ fontSize:'2rem', fontWeight:700, marginBottom:'2rem' }}>Shopping Cart ({totalItems()} items)</h1>

      <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{
            display:'flex', alignItems:'center', gap:'1.5rem',
            border:'1px solid #e2e8f0', borderRadius:12, padding:'1rem', background:'white'
          }}>
            <div style={{ fontSize:'3rem', background:'#f8fafc', borderRadius:8, padding:'1rem' }}>{item.emoji}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:600, fontSize:'1rem' }}>{item.name}</div>
              <div style={{ color:'#6366f1', fontWeight:700 }}>${item.price} × {item.qty}</div>
            </div>
            <div style={{ fontWeight:700, fontSize:'1.1rem' }}>${item.price * item.qty}</div>
            <button onClick={() => removeFromCart(item.id)} style={{
              background:'#fee2e2', color:'#ef4444', border:'none',
              borderRadius:8, padding:'.5rem .75rem', cursor:'pointer', fontWeight:600
            }}>✕</button>
          </div>
        ))}
      </div>

      <div style={{
        border:'1px solid #e2e8f0', borderRadius:12, padding:'1.5rem', background:'#f8fafc'
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1rem', fontSize:'1.1rem' }}>
          <span>Subtotal ({totalItems()} items)</span>
          <span style={{ fontWeight:700 }}>${totalPrice()}</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1.5rem', color:'#64748b' }}>
          <span>Shipping</span><span style={{ color:'#16a34a', fontWeight:600 }}>FREE</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:'1.3rem', fontWeight:700, marginBottom:'1.5rem', paddingTop:'1rem', borderTop:'1px solid #e2e8f0' }}>
          <span>Total</span><span style={{ color:'#6366f1' }}>${totalPrice()}</span>
        </div>
        <button style={{
          background:'#6366f1', color:'white', border:'none', borderRadius:10,
          padding:'1rem', fontSize:'1rem', fontWeight:600, cursor:'pointer', width:'100%'
        }}>Proceed to Checkout →</button>
      </div>
    </div>
  )
}