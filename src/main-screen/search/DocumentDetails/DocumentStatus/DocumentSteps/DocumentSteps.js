import styles from './DocumentSteps.module.css';
import { FiCheck, FiX } from "react-icons/fi";

export default function DocumentSteps(){
    //box-shadow: 0 0 0 5px green;
    return <>
    <div className={styles.stepperWrapper}>
      <div className={styles.stepperItem+' '+styles.completed}>
        <div className={styles.stepCounter}><FiCheck size="1em" color="#4bb543"/></div>
        <div className={styles.stepName}>Canonical Document Received</div>
      </div>
      <div className={styles.stepperItem+' '+styles.completed}>
        <div className={styles.stepCounter}><FiCheck size="1em" color="#4bb543"/></div>
        <div className={styles.stepName}>Canonical Transformed to SAP Format</div>
      </div>
      <div className={styles.stepperItem}>
        <div className={styles.stepCounter}><FiCheck size="1em" color="#4bb543"/></div>
        <div className={styles.stepName}>Sending Document to SAP</div>
      </div>
      <div className={styles.stepperItem+' '+styles.active}>
        <div className={styles.circleRed+' '+styles.stepCounter}><FiX size="1em" color="red"/></div>
        <div className={styles.stepName}>Canonical Document Processing</div>
      </div>
      <div className={styles.stepperItem}>
        <div className={styles.circleGrey+' '+styles.stepCounter}></div>
        <div className={styles.stepName}>Canonical Document Review</div>
      </div>
    </div>
    </>
}