import "./styles.scss";
import Mark from "./images/avatar-mark-webber.webp";
import Angela from "./images/avatar-angela-gray.webp";
import Jacob from "./images/avatar-jacob-thompson.webp";
import Rizky from "./images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./images/avatar-kimberly-smith.webp";
import Nathan from "./images/avatar-nathan-peterson.webp";
import Anna from "./images/avatar-anna-kim.webp";
import Chess from "./images/image-chess.webp";
import { useState } from "react";

function App() {
  const [notification, setNotification] = useState(3);
  const handleClick = () => {
    const unreadNotes = document.querySelectorAll(".notification.unread");
    unreadNotes.forEach((note) => {
      note.classList.remove("unread");
    });
    setNotification("0");
  };

  return (
    <div className="App">
      <header>
        <h1>
          Notifications <span>{notification}</span>
        </h1>
        <button onClick={handleClick}>Mark all as read</button>
      </header>
      <main>
        <ul id="notifications">
          <li className="notification unread">
            <div className="left">
              <img src={Mark} alt="Mark" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Mark Webber
                </a>{" "}
                reacted to your recent post{" "}
                <a href="/" id="tournament">
                  My first tournament today!
                </a>{" "}
                <span className="dot"></span>
              </p>
              <p className="time">1m ago</p>
            </div>
          </li>
          <li className="notification unread">
            <div className="left">
              <img src={Angela} alt="Angela" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Angela Gray
                </a>{" "}
                followed you <span className="dot"></span>
              </p>
              <p className="time">5m ago</p>
            </div>
          </li>
          <li className="notification unread">
            <div className="left">
              <img src={Jacob} alt="Jacob" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Jacob Thompson
                </a>{" "}
                has joined your group{" "}
                <a href="/" className="group">
                  Chess Club
                </a>
                <span className="dot"></span>
              </p>
              <p className="time">1 day ago</p>
            </div>
          </li>
          <li className="notification">
            <div className="left">
              <img src={Rizky} alt="Rizky" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Rizky Hasanuddin
                </a>{" "}
                sent you a private message
              </p>
              <p className="time">5 days ago</p>
              <p className="message">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </li>
          <li className="notification">
            <div className="left">
              <img src={Kimberly} alt="Kimberly" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Kimberly Smith
                </a>{" "}
                commented on your picture
              </p>
              <p className="time">1 week ago</p>
            </div>
            <div className="img-wrapper">
              <img src={Chess} alt="Chess" />
            </div>
          </li>
          <li className="notification">
            <div className="left">
              <img src={Nathan} alt="Nathan" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Nathan Peterson
                </a>{" "}
                reacted to your recent post{" "}
                <span className="post">
                  5 end-game strategies to increase your win rate
                </span>
              </p>
              <p className="time">2 weeks ago</p>
            </div>
          </li>
          <li className="notification">
            <div className="left">
              <img src={Anna} alt="Anna" />
            </div>
            <div className="right">
              <p>
                <a href="/" className="name">
                  Anna Kim
                </a>{" "}
                left the group <span className="group">Chess Club</span>
              </p>
              <p className="time">2 weeks ago</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
