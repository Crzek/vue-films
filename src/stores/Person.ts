import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Person } from '@/types/Person';
import type { Movie } from '@/types/Movie';

import Movies from '@/services/Movies.ts';

export const usePersonStore = defineStore('person', () => {
    // data
    const persons = ref<Person[]>([]);
    const personSelect = ref<Person>();

    //getter
    const personSelectOne = computed<Person | undefined>(
        () => personSelect.value
    );

    const personByMovies = computed<Movie[]>(() => {
        return personSelect.value?.known_for
            ? personSelect.value.known_for
            : [];
    });

    //actions
    const getPersonById = (idPerson: number): Person | undefined => {
        return persons.value.find((p) => p.id === idPerson);
    };

    const getPerson = async (id: number): Promise<void> => {
        personSelect.value = await Movies.getSingleMovie('person', id);
    };

    const getPersons = async (): Promise<void> => {
        persons.value = await Movies.getTrendingMovies('person');
    };

    const setPersons = (newPersons: Person[]): void => {
        persons.value = newPersons;
    };

    const setPersonSelect = (newPerson: Person): void => {
        personSelect.value = newPerson;
    };

    return {
        persons,
        personSelect,
        personByMovies,
        personSelectOne,
        getPersonById,
        getPerson,
        getPersons,
        setPersons,
        setPersonSelect
    };
});
