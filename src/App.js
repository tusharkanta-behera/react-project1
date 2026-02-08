import "./App.css";
import Navbar from "./Components/Navbar.js";
import Card from "./Components/Card.js";
import Footer from "./Components/Footer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="cards-container">
        <Card
          title="Python Playlist"
          description="Learn Python programming from basics to advanced."
          link="https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
        />
        <Card
          title="HTML Playlist"
          description="Master the structure of web pages with HTML."
          link="https://www.youtube.com/playlist?list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s"
        />
        <Card
          title="CSS Playlist"
          description="Style your web pages beautifully using CSS."
          link="https://www.youtube.com/playlist?list=PL724pdDXl9Q396Alu_2_5dpB-X2OBHfiS"
        />
        <Card
          title="Bootstrap Playlist"
          description="Create responsive designs quickly with Bootstrap."
          link="https://www.youtube.com/playlist?list=PLu0W_9lII9agc3h4jAGGWrXbN4E6O1N2M"
        />
        <Card
          title="JavaScript Playlist"
          description="Add interactivity to your web pages with JavaScript."
          link="https://www.youtube.com/playlist?list=PLbtI3_MArDOnNvk8CCCSR01CQ8B8iNh-A"
        />
        <Card
          title="React JS Playlist"
          description="Build dynamic user interfaces with React JS."
          link="https://www.youtube.com/playlist?list=PLbtI3_MArDOm777bemDCy1abP1t1Rnnbx"
        />
        <Card
          title="Django Playlist"
          description="Develop robust web applications using Django."
          link="https://www.youtube.com/playlist?list=PLu0W_9lII9ah52GD5b7hC2kR1Y1b6m4pM"
        />
        <Card
          title="Flask Playlist"
          description="Create lightweight web applications with Flask."
          link="https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd"
        />
        <Card 
          title ="Coming Soon"
          description="More exciting playlists are on the way!"
          link ="#"
        />
      </div>
      <Footer />
    </>
  );
};
export default App;
