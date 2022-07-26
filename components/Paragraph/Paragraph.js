import styles from "./Paragraph.module.scss";

export default function Paragraph({title, content}) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
