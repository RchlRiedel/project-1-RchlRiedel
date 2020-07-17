
//The User model keeps track of users information.

export interface User {
    userId: number; // primary key
    username: string; // not null, unique
    password: string; // not null
    firstName?: string; // not null
    lastName?: string; // not null
    email: string; // not null
    role: string; // not null
    image?: string; //will be saving string of base-64 (how we encoded the image) 
  }