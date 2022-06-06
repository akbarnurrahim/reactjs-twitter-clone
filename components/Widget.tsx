import { SearchCircleIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
function Widget() {
  return (
    // pencarian

    <div className=" col-span-2 mt-2 hidden px-2 lg:inline">
        <div className="mt-2 flex items-center space-x-2 
         rounded-full bg-gray-100 p-3">
       
        <SearchIcon className="h-8 w-8 text-gray-400"/>
        <input className="bg-transparent outline-none"
         type="text" 
         placeholder="Search Twitter"></input>
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{height: 400}}
        />
        
        
    </div>
  )
}

export default Widget