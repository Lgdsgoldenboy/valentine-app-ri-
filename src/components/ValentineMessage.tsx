import { useState } from 'react';
import Confetti from 'react-confetti';
import '../style.css';

const ValentineMessage = () => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [showWords, setShowWords] = useState(false);

  const messages = [
    {
      text: "Will you be my Val For Life?",
      image: "/images/Image1.jpeg",
      video: "https://www.youtube.com/embed/Rj-sEu5pl1g?autoplay=1&mute=1",
    },
    {
      text: "Smile so bright she'd put the sun to shame...",
      image: "/images/Image2.jpeg",
      video: "https://www.youtube.com/embed/V9PVRfjEBTI?autoplay=1&mute=1", // Example video
    },
    {
      text: "She wakes me up to texts like 'Good morning love...'",
      image: "/images/Image6.jpeg",
      video: "https://www.youtube.com/embed/edg6bj2UG-k?autoplay=1&mute=1",
    },
    {
      text: "My imperfectly perfect Omalicha Nwa",
      image: "/images/Image7.jpeg",
      video: "https://www.youtube.com/embed/_Wfd547G_7E?autoplay=1&mute=1",
    },
    {
      text: "God gave me the free will to choose, so I choose you, every time, And I hope you choose me too.",
      video: "https://www.youtube.com/embed/YNr3t1vOv2M?autoplay=1&mute=1",
    },
    {
      text: "So, will you be my Valentine for life?",
      isFinalStep: true,
    },
  ];

  const words = [
    "I could spend eternity",
    "Listening to you",
    "Like a new symphony",
    "Your voice is the sweetest sound",
    "Your laughter like the jingle bells",
    "Your body my favourite bed",
    "It would take forever",
    "To love you right",
    "Cause every day",
    "I would find new ways to love your light",
    "Your smile, my joy",
    "Your laughter my happiness",
    "Your celebration, my heaven",
    "Your sorrows, my hell",
    "God gave me the gift of free will",
    "And I chose you every time",
    "Who wouldn't",
    "When everything I need, I found in you.",
    "PJ's words to my future wife ❣️",
  ];

  const handleClick = () => {
    if (!messages[step].isFinalStep) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleAnswer = (answer: "yes" | "no") => {
    setAnswer(answer);
    if (answer === "yes") {
      setShowWords(true);
    }
  };

  return (
    <div className="container">
      {!messages[step].isFinalStep ? (
        <div onClick={handleClick}>
          <h1>{messages[step].text}</h1>
          {messages[step].image && (
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={messages[step].image}
                alt="Valentine"
                style={{ maxWidth: '100%', borderRadius: '10px' }}
              />
              <div className="reflection"></div>
            </div>
          )}
          {messages[step].video && (
            <iframe
              width="560"
              height="315"
              src={messages[step].video}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '100%', marginTop: '20px' }}
            ></iframe>
          )}
          <p style={{ marginTop: '20px', cursor: 'pointer' }}>Click to continue...</p>
        </div>
      ) : (
        <div>
          <h1>{messages[step].text}</h1>
          {!answer && (
            <div style={{ marginTop: '20px' }}>
              <button
                onClick={() => handleAnswer("yes")}
                style={{ backgroundColor: '#4CAF50' }}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer("no")}
                style={{ backgroundColor: '#f44336' }}
              >
                No
              </button>
            </div>
          )}
          {answer && (
            <div style={{ marginTop: '20px' }}>
              <h2>You answered: {answer === "yes" ? "Yes! ❤️" : "No... 😢"}</h2>
              <div className="reaction">
                {answer === "yes" ? "🎊" : "😔"}
              </div>
              {answer === "yes" ? (
                <>
                  {showWords && (
                    <div style={{ marginTop: '20px' }}>
                      {words.map((line, index) => (
                        <p key={index} className="animated-text">{line}</p>
                      ))}
                    </div>
                  )}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/EBoX-wYhs-U?autoplay=1&mute=1"
                    title="Anything by 3T"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ maxWidth: '100%' }}
                  ></iframe>
                  <Confetti width={window.innerWidth} height={window.innerHeight} />
                </>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Uw5OLnN7UvM?autoplay=1&mute=1"
                  title="Just the Two of Us by Bill Withers"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ maxWidth: '100%' }}
                ></iframe>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ValentineMessage;
