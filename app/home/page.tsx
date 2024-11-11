"use client";
import { Avatar, Typography } from "@mui/material";
// import Comment from "../components/Comment";
import Post from "../components/Post";
import PollBox from "../components/PollBox";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect, useRef, useState, RefObject } from "react";
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HowToVoteOutlined from '@mui/icons-material/HowToVoteOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import UserProfileItem from "../components/BookmarkedPostItem";
import BookmarkedPostItem from "../components/BookmarkedPostItem";
import ToastNotification from "../components/ToastNotificationItem";

export default function Home() {
    const [isPostOpen, setIsPostOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const posts = [
        {
            username: "Shisia James",
            postImage: "https://c4.wallpaperflare.com/wallpaper/516/28/32/gtr-japan-nissan-car-wallpaper-preview.jpg",
            avatar: "../images/github.png",
            courseId: `1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed`,
            bookmarked: true,
            course: "Electrical Engineering"
        },
        {
            username: "Alex Johnson",
            postImage: "https://media.istockphoto.com/id/2150412924/photo/cozy-evening-in-a-camper-van-surrounded-by-nature.jpg?s=1024x1024&w=is&k=20&c=iRd8_IeP5XvHTQ4DpEd0be9OOW3k8ZLlWy_FxoGpDuo=",
            avatar: "../images/github.png",
            courseId: `c2a4f5d3-3fbb-4f60-8f68-5b8e293c7b57`,
            bookmarked: false,
            course: "Computer Science"
        },
        {
            username: "Linda Smith",
            postImage: "https://plus.unsplash.com/premium_photo-1698507574126-7135d2684aa2?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "../images/github.png",
            courseId: `d3c5e6a1-9a22-4d6b-bf3e-8f9a1e8a7b6c`,
            bookmarked: true,
            course: "Physics"
        },
        {
            username: "Michael Brown",
            postImage: "https://media.istockphoto.com/id/1605050968/photo/mother-and-son-enjoying-a-carefree-autumn-day-in-nature.jpg?s=1024x1024&w=is&k=20&c=Pd87czg0byO6lULCtjGK_kgDrX39QdgOg4F-84Krggk=",
            avatar: "../images/github.png",
            courseId: `e4b3d7b2-5c88-4d5e-9a8e-3d7a2c8b7f8e`,
            bookmarked: false,
            course: "Mathematics"
        },
        {
            username: "Sarah Williams",
            postImage: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            avatar: "../images/github.png",
            courseId: `f5d4e8c3-6a99-4e7a-a4e9-4e9b3c7d9a8f`,
            bookmarked: true,
            course: "Chemistry"
        }
    ];

    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(wrapperRef);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsPostOpen(false); // Close post popup when menu is opened
    };

    const togglePost = () => {
        setIsPostOpen(!isPostOpen);
        setIsMenuOpen(false); // Close menu popup when post is opened
    };


    /**
       * Hook that closes popups if clicked outside of the passed refs
       */
    function useOutsideAlerter(...refs: RefObject<HTMLDivElement>[]) {
        useEffect(() => {
            function handleClickOutside(event: MouseEvent) {
                // Close if clicked outside both menu and post popups
                if (
                    refs.every(ref => ref.current && !ref.current.contains(event.target as Node))
                ) {
                    setIsMenuOpen(false);
                    setIsPostOpen(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [refs]);
    }

    const question = "Do you love the Lord your God with all your heart, soul, and spirit?";
    const answers = ["Yes, with all my heart!", "Sometimes", "Not really", "Unsure"];

    return (
        <div className="max-w-7xl p-0 mx-auto text-center flex flex-col items-center content-center h-full border isolate " style={{ backgroundColor: "#F5F5F5", borderColor: "#f5f5f5" }}>
            {/* search bar::top with account avatar and other menus */}
            <div className="bg-white flex flex-row justify-center items-center py-2 px-2  max-w-7xl fixed top-0 w-full z-10">
                <div className=" hidden sm:block md:flex items-center gap-2">
                    <img src="../images/logoschool.png" className="w-8 py-3 ml-3" />
                    <Typography style={{ textAlign: "center", fontSize: "17px" }}>Chuka Live</Typography>
                </div>

                <div className="min-w-[200px] max-w-96 m-auto ">
                    <div className="relative mt-2">
                        <div className="absolute top-1 left-1 flex items-center">
                            <button id="dropdownButton" className="rounded border border-transparent py-1 px-1.5 text-center flex items-center text-sm transition-all text-slate-600">
                                <span id="dropdownSpan" className="text-ellipsis overflow-hidden">Europe</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className="h-6 border-l border-slate-200 ml-1"></div>
                            <div id="dropdownMenu" className="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden bg-white border border-slate-200 rounded-md shadow-lg ">
                                <ul id="dropdownOptions">
                                    <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Europe">Events</li>
                                    <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Australia">Polls</li>
                                    <li className="px-4 py-2 text-slate-600 hover:bg-slate-5- text-sm cursor-pointer" data-value="Africa">Posts</li>
                                </ul>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Events,polls,posts..." />

                        <button className="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex gap-2 mr-4 ml-4 lg:gap-4">
                    {/* drop down post menu */}

                    <div className="relative inline-block text-left justify-center items-center ">
                        <button onClick={() => togglePost()}>
                            <AddCircleOutlineIcon fontSize="large" className=" cursor-pointer " />
                        </button>
                        {isPostOpen && (
                            <div ref={wrapperRef} className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                                <div className="py-2 px-3 flex flex-row justify-start items-center" role="none">
                                    {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                                    <PostAddOutlinedIcon fontSize="medium" className="font-medium h-8" />
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Create Post</a>
                                </div>
                                <div className="py-2 px-3 flex flex-row justify-start items-center" role="none">
                                    {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                                    <HowToVoteOutlined fontSize="medium" className="w-8 h-8" />
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Create Voting Poll</a>
                                </div>
                                <div className="py-2 px-3 flex flex-row justify-start items-center" role="none">
                                    {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                                    <MicNoneOutlinedIcon fontSize="medium" className="w-8 h-8" />
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Send Voice Recording</a>
                                </div>

                            </div>
                        )}
                    </div>


                    {/* Menu drop down on avatar click */}
                    <div className="relative inline-block text-left ">
                        <button onClick={() => toggleMenu()}>
                            <Avatar style={{ width: "35px", height: "35px", cursor: 'pointer' }}></Avatar>
                        </button>
                        {isMenuOpen && (<div ref={wrapperRef} className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-0">Home</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-1">Notifications</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">Marketplace</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-3">Favorites</a>
                            </div>
                            <div className="py-1" role="none">

                            </div>
                            <div className="py-1" role="none">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-4">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-5">My Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-5">Verify by Student ID</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-6">Log Out</a>

                            </div>
                            <div className="py-1" role="none">
                            </div>
                        </div>)}
                    </div>

                </div>


            </div>
            {/* https://youtu.be/PjaiWsNRHxE - link to first video post */}
            {/* main div to hold posts and settings */}
            <div className="mt-20 mx-auto flex justify-center max-w-7xl gap-10">
                {/* Left Notifications */}
                <div className="hidden sm:flow-root sticky top-20 h-96  xl:max-h-max p-4 max-w-md  bg-white rounded-lg border shadow-md mt-0">
                    <div className="flex justify-between items-start mb-4 min-w-72">
                        <h3 className="text-xl font-normal leading-none text-gray-900 ">Latest Notifications</h3>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>
                    </div>
                    <div className="flex flex-col h-72 overflow-y-auto min-w-max gap-5 p-2">
                        <ToastNotification imageUrl="https://cdn.theconversation.com/avatars/1286529/width238/Person_Hannibal_001.jpg" name="Banny" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " timestamp="yesterday" />
                        <ToastNotification
                            imageUrl="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                            name="Bonnie Green"
                            message="commented on your photo recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            timestamp="a few seconds ago"
                            onClose={() => console.log('Toast closed')}
                        />
                        <p className="font-normal text-center text-3xl mt-20 text-gray-400">No notifications</p>
                    </div>
                </div>

                {/* Posts Area - Scrollable */}
                <div className="flex flex-col mx-4 overflow-y-scroll h-auto justify-center items-center bg-chukaLiveLight gap-5">
                    <PollBox avatar="https://img.freepik.com/free-photo/beautiful-african-american-woman-cafe_273609-5355.jpg?semt=ais_hybrid" username="Amulavu Clo" question={question} answers={answers} course="Elcectircal Engineering" />
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            username={post.username}
                            // postImage={post.postImage}
                            postImage="https://youtube.com/embed/y-m3yjJTGa0"
                            avatar={post.avatar}
                            courseId={post.courseId}
                            bookmarked={post.bookmarked}
                            course={post.course}
                            timestamp="Now"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                            isImage={false}
                            isVideo={false}
                            isYoutubeUrl={false}
                            isTextOnly={false}
                            isMapUrl={false}
                            isAudioUrl={true}
                            audioUrl="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"
                        // dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        />
                    ))}

                </div>

                {/* Right Favotires pin tab */}
                <div className="hidden lg:block sticky top-20 max-h-96 p-4 max-w-md bg-white rounded-lg text-white mt-0">
                <div className="flex justify-between items-start mb-4 min-w-72">
                        <h3 className="text-xl font-normal leading-none text-gray-900 ">Latest Notifications</h3>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>
                    </div>
                    <div className="flex flex-col h-72 overflow-y-auto min-w-max gap-5 p-2">
                        <BookmarkedPostItem imageUrl="https://flowbite.com/docs/images/people/profile-picture-4.jpg" name="Paul Kate" faculty="Engineering" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
                        <BookmarkedPostItem imageUrl="https://flowbite.com/docs/images/people/profile-picture-4.jpg" name="Paul Kate" faculty="Engineering" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
                    </div>

                </div>
            </div>


        </div>
    )
}