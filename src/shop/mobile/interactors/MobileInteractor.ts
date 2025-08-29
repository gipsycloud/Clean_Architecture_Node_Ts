import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { IMobileInterface } from "../interfaces/IMobileInterface";
import { IMobileRepository } from "../interfaces/IMobileRepository";

@injectable()
export class MobileInteractor implements IMobileInterface {
  constructor(
    @inject(INTERFACE_TYPE.MobileRepository) private repository: IMobileRepository

  ) {
    this.repository = repository

  }

  getAllMobiles() {
    return this.repository.getAllMobiles()
  }

  onCreateMobile(input: any) {
    return this.repository.create(input)
  }
}