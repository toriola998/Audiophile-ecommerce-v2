import { ref } from 'vue';

export function useNavLinks () {
    const links = ref([
        {
            cta: 'HOMES',
            link: '/',
        },
        {
            cta: 'HEADPHONES',
            link: '/headphones',
        },
        {
            cta: 'SPEAKERS',
            link: '/speakers',
        },
        {
            cta: 'EARPHONES',
            link: '/earphones',
        }
    ]).value

    return {
        links,
    };
}