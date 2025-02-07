import { Owner } from "./owner"
import { Visit } from "./visit"
import { PetType } from "./pettype"
export interface Pet {
  id: number,
  name: string,
  birthDate: Date,
  type: PetType,
  typeName?: string,
  owner: Owner,
  visits: Visit[]
}
