import { Dimensions } from "react-native";
import { S3_BASE_URL } from './constant';

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export const getS3Url = (folder, url) => {
    const s3url = `${S3_BASE_URL}/${folder}/${url}`;
    return s3url;
};
