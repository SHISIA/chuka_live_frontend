import React, { useEffect, useRef, useState } from "react";
import CommentPreview from "./CommentPreview";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IconButton from "@mui/material/IconButton";
import { UUID } from "crypto";
import { Avatar, CardMedia } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WaveSurfer from "wavesurfer.js";
import Waveform from "./Waveform";
interface PostProps {
    username: string;
    avatar: string;
    course: string;
    courseId: UUID;
    bookmarked: boolean;
    postImage: string;
    timestamp: string;
    description: string;
    isVideo: boolean;
    isImage: boolean;
    isYoutubeUrl: boolean;
    isTextOnly: boolean;
    isMapUrl: boolean;
    mapUrl: boolean;
    isAudioUrl: boolean;
    audioUrl: string;
}

const Post: React.FC<PostProps> = ({ username, avatar, course, courseId, bookmarked, postImage,
    timestamp, description, isVideo, isImage, isYoutubeUrl, isTextOnly, isMapUrl, isAudioUrl, audioUrl }) => {
    const [isCommenting, setIsCommenting] = useState(false)
    const maxChars = 30;
    const truncatedText = course.length > maxChars
        ? course.substring(0, maxChars) + "..."
        : course;
    const maxCharsDescription = isTextOnly ? 1000 : 300;
    const truncatedTextDescription = description.length > maxCharsDescription
        ? description.substring(0, maxCharsDescription) + "..."
        : description;


    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Event listeners to track play/pause status
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handlePause);

        // Clean up event listeners on component unmount
        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handlePause);
        };
    }, []);


    return (
        <>

            {/* post item */}
            <div className="relative m-auto flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md max-w-md">
                {/* Top Avatar area */}
                <div className="post m-2 grid grid-cols-2 justify-between mx-4">
                    <div>
                        <Avatar src={avatar}></Avatar>
                        <div className="grid grid-cols-1 place-items-start">
                            <p className="text-gray-700">{username}</p>
                            <p className="text-gray-500 text-sm ">{truncatedText}</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-end justify-center items-end">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>

                    </div>
                </div>
                <p className="text-sm text-justify m-4 text-gray-500">{truncatedTextDescription}</p>
                {!isTextOnly && (
                    <a className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl" href="#">
                        {isVideo && (
                            <CardMedia className="object-cover"
                                component="video"
                                src={postImage}
                                controls // This enables video playback controls
                                autoPlay={false} // Optional: prevent autoplay on page load
                                loop={false} // Optional: set to true if you want the video to loop
                                muted={false} // Optional: set to true to mute the video initially
                                height="200" // Adjust height to fit your design
                            />
                        )}
                        {isImage && (
                            <CardMedia className="object-cover"
                                component="img"
                                src={postImage}
                                loading="lazy"
                            />
                        )}
                        {isYoutubeUrl && (
                            <div className="w-full h-[200px]">
                                <iframe
                                    src={postImage}
                                    title="YouTube Video"
                                    height="200"
                                    width="100%"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="object-cover"
                                    style={{ border: "none" }}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        {isMapUrl && (
                            <div className="w-full h-[200px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9053499076824!2d-122.08424968527321!3d37.4219997798235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2c34c577%3A0x5468f2f3d23ec3c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1609968505410!5m2!1sen!2sus" // Example location (Google HQ)
                                    title="Map View"
                                    height="200"
                                    width="100%"
                                    allowFullScreen
                                    className="object-cover"
                                    style={{ border: "none" }}
                                    loading="lazy"
                                />
                            </div>
                        )}

                        {isAudioUrl && (
                            <div className="audio-card w-full flex flex-col items-center gap-5">
                                <CardMedia
                                    component="img"
                                    src={isPlaying ? "../images/audio_wave.gif" : "../images/audio.png"}
                                    alt="Audio Waveform"
                                    loading="lazy"
                                    sx={{ height: "80px", width: "100px" }}
                                />
                                <audio ref={audioRef} controls src={audioUrl} id="audio-player">
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        )}

                    </a>
                )}
                <p className="text-gray-500 text-sm italic text-start mx-4 mt-4">Posted {timestamp}</p>

                <div className="mt-0 px-4 pb-2 flex items-center justify-between ">
                    <div className="flex items-center gap-0">
                        <IconButton>
                            <FavoriteIcon fontSize="medium" sx={{ fill: "#FFFFFF00", stroke: "grey", cursor: "pointer" }} />
                        </IconButton>
                        <IconButton onClick={() => setIsCommenting(!isCommenting)}>
                            <img src="../images/chat.png" className="w-6" />
                        </IconButton>
                        <IconButton>
                            <ShareIcon sx={{ fill: "grey" }} />
                        </IconButton>
                    </div>
                    <IconButton>
                        <TurnedInNotIcon />
                    </IconButton>
                </div>
                {/* this is the comments holder */}
                <div>
                    {/* <CommentPreview avatar="../images/medium.webp" username="Shisia" timestamp="Just now" commentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" /> */}

                    {/* <Comment avatar="../images/medium.webp" username="Shisia" timestamp="Just now" commentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/> */}
                    {/* this is the comment box  */}
                    {isCommenting && (
                        <form>
                            <div className=" mb-4 border border-gray-400 rounded-lg bg-gray-50 m-4">
                                <div className="px-4 py-2 bg-white rounded-t-lg border-gray-500">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0   dark:placeholder-gray-400 outline-none focus:ring-0" placeholder="Write a comment..." required ></textarea>
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 border-t ">
                                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-zinc-500 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-zinc-700">
                                        Post comment
                                    </button>
                                    <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                                        <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                            </svg>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                        <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                            <span className="sr-only">Set location</span>
                                        </button>
                                        <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                            </svg>
                                            <span className="sr-only">Upload image</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="m-4">
                                <p className="m-4 ms-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-black hover:underline">Community Guidelines</a>.</p>
                            </div>
                        </form>
                    )}
                </div>
            </div></>
    )
};

export default Post;