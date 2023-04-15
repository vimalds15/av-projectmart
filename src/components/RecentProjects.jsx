import React, { useMemo } from 'react'
import { recentProjectsData } from '../mock/mockData'

const RecentProjects = () => {

  return (
    <div className='mt-10 border border-neutral-300 rounded-lg p-6'>
        <div className='flex justify-between'>
        <h2 className='font-semibold'>Recent Projects</h2>
        <h2 className='text-primary font-semibold cursor-pointer'>View all projects</h2>
        </div>
        <div className='flex mt-6 gap-4 justify-evenly flex-wrap'>
            <div className=''>
                <img src="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWce0k5XmT0oYgy1xdoRsioH_u5A" alt="Thumbnail" className='max-w-[250px] object-cover' />
                <p className='mt-2'>3d Website with Three.js | React</p>
                <p>Price: <span className='font-semibold'>$1200</span></p>
            </div>
            <div className=''>
                <img src="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWce0k5XmT0oYgy1xdoRsioH_u5A" alt="Thumbnail" className='max-w-[250px] object-cover' />
                <p className='mt-2'>3d Website with Three.js | React</p>
                <p>Price: <span className='font-semibold'>$1200</span></p>
            </div>
            <div className=''>
                <img src="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWce0k5XmT0oYgy1xdoRsioH_u5A" alt="Thumbnail" className='max-w-[250px] object-cover' />
                <p className='mt-2'>3d Website with Three.js | React</p>
                <p>Price: <span className='font-semibold'>$1200</span></p>
            </div>
        </div>
    </div>
  )
}

export default RecentProjects
