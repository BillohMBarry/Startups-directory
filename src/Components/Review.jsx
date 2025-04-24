
function Review({startupReview}) {
    return (
        <>
            <div className='border rounded-md m-3 p-6'>
                <div className='flex justify-between mt-3'>
                    <h4 className="font-bold text-gray-800">{startupReview.author}</h4>
                    <span>{startupReview.rating}</span>
                </div>
                <p className="text-xl mb-3 text-gray-800 text-medium sm:text-lg">{startupReview.comment}</p>
                <span className="font-bold">{startupReview.createdAt}</span>
            </div>      
        </>
    )
}

export default Review
