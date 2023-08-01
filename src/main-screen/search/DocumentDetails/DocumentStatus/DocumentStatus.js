import DocumentSteps from "./DocumentSteps/DocumentSteps"
import AgGrid from "../../../ag-grid/AgGrid";
import styles from './DocumentStatus.module.css'

export default function DocumentStatus(){

    const columnDefs = [
        {
            field:"Time Received",
            valueGetter: params => params.data.timeReceived,
            width:450
        },
        {
            field:"State",
            valueGetter: params => params.data.state,
            width:450
        },
        {
            field:"Document Content",
            valueGetter: params => params.data.documentContent,
            width:400
        }
    ];

    const data = [
        {
            timeReceived : new Date(),
            state: 'Order Response Document Received From SAP',
            documentContent: 'Order_jds.xml 0'
        },
        {
            timeReceived : new Date(),
            state: 'Order Response Document Received From SAP 1',
            documentContent: 'Order_jds.xml 1'

        },
        {
            timeReceived : new Date(),
            state: 'Order Response Document Received From SAP 2',
            documentContent: 'Order_jds.xml 2'
        }
    ]

    return <div className={styles.documentNumb}>
                <DocumentSteps />
                <AgGrid data={data} columnDefs={columnDefs}/>
            </div>

}