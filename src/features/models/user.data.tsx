export interface Form1Data {
  name: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  newsletter: boolean;
  email: string;
}

export class UserData implements Form1Data {
  constructor(
    public name: string,
    public lastName: string,
    public birthDate: Date,
    public gender: string,
    public newsletter: boolean,
    public email: string
  ) {}
}
