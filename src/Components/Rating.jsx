export default function Rating({votes,reviews,rating}){
  return (
    <div>
      <div>{rating}</div>
      <div>{votes} votes </div>
      <div>{reviews} reviews </div>
    </div>
  )
}