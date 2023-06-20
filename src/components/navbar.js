let nav, tooltip, overlay;

export default {
    data() {
        return {
            padding: 0,
            open: false,
        };
    },
    mounted() {
        nav = this.$refs.nav;
        tooltip = this.$refs.tooltip;
        overlay = this.$refs.overlay;

        this.toggleNavbar();
    },
    methods: {
        handleMouseMove(event) {
            const mouseY = event.clientY;
            const smoothening = 100;

            this.padding = mouseY / smoothening;
            nav.style.paddingTop = `${this.padding}px`;
        },
        toggleNavbar() {
            if (this.open) {
                nav.style.left = "0%";
                overlay.style.opacity = "1";
                overlay.style.zIndex = "4";
            } else {
                nav.style.left = "-100%";
                overlay.style.opacity = "0";
                overlay.style.zIndex = "-4";
            }

            this.open = !this.open;
        },
    },
};
