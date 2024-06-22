export type Movie = {
    id: number;
    overview: string;
    media_type: string;
    vote_average: number;
    title?: string | undefined;
    poster_path?: string | undefined;
    name?: string | undefined;
    backdrop_path?: string | undefined;
    profile_path?: string | undefined;
};
