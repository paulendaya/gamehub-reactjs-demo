import { ImageDimension } from "./game-service";
import placeholderImage from '/assets/elementor-placeholder-image.webp';


const getCroppedImageUrl = (url: string, dimension: ImageDimension) => {
    if (!url) return placeholderImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + `crop/${dimension.width}/${dimension.height}/` + url.slice(index);
}

export default getCroppedImageUrl;