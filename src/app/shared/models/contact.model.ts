import { Comment } from "./comment.model";
import { Deserializable } from "./deserializable.model";

export class Contact implements Deserializable{
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  profession: string;
  phone: string;
  sellingProject: boolean;
  owner: boolean;
  ambassador: boolean;
  children: number;
  ownerSince: string;
  comment: Comment;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
