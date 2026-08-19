import { ref } from 'vue';

const globalLinks = ref({
    whatsapp: 'https://wa.link/42dexe',
    agenda: 'https://ecografiasbogota.site.agendapro.com/co',
    facebook: 'https://facebook.com/ecografiasbogota',
    instagram: 'https://instagram.com/ecografiasbogota',
    youtube: 'https://youtube.com/ecografiasbogota',
    google_maps_norte: 'https://www.google.com/maps/place/Ecograf%C3%ADas+Bogot%C3%A1/@4.6991789,-74.0694352,15z/data=!4m15!1m8!3m7!1s0x8e3f9b30311359f5:0xecb2e062ee644594!2zRWNvZ3JhZsOtYXMgQm9nb3TDoQ!8m2!3d4.6991074!4d-74.0694081!10e5!16s%2Fg%2F11n1x9930v!3m5!1s0x8e3f9b30311359f5:0xecb2e062ee644594!8m2!3d4.6991074!4d-74.0694081!16s%2Fg%2F11n1x9930v?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D',
    google_maps_sur: 'https://www.google.com/maps/place/Cra.+78+%233a-40,+Kennedy,+Bogot%C3%A1/@4.6252819,-74.1490823,15z/data=!4m6!3m5!1s0x8e3f9f5926d07815:0x6d51969686894a13!8m2!3d4.6276135!4d-74.1449898!16s%2Fg%2F11nxn__j3x?entry=ttu'
});

let isFetching = false;

export function useLinks() {
    if (!isFetching) {
        isFetching = true;
        fetch('content/links.json')
            .then(res => res.json())
            .then(data => {
                globalLinks.value = { ...globalLinks.value, ...data };
            })
            .catch(err => {
                console.error("Error fetching links:", err);
                isFetching = false;
            });
    }

    return {
        links: globalLinks
    };
}
