import { Splitwise } from "splitwise";

export class SMSApiService {
  /**
   *
   */
  public splitwise: any;
  public constructor() {
    this.splitwise = new Splitwise({});
  }
}
