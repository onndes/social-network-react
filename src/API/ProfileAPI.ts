import { AuthMeDataType, PhotosType, ProfileType } from "../Types/Types";
import { instance, ResponseData } from "./API";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then((response) => response.data);
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then((response) => response.data);
    },
    getProfileMe() {
        return instance
            .get<ResponseData<AuthMeDataType>>(`auth/me`)
            .then((response) => response.data);
    },
    putStatus(status: string) {
        return instance
            .put<ResponseData>(`profile/status`, { status })
            .then((response) => response.data);
    },
    updateFoto(photo: string) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance
            .put<ResponseData<{ photos: PhotosType }>>(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    },
    updateProfileInfo(profileInfo: ProfileType) {
        return instance
            .put<ResponseData>(`profile`, profileInfo)
            .then((response) => response.data);
    },
};
