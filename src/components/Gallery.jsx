import React, { useState } from 'react';
import './Gallery.css';

// Load all images from assets folder
const modules = import.meta.glob('../assets/*.{jpg,jpeg,png}', { eager: true });
const photos = Object.keys(modules)
  .filter(path => !path.includes('hero_bg.png') && !path.includes('hero.png'))
  .map(path => modules[path].default);

const captions = [
  "First Meet.Nervous Lagtesilo😅.But Somewhere I felt something in your eyes",
  "Tomar Phone E first Chobi tao abar amar department e. Kichuta distance maintain korei dariye achi.kmn jno voi ar anondo kaj kortesilo😚",
  "Ei j apni rickshaw mama k thamai diye ei chobi tultesilen😿rickshaw mama khuje apnake🤣",
  "Bro tmar chokh boro hoi na kno. AHA! Ki sundr abdar. Dekho chokh boro kore dekhacci😉",
  "The day i feel like I have to hold this hand..This hand is my trust place where i can rely myself on you🥰",
  "Amar ring amare porai boltese engagement hoi gese..Khoda!! ei banda re niye koi jaitam ami😌",
  "Kb sokh apnar chosmawali NOVAR..Dhoren etao apnar shokh puron kore dlam",
  "I didn't know what was happening with me that time..I chose to stay with you.",
  "Dekso 7 sagor 13 nodi par kore tomake dekte gesi..Tomar kopal valo..Huh!!!😁",
  "Evabe amar bag dhore thakbe..karon amar selfie age..erpor tumi😎",
  "Tomar jnno Dhakar rasta thele tomake welcome korte gesi...xoss ekta gf paiso bhai🏆",
  "The pictures tells everything. i should be your bf and you should be my gf..hihi",
  "Tomar oi bangles ami jotno kore as a memories raksi.hehe",
  
  "You are my home, my safe place jar kadhe math rekhe sob dukkho kosto vule jaite iccha kore..sotti ghum chole ase.hehe❤️ ",
  "My best day in my life. I needed that day",
  "Natto!! ektu tumio sundr aso..jao complimennt diye dsi",
  "Again it's my safe place. Maybe i feel safe, loved and no worries in life just beside with you🙃",
  "Best couple picture ever.My fav..My wallpaper too",
  "Mone ase ei quote ta tumi dsila amake..jkhn ami venge portam.eto distance kmne agabo..This boosts me to wait for you more.I really love you mahadi you can't ever imagine❤️",
  "Koto innocent chilam amra..mone hcche sedin e esb..Time flies",
  
];

export default function Gallery() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our <span className="gradient-text">Moments</span></h2>
        <p className="gallery-subtitle">Each memory holds a little love letter just for you...</p>
      </div>

      <div className="zigzag-container">
        {photos.map((photoSrc, index) => {
          const caption = captions[index % captions.length];
          const isEven = index % 2 === 0;
          const isOpen = openCard === index;

          return (
            <div key={index} className={`zigzag-row ${isEven ? 'row-normal' : 'row-reverse'}`}>
              {/* Photo */}
              <div className="zigzag-photo-wrapper">
                <img src={photoSrc} alt={`Memory ${index + 1}`} className="zigzag-photo" />
              </div>

              {/* Love Letter Card */}
              <div className={`love-letter-card ${isOpen ? 'open' : ''}`} onClick={() => toggleCard(index)}>
                <div className="letter-envelope-top"></div>
                <div className="letter-content">
                  {isOpen ? (
                    <>
                      <p className="letter-text">"{caption}"</p>
                      <p className="letter-sign"></p>
                    </>
                  ) : (
                    <div className="letter-closed-hint">
                      <span className="letter-seal">💌</span>
                      <p>Click to open your letter...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
