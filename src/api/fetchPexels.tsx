const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const headers: HeadersInit = {
  Authorization: PEXELS_API_KEY,
};

export interface PexelsPhoto {
  id: number;
  alt?: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  url: string; 
}
function ensureOk(res: Response) {
  if (!res.ok) throw new Error(`Pexels ${res.status}: ${res.statusText}`);
  return res;
}

export async function searchPexels(
  query: string,
  perPage: number,
  page = 1
): Promise<PexelsPhoto[]> {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=${perPage}&page=${page}`;
  const res = await fetch(url, { headers }).then(ensureOk);
  const data = await res.json();
  return (data?.photos ?? []) as PexelsPhoto[];
}

// export default function PhotoList() {
//   const [photos, setPhotos] = useState<PexelsPhoto[]>([]);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const res = await fetch("https://api.pexels.com/v1/curated?per_page=6", {
//         headers: {
//           Authorization: import.meta.env.VITE_PEXELS_API_KEY as string,
//         },
//       });
//       const data = await res.json();
//       setPhotos(data.photos);
//     };

//     fetchPhotos();
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.src.large} alt="pexels" />
//       ))}
//     </div>
//   );
// }

export const fetchCuratedPhotos = async () => {
  const res = await fetch("https://api.pexels.com/v1/curated?per_page=5", {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY as string,
    },
  });

  const data = await res.json();
};