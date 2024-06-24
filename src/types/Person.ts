import type { Movie } from '@/types/Movie';
export type Person = {
    id: number;
    name: string;
    original_name: string;
    gender: number;
    known_for_department: string;
    profile_path: string;
    adult: boolean;
    popularity: number;
    known_for: Movie[];
};
