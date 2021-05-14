import { Comment } from "./comment.model";
import { Deserializable } from "./deserializable.model";

export class Viewing implements Deserializable{
  id: string;
  content: string;
  comment: Comment;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
