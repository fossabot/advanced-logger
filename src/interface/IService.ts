import IDestructable from "./IDestructable";
import ILog from "./ILog";

export default interface IService extends IDestructable {
    /**
     * Implement direct communication with API or SDK
     */
    sendAllLogs(logs: ILog[]): Promise<any>;

    /**
     * Implement the final processing of logs before sending it directly to the endpoint
     */
    preparePayload(logs: ILog[]): Promise<any>;
}
