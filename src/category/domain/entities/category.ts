export type CategoryProperties = {
  name: string;
  is_active?: boolean;
  description?: string;
  created_at?: Date;
};
export class Category {
  constructor(public readonly props: CategoryProperties) {}
  get name(){
    return this.props.name
  }
  get description(){
    return this.props.description
  }
  get is_active(){
    return this.props.is_active
  }
  get created_at(){
    return this.props.created_at
  }
}


//create

//Entidades vs Entidades Anemicas
//TDD - Kent Beck

// Category : string name
// Category : string description
// Category : boolean is_active
// Category : date created_at
