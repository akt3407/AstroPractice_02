import type { ImageMetadata } from 'astro';

const imgModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/works/img-work-*.jpg',
  { eager: true },
);

export const workImages: ImageMetadata[] = Object.keys(imgModules)
  .sort()
  .map((key) => imgModules[key].default);

export type Item =
  | {
      type: 'img';
      imgIndex: number;
      title: string;
      year: string;
      cls: string;
      imgClass?: string;
      modalImgClass?: string;
    }
  | { type: 'desc'; title: string; body: string; cls: string };

export const items: Item[] = [
  {
    type: 'img',
    imgIndex: 0,
    title: 'Charming Storefront',
    year: '2022',
    cls: ' col-span-3 col-start-1 mt-60 -ml-20 md:-ml-30 md:row-start-2 md:col-start-1 md:col-span-5 md:mt-116',
    imgClass: 'aspect-266/330 md:aspect-593/627',
    modalImgClass: 'md:aspect-479/636',
  },
  {
    type: 'img',
    imgIndex: 1,
    title: 'Party Celebration Scene',
    year: '2022',
    cls: 'col-span-3 col-start-2 mt-100 md:mt-57 md:row-start-3 md:col-start-7 md:col-span-5',
    imgClass: 'aspect-246/276 md:aspect-563/627',
  },
  {
    type: 'desc',
    title: 'The Drama of Light and Shadow',
    body: 'Masterfully uses fleeting natural light to create silhouettesand depth that tell a story.',
    cls: 'col-span-3 col-start-1 mt-100 md:mt-324',
  },
  {
    type: 'img',
    imgIndex: 2,
    title: 'Modern Minimalist Interior',
    year: '2022',
    cls: 'col-span-3 col-start-1 mt-100 md:row-start-4 md:col-start-2 md:col-span-5 md:mt-181',
    imgClass: 'aspect-246/274 md:aspect-563/627',
  },
  {
    type: 'img',
    imgIndex: 3,
    title: 'Minimalist Tote Bags',
    year: '2022',
    cls: 'col-span-3 col-start-2 mt-100 md:row-start-5 md:col-start-7 md:col-span-5 md:mt-151',
    imgClass: 'aspect-246/389 md:aspect-563/627',
  },
  {
    type: 'desc',
    title: 'Film-like Aesthetic',
    body: 'Infuses digital photography with grain and soft tones, blending nostalgia with modern sensibility.',
    cls: 'col-span-4 col-start-1 mt-100 text-center md:row-start-6 md:mt-291 md:col-start-5 md:col-span-4',
  },
  {
    type: 'img',
    imgIndex: 4,
    title: 'Urban Motion Blur',
    year: '2022',
    cls: 'col-span-4 col-start-1 mt-100 md:mt-182 md:row-start-7 md:col-start-2 md:col-span-10',
    imgClass: 'aspect-335/293 md:aspect-1146/627',
  },
  {
    type: 'img',
    imgIndex: 5,
    title: 'Urban Motion Blur',
    year: '2022',
    cls: 'col-span-3 col-start-1 mt-100 md:mt-258 md:row-start-8 md:col-start-2 md:col-span-5',
    imgClass: 'aspect-246/236 md:aspect-563/627',
  },
  {
    type: 'img',
    imgIndex: 6,
    title: 'Urban Motion Blur',
    year: '2022',
    cls: 'col-span-3 col-start-2 mt-100 pb-166 md:row-start-9 md:col-start-7 md:col-span-5 md:mt-222 md;pb-473',
    imgClass: 'aspect-246/205 md:aspect-563/627',
  },
];
