import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    HomeIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    CollectionIcon,
    MailIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'


function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col item-center px-4 md:items-start">
        <img className="m-3 h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="react"></img>
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notification"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/> 
        <SidebarRow Icon={UserIcon} title="Sign"/> 
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/> 
    </div>
  )
}

export default Sidebar