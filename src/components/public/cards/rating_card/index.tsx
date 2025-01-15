

interface RatingProps{
    rating: number
}

export default function RatingCard({rating} : RatingProps){
    rating = Math.round(rating);
    return(
        <section className="flex flex-row p-1 w-fit border border-customWhite-variant2 rounded">
            <p>{"⭐".repeat(rating)}</p>
            <p className="grayscale">{"⭐".repeat(5 - rating)}</p>
        </section>
    )
}