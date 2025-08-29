import { Mobile } from "../entities/Mobile.entitie"

export interface IMobileRepository {
  getAllMobiles(): Promise<Mobile[]>
  create(data: Mobile): Promise<Mobile>
}