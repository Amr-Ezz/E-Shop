import { PexelsPhoto } from "../api/fetchPexels";
import { Product } from "../api/requests";

export function mergePexelsImages(
  products: Product[],
  pexelsPhotos: PexelsPhoto[]
): Product[] {
  return products.map((product) => {
    const photo = pexelsPhotos.find((p) => p.id === product.id);
    return {
      ...product,
      image: photo ? photo.src.large : product.image,
    };
  });
}
