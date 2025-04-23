
function Review({startupReview}) {
    return (
        <>
            <div className='border rounded-md m-3 p-6'>
                <div className='flex justify-between mt-3'>
                    <h4>{startupReview.author}</h4>
                    <span>{startupReview.rating}</span>
                </div>
                <p className="text-xl mb-3">{startupReview.comment}</p>
                <span>{startupReview.createdAt}</span>
            </div>      
        </>
    )
}

export default Review
