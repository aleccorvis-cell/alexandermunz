document.addEventListener('DOMContentLoaded', () => {
    // Prüfen, ob schon eine Entscheidung getroffen wurde
    if (localStorage.getItem('cookieConsent')) {
        return;
    }

    // HTML für den Banner
    const bannerHTML = `
    <div id="cookie-banner" class="fixed bottom-4 right-4 max-w-sm bg-white/90 backdrop-blur-xl border border-gray-200 p-6 rounded-[2rem] shadow-2xl z-[100] transform transition-all duration-700 translate-y-full opacity-0 font-sans">
        <div class="text-5xl mb-4 animate-bounce">🍪</div>
        <h3 class="font-bold text-lg mb-2 text-[#1D1D1F]">Kekse?</h3>
        <p class="text-sm text-gray-500 mb-6 leading-relaxed">
            Wir nutzen Cookies (und Krümel), um deine Erfahrung süßer zu machen. 
            Manche sind technisch notwendig, andere helfen mir zu verstehen, was dir gefällt.
        </p>
        <div class="flex flex-col gap-3">
            <button id="accept-cookies" class="w-full bg-[#0071E3] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#0077ED] transition-colors shadow-md hover:shadow-lg">
                Her damit! (Alles akzeptieren)
            </button>
            <button id="decline-cookies" class="w-full px-4 py-2 text-gray-400 font-medium text-xs hover:text-gray-600 transition-colors text-center">
                Nein danke (Nur notwendige)
            </button>
        </div>
    </div>
    `;

    // Banner in den Body einfügen
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    // Animation: Banner einfahren lassen (kurze Verzögerung)
    setTimeout(() => {
        banner.classList.remove('translate-y-full', 'opacity-0');
    }, 500);

    // Event Listener Accept
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        closeBanner();
    });

    // Event Listener Decline
    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        closeBanner();
    });

    function closeBanner() {
        banner.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => {
            banner.remove();
        }, 700);
    }
});
