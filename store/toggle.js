export const useToggleStore = defineStore('toggle', {
    state: ()=>({
        toggle: false,
    }),
    getters: {
        getToggle: state =>  state.toggle,
    },
    actions: {
        setToggle(payload) {
            this.toggle = payload
        }
    }
})

