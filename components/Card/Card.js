import styles from "./Card.module.scss";
import Paragraph from "../Paragraph/Paragraph";

export default function Card({ car }) {

  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
  }

  const carInfo = {
    price: prettify(car.feedData.autoPrice),
    mileage: prettify(car.feedData.autoProbeg),
  };

  const engine = {
    volume: (car.feedData.equipmentVariantEngineCapacity / 1000).toFixed(1),
    power: car.feedData.equipmentVariantEnginePower,
    type: car.feedData.equipmentVariantFuelType,
  };

  const transmission = {
    type: car.feedData.equipmentVariantTransmission,
    typeName: car.feedData.equipmentVariantTransmissionType,
  };

  return (
    <div className={`col-8 m-3 ${styles.card}`}>
      <h2 className={styles.title}>
        {car.feedData.brandName +
          " " +
          car.feedData.modelName +
          (engine.volume > 0 ? ` ${engine.volume}` : ` ${engine.type}`) +
          " " +
          transmission.type}{" "}
        <span className={styles.year}>{car.feedData.modelYear}</span>
      </h2>
      <p className={styles.vin}>{car.vin}</p>
      <div className={styles.carusel}>
        {car.photobank.imgs.map((img) => (
          <img key={img.url} className={styles.img} src={img.url} />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.params}>
          <Paragraph
            title={"Двигатель"}
            content={`${engine.volume > 0 ? ` ${engine.volume} л  / ` : ""}${
              engine.power
            } лс / ${engine.type}`}
          />
          <Paragraph title={"КПП"} content={transmission.typeName} />
          <Paragraph title={"Пробег"} content={`${carInfo.mileage} км`} />
        </div>
        <div>
          <p className={styles.price}>{carInfo.price}</p>
          <button className={styles.buy}>Купить</button>
        </div>
      </div>
    </div>
  );
}
