import { React, useEffect } from 'react';
import CardMusic from '../../components/NavBar/card/CardMusic';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Grid } from '@mui/material';
import './Home.css';

import VintageJournal from "../../components/imgs/Vintage-journal.jpg"
import Spotify from "../../components/imgs/Spotify.jpg"
import Doodle from "../../components/imgs/Doodle.jpg"
import Movie from "../../components/imgs/Movie.jpg"
import Chat from "../../components/imgs/Chat.jpg"

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardMusic
            title="Find your Groove"
            description="Feeling down? Let music lift your spirits! Discover uplifting tunes tailored to your interests. Click here for your personalized playlist!"
            imageUrl={Spotify}
            buttonText={<SearchIcon />}
            location="/music"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardMusic
            title="Doodle Space"
            description="🎨 Unleash your creativity on a digital canvas! ✏️ Draw, erase, and get sketch ideas with ease. Click here to start your artistic adventure!"
            imageUrl={Doodle}
            buttonText="Open Canvas"
            location="/canvas"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardMusic
            title="🎬 Discover Your Next Favorite Movie or Show 📺"
            description="Get personalized recommendations based on your chosen genre, language, and decade."
            imageUrl={Movie}
            buttonText="Get Recommendations"
            location="/movies"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardMusic
            title="My Personal Journal ✍️"
            description="Capture your thoughts, feelings, and moments with a touch of color and fun emojis! 🌈😊"
            imageUrl= { VintageJournal }
            buttonText="Start Writing..."
            location="/user/journal"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardMusic
            title="SoulPal 🤖"
            description="Your 24/7 companion for life's ups and downs 🌟. Whether you need advice, a listening ear, or just someone to talk to, SoulMate is here to support you through it all. 💬✨"
            imageUrl= { Chat }
            buttonText="Start Chatting"
            location="/chat"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
