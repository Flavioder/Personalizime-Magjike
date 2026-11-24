import { CHRISTMAS_THEME_ENABLED } from "../../config/seasonalTheme.js";
import "../styles/ChristmasMarquee.css";

const messages = [
  "Gëzuar Krishtlindjet!",
  "Dhurata të personalizuara",
  "Dhuro një histori",
  "Kujtime që zgjasin përgjithmonë",
];

export default function ChristmasMarquee() {
  if (!CHRISTMAS_THEME_ENABLED) return null;

  return (
    <div className="christmas-marquee">
      <div className="christmas-marquee-window">
        <p className="christmas-marquee-static">Gëzuar Krishtlindjet!</p>

        <div className="christmas-marquee-track" aria-hidden="true">
          {[0, 1].map((group) => (
            <div className="christmas-marquee-group" key={group}>
              {messages.map((message) => (
                <span key={message}>
                  {message}
                  <span className="christmas-marquee-star">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
