import { onBeforeMount, ref } from "@vue/runtime-core";
export function handlePWAUpdates() {

    // let serviceManger = {};
    let registration = {};
    let updateExists = false;
    let refreshing = false;
    const showModal = ref(false);


    const updateAvailable = (event) => {
        registration = event.detail;
        updateExists = true;
        showModal.value = true;
    };

    const refreshApp = () => {
        console.debug('refresh!!')
        updateExists = false;
        // Make sure we only send a 'skip waiting' message if the SW is waiting
        if (!registration || !registration.waiting) return;
        // Send message to SW to skip the waiting and activate the new SW
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
    };

    onBeforeMount(() => {

        console.log('beforeMounting')
        document.addEventListener("swUpdated", updateAvailable, {
            once: true,
        });

        navigator.serviceWorker.addEventListener("controllerchange", () => {
            // We'll also need to add 'refreshing' to our data originally set to false.
            if (refreshing) return;
            refreshing = true;
            // Here the actual reload of the page occurs
            window.location.reload();
        });
    });

    return {
        refreshApp,
        showModal,
        updateExists
    };

}