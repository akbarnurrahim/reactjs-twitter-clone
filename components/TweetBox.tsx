import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React from 'react'

function TweetBox() {
  return (
    <div>
        <img 
            className="h-14 rounded-full w-14 object-cover mt-4"
            src="https://dinaskebudayaan.jakarta.go.id/sim/assets/img/default-user.png"
            alt=""
        />

        <div>
            <form>
                <input type="text" placeholder="What's do you think?"></input>
                <div>
                    <div>
                        {/* {icons} */}
                        <SearchCircleIcon className="h-5 w-5 text-twitter"/>
                        <EmojiHappyIcon className="h-5 w-5 text-twitter"/>
                        <CalendarIcon className="h-5 w-5 text-twitter"/>
                        <LocationMarkerIcon className="h-5 w-5 text-twitter"/>
                    </div>

                    <button className="bg-twitter text-white rounded-full p-3"><span className="font-bold">Tweet</span></button>
                </div>

            </form>
            
        </div>
    </div>
  )
}

export default TweetBox