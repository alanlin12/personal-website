import './BobaName.css'

// Your name with three tapioca "boba" pearls bobbing around it.
// Whatever goes between <BobaName> and </BobaName> arrives here as `children`.
export default function BobaName({ children }) {
  return (
    <h1 className="name boba-name">
      {children}
      <span className="boba boba-1" aria-hidden="true" />
      <span className="boba boba-2" aria-hidden="true" />
      <span className="boba boba-3" aria-hidden="true" />
    </h1>
  )
}
