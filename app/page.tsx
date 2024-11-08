"use client";  // Add this at the top of the file
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import StoryCard from './components/StoryCard';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/global.css';
import { useRouter } from 'next/navigation';
import Footer_Content from './components/Footer_Content';
import WorkWithUs from './components/WorkWithUs';
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();


  return (
    <div
      className="max-w-7xl p-4 mx-auto text-center items-center content-center h-full border isolate " style={{ backgroundColor: "#F5F5F5" }}>
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">

        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto  aspect-[1155/678] w-[72.1875rem] h-max bg-gradient-to-tr from-[#f89b9b] to-[#1505f7] opacity-50"
        />

        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />


      </div>
      {/* web menu */}
      <div className="hidden lg:flex space-x-8 content-center justify-center text-center">
        <Typography className='cursor-pointer'>
          Campus Stories
        </Typography>
        <Typography className='cursor-pointer'>
          Know Your School
        </Typography>
        <Typography className='cursor-pointer'>
          Talk to Us
        </Typography>
        <Typography className='cursor-pointer'>
          Login
        </Typography>
      </div>

      {/* menu */}
      <div onClick={() => setIsVisible(!isVisible)} className="lg:hidden flex w-10/12  flex-row justify-end content-end items-end  m-auto absolute right-10">
        <MenuIcon className='cursor-pointer' />
      </div>

      {/* Phone menu */}
      {isVisible && (
        <div className="lg:hidden  flex flex-col space-y-2  text-start bg-white w-40 rounded-xl p-4 m-auto absolute right-10 top-12">
          <Typography className='cursor-pointer'>
            Campus Stories
          </Typography>
          <Typography className='cursor-pointer'>
            Know Your School
          </Typography>
          <Typography className='cursor-pointer'>
            Talk to Us
          </Typography>
          <Typography className='cursor-pointer'>
            Login
          </Typography>
        </div>
      )}

      <div className="hidden lg:flex space-x-8 content-center justify-center text-center">
        <div className="w-10/12 flex flex-col justify-end content-end">
          <CardMedia
            component="img"
            // className="w-32 h-96" // Adjust to ensure it fits within the div
            image="../images/illustrated-people-with-social-network.png"
            alt="illustrated social network"
          />
          <img className='w-20 m' src='../images/shush.png' />
        </div>
        <p className="sm:font-normal lg:font-bold text-5xl text-black text-center tracking-wide mt-28 leading-none">
          Bringing your campus experience online:<br />
          Right to your <br />
          <span className="text-yellow-400">Fingertips.</span>
        </p>
        <div className="w-10/12 flex flex-col justify-end content-end items-center">
          <img className='w-12 m' src='../images/voice.png' />
          <CardMedia
            component="img"
            // className="w-32 h-96" // Adjust for the second image as well
            image="../images/sitting_students.png"
            alt="sitting_students"
          />
        </div>
      </div>

      {/* mobile view welcome */}
      <div className="lg:hidden sm:-mt-20 flex flex-col space-x-8 content-center justify-center text-center">
        <div className="w-10/12 sm:flex flex-col justify-end content-end">
          <CardMedia
            component="img"
            className="opacity-30 -z-50" // Adjust to ensure it fits within the div
            image="../images/illustrated-people-with-social-network.png"
            alt="illustrated social network"
          />

        </div>
        <p className="font-bold text-5xl text-black text-center tracking-wide -mt-48 sm:-mt-80 leading-none">
          Bringing your campus<br /> experience online:<br />
          Right to your <br />
          <span className="text-yellow-400">Fingertips.</span>
        </p>
        <div className="w-10/12 flex flex-row justify-center content-center items-center sm:-mt-44 -mt-24">
          <img className='w-20 opacity-65' src='../images/shush.png' />
          <CardMedia
            component="img"
            className="opacity-30 -z-50" // Adjust for the second image as well
            image="../images/sitting_students.png"
            alt="sitting_students"
          />
        </div>
      </div>

      <Button sx={{
        backgroundColor: "black", width: "300px", height: "50px", marginTop: "2", fontWeight: "bold", color: "white", fontSize: "22px", borderRadius: "10px", borderColor: "black"
        , border: '2px solid transparent', // Initial transparent border
        '&:hover': {
          border: '2px solid black', // Border on hover (using hex for gray-900 color)
        },
      }} className='hover:bg-white hover:text-black 
      hover:border-t-2 hover:border-black sm:-mt-6' onClick={()=> router.push('/login')} >
        Get Started
      </Button>
      <p className="font-bold text-4xl mt-10">Build  up the community</p>

      {/* Build up the community */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center mt-10 content-center items-center">

        {/* connect */}
        <Card sx={{
          maxWidth: 345, borderRadius: "12px"
        }}
        //  className="lg:h-auto sm:h-72" // Adjusts to 'h-56' only on small screens
        >
          <CardMedia
            component="img"
            height="140"
            image="../images/student_meetup.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Connect
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Share your ideas, experiences, progress, and strategies with the community to inspire and support. Celebrate achievements, seek advice, and exchange insights,  connect with peers eager to learn and collaborate.
            </Typography>
          </CardContent>
        </Card>

        {/* Meet */}
        <Card sx={{
          maxWidth: 345, borderRadius: "12px"
        }}>
          <CardMedia
            component="img"
            height="140"
            image="../images/meeting_students.webp"
            alt="meet people"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Meet
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Meet new people through our dynamic features, including location sharing, event organization, and meetups. Whether you're attending a university event, joining a local gathering, or just looking to connect with others nearby
            </Typography>
          </CardContent>
        </Card>

        {/* Be heard */}
        <Card sx={{
          maxWidth: 345, borderRadius: "12px"
        }}>
          <CardMedia
            component="img"
            height="140"
            image="../images/heard.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Be Heard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Share your voice with the campus community. Whether it’s through curated posts, anonymous stories, or creative pieces, let your experiences and ideas find a space to be heard. Inspire, connect, and make your story part of something bigger
            </Typography>
          </CardContent>
        </Card>
        {/* </div> */}


        {/* Buid community continuation */}
        {/* <div className='grid grid-cols-3 content-center justify-center text-center mt-10' > */}
        {/* connect */}
        <Card sx={{
          maxWidth: 345, borderRadius: "12px"
        }}>
          <CardMedia
            component="img"
            height="140"
            image="../images/announce.jpg"
            alt="Image by Gerd Altmann from Pixabay"
          />
          {/* Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8813927">Gerd Altmann</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8813927">Pixabay</a> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Announce
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Announce your meetups, share your location, and organize events on campus! Whether it's study groups, club activities, or casual gatherings, make it easy for everyone to join and connect. Start announcing and watch your campus community grow!
            </Typography>
          </CardContent>
        </Card>

        {/* Info */}
        <Card sx={{
          maxWidth: 345, borderRadius: "12px", backgroundColor: 'rgba(255, 255, 255, 0)', // Full transparency
          boxShadow: 'none', // Ensures no shadow effect overrides transparency
          marginTop: "5%", color: "#7C7C7C"
        }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              From academic resources to the latest events, we bring your entire campus experience online, making it
              easier than ever to stay informed, engaged, and inspired. Join us today and be part of the conversation that shapes your university life!
            </Typography>
          </CardContent>
        </Card>

        {/* Be heard */}
        <Card sx={{
          maxWidth: 345, borderRadius: "12px"
        }}>
          <CardMedia
            component="img"
            height="140"
            image="../images/speak.jpg"
            alt="microphone "
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Speak
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Use your voice to connect! Share pre-recorded voice messages with the community, whether it's a thought, an idea, or just something on your mind. Let your words be heard in a way that feels real and personal.
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Popular stories */}
      <div className='flex flex-col lg:flex-row space-x-0 content-center justify-center text-start mt-10 ml-2' >
        <Typography gutterBottom variant="h4" component="div">
          Popular Stories
        </Typography>
        {/*Actual story items */}
        <div className='flex flex-row space-x-4 content-center justify-start text-start ml-1  overflow-x-auto whitespace-nowrap h-fit py-5 items-center '>
          {/* arrow nav button */}
          {/* <Button style={{backgroundColor:"white",border:".1px solid grey",borderRadius:""}}>
            <KeyboardArrowLeftIcon style={{ height: "60px", width: "60px" }} />
          </Button> */}
          {/* story cards */}
          <div className='flex space-x-8 content-center justify-start text-start mt-1 ml-2 overflow-x-auto whitespace-nowrap h-fit py-5 custom-scrollbar'>
            <StoryCard
              image="/images/horizon.jpeg"
              title="Speak"
              description="Use your voice to connect! Share pre-recorded voice messages with the community, whether it's a thought, an idea, or just something on your mind. Let your words be heard in a way that feels real and personal."
            />
            <StoryCard
              image="/images/flower.jpeg"
              title="Connect"
              description="Join hands, share experiences, and be part of a thriving community."
            />
            <StoryCard
              image="/images/tree.jpeg"
              title="Grow"
              description="Learn, grow, and thrive together with like-minded individuals in our community."
            />
          </div>

        </div>
      </div>

      <div>
      <WorkWithUs />
      </div>
      <div>
      <Footer_Content />
      </div>
    </div>
  );
}
