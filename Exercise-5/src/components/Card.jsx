export default function Card({card}) {
    return (
        <div className = "card">
            <img src={card.image.src} alt={card.image.alt} />
            <h2>{card.title}</h2>
            <p>From: <strong>{card.from}</strong></p>
        </div>
    )
}