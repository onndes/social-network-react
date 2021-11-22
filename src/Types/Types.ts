export type PhotosType = {
    small: string,
    large: string,
};

export type UsersTypes = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    small: string,
    large: string,
    followed: boolean,
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType,
};

export type AuthMeDataType = {
  id: number
  email: string
  login: string
}