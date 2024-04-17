/*##########[ IMPORTS ]##########*/
import {defineStore} from "pinia";
import images from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import {useDisplay} from "vuetify";
import {useNotification} from "@kyvg/vue3-notification";
import AssetsManager from "~/core/AssetsManager";
import path from "path";

// const { t } = useI18n();

export const useSharedStore = defineStore("shared", () => {
    /*##########[ DEFINES ]##########*/
    const display = useDisplay();
    const {notify} = useNotification();
    const router = useRouter();

    const {t} = useI18n;

    /*##########[ STATE ]##########*/
    const notifications = ref([]);
    // const navLinks = ref([{path: RoutesManager.home, title: "الصفحة الرئيسية"}]);

    // const navLinks = ref([
    //     {path: RoutesManager.home, title: "home"},
    //     {path: RoutesManager.aboutCenter, title: "about_center"},
    //     {path: RoutesManager.serviceSearcher, title: "serviceSearcher"},
    //     {path: RoutesManager.research, title: "research"},
    //     {path: RoutesManager.publishing, title: "publishing"},
    //     {path: RoutesManager.darFesal, title: "darFesal"},
    //     {path: RoutesManager.originsAndMesum, title: "originsAndMesum"},
    //     {path: RoutesManager.library, title: "library"},
    //     {path: RoutesManager.mediaCenter, title: "mediaCenter"},
    //     {path: RoutesManager.contactUs, title: "contactUs"},
    // ]);

    // ##########[HOME PERSON LIST]############

    const personList = ref([
        {icon: AssetsManager.userIcon, path: RoutesManager.membershipRequest, title: "membership_request"},
        {icon: AssetsManager.documentIcon, path: RoutesManager.surveyRequest, title: "survey_request"},
        {icon: AssetsManager.scaleIcon, path: RoutesManager.certificateRequest, title: "certificate_request"},
        {icon: AssetsManager.envelopplusIcon, path: RoutesManager.monuscripRequest, title: "monuscrip_request"},
        {icon: AssetsManager.searchaltIcon, path: RoutesManager.messageRegistration, title: "message_registration"},
        {icon: AssetsManager.envelopeDown, path: RoutesManager.depositMessage, title: "deposit_message"},
        {icon: AssetsManager.searchaltIcon, path: RoutesManager.requestTraking, title: "request_traking"},
        {icon: AssetsManager.boxIcon, path: RoutesManager.centerPositions, title: "center_positions"},
        {icon: AssetsManager.bookIcon, path: RoutesManager.myLibrary, title: "my_library"},
        {icon: AssetsManager.chartIcon, path: RoutesManager.graphicDatabase, title: "graphic_database"},
    ]);

    // ########[CARD CONTENT ]##########
    const cardContent = ref([
        {icon: AssetsManager.commentUs, path: RoutesManager.home, title: "طلب عضوية", active: "نشطة "},
        {icon: AssetsManager.document, path: RoutesManager.home, title: "طلب استقصاء", active: 3},
        {icon: AssetsManager.vector, path: RoutesManager.home, title: "طلب إفادة", active: 4},
        {icon: AssetsManager.deleteIcon, path: RoutesManager.home, title: "الطلبات المغلقة", active: 2},
        {icon: AssetsManager.search, path: RoutesManager.home, title: "'طلبات تحت المعالجة", active: 3},
        {icon: AssetsManager.envelope, path: RoutesManager.home, title: "الرسائل الجامعية", active: 4},
    ]);

    // ######[APP FOOTER] ##########
    const footerLinks = ref({
        aboutCenter: {
            title: "about_center",
            links: [
                {path: RoutesManager.home, name: "نبذة عن إدارة البحوث"},
                {path: RoutesManager.home, name: "البرامج البحثية"},
                {path: RoutesManager.home, name: "المروية العربية"},
                {path: RoutesManager.home, name: "برنامج الباحث الزائر"},
            ],
        },
        researcher: {
            title: "research",
            links: [
                {path: RoutesManager.home, name: "نبذة عن إدارة البحوث"},
                {path: RoutesManager.home, name: "البرامج البحثية"},
                {path: RoutesManager.home, name: "المروية العربية"},
                {path: RoutesManager.home, name: "برنامج الباحث الزائر"},
            ],
        },
        publishing: {
            title: "publishing",
            links: [
                {path: RoutesManager.home, name: "نبذة عن إدارة البحوث"},
                {path: RoutesManager.home, name: "البرامج البحثية"},
                {path: RoutesManager.home, name: "المروية العربية"},
                {path: RoutesManager.home, name: "برنامج الباحث الزائر"},
            ],
        },
    });
    const socialLinks = ref([
        {path: RoutesManager.youtube, img: AssetsManager.youtube},
        {path: RoutesManager.instgram, img: AssetsManager.instgram},
        {path: RoutesManager.facebook, img: AssetsManager.facebook},
        {path: RoutesManager.twitter, img: AssetsManager.twitter},
        {path: RoutesManager.linkedin, img: AssetsManager.linkedin},
    ]);
    const loading = ref([]);

    const lang = [
        {prefix: "en", name: "English"},
        {prefix: "ar", name: "العربية"},
        {prefix: "fr", name: "France"},
    ];
    /*##########[ COMPUTED ]##########*/
    const isMobile = computed(() => display.mobile.value);

    /*##########[ MUTATIONS ]##########*/
    const LOADING_START = (payload) => {
        loading.value.push(payload);
    };
    const LOADING_STOP = (payload) => {
        loading.value.splice(loading.value.indexOf(payload), 1);
    };
    const ErrorHandler = (name, error) => {
        console.log(name, error.message);

        if (!!error.data.error) {
            const err = error.data.error;
            if (err.status_code == 401) {
                // router.push(routeManager.login);
                // return;
            }
            notify({
                type: "error",
                title: "Failed",
                text: err.message,
            });
        }
    };
    const SET_NOTIFICATION = (payload) => {
        notifications.value = payload;
    };
    const RESET_NOTIFICATION = () => {
        notifications.value = [];
    };
    const ADD_NOTIFICATION = (payload) => {
        notify({
            type: "info",
            title: payload.title,
            text: payload.body,
        });
        notifications.value.push(payload);
    };
    const REMOVE_NOTIFICATION = (index) => {
        notifications.value.splice(index, 1);
    };

    /*##########[ ACTIONS ]##########*/
    const getNotifications = async () => {
        useAppFetch()
        .getNotifications()
        .then((response) => {
            SET_NOTIFICATION(response.data);
        })
        .catch((error) => {
            ErrorHandler("notifications error ", error);
            console.log("get notification error ", error.message);
        });
    };

    /*##########[ RETURNS ]##########*/
    return {
        // navLinks,
        // pageLinks,
        footerLinks,
        socialLinks,
        isMobile,
        loading,
        lang,
        notifications,
        SET_NOTIFICATION,
        ADD_NOTIFICATION,
        REMOVE_NOTIFICATION,
        RESET_NOTIFICATION,
        LOADING_START,
        LOADING_STOP,
        ErrorHandler,
        getNotifications,
        personList,
        cardContent,
    };
});
