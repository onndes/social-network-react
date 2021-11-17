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
