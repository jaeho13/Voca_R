import World from "./World"
import styles from "./Hello.module.css"

export default function Hello() {
    return (
        <div>
           <h1 style={
            {
                color: '#F00',
                borderRight: '2px solid #000',
                marginBottom: "50px",
                opacity: 1,
            }}
            >
            Hello
            </h1>
            <div className={styles.box}>Hello</div>
        </div>
    );
}