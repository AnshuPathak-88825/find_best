import React from 'react'

type Props = {}

const HomePageOverview = (props: Props) => {
    return (
        <div className='  h-[90vh] flex justify-center items-center'>
            <div className='flex-col'><div className="font-mono	 m-6 text-4xl font-bold tracking-tight text-center ">Welcome to FindBest!</div>
                <div className='text-3xl font-bold tracking-tight text-center text-muted-foreground m-6 '>
                    Discover a world of products at your fingertips. Our platform is designed to help you find,
                    compare, and save on the items you need, from multiple sources all in one place.
                </div></div>



        </div>
    )
}

export default HomePageOverview