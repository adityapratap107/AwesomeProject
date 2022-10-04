export interface UserModel {
  access_token?: string;
  id?: string;
}

export const initialUser: UserModel = {
  access_token: '',
  id: '',
};
