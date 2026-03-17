import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()
  return (
    <nav style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'1rem 2rem', borderBottom:'1px solid #e2e8f0',
      position:'sticky', top:0, background:'white', zIndex:100
    }}>
      <Link to="/" style={{ fontSize:'1.4rem', fontWeight:700, color:'#6366f1', textDecoration:'none' }}>
        🛒 ShopSphere
      </Link>
      <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
        <Link to="/" style={{ color:'#64748b', textDecoration:'none', fontWeight:500 }}>Home</Link>
        <Link to="/cart" style={{
          background:'#6366f1', color:'white', padding:'.5rem 1.2rem',
          borderRadius:'8px', textDecoration:'none', fontWeight:600
        }}>
          🛒 Cart ({totalItems()})
        </Link>
      </div>
    </nav>
  )
}