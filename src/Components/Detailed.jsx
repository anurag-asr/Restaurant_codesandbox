export default function Detailed({ deliveryTime,name,minOrder,costForTwo}){
  return (
    <div>
        <h3>{name}</h3>
        <div>Cost ₹ {costForTwo} for two </div>
      <div>
        Min ₹ {minOrder} • Up to {deliveryTime} min
      </div>
    </div>
  )
}