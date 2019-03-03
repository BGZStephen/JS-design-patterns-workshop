class UserService {
  public user: string;
  constructor() {
    this.user = "";
  }

  public getCurrentUser = (): string => {
    return this.user;
  }

  public clearCurrentUser = (): void => {
    this.user = "";
  }

  public setCurrentUser = (value: string): void => {
    this.user = value;
  }
}

export default new UserService();