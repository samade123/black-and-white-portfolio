import { onBeforeMount, ref } from "@vue/runtime-core";
export function handlePWAUpdates() {

    let serviceManger = {};
    serviceManger.registration = {};
    serviceManger.updateExists = false;
    serviceManger.refreshing = false;
    serviceManger.showModal = ref(false);


    serviceManger.updateAvailable = (event) => {
        registration = event.detail;
        updateExists = true;
        showModal.value = true;
    };

    serviceManger.refreshApp = () => {
        console.debug('refresh!!')
        serviceManger.updateExists = false;
        // Make sure we only send a 'skip waiting' message if the SW is waiting
        if (!serviceManger.registration || !serviceManger.registration.waiting) return;
        // Send message to SW to skip the waiting and activate the new SW
        serviceManger.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    };

    serviceManger.closeModal = (serviceManger) => {
        serviceManger.showModal.value = false;
    }

    onBeforeMount(() => {

        console.log('beforeMounting')
        document.addEventListener("swUpdated", serviceManger.updateAvailable, {
            once: true,
        });

        navigator.serviceWorker.addEventListener("controllerchange", () => {
            // We'll also need to add 'refreshing' to our data originally set to false.
            if (serviceManger.refreshing) return;
            serviceManger.refreshing = true;
            // Here the actual reload of the page occurs
            window.location.reload();
        });
    });

    return {
        serviceManger
    };

}