import { CustomerController } from "../controller/CustomerController";
import { CustomerRepository } from "../repository/CustomerRepository";

export const INTERFACE_TYPE = {
  CustomerRepository: Symbol.for("CustomerRepository"),
  CustomerController: Symbol.for("CustomerController")
}