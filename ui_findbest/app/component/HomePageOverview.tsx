import React from 'react'

type Props = {}

const HomePageOverview = (props: Props) => {
    return (
        <div className='border-2 border-red-400 h-[90vh] flex-col justify-center items-center '>
            <h2 className="my-6 text-4xl font-bold tracking-tight text-center ">Welcome to FindBest!</h2>
            <div className='text-3xl font-bold tracking-tight text-center text-muted-foreground my-6 '>
                Discover a world of products at your fingertips. Our platform is designed to help you find,
                compare, and save on the items you need, from multiple sources all in one place.
            </div>


        </div>
    )
}

export default HomePageOverview