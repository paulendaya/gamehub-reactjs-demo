import { ImageDimension } from "./game-service";


const getCroppedImageUrl = (url: string, dimension: ImageDimension) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + `crop/${dimension.width}/${dimension.height}/` + url.slice(index);
}

export default getCroppedImageUrl;