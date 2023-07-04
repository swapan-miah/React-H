import style from "../card.module.css";
import User from "./User";

const data = new Date();
const dataName = data.getDate();
const monthName = data.getMonth();
const currentYear = data.getFullYear();

var todoTitle = "Ismail";
var todoDesc = "React Practice";

function Card({ titleText, descText }) {
  return (
    <div>
      <div className={style.card}>
        <h3 className={style.cardTitle}>{titleText}</h3>
        <p className={style.cardDesc}>{descText}</p>
        <p className={style.cardFooter}>
          {dataName + "/" + monthName + "/" + currentYear}
        </p>
      </div>
      <User />
    </div>
  );
}

export default Card;
