import { ref } from 'vue';

export function useNavLinks () {
    const links = ref([
        {
            cta: 'HOMES',
            link: '/',
        },
        {
            cta: 'HEADPHONES',
            link: '/',
        },
        {
            cta: 'SPEAKERS',
            link: '/',
        },
        {
            cta: 'EARPHONES',
            link: '/',
        }
    ]).value

    return {
        links,
    };
}